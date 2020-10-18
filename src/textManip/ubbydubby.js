export default (sentence) => {

  const wordDef = new RegExp(`\\b[a-z]{1,}'?[a-z]*\\b`, 'gi');

  const ubby = (word) => {
    return word.replace(/[aeiou]{1}/gi, l => `${l}b${l}`);
  }

  return sentence.replace(wordDef, ubby);

}
