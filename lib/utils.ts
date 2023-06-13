export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function parseAdvantages(bookmakerAdventages) {
  
  return bookmakerAdventages.map(({adventage}) => adventage)
}