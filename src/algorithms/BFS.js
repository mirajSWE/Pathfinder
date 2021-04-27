/*
import React from 'react'


export function BFS(startNode, finishNode, graph) {

//queue a array
let visit = [];
let queue = [];
queue.push(startNode);
startNode.distance = 0;

//search through the queue 
while(queue.length > 0) 
{
    let currentNode = queue[0];
    
    if  (currentNode === finishNode) 
        return visit; //or just return;?
    

    if (currentNode.status !==4) {
        currentNode.isVisted = true;
        visit.push(graph[currentNode]); //or visit.push(currantNode); 
    }

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

  }

}

    export default BFS;
