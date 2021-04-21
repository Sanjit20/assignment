const sortString = (word) => word.split('').sort().join();

const getTrimValue = text => text.replace(/[^\w]/g, '').toLowerCase();

const areAnagrams = (stringOne, stringTwo) => {
  const firstStringValue = getTrimValue(stringOne);
  const secondStringValue = getTrimValue(stringTwo);

  if (firstStringValue.length !== secondStringValue.length) return false

  return sortString(firstStringValue) === sortString(secondStringValue)
}

const deepClone = (argument) => {
 return JSON.parse(JSON.stringify(argument))
}

module.exports = {areAnagrams, deepClone}
