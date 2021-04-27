
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
           
          if (currentNode === endNode) return; 

            if (currentNode.status !==4)
            {
              currentNode.visitNode = true;
              jsQueue.push(currentNode);
              
               //col,row = y,x
        const {y, x} = currentNode;
        let seq; //to be initialized


    if (x > 0) {seq = graph[x - 1][y];
       
        if (!seq.isVisted){ 
            seq.previousNode = currentNode;
            queue.push(graph[nextNode]); //or queue.push(nextNode); 
        }
    } 
    if (x < graph.length - 1) {seq = graph[x+1][y];
        
        if (!seq.isVisted){ 
            seq.previousNode = currentNode;
            queue.push(graph[nextNode]);
        }
    } 
    if (y > 0) {seq = graph[x][y - 1];
        
        if (!seq.isVisted){ 
            seq.previousNode = currentNode;
            queue.push(graph[nextNode]);
        }
    } 
    if (y < graph[0].length - 1) {seq = graph[x][y+1];
        
        if (!seq.isVisted){ 
            seq.previousNode = currentNode;
            queue.push(graph[nextNode]);
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

     createDFsGraphMask() {
      this.generalGraph.forEach((array, xIndex) => {
          this.DFSGraph[xIndex] = [];
          array.forEach((generalNode, yIndex) => {
              this.DFSGraph[xIndex][yIndex] = this.DFSGraph(generalNode, this.calculateBaseCostHeuristic(generalNode) + 0);// heuristic PLUS distance from start
          });
      });
  }
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
