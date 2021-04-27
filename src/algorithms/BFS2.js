import React from 'react';

class BFS {
    constructor(startNode, endNode, graph) {
        this.startGeneralNode = startNode; //starting point
        this.endGeneralNode = endNode; //target
        this.generalGraph = graph;
        this.runTime = undefined;
    }

    runAlgorithm() {
        this.runTime = window.performance.now();
        const jsQueue = [];
        jsQueue.push(this.startGeneralNode);
        let stepCounter = 0;

        while (jsQueue.length > 0) {
            const currentNode = jsQueue.shift();
            this.updateGeneralNode(currentNode, 3);
            stepCounter += 1;
           
            if (currentNode === this.endGeneralNode) return; //reuturn jsQueue maybe?

            for (let i = -1 ; i <= currentNode.x + 1; i++) {
                for (let j = -1 ; j <= currentNode.y + 1; j++) {
                    if (this.isNodeInBounds(i, j)) {
                        const visitNode = this.generalGraph[i][j];
                        if (visitNode.status === 1) {
                            this.updateGeneralNode(visitNode, 2);
                            this.updateGeneralNodeStepNumber(visitNode, stepCounter);
                            jsQueue.push(visitNode);
                        }
                    }
                }
            }
        }

        // Let's grab the 'end' node, the one we start at, and mark it as our first node in the list
        this.runTime = window.performance.now() - this.runTime;
        console.log(this.runTime);

        return this.runTime;
    }

    /**
     * Designed to keep the most important statuses as priority - do not overwrite a start node for a 'considered' status for example
     * @param node
     * @param newStatus
     */
    updateGeneralNode(node, newStatus) {
        if (node.status < newStatus) {
            node.status = newStatus;
        }
    }

    updateGeneralNodeStepNumber(node, stepNumber) {
        node.stepNumber = stepNumber;
    }

    isNodeInBounds(x, y) {
        if (typeof this.generalGraph[x] === 'undefined' || typeof this.generalGraph[x][y] === 'undefined') {
            return false;
        }
        return true;
    }
}

export default BFS;
