export function dijkstra(grid, startNode, finishNode) {
  startNode.distance = 0;
  const unvisitedNodes = getNodes(grid);
  const visitedNodesInOrder = [];
  //debugger;

  //Continue looping until all nodes are visited or we reach target node
  while (!!unvisitedNodes.length) {
    sortByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    visitedNodesInOrder.push(closestNode);
    if (closestNode === finishNode) {
      return visitedNodesInOrder;
    }
    updateNeighbors(closestNode, grid);
  }
}

//Method to pass sort algorithm as pseudo minheap
function sortByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

//Updates the distance values of all neighboring nodes
function updateNeighbors(node, grid) {
  const neighbors = getNeighbors(node, grid);

  for (const neighbor of neighbors) {
    neighbor.distance = node.distance + 1;
  }
}

//Return all the neighboring nodes of node
function getNeighbors(node, grid) {
  const neighbors = [];
  const { col, row } = node;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors;
}

//Puts all nodes in grid into a new array
function getNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}
