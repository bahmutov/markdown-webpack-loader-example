// load the JavaScript block as text from the specified file
// using a custom local loader from a local file
import jsBlockText from './block-loader!./example.md'
console.log('imported js block text')
console.log(jsBlockText)
