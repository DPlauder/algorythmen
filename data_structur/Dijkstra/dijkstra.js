"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const priorityQueue_1 = require("./priorityQueue");
class WeightedGraph {
    adjacencyList = new Map();
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            this.adjacencyList.get(vertex1)?.push({ node: vertex2, edge: weight });
            this.adjacencyList.get(vertex2)?.push({ node: vertex1, edge: weight });
        }
    }
    dijkstraSearch(start, end) {
        const nodes = new priorityQueue_1.PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];
        let smallest;
        let nextNode;
        let sumOfDist = 0;
        this.adjacencyList.forEach((_, key) => {
            if (key === start) {
                distances[key] = 0;
                nodes.enqueue(key, 0);
            }
            else {
                distances[key] = Infinity;
                nodes.enqueue(key, Infinity);
            }
            previous[key] = null;
        });
        //console.log("distances", distances, "Prio", nodes, " prev", previous);
        //loop through graph
        while (nodes.values.length) {
            smallest = nodes.dequeue()?.val;
            //if end
            if (smallest === end) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbour in this.adjacencyList.get(smallest)) {
                    // search for neighbor
                    nextNode = this.adjacencyList
                        .get(smallest)
                        ?.at(neighbour);
                    // calculate distances
                    sumOfDist = distances[smallest] + nextNode.edge;
                    //update lists
                    if (sumOfDist < distances[nextNode.node]) {
                        distances[nextNode.node] = sumOfDist;
                        previous[nextNode.node] = smallest;
                        nodes.enqueue(nextNode.node, sumOfDist);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}
const graph = new WeightedGraph();
//create Verices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 5);
graph.addEdge("A", "C", 3);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 5);
graph.addEdge("D", "F", 1);
graph.addEdge("D", "E", 3);
graph.addEdge("E", "F", 1);
console.log(graph.dijkstraSearch("A", "E"));
//# sourceMappingURL=dijkstra.js.map