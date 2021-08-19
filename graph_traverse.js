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
  TODO Breadth First Traversal

  ! Always keep tracking wich vertex you already visited
*/
/*
  TODO DFS Pseudocode Recursive
    * DFS(vertex):
      *  if vertex is empty
      *    return (this is base case)
      *  add vertex to results list
      *  mark vertex as visited
      *  for each neighbor in vertex's neighbors:
      *    if neighbor is not visited:
      *      recursively call DFS on neighbor

  TODO DFS Pseudocode Iterative
    * DFS-iterative(start):
      * let S be a stack
      * S.push(start)
      * while S is not empty
        * vertex = S.pop()
        * if vertex is not labeled as discovered:
          * visit vertex (add to result list)
          * label vertex as discovered
          * for each of vertex's neighbors, N do S.push(N)
*/
/*
  TODO BFS Pseudocode 
    * This function should accept a starting vertex
    * Create a queue (you can use an array) and place the starting vertex in it
    * Create an array to store the nodes visited
    * Create an object to store nodes visited
    * Mark the starting vertex as visited
    * Loop as long as there is anything in the queue
    * Remove the first vertex from the queue and push it into the array that stores nodes visited
    * Loop over each vertex in the adjacency list for the vertex you are visiting
    * If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    * Once you have finished looping, return the array of visited nodes
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

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      })
    }

    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      visited[start] = true;
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor)
        }
      })
    }

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