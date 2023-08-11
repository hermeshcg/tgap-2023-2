export default class Graph {

  // Método construtor
  constructor(isDirected = false) {
    this.isDirected = isDirected
    this.vertices = []
    this.adjList = new Map()
  }

  // Método que adiciona um vértice no grafo
  addVertex(v) {
    // Se o vértice ainda não existir no vetor de vértices
    if(! this.vertices.includes(v)) {
      // Acrescenta o vértice ao vetor
      this.vertices.push(v)
      // Cria um vetor vazio associado ao vértice na lista de adjacência
      this.adjList.set(v, [])
    }
  }

  // Método que adiciona uma aresta ao grafo
  addEdge(v, w) {   // v e w são dois vértices
    // Se o vértice v ainda não existir, cria-o
    if(! this.vertices.includes(v)) {
      this.addVertex(v)
    }
    // Se o vértice w ainda não existir, cria-o
    if(! this.vertices.includes(w)) {
      this.addVertex(w)
    }

    // Estabelece a aresta v -> w
    this.adjList.get(v).push(w)

    // Se o grafo não for direcionado, criamos
    // também a aresta w -> v
    if(! this.isDirected) {
      this.adjList.get(w).push(v)
    }
  }

}