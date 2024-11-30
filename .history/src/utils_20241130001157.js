
/**
 * Transforma Map para Object.
 * @param {Map} map 
 */

export function* mapToObjects(map) {
  for (const [type, value] of map) {
    yield { type, value };
  }
}
