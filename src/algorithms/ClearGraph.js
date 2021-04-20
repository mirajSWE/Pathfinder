import React from 'react'

class ClearGraph {
    constructor(startNode, endNode, graph) {
        this.startNode = startNode;
        this.endNode = endNode;
        this.generalGraph = graph;
    }

    clearGraph() {
        this.generalGraph.forEach((row) => {
            row.forEach((node) => {
                this.updateGeneralNodeStatus(node, 1);
                this.updateGeneralNodeStepNumber(node);
            });
        });
        this.updateGeneralNodeStatus(this.startNode, 5);
        this.updateGeneralNodeStatus(this.endNode, 6);
    }

    /**
     * Designed to keep the most important statuses as priority - do not overwrite a start node for a 'considered' status for example
     * @param node
     * @param newStatus
     */
    updateGeneralNodeStatus(node, newStatus) {
        node.status = newStatus;
    }

    updateGeneralNodeStepNumber(node) {
        node.stepNumber = null;
    }
}

export default ClearGraph;