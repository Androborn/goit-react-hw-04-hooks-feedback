export function countTotal(object) {
  return Object.values(object).reduce((a, b) => a + b);
}
export function countRatio(object, ratioParameter) {
  return Math.round((object[ratioParameter] / countTotal(object)) * 100);
}
