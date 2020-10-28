// specify Webpack loaders using inline notation
// https://webpack.js.org/concepts/loaders/
import mdText from 'raw-loader!./example.md'
console.log('imported example.md')
console.log(mdText)
