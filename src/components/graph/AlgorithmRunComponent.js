import React, { useState, useEffect } from 'react';
import GraphComponent from "./GraphComponent";
import { Column, Row } from 'simple-flexbox';
import AStar from "../../algorithms/AStar";
import DStar from "../../algorithms/DStar";
import ClearGraph from "../../algorithms/ClearGraph";
function AlgorithmRunComponent(props) {

    const [graph, setGraph] = useState(props.graph);
    // const clearGraph = new ClearGraph(graph[0][0], graph[9][9], graph);
    // clearGraph.clearGraph();
    let runtime = 0;
    if (props.algorithmToRun === 'AStar') {
        const aStarAlgo = new AStar(graph[0][0], graph[9][9], graph);
        runtime = aStarAlgo.runAlgorithm();
    }
    if (props.algorithmToRun === 'DStar') {
        const dStarAlgo = new DStar(graph[0][0], graph[9][9], graph);
        runtime = dStarAlgo.runAlgorithm();
    }
    if (!props.algorithmToRun) {
        const clearGraph = new ClearGraph(graph[0][0], graph[9][9], graph);
        clearGraph.clearGraph();
        runtime = 0;
    }

    useEffect(() => {
        // console.log('test');
        // console.log(algorithmToRun);
        // if (algorithmToRun === 'AStar') {
        //     let runTime = 0;
        //     const aStarAlgo = new AStar(graph[0][0], graph[9][9], graph);
        //     aStarAlgo.runAlgorithm();
        //     console.log('test');
        // } else if (algorithmToRun === 'DStar') {
        //     const dStarAlgo = new DStar(graph[0][0], graph[9][9], graph);
        //     dStarAlgo.runAlgorithm();
        // }
    });

    // const { graph, nodeOnClick, ...otherProps } = props;
    // const xSize = graph.length;
    // const ySize = graph[0].length;
    return (
        <Row>
            <div>
                <GraphComponent graph={graph}/>
            </div>
            <div>
                <text>
                    <b>
                        Run time: {runtime} ms
                    </b>
                </text>
            </div>
        </Row>
    );

}

export default AlgorithmRunComponent;