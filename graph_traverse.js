/*
  * traversal means - Visitin/Updating/Checking each vertex in a graph
  ? Graph Traversal Uses
    * Peer to peer networking 
    * Web crawlers
    * Finding 'closest' matches/recommendations
    * Shortest path problems
      * GPS Navigation
      * Solving mazes
      * AI (shortest path to win the game)

  TODO Depth First Traversal
  TODO Breath First Traversal

  ! Always keep tracking wich vertex you already visited
*/

/*
  TODO DFS Pesudocode Recursive
    * DFS(vertex):
      *  if vertex is empty
      *    return (this is base case)
      *  add vertex to results list
      *  mark vertex as visited
      *  for each neighbor in vertex's neighbors:
      *    if neighbor is not visited:
      *      recursively call DFS on neighbor


*/

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    })(start)
    
    return result;
  }
}







let g = new Graph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('B','D')
g.addEdge('C','E')
g.addEdge('D','E')
g.addEdge('D','F')
g.addEdge('E','F')

//                A
//             /    \
//            B      C
//            |      |
//            D  -- E
//            \     /
//               F