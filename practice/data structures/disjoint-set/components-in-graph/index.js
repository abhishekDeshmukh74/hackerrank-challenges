function componentsInGraph(gb) {
  //convert edge list to adjacency list
  const graph = {};
  for (const [a, b] of gb) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  let minSize = Infinity;
  let maxSize = -Infinity;
  let currentComponentSize = 0;
  const visited = new Set();

  for (const node in graph) {
    if (currentComponentSize < minSize && currentComponentSize > 0) minSize = currentComponentSize;
    if (currentComponentSize > maxSize && currentComponentSize > 0) maxSize = currentComponentSize;
    currentComponentSize = 0;
    if (visited.has(String(node))) continue;
    // DFS current node
    const stack = [node];
    while (stack.length) {
      const current = stack.pop();
      if (visited.has(String(current))) continue;
      visited.add(String(current));
      currentComponentSize++;
      for (const neighbor of graph[current]) stack.push(neighbor);
    }
  }
  return [minSize, maxSize];
}

console.log(
  componentsInGraph([
    [1, 6],
    [2, 7],
    [3, 8],
    [4, 9],
    [2, 6],
  ])
);

console.log(
  componentsInGraph([
    [1, 17],
    [5, 13],
    [7, 12],
    [5, 17],
    [5, 12],
    [2, 17],
    [1, 18],
    [8, 13],
    [2, 15],
    [5, 20],
  ])
);
