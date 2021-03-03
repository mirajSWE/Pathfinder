import React from 'react'

class DStar {
    constructor(startNode, endNode, nodeList) {
        this.startNode = startNode;
        this.endNode = endNode;
        this.nodeList = nodeList;
        this.stepList = undefined;
        this.runTime = undefined;

        this.openList = [];
    }

    runAlgorithm() {
        this.openList.add(this.startNode);

        console.log(this.openList);
    }
}