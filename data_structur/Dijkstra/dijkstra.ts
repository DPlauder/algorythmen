import { PriorityQueue } from "./priorityQueue";

type Edge<T, U> = { node: T; edge: U };

class WeightedGraph<T, U> {
  adjacencyList = new Map<T, Edge<T, U>[]>();
  addVertex(vertex: T) {
    this.adjacencyList.set(vertex, []);
  }
  addEdge(vertex1: T, vertex2: T, weight: U) {
    if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
      this.adjacencyList.get(vertex1)?.push({ node: vertex2, edge: weight });
      this.adjacencyList.get(vertex2)?.push({ node: vertex1, edge: weight });
    }
  }
  dijkstraSearch(start: T, end: T) {
    const nodes = new PriorityQueue();
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: number | null } = {};
    const path: T[] = [];
    let smallest: T;
    let nextNode: Edge<T, U>;
    let sumOfDist: number = 0;
    this.adjacencyList.forEach((_, key) => {
      if (key === start) {
        distances[key as string] = 0;
        nodes.enqueue(key, 0);
      } else {
        distances[key as string] = Infinity;
        nodes.enqueue(key, Infinity);
      }
      previous[key as string] = null;
    });
    //console.log("distances", distances, "Prio", nodes, " prev", previous);

    //loop through graph
    while (nodes.values.length) {
      smallest = nodes.dequeue()?.val as T;
      //if end
      if (smallest === end) {
        while (previous[smallest as string]) {
          path.push(smallest);
          smallest = previous[smallest as string] as T;
        }
        break;
      }
      if (smallest || distances[smallest as string] !== Infinity) {
        for (let neighbour in this.adjacencyList.get(smallest)) {
          // search for neighbor
          nextNode = this.adjacencyList
            .get(smallest)
            ?.at(neighbour as any) as Edge<T, U>;
          // calculate distances
          sumOfDist = (distances[smallest as string] as any) + nextNode.edge;
          //update lists
          if (sumOfDist < distances[nextNode.node as string]) {
            distances[nextNode.node as string] = sumOfDist;
            previous[nextNode.node as string] = smallest as number;
            nodes.enqueue(nextNode.node, sumOfDist);
          }
        }
      }
    }
    return path.concat(smallest!).reverse();
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
