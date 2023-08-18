import Graph from './lib/graph.class.js'

const g = new Graph()

// Adicionando os vértices
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

// Adicionando as arestas
g.addEdge('A', 'C')
g.addEdge('B', 'C')
g.addEdge('B', 'E')
g.addEdge('C', 'D')
g.addEdge('D', 'E')

console.log(g)

// Removendo o vértice F
g.removeVertix('F')
console.log('~> Vértice F removido')
console.log(g)

// TENTATIVA de remoção do vértice B
// g.removeVertix('B')

/*****************************************************/

// Criação de um grafo direcionado
const dg = new Graph(true)

dg.addEdge('V1', 'V2')
dg.addEdge('V2', 'V3')
dg.addEdge('V2', 'V4')
dg.addEdge('V4', 'V1')

console.log('--------------------------------------------------')
console.log(dg)

// TENTATIVA de excluir o vértice V3
dg.removeVertix('V3')