import React, {useState} from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/header/HeaderComponent';
import './App.css';
import GraphComponent from "./components/graph/GraphComponent";
import AlgorithmRunComponent from "./components/graph/AlgorithmRunComponent";

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
    node(x, y, status, stepNumber, cost) {
        const node = {
            x: x,
            y: y,
            status: status,
            stepNumber: stepNumber,
            cost: cost,
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

    setNodeStatus(xIndex, yIndex, newStatus) {
        const {graph} = this.state;
        graph[xIndex][yIndex].status = newStatus;
    }

    getNodeStatus(xIndex, yIndex) {
        const {graph} = this.state;
        return graph[xIndex][yIndex].status;
    }

    // toggleNodeBlockade(node) {
    //     console.log(node);
    //
    //     if (node.status === 4) {
    //         node.status = 1;
    //         // RUN ALGORITHM AGAIN? OR WILL IT RE RENDER
    //     } else {
    //         node.status = 4;
    //     }
    // }

    // runAlgorithm(stringAlgo) {
    //     const {graph} = this.state;
    //     let runTime = 0;
    //     if (stringAlgo === 'AStar') {
    //         const aStarAlgo = new AStar(graph[0][0], graph[9][9], graph);
    //         runTime = aStarAlgo.runAlgorithm();
    //         this.setState({
    //             runTime: runTime,
    //         });
    //         this.forceUpdate();
    //     }
    //     // const dStarAlgo = new DStar(graph[0][0], graph[9][9], graph);
    //
    //     return runTime;
    // }

    render() {
        const { selectedItem, graph, algorithmToRun } = this.state;
        console.log(algorithmToRun);

        // Set blockade nodes
        this.setNodeStatus(5, 5, 4);
        this.setNodeStatus(5, 4, 4);
        this.setNodeStatus(5, 3, 4);
        this.setNodeStatus(5, 7, 4);
        // this.setNodeStatus(5, 6, 4);
        this.setNodeStatus(0, 0, 5);
        this.setNodeStatus(9, 9, 6);
        // const dStarAlgo = new DStar(graph[0][0], graph[9][9], graph);
        // dStarAlgo.runAlgorithm();
        // const runTime = this.runAlgorithm();

        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <AlgorithmRunComponent graph={graph} algorithmToRun={algorithmToRun}/>
                    <div>
                        <button onClick={() =>
                            this.setState({
                                algorithmToRun: 'AStar'
                            })
                        }>
                            AStar
                        </button>
                        <button onClick={() =>
                            this.setState({
                                algorithmToRun: 'DStar'
                            })
                        }>
                            DStar
                        </button>
                        <button onClick={() =>
                            this.setState({
                                algorithmToRun: null
                            })
                        }>
                            Clear
                        </button>
                    </div>
                </Column>
            </Row>
        );
    }
}

export default App;