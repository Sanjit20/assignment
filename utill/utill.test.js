const utills = require('./utill')

describe('Anagrams', () => {
  it('should return false when both string length are not equeal', () => {
    const stringOne = 'test';
    const stringTwo = 'tests';

    expect(utills.areAnagrams(stringOne, stringTwo)).toBeFalsy()
  })

  it('should return true when both string length are equeal', () => {
    const stringOne = 'thisisatest';
    const stringTwo = 'Is this a test';

    expect(utills.areAnagrams(stringOne, stringTwo)).toBeTruthy()
  })

  it('should return true when one string contain capital char and both string length are equeal', () => {
    const stringOne = 'Convert the to Lowercase string letters';
    const stringTwo = 'Convertlet the string to lowercaseters';

    expect(utills.areAnagrams(stringOne, stringTwo)).toBeTruthy()
  })
})

describe('Deep clone', () => {
  it('should return copy of the given obj', () => {
    const obj = { name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } }

    expect(utills.deepClone(obj)).toStrictEqual(obj)
  })
})
