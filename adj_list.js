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
g.removeVertex('F')
console.log('~> Vértice F removido')
console.log(g)

// TENTATIVA de remoção do vértice B
// g.removeVertex('B')

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
// dg.removeVertex('V3')

// Exemplo de exclusão de aresta em grafo direcionado
console.log('--- GRAFO DIRECIONADO ANTES DA EXCLUSÃO DE ARESTA ---')
console.log(dg)

// Exclusão do vértice V2-V4
dg.removeEdge('V2', 'V4')

console.log('--- GRAFO DIRECIONADO DEPOIS DA EXCLUSÃO DE ARESTA ---')
console.log(dg)

// Exemplo de exclusão de aresta em grafo não direcionado
console.log('--- GRAFO NÃO DIRECIONADO ANTES DA EXCLUSÃO DE ARESTA ---')
console.log(g)

// Exclusão do vértice B-C
g.removeEdge('B', 'C')

console.log('--- GRAFO NÃO DIRECIONADO DEPOIS DA EXCLUSÃO DE ARESTA ---')
console.log(g)