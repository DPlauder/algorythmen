"use strict";
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(vertex1, vertex2) {
        var _a, _b;
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push(vertex2);
            (_b = this.adjacencyList.get(vertex2)) === null || _b === void 0 ? void 0 : _b.push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            this.adjacencyList.set(vertex1, this.adjacencyList
                .get(vertex1)
                .filter((element) => element !== vertex2));
            this.adjacencyList.set(vertex2, this.adjacencyList
                .get(vertex2)
                .filter((element) => element !== vertex1));
        }
    }
    removeVertex(vertex) {
        var _a, _b;
        if (this.adjacencyList.get(vertex)) {
            while ((_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.length) {
                this.removeEdge(vertex, (_b = this.adjacencyList.get(vertex)) === null || _b === void 0 ? void 0 : _b.pop());
            }
        }
        this.adjacencyList.delete(vertex);
    }
    depthFirstRec(startVertex) {
        const result = [];
        const visited = {};
        const check = (vertex) => {
            var _a;
            if (!vertex)
                return null;
            visited[vertex] = true;
            result.push(vertex);
            (_a = this.adjacencyList.get(vertex)) === null || _a === void 0 ? void 0 : _a.forEach((neighbour) => {
                if (!visited[neighbour])
                    check(neighbour);
            });
        };
        check(startVertex);
        return result;
    }
    depthFirstIterative(startVertex) {
        var _a;
        const stack = [startVertex];
        const result = [];
        let visited = {};
        let currentVertex = null;
        visited[startVertex] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            (_a = this.adjacencyList.get(currentVertex)) === null || _a === void 0 ? void 0 : _a.forEach((neighbour) => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return result;
    }
}
const graph = new Graph();
/* graph.addVertex("Wien");
graph.addVertex("Berlin");
graph.addVertex("London");
graph.addVertex("Barcelona");
graph.addVertex("New York");
graph.addEdge("Berlin", "Wien");
graph.addEdge("London", "Wien");
graph.addEdge("Barcelona", "Wien");
graph.addEdge("New York", "Barcelona");
//graph.removeVertex("Wien");
graph.depthFirst("Wien");
 */
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("D", "B");
graph.addEdge("B", "C");
graph.addEdge("E", "C");
graph.addEdge("E", "F");
graph.addEdge("D", "F");
graph.addEdge("D", "E");
console.log(graph.depthFirstRec("A"));
console.log(graph.adjacencyList);
//# sourceMappingURL=graph.js.map