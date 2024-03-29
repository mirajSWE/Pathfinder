import React, { useState, useEffect } from 'react';
import GraphComponent from "./GraphComponent";
import { Column, Row } from 'simple-flexbox';
import AStar from "../../algorithms/AStar";
import DStar from "../../algorithms/DStar";
import Dijkstra from "../../algorithms/dijkstra";
import BFS from "../../algorithms/BFS2";
//import DFS from "../../algorithms/DFS";
import ClearGraph from "../../algorithms/ClearGraph";
function AlgorithmRunComponent(props) {
    const [graph, setGraph] = useState(props.graph);
    const [step, setStep] = useState(props.appStep)

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
            const start = performance.now()
            const dStarAlgo = new DStar(graph[0][0], graph[9][9], graph);
            dStarAlgo.runAlgorithm();
            const end = performance.now()
            runtime = (end - start)
            localStorage.setItem('DStarRunTime', runtime);
        } else {
            runtime = localStorage.getItem('DStarRunTime');
        }
    }
    if (props.algorithmToRun === 'Dijkstra') {
        if (!localStorage.getItem('DijkstraRunTime')) {   
            const start = performance.now()
            new Dijkstra(graph[0][0], graph[9][9], graph);
            const end = performance.now()
            
            runtime = (end - start)
            localStorage.setItem('DijkstraRunTime', runtime);
        } else {
            runtime = localStorage.getItem('DijkstraRunTime');
        }
    }
    if (props.algorithmToRun === 'BFS') {
        if (!localStorage.getItem('BFSRunTime')) {   
            const start = performance.now()
            const bfsAlgo = new BFS(graph[0][0], graph[9][9], graph);
            bfsAlgo.runAlgorithm();
            const end = performance.now()
            
            runtime = (end - start)
            localStorage.setItem('BFSRunTime', runtime);
        } else {
            runtime = localStorage.getItem('BFSRunTime');
        }
    }
    /*
        if (props.algorithmToRun === 'DFS') {
        if (!localStorage.getItem('DFSRunTime')) {   
            const start = performance.now()
            const dfsAlgo = new DFS(graph[0][0], graph[9][9], graph);
            dfsAlgo.runAlgorithm();
            const end = performance.now()
            
            runtime = (end - start)
            localStorage.setItem('DFSRunTime', runtime);
        } else {
            runtime = localStorage.getItem('DFSRunTime');
        }
    }
    */
    if (!props.algorithmToRun) {
        const clearGraph = new ClearGraph(graph[0][0], graph[9][9], graph);
        clearGraph.clearGraph();
        localStorage.clear();
        runtime = 0;
    }

    useEffect(() => {
        setStep(props.appStep);
    });

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
