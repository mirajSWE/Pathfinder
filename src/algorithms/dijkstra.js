export function dijkstra(startNode, finishNode, graph) {
  const visitedNodesInOrder = [];
  // if (visitedNodesInOrder != []) debugger;
  // debugger;
  startNode.distance = 0;
  // debugger;
  const unvisitedNodes = getAllNodes(graph); 
  
  // debugger;
  while (unvisitedNodes.length) {
    // debugger;
    sortNodesByDistance(unvisitedNodes);
    // debugger;
    const closestNode = unvisitedNodes.shift();
    // debugger;
    // If we encounter a wall, we skip it.
    if (closestNode.status !== 4) {
      
      // debugger;
      if (closestNode.distance === Infinity) return visitedNodesInOrder;
      closestNode.isVisited = true;
      visitedNodesInOrder.push(closestNode);
      // debugger;
      updateGeneralNode(closestNode, 2)
      // debugger;
      if (closestNode === finishNode) {
        const nodesInShortestPathOrder = [];
        let currentNode = finishNode;
        while (currentNode !== null) {
          updateGeneralNode(currentNode, 3)
          nodesInShortestPathOrder.unshift(currentNode);
          currentNode = currentNode.previousNode;
        }
        return visitedNodesInOrder;
      }
      // debugger;
      updateUnvisitedNeighbors(closestNode, graph);
      // debugger;
    }
    // console.log(visitedNodesInOrder)
  }
}

function getAllNodes(graph) {
  const nodes = [];
  for (const row of graph) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

function updateGeneralNode(node, newStatus) {
  // debugger;
  if (node.status < newStatus) {
      node.status = newStatus;
  }
}

function sortNodesByDistance(unvisitedNodes) {
  // debugger;
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, graph) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, graph);
  for (const neighbor of unvisitedNeighbors) {
    // debugger;
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getUnvisitedNeighbors(node, graph) {
  const neighbors = [];
  const col = node.y;
  const row = node.x;

  if (row > 0) neighbors.push(graph[row - 1][col]);
  if (row < graph.length - 1) neighbors.push(graph[row + 1][col]);
  if (col > 0) neighbors.push(graph[row][col - 1]);
  if (col < graph[0].length - 1) neighbors.push(graph[row][col + 1]); 
  // debugger;
  return neighbors.filter(neighbor => !neighbor.isVisited);
}

export default dijkstra;