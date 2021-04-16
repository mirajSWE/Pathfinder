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
                this.updateGeneralNode(node, 1);
            });
        });
        this.updateGeneralNode(this.startNode, 5);
        this.updateGeneralNode(this.endNode, 6);
    }

    /**
     * Designed to keep the most important statuses as priority - do not overwrite a start node for a 'considered' status for example
     * @param node
     * @param newStatus
     */
    updateGeneralNode(node, newStatus) {
        node.status = newStatus;
    }
}

export default ClearGraph;