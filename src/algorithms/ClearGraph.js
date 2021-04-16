import React from 'react'

class ClearGraph {
    constructor(graph) {
        this.generalGraph = graph;
    }

    clearGraph() {
        console.log('here!');
        this.generalGraph.forEach((row) => {
            row.forEach((node) => {
                console.log(node);
                this.updateGeneralNode(node, 1);
            });
        });
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