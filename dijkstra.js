import WeightedGraph from './lib/weighted-graph.class.js'

const wg = new WeightedGraph(true)

wg.addVertex('A')
wg.addVertex('B')
wg.addVertex('C')
wg.addVertex('D')
wg.addVertex('E')

wg.addEdge('A', 'B', 1)
wg.addEdge('A', 'C', 3)
wg.addEdge('A', 'E', 6)
wg.addEdge('B', 'C', 1)
wg.addEdge('B', 'D', 3)
wg.addEdge('C', 'A', 1)
wg.addEdge('C', 'B', 2)
wg.addEdge('C', 'D', 1)
wg.addEdge('D', 'E', 2)
wg.addEdge('D', 'A', 3)
wg.addEdge('E', 'D', 1)

wg.shortestDistance('A')