import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/header/HeaderComponent';
import NodeComponent from "./components/graph/NodeComponent";
import './App.css';
import DStar from './algorithms/DStar';
import GraphComponent from "./components/graph/GraphComponent";

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

    /**
     *
     * @param x ix the x index
     * @param y is the y index
     * @param status is the type of node
     * status = 1 means it is an open, unconsidered node
     * status = 2 means it is an open, already considered node
     * status = 3 means it is a node taken for the path
     * status = 4 means it is a blockade
     * @returns {{x: *, y: *, status: *}}
     */
    node(x, y, status) {
        const node = {
            x: x,
            y: y,
            status: status,
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
                graph[xInd][yInd] = this.node(xInd, yInd, 1);
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

    state = {
        selectedItem: 'Tickets',
        graph: this.populateGraph(10, 10),
    };

    render() {
        const { selectedItem, graph} = this.state;

        this.setNodeStatus(5, 5, 4);
        const dStarAlgo = new DStar(graph[0][0], graph[9][9], graph);
        dStarAlgo.runAlgorithm();

        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <span>Graph</span>
                        <NodeComponent status={1} />
                        <NodeComponent status={2} />
                        <NodeComponent status={3} />
                        <NodeComponent status={4} />
                    </div>
                    <div>
                        <GraphComponent graph={graph}/>
                    </div>
                </Column>
            </Row>
        );
    }
}

export default App;