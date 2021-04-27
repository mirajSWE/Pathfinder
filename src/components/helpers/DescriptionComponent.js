import React, { useState } from 'react';


function DescriptionComponent(props) {
    let textDescription = '';

    if (props.algorithmToRun === 'AStar') {
        textDescription = 'AStar is a greedy algorithm that makes decisions based on the cost heuristic in picking the lowest cost node each cycle';
    } else if (props.algorithmToRun === 'DStar') {
        textDescription = 'DStar is a greedy algorithm that uses a cost heuristic, works its way backwards, and saves the state of nodes to react to blockade modifications';
    } else if (props.algorithmToRun === 'BFS') {
        textDescription = 'BFS visits each node, branching out from nodes around the starting location first';
    } else if (props.algorithmToRun === 'Dijkstra') {
        textDescription = 'Dijkstra’s algorithm finds the shortest path between all the nodes from the source node';
    } else if (props.algorithmToRun === 'Instructions') {
        textDescription =
            <div style={{position: 'flex', justifyContent: 'left', alignItems: 'left'}}>
                <p><strong>These algorithms all accomplish the same task of solving a path optimally.</strong></p>
                <br/>
                <p>A-Star, Dijkstras, D-Star-Lite, and BFS are showcased on the graph in the middle of the page.</p>
                <br/>
                <p>If you wish to add blockades, you may click on the square(s) and they turn into blockades. </p>
                <p> To remove, click them again or click clear. The algorithms do not dynamically re-run based on blockade events, they must be run manually.</p>
                <br/>
                <p>Each algorithm can be run by clicking the &apos;Run *&apos; button under the graph GUI.</p>
                <p> If you want to overlay two algorithms on top of each other, you may do so by clicking run on multiple buttons before clearing.</p>
                <p>To clear the graph of an algorithm run or any blockades, click clear in the lower right.</p>
            </div>
    }
    return (
        <div>
            <text>
                <b>
                    {props.algorithmToRun}
                </b>
                <br/>
                {textDescription}
            </text>
        </div>
    );

}

export default DescriptionComponent;