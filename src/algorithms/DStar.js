import React from 'react'

class DStar {
    constructor(startNode, endNode, graph) {
        this.startNode = startNode;
        this.endNode = endNode;
        this.graph = graph;
        this.stepList = undefined;
        this.runTime = undefined;

        this.openList = [];
    }

    runAlgorithm() {
        this.openList.push(this.startNode);

        console.log(this.openList);

        this.updateDStarNode(this.graph[2][2], 4);

    }

    updateDStarNode(node, newStatus) {
        node.status = newStatus;
    }

}

export default DStar;