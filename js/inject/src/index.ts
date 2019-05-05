export const injector = {
  dependencies: {},
  register(key, value) {
    this.dependencies[key] = value;
  },
  resolve(deps, func, scope = {}, ...props) {
    const mineScope = scope;
    for (let i = 0; i < deps.length; i += 1) {
      const d = deps[i];
      if (this.dependencies[d]) {
        mineScope[d] = this.dependencies[d];
      } else {
        throw new Error(`Can't resolve ${d}`);
      }
    }
    return () => {
      func.apply(mineScope, [...props]);
    };
  },
};

interface IDependencies {
  [x: string]: () => any;
}

interface IInjector {
  dependencies: IDependencies;
}

export class Injector implements IInjector {
  dependencies: IDependencies
  constructor(scope = {}) {
    this.dependencies = scope;
  }
  register(key, value) {
    this.dependencies[key] = value;
  }
  resolve(deps, func, scope = {}, ...props) {
    const mineScope = scope;
    for (let i = 0; i < deps.length; i += 1) {
      const d = deps[i];
      if (this.dependencies[d]) {
        mineScope[d] = this.dependencies[d];
      } else {
        throw new Error(`Can't resolve ${d}`);
      }
    }
    return () => {
      func.apply(mineScope, [...props]);
    };
  }
}

