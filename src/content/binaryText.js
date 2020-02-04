const binaryStar = () => {
  return String(Math.floor(Math.random() * 2))
}

export default (str) => {
  return str.replace(/./g, s => binaryStar())
}