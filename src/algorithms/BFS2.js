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
            stepCounter += 1;
           
            if (currentNode === endNode) return; //reuturn jsQueue maybe?
            
            if (currentNode.status !==4)
            {
              currentNode.visitNode = true;
              jsQueue.push(currentNode);

              for (let i = 0; i <= currentNode.x + 1; i++) {
                for (let j = 0; j <= currentNode.y + 1; j++) {
                    if (this.isNodeInBounds(i, j)) {
                        const visitNode = this.generalGraph[i][j];
                        if (visitNode.status === 1) {
                            this.updateGeneralNode(visitNode, );
                            this.updateGeneralNodeStepNumber(visitNode, stepCounter);
                            jsQueue.push(visitNode);
                        }
                    }
                }
               }
            for (let i = 0; i >= currentNode.x - 1; i++) {
              for (let j = 0; j >= currentNode.y - 1; j++) {
                  if (this.isNodeInBounds(i, j)) {
                      const visitNode = this.generalGraph[i][j];
                      if (visitNode.status === 1) {
                          this.updateGeneralNode(visitNode, 3); //2 0r 3? 
                          this.updateGeneralNodeStepNumber(visitNode, stepCounter);
                          jsQueue.push(visitNode);
                      }
                  }
              }
             }
            }

       
          
            console.log(jsQueue.length);
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
