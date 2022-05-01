function lonelyinteger(a) {
  const s = new Set();
  a.forEach((x) => (s.has(x) ? s.delete(x) : s.add(x)));
  return Array.from(s)[0];
}
