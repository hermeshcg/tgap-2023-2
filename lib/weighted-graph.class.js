import Graph from './graph.class.js'

  /* 
    Classe auxiliar que representará uma aresta,
    com as informações necessárias para um grafo ponderado
  */
  class Edge {
    constructor(adjacent, weight = null, label = null) {
      this.adjacent = adjacent    // Vértice adjacente
      this.weight = weight        // Peso da aresta (opcional)
      this.label = label          // Descrição da aresta (opcional)
    }    
  }

/* 
  CLASSE QUE REPRESENTA UM GRAFO PONDERADO
  Descende da classe de grafo comum (Graph)
*/
export default class WeightedGraph extends Graph {

  // Método que adiciona uma aresta ao grafo
  addEdge(originVtx, destVtx, weight = null, label = null) {   // origin e ad
    // Se o vértice v ainda não existir, cria-o
    if(! this.vertices.includes(originVtx)) {
      this.addVertex(originVtx)
    }
    // Se o vértice w ainda não existir, cria-o
    if(! this.vertices.includes(destVtx)) {
      this.addVertex(destVtx)
    }

    // Cria o objeto que representa a aresta que está sendo inserida
    const edge = new Edge(destVtx, weight, label)

    // Estabelece a aresta originVtx -> destVtx
    this.adjList.get(originVtx).push(edge)
    console.log(`ARESTA ADICIONADA: '${originVtx}' =>`, edge)

    // Se o grafo não for direcionado, criamos
    // também a aresta destVtx -> originVtx
    if(! this.isDirected) {
      const edge2 = new Edge(originVtx, weight, label)
      this.adjList.get(destVtx).push(edge2)
      console.log(`ARESTA ADICIONADA: '${destVtx}' =>`, edge2)
    }
  }

  // Método que remove um vértice do grafo
  removeVertex(v) {
    // Age apenas se o vértice existir
    if(this.vertices.includes(v)) {

      let referenced = false  

      // Verifica se o vértice que está sendo excluído está
      // na lista de adjacência de algum outro vértice
      for(let vtx of this.vertices) {
        const adjList = this.adjList.get(vtx)

        for(let edge in adjList) {
          if(edge.adjacent === v) {
            referenced = true
            break
          }
        }
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

  // TODO: REVER ESTE MÉTODO PARA TRABALHAR COM GRAFOS PONDERADOS
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