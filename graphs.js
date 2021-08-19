// ?? Vertex is a Node
// ?? Edge is connectiong between Vertexes

// ?? Undirected Graph - graphs without way
// ?? Directed graph - has pointer to from vetexes(with arrows)

// ?? unweight graph - graphs without values of edges
// ?? weight graph - graphs with values of edges

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
  }
}


let g = new Graph();
g.addVertex('Tokyo')
g.addVertex('San Francisco')
g.addVertex('Aspen')

g.addEdge('Tokoy, Aspen')
g.addEdge('San Francisco', 'Aspen')