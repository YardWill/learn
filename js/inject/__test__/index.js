const { Injector } = require('../dist/index');


const injector = new Injector({});


injector.register('service', () => {
  return 'service';
});

injector.register('router', () => {
  return 'router';
});

test('injector', () => {
  const doSomething = injector.resolve(['service', 'router'], function (hhh) {
    console.log(this, injector);
    expect(this.service()).toBe('service');
    expect(this.router()).toBe('router');
    expect(hhh).toBe('aaa');
  }, {}, 'aaa');
  doSomething();
});

