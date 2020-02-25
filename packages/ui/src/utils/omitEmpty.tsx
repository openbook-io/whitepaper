export default function (input: any) {
  let object = input;
  Object.keys(object).forEach(k => object[k] = object[k] === '' ? null : object[k])
  return object;
}