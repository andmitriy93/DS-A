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
}


let g = new Graph();
g.addVertex('Tokyo')
g.addVertex('San Francisco')