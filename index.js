const recast = require('recast');

const code = [
  'export default class DocumentsService {',
  `@abc({ on: 'init' })`,
  '*loadEndpoint() {',
  `yield 'abc';`,
  `return 'foo';`,
  '};',
  '};',
].join(`\n`);

const ast = recast.parse(code, {
  parser: require('recast/parsers/typescript'),
});

console.log(JSON.stringify(ast.program.body, null, 2));
