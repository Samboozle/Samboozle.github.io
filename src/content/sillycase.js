export default (sentence) => {
  let caser = [String.prototype.toUpperCase, String.prototype.toLowerCase]
  return [...sentence].map( v => {
    return caser[Math.floor(Math.random() * caser.length)].call(v)
  }).join('')
}