const argv = require('argv');

const args = argv.option({
    name: 'option',
    short: 'o',
    type: 'string',
    description: 'Defines an option for your script',
    example: "'script --opiton=value' or 'script -o value'",
}).run();

console.log(args);
