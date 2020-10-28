// load the JavaScript block as text from the specified file
// using a custom local loader from a local file
// import sum from './example.js'
import jsBlockValue from 'babel-loader!./block-loader!./example.md'
// console.log('imported sum', sum)
console.log('imported js block value')
console.log(jsBlockValue)
