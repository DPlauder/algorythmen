type AdjacencyList<T> = Map<T, T[]>;

class Graph<T> {
  adjacencyList: AdjacencyList<T> = new Map();

  addVertex(vertex: T) {
    this.adjacencyList.set(vertex, []);
  }
  addEdge(vertex1: T, vertex2: T) {
    if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
      this.adjacencyList.get(vertex1)?.push(vertex2);
      this.adjacencyList.get(vertex2)?.push(vertex1);
    }
  }
  removeEdge(vertex1: T, vertex2: T) {
    if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
      this.adjacencyList.set(
        vertex1,
        this.adjacencyList
          .get(vertex1)!
          .filter((element: T) => element !== vertex2)
      );
      this.adjacencyList.set(
        vertex2,
        this.adjacencyList
          .get(vertex2)!
          .filter((element: T) => element !== vertex1)
      );
    }
  }
  removeVertex(vertex: T) {
    if (this.adjacencyList.get(vertex)) {
      while (this.adjacencyList.get(vertex)?.length) {
        this.removeEdge(vertex, this.adjacencyList.get(vertex)?.pop() as T);
      }
    }
    this.adjacencyList.delete(vertex);
  }
  depthFirst(startVertex: T): T[] {
    const stack = [startVertex];
    const result: T[] = [];
    let visited: { [key: string]: boolean } = {};
    if (this.adjacencyList.get(startVertex)) {
    }
    const check = (current: T) => {
      if (stack.length === 0) return;
      if (visited[current as string] != true) {
        result.push(current);
        visited[startVertex as string] = true;
        this.adjacencyList
          .get(current)
          ?.forEach((element) => stack.push(element));
        check(stack.pop as T);
      }
    };
    check(startVertex);

    return result;
  }
  depthFirstIterative(startVertex: T): T[] {
    const stack = [startVertex];
    const result: T[] = [];
    let visited: { [key: string]: boolean } = {};
    let currentVertex: T | null = null;
    visited[startVertex as string] = true;
    while (stack.length) {
      currentVertex = stack.pop() as T;
      result.push(currentVertex);
      this.adjacencyList.get(currentVertex)?.forEach((neighbour) => {
        if (!visited[neighbour as string]) {
          visited[neighbour as string] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }
}

const graph = new Graph<string>();

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
console.log(graph.depthFirstIterative("A"));

console.log(graph.adjacencyList);
