
/**
 * Transforma Map para Object.
 * @param {Map} map 
 */

export function* mapToObjects(map) {
  for (const [type, name] of map) {
    yield { type, name };
  }
}
