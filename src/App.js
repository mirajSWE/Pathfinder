import React, {useState} from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/header/HeaderComponent';
import './App.css';
import AlgorithmRunComponent from "./components/graph/AlgorithmRunComponent";
import DescriptionComponent from "./components/helpers/DescriptionComponent";
import StepArrowsComponent from "./components/helpers/StepArrowsComponent";
import GlossaryComponent from "./components/helpers/GlossaryComponent";

const styles = StyleSheet.create({
    container: {
        height: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC'
        // padding: 30
    }
});


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'Step by Step',
            graph: this.populateGraph(10, 10),
            step: 0,
        }
    }

    /**
     *
     * @param x ix the x index
     * @param y is the y index
     * @param status is the type of node
     * status = 1 means it is an open, unconsidered node
     * status = 2 means it is an open, already considered node
     * status = 3 means it is a node taken for the path
     * status = 4 means it is a blockade
     * status = 5 means it is a start block
     * status = 6 means it is an end block
     * @returns {{x: *, y: *, status: *}}
     */
    node(x, y, status, stepNumber, cost, distance) {
        const node = {
            x: x,
            y: y,
            status: status,
            stepNumber: stepNumber,
            cost: cost,
            distance: Infinity,
            isVisited: false,
            previousNode: null,
            //box: false,
         
        }
        return node;
    }

    populateGraph(xSize, ySize) {
        const graph = [];

        for (let index = 0; index < xSize; index++) {
            graph[index] = [];
        }

        for (let xInd = 0; xInd < xSize; xInd++) {
            for (let yInd = 0; yInd < ySize; yInd++) {
                graph[xInd][yInd] = this.node(xInd, yInd, 1, 0);
            }
        }
        return graph;
    }

    populateGlossary() {
        const glossaryNodes = [];

        for (let index = 1; index < 7; index++) {
            glossaryNodes[index - 1] = this.node(0,0, index, null);
        }

        return glossaryNodes;
    }

    setNodeStatus(xIndex, yIndex, newStatus) {
        const {graph} = this.state;
        graph[xIndex][yIndex].status = newStatus;
    }

    getNodeStatus(xIndex, yIndex) {
        const {graph} = this.state;
        return graph[xIndex][yIndex].status;
    }

    incrementStepCounter(isUp) {
        let {step} = this.state;
        if (step === null) {
            step = -1;
        }
        if (isUp) {
            step++;
        } else {
            if (step >= 1) {
                step--;
            }
        }
        this.setState({
            step: step,
        });
    }

    render() {
        const { selectedItem, graph, algorithmToRun, step } = this.state;

        const AlgorithmDescription =
            <container style={{position: 'absolute', left: '40%', top: '20%'}}>
                <DescriptionComponent algorithmToRun={'Instructions'}/>
            </container>

        const AlgorithmTools =
            <container style={{position: 'absolute', left: '40%', top: '20%'}}>
                <AlgorithmRunComponent graph={graph} algorithmToRun={algorithmToRun} appStep={step}/>
                <div>
                    <button style={{width: '100px'}} onClick={() =>
                        this.setState({
                            algorithmToRun: 'Dijkstra'
                        })
                    }>
                        <b>Run Dijkstra</b>
                    </button>
                    <button style={{width: '100px'}} onClick={() =>
                        this.setState({
                            algorithmToRun: 'AStar'
                        })
                    }>
                        <b>Run AStar</b>
                    </button>
                    <button style={{width: '100px'}} onClick={() =>
                        this.setState({
                            algorithmToRun: 'DStar'
                        })
                    }>
                        <b>Run DStar</b>
                    </button>
                    <button style={{width: '100px'}} onClick={() =>
                        this.setState({
                            algorithmToRun: 'BFS'
                        })
                    }>
                        <b>Run BFS</b>
                    </button>
                    <button style={{width: '100px', background: 'red'}} onClick={() =>
                        this.setState({
                            algorithmToRun: null
                        })
                    }>
                        <b>Clear</b>
                    </button>
                </div>
                <div>
                    <DescriptionComponent algorithmToRun={algorithmToRun} />
                </div>
                <div>
                    <StepArrowsComponent stepNumber={step} onClick={(e) => this.incrementStepCounter(e)}/>
                </div>
            </container>;

        const Glossary = <GlossaryComponent nodes={this.populateGlossary()}/>

        const PageWrapper =
            (selectedItem === 'Instructions') ? AlgorithmDescription : (selectedItem === 'Step by Step') ? AlgorithmTools : Glossary;

        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    {PageWrapper}
                </Column>
            </Row>
        );
    }
}

export default App;
