const { parse } = require('@textlint/markdown-to-ast')

module.exports = function (source) {
  const ast = parse(source)
  console.log('markdown ast')
  console.log(ast)
  const codeBlock = ast.children.find(
    (node) => node.type === 'CodeBlock' && node.lang === 'js',
  )
  if (!codeBlock) {
    throw new Error('Could not find code block')
  }

  return `export default ${JSON.stringify(codeBlock.value)}`
}
