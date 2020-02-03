export default (sentence) => {
  const arr = sentence.toLowerCase().match(/[a-z]/g)
  const key = arr.reduce((a, v) => {
    if (!a[v]) {
      a[v] = (122 - (Math.floor(Math.random() * 26)))
    } 
    return a
  }, {})
  return [...sentence.toLowerCase()].map( v => key[v] ? String.fromCharCode(key[v]) : v ).join('')
}