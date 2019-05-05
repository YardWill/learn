## injector

This is a pure injector class.

## use
```
const { Injector } = require('injector')

const injector = new Injector({}) // init dep scope

injector.register('service', () => { // register dep into scope
  return 'service';
});

injector.register('router', () => {
  return 'router';
});

// use dep in code
const doSomething = injector.resolve(
  ['service', 'router'], // the dep used in this function 
  function (hhh) { // main function
    expect(this.service()).toBe('service');
    expect(this.router()).toBe('router');
    expect(hhh).toBe('aaa');
  }, 
  {}, // local scope register
  'aaa' // the other params
);

doSomething();
```

