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

    dStarNode(node, dStatus, dCost, backTrackPointer) {
        const dStarNode = {
            generalNode: node,
            dStatus: dStatus,
            dCost: dCost,
            backTrackPointer: backTrackPointer,
        }
        return dStarNode;
    }

    // DStar node wrapper to hold d star statuses, backpointer to target, and

    runAlgorithm() {
        this.openList.push(this.endNode);

        // console.log(this.openList);
        //
        this.updateGeneralNode(this.graph[2][2], 4);

        // while (this.openList.length > 0) {
        //     // do
        // }
    }



    updateGeneralNode(node, newStatus) {
        node.status = newStatus;
    }

    updateDStarNodeStatus(dStarNode, newDStatus) {
        dStarNode.dStatus = newDStatus;
    }

    updateDStarNodeBackTracker(dStarNode, newBackTracker) {
        dStarNode.backTrackPointer = newBackTracker;
    }

    updateDStarNodeCost(dStarNode, newDCost) {
        dStarNode.dCost = newDCost;
    }
}

export default DStar;