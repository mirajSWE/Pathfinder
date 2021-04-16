import React from 'react'

class AStar {
    constructor(startNode, endNode, graph) {
        this.startGeneralNode = startNode; //starting point
        this.endGeneralNode = endNode; //target
        this.generalGraph = graph;
        this.runTime = undefined;

        this.openList = new Set();
        this.closedList = new Set();
        this.aStarGraph = [];
        this.routeSteps = [];
    }

    /**
     * MAYBE SEPARATING HEURISTIC FROM COST?
     * @param node
     * @param cost
     * @param parent
     * @returns {{cost: *, generalNode: *, neighborList: [], parentNode: *, distanceFromStart: number}}
     */

    aStarNode(node, cost, parent) {
        const aStarNode = {
            generalNode: node,
            cost: cost,
            neighborList: [],
            parentNode: parent,
            distanceFromStart: 0,
        }
        return aStarNode;
    }

    runAlgorithm() {
        this.runTime = window.performance.now();
        this.createAStarGraphMask();
        const destinationNode = this.aStarGraph[this.endGeneralNode.x][this.endGeneralNode.y];
        // Let's grab the 'end' node, the one we start at, and mark it as our first node in the list

        let nextNode = this.aStarGraph[this.startGeneralNode.x][this.startGeneralNode.y];
        nextNode.parentNode = nextNode;
        this.refreshAndPopulateOpenList(nextNode);

        while (this.openList.size > 0 && nextNode !== destinationNode) {
            nextNode = this.pickSmallestCostFromOpenList(); // pops smallest cost

            this.closedList.add(nextNode);

            this.updateGeneralNodeStepNumber(nextNode.generalNode, this.routeSteps.length + 1);

            this.routeSteps.push(nextNode);

            this.updateGeneralNode(nextNode.generalNode, 3);

            this.refreshAndPopulateOpenList(nextNode);
        }

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

    refreshAndPopulateOpenList(currentNode) {
        this.openList = new Set();
        for (let i = currentNode.generalNode.x - 1; i <= currentNode.generalNode.x + 1; i++) {
            for (let j = currentNode.generalNode.y - 1; j <= currentNode.generalNode.y + 1; j++) {
                if (this.isNodeInBounds(i, j)) {
                    const nodeToCheck = this.aStarGraph[i][j];
                    if (this.openList.has(nodeToCheck)) {
                        const newCostToCheck = this.calculateBaseCostHeuristic(nodeToCheck.generalNode) + currentNode.parentNode.distanceFromStart + 1;
                        if (newCostToCheck < nodeToCheck.cost) {
                            nodeToCheck.nodeParent = currentNode;
                            nodeToCheck.cost = newCostToCheck;
                        }
                    } else {
                        if (nodeToCheck.generalNode.status !== 4 && !this.closedList.has(nodeToCheck)) {
                            nodeToCheck.parentNode = currentNode;
                            nodeToCheck.cost = this.calculateBaseCostHeuristic(nodeToCheck.generalNode) + nodeToCheck.parentNode.distanceFromStart + 1;
                            this.openList.add(nodeToCheck);
                        }
                    }
                }
            }
        }
    }

    createAStarGraphMask() {
        this.generalGraph.forEach((array, xIndex) => {
            this.aStarGraph[xIndex] = [];
            array.forEach((generalNode, yIndex) => {
                this.aStarGraph[xIndex][yIndex] = this.aStarNode(generalNode, this.calculateBaseCostHeuristic(generalNode) + 0);// heuristic PLUS distance from start
            });
        });
    }

    isNodeInBounds(x, y) {
        // const leftBoundary = 0;
        // const bottomBoundary = 0;
        // const topBoundary = this.generalGraph[0].length;
        // const rightBoundary = this.generalGraph.length;
        if (typeof this.aStarGraph[x] === 'undefined' || typeof this.aStarGraph[x][y] === 'undefined') {
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
        // AStar starts from the end and works toward the start
        const destX = this.endGeneralNode.x;
        const destY = this.endGeneralNode.y;

        const dX = Math.abs(currentX - destX);
        const dY = Math.abs(currentY - destY);

        // const maxDifference = (dX > dY) ? dX: dY;

        const diagonalCost = (dX + dY) - (Math.sqrt(2) * (dX > dY) ? dY : dX)
        // Euclidean distance doesn't work well with diagonal travel
        generalNode.cost = diagonalCost * 1.001;
        return diagonalCost * 1.001;
    }

    // Pops smallest cost off open list and returns it
    pickSmallestCostFromOpenList() {
        let minCost = 100000000000;

        let minimumNode;
        // if openList has nodes?
        this.openList.forEach((aStarNode) => {
            this.updateGeneralNode(aStarNode.generalNode, 2);
            if (aStarNode.cost < minCost) {
                minCost = aStarNode.cost;
                minimumNode = aStarNode;
            }
        });
        // const chosenNode = this.openList.splice(minIndex, 1)[0];
        this.openList.delete(minimumNode);
        minimumNode.distanceFromStart = minimumNode.parentNode.distanceFromStart + 1;
        return minimumNode;
        // chosenNode.distanceFromStart = chosenNode.parentNode.distanceFromStart + 1;
        // return chosenNode;
    }
}

export default AStar;