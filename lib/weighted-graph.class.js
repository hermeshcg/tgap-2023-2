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

  /*
    Método que determina o menor caminho entre um vértice e
    todos os demais usando o algoritmo de Dijkstra
  */
  shortestDistance(initialVertex) {

    // Tabela que conterá os resultados
    const result = {}

    // Cria a tabela de trabalho do algoritmo
    for(let vtx of this.vertices) {
      result[vtx] = {
        isClosed: false,
        distance: Infinity,
        parent: null
      }
    }

    // Inicializa as informações relativas ao vértice inicial
    result[initialVertex].isClosed = true
    result[initialVertex].distance = 0
    result[initialVertex].parent = initialVertex

    // O primeiro vértice a ser analisado é exatamente aquele
    // passado como parâmetro
    let currentVertex = initialVertex

    // Repete enquanto houver um vértice válido
    while(currentVertex) {

      console.log({currentVertex})

      // Inicia pelos adjacentes do vértice inicial
      const edges = this.adjList.get(currentVertex)

      // Inicializa o vértice adjacente mais próximo com distância infinita 
      const closer = { vertex: null, distance: Infinity }

      // Para cada aresta incidente ao vértice inicial,
      // preenche a tabela com as informações pertinentes
      for(let e of edges) {
        
        // Se a soma da distância acumulada até o vértice atual mais o peso da
        // aresta incidente for menor do que a distância acumulada já registrada
        // para o vértice adjacente, substituímos a distância acumulada e o vértice pai
        if(result[currentVertex].distance + e.weight < result[e.adjacent].distance) {
          result[e.adjacent].distance = result[currentVertex].distance + e.weight
          result[e.adjacent].parent = currentVertex
        }

        // Aqui, determinamos qual vértice adjacente tem a menor distância relativa
        // ao vértice que está sendo analisado
        if(! result[e.adjacent].isClosed && e.weight < closer.distance) {
          closer.vertex = e.adjacent
          closer.distance = e.weight
        }

      }
      
      currentVertex = null
      let minDistance = Infinity

      // Determina o próximo vértice a ser analisado
      // Procura pelo vértice com menor distância acumulada e que
      // ainda esteja aberto
      for(let vtx of this.vertices) {
        if(! result[vtx].isClosed && result[vtx].distance <= minDistance) {
          currentVertex = vtx
          minDistance = result[vtx].distance
        }
      }

      // Se tiver sido encontrado um vértice válido, fecha-o
      if(currentVertex) result[currentVertex].isClosed = true

    }

    return result

  }
}