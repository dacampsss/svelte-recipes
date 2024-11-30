
export function* mapToObjects(map) {
  for (const [type, name] of map) {
    yield { type, name };
  }
}
