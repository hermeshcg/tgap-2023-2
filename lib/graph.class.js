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

  // Método que remove um vértice do grafo
  removeVertex(v) {
    // Age apenas se o vértice existir
    if(this.vertices.includes(v)) {

        let referenced = false  

        // Verifica se o vértice que está sendo excluído está
        // na lista de adjacência de algum outro vértice
        for(let vtx of this.vertices)
          if(this.adjList.get(vtx).includes(v)) {
            referenced = true
            break
          }
      
      // Verifica se a lista de adjacência do vértice está vazia
      // e se o vértice é referenciado na lista de adjacência de
      // algum outro vértice
      if(this.adjList.get(v).length === 0 && !referenced) {

        // Remove o vértice da lista de vértices
        this.vertices.splice(this.vertices.indexOf(v), 1)

        // Remove a entrada da lista de adjacência
        this.adjList.delete(v)
      }
      else throw new Error('ERRO: impossível excluir um vértice com arestas incidentes.')
    }
  }

  // Método que remove uma aresta do grafo
  removeEdge(v, w) {    // v e w são vértices
    // Verificando se tanto v quanto w são vértices válidos
    if(this.vertices.includes(v) && this.vertices.includes(w)) {

      // Procura pela posição de w na lista de adjacência de v
      const posW = this.adjList.get(v).indexOf(w)
      // Exclui w da lista de adjacência de v,
      // caso o índice encontrado seja >= 0
      if(posW >= 0) this.adjList.get(v).splice(posW, 1)

      // Se o grafo não for direcionado, precisamos excluir
      // também a aresta em sentido oposto
      if(! this.isDirected) {
        const posV = this.adjList.get(w).indexOf(v)
        if(posV >= 0) this.adjList.get(w).splice(posV, 1)
      }
    }
  }

}