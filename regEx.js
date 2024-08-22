let pattern = 'pw';

let regExOne = new regExp(pattern);

let flag = 'gi'
let regExtwo = new RegExp(pattern,flag)

let regExThree = /pw/gi

const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent"

const result = regExThree.test(strToCheck)
console.log(result);

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree,'P-W')
console.log(oneMoreResult);

const webUrl = "https://pwskills.com/aman%20bhivgade"
const useableUrl = webUrl.replace(/\d0%/,'-')
console.log(useableUrl);

//website regexr.com