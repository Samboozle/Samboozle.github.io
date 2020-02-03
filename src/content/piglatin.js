export default (sentence) => {

  const wordDef = new RegExp(`\\b[a-z]{1,}'?[a-z]*\\b`, 'gi')

  const shuffle = (word) => {

    const veeSpot = word.search(/[aeiouy]/i)

    if (word.search(/[aeiou]/i) === 0) {
      return word + 'way'
    } else if (word[0] !== word[0].toUpperCase()) {
      return word.search(/qu/i) === veeSpot - 1
        ? word.substr(veeSpot + 1) + word.substr(0, veeSpot + 1) + 'ay'
        : word.substr(veeSpot) + word.substr(0, veeSpot) + 'ay'
    } else {
      return word.search(/qu/i) === veeSpot - 1
        ? word[veeSpot + 1].toUpperCase() + (word.substr(veeSpot + 2) + word.substr(0, veeSpot + 1) + 'ay').toLowerCase()
        : word[veeSpot].toUpperCase() + (word.substr(veeSpot + 1) + word.substr(0, veeSpot) + 'ay').toLowerCase()
    }
  }

  return sentence.replace(wordDef, s => shuffle(s))
}