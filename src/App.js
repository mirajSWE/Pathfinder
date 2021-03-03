import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/header/HeaderComponent';
import './App.css';

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
                graph[xInd][yInd] = this.node(xInd, yInd, 4);
            }
        }
        return graph;
    }

    state = {
        selectedItem: 'Tickets',
        graph: this.populateGraph(10, 10),
    };

    render() {
        const { selectedItem, graph} = this.state;
        console.log(graph);
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <span>Graph</span>
                    </div>
                </Column>
            </Row>
        );
    }
}

export default App;