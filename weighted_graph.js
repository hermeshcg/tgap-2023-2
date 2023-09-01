import WeightedGraph from './lib/weighted-graph.class.js'

const wg = new WeightedGraph(true)  // Grafo direcionado

wg.addEdge('A', 'B', 3)
wg.addEdge('A', 'C', 5)
wg.addEdge('A', 'D', 10)
wg.addEdge('B', 'D', 4)
wg.addEdge('C', 'D', 2)
wg.addVertex('E')

console.log(wg)

// Tentativa de exclusão do vértice C
//wg.removeVertex('C')

// Remoção do vértice E
wg.removeVertex('E')

console.log(wg)