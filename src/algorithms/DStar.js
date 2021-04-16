import React from 'react'
 // Testing branch
class DStar {
    constructor(startNode, endNode, graph) {
        this.startGeneralNode = startNode; //starting point
        this.endGeneralNode = endNode; //target
        this.generalGraph = graph;
        this.stepList = undefined;
        this.runTime = undefined;

        this.openList = [];
        this.dStarGraph = [];
    }

    dStarNode(node, dStatus, dCost, backTrackPointer) {
        const dStarNode = {
            generalNode: node,
            dStatus: dStatus,
            dCost: dCost,
            backTrackPointer: backTrackPointer,
            neighborList: [],
        }
        return dStarNode;
    }

    // DStar node wrapper to hold d star statuses, backpointer to target, and

    runAlgorithm() {
        this.createDStarGraphMask();
        console.log(this.dStarGraph);
        const destinationNode = this.dStarGraph[this.startGeneralNode.x][this.startGeneralNode.y];
        // Let's grab the 'end' node, the one we start at, and mark it as our first node in the list
        let lastNode = this.dStarGraph[this.endGeneralNode.x][this.endGeneralNode.y]
        this.updateDStarNodeStatus(lastNode, 'CLOSED')

        this.refreshAndPopulateOpenList(this.dStarGraph[this.endGeneralNode.x][this.endGeneralNode.y]);
        console.log(this.openList);
        while (this.openList.length > 0 && lastNode !== destinationNode) {
            let nextNode = this.pickSmallestCostFromOpenList();
            nextNode.backTrackPointer = lastNode;
            this.updateGeneralNode(nextNode.generalNode, 3);
            console.log(nextNode);
            this.refreshAndPopulateOpenList(nextNode);
            lastNode = nextNode;
        }
        console.log('fin!');

        // console.log(this.openList);
        //
        // this.updateGeneralNode(this.graph[2][2], 4);

        // while (this.openList.length > 0) {
        //     // do
        // }
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

    updateDStarNodeStatus(dStarNode, newDStatus) {
        dStarNode.dStatus = newDStatus;
    }

    updateDStarNodeBackTracker(dStarNode, newBackTracker) {
        dStarNode.backTrackPointer = newBackTracker;
    }

    updateDStarNodeCost(dStarNode, newDCost) {
        dStarNode.dCost = newDCost;
    }

    refreshAndPopulateOpenList(currentNode) {
        this.openList = [];
        for (let i = currentNode.generalNode.x - 1; i <= currentNode.generalNode.x + 1; i++) {
            for (let j = currentNode.generalNode.y - 1; j <= currentNode.generalNode.y + 1; j++) {
                if (this.isNodeInBounds(i, j)) {
                    const nodeToCheck = this.dStarGraph[i][j];
                    if (nodeToCheck.dStatus !== 'CLOSED' && nodeToCheck.generalNode.status !== 4) {
                        this.openList.push(nodeToCheck);
                    }
                }
            }
        }
    }

    createDStarGraphMask() {
        this.generalGraph.forEach((array, xIndex) => {
            this.dStarGraph[xIndex] = [];
            array.forEach((generalNode, yIndex) => {
                this.dStarGraph[xIndex][yIndex] = this.dStarNode(generalNode, 'NEW', this.calculateBaseCostHeuristic(generalNode), null);
            });
        });
    }

    isNodeInBounds(x, y) {
        // const leftBoundary = 0;
        // const bottomBoundary = 0;
        // const topBoundary = this.generalGraph[0].length;
        // const rightBoundary = this.generalGraph.length;
        console.log(x, y);
        if (typeof this.dStarGraph[x] === 'undefined' || typeof this.dStarGraph[x][y] === 'undefined') {
            console.log('test');
            return false;
        }
        return true;
        //
        // if (x >= leftBoundary && x <= rightBoundary && y > bottomBoundary && y < topBoundary) {
        //     return true;
    }

    /**
     * Accounting for the ability to travel diagonally
     * @param generalNode
     * @returns {number}
     */
    calculateBaseCostHeuristic(generalNode) {
        const currentX = generalNode.x;
        const currentY = generalNode.y;
        // DStar starts from the end and works toward the start
        const destX = this.startGeneralNode.x;
        const destY = this.startGeneralNode.y;

        const dX = Math.abs(currentX - destX);
        const dY = Math.abs(currentY - destY);

        const maxDifference = (dX > dY) ? dX: dY;
        // Euclidean distance doesn't work well with diagonal travel
        return maxDifference;
    }

    // Would refactor if we implemented priority queue
    pickSmallestCostFromOpenList() {
        let minCost = this.openList[0].dCost;
        let minIndex = 0;
        // if openList has nodes?
        this.openList.forEach((dStarNode, index) => {
            this.updateGeneralNode(dStarNode.generalNode, 2);
            if (dStarNode.dCost < minCost) {
                minCost = dStarNode.dCost;
                minIndex = index;
            }
        });
        return this.openList.splice(minIndex, 1)[0];
    }
}

export default DStar;
