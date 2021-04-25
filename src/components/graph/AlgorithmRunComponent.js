import React, { useState, useEffect } from 'react';
import GraphComponent from "./GraphComponent";
import { Column, Row } from 'simple-flexbox';
import AStar from "../../algorithms/AStar";
import DStar from "../../algorithms/DStar";
import ClearGraph from "../../algorithms/ClearGraph";
function AlgorithmRunComponent(props) {

    const [graph, setGraph] = useState(props.graph);
    const [step, setStep] = useState(props.appStep)
    // const clearGraph = new ClearGraph(graph[0][0], graph[9][9], graph);
    // clearGraph.clearGraph();
    let runtime = 0;
    if (props.algorithmToRun === 'AStar') {
        if (!localStorage.getItem('AStarRunTime')) {
            const aStarAlgo = new AStar(graph[0][0], graph[9][9], graph);
            runtime = aStarAlgo.runAlgorithm();
            localStorage.setItem('AStarRunTime', runtime.toString());
        } else {
            runtime = localStorage.getItem('AStarRunTime');
        }
    }
    if (props.algorithmToRun === 'DStar') {
        if (!localStorage.getItem('DStarRunTime')) {
            const dStarAlgo = new DStar(graph[0][0], graph[9][9], graph);
            runtime = dStarAlgo.runAlgorithm();
            // localStorage.setItem('DStarRunTime', runtime);
        } else {
            runtime = localStorage.getItem('DStarRunTime');
        }
    }
    if (!props.algorithmToRun) {
        const clearGraph = new ClearGraph(graph[0][0], graph[9][9], graph);
        clearGraph.clearGraph();
        localStorage.clear();
        runtime = 0;
    }

    useEffect(() => {
        setStep(props.appStep);
    });

    // const { graph, nodeOnClick, ...otherProps } = props;
    // const xSize = graph.length;
    // const ySize = graph[0].length;
    return (
        <Row>
            <div>
                <GraphComponent graph={graph} appStep={step}/>
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