const oneArray = [1,2,3,4]
const twoAray = [5,6,7,8]

// const threeArray = oneArray.concat(twoAray)
// const threeArray = [oneArray,twoAray]

const threeArray = [...oneArray,...twoAray]
console.log(threeArray)