const stringify = (data, depth) => {
  if (typeof data !== 'object' || data === null) {
    return `${data}`;
  }
  const lines = Object.entries(data).map(
    ([key, value]) =>
      `${'  '.repeat(depth + 2)}  ${key}: ${stringify(value, depth + 2)}`
  );
  return ['{', ...lines, `${'  '.repeat(depth)}  }`].join('\n');
};

const template = (value, depth, key, sign = ' ') =>
  `${'  '.repeat(depth)}${sign} ${key}: ${stringify(value, depth)}\n`;

export default (innerTree) => {
  const iter = (tree, depth = 1) =>
    tree.map((obj) => {
      switch (obj.type) {
        case 'add':
          return template(obj.val, depth, obj.key, '+');
        case 'remove':
          return template(obj.val, depth, obj.key, '-');
        case 'same':
          return template(obj.val, depth, obj.key);
        case 'updated':
          return `${template(obj.val1, depth, obj.key, '-')}${template(
            obj.val2,
            depth,
            obj.key,
            '+'
          )}`;
        case 'recursion':
          return `${'  '.repeat(depth + 1)}${obj.key}: {\n${iter(
            obj.children,
            depth + 2
          ).join('')}${'  '.repeat(depth + 1)}}\n`;
        default:
          throw new Error('Error');
      }
    });

  return `{\n${iter(innerTree).join('')}}`;
};
