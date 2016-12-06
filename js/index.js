// // var s1 = new String('hehehe');
// var s1 = 'hhh';
// s2 = s1.substring(2)
// s1.color = 'red';
// console.log(s1.color)

// var text = 'cat, bat, sat, fat';
// var re = text.replace(/(.at)/g,'word($1)')
// console.log(re)

// function Person(){
//     console.log('test')
// }

Person.prototype.name = 'heiheihei';
Person.prototype.age = 29;
Person.prototype.job = 'sss';
Person.prototype.sayName = function () {
  console.log(this.name);
}

var p1 = new Person;
p1.sayName()
p1.constructor();

function createPerson(name, age, job) {
  var o = new Object();
}

createClass: function (spec) {
  var Constructor = function (props, context, updater) {
    // This constructor gets overridden by mocks. The argument is used
    // by mocks to assert on what gets mounted.

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
    }

    // Wire up auto-binding
    if (this.__reactAutoBindPairs.length) {
      bindAutoBindMethods(this);
    }

    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;

    this.state = null;

    // ReactClasses doesn't have constructors. Instead, they use the
    // getInitialState and componentWillMount methods for initialization.

    var initialState = this.getInitialState ? this.getInitialState() : null;
    if (process.env.NODE_ENV !== 'production') {
      // We allow auto-mocks to proceed as if they're returning null.
      if (initialState === undefined && this.getInitialState._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        initialState = null;
      }
    }
    !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

    this.state = initialState;
  };
  Constructor.prototype = new ReactClassComponent();
  Constructor.prototype.constructor = Constructor;
  Constructor.prototype.__reactAutoBindPairs = [];

  injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

  mixSpecIntoComponent(Constructor, spec);

  // Initialize the defaultProps property after all mixins have been merged.
  if (Constructor.getDefaultProps) {
    Constructor.defaultProps = Constructor.getDefaultProps();
  }

  if (process.env.NODE_ENV !== 'production') {
    // This is a tag to indicate that the use of these method names is ok,
    // since it's used with createClass. If it's not, then it's likely a
    // mistake so we'll warn you to use the static property, property
    // initializer or constructor respectively.
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps.isReactClassApproved = {};
    }
    if (Constructor.prototype.getInitialState) {
      Constructor.prototype.getInitialState.isReactClassApproved = {};
    }
  }

  !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
    process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
  }

  // Reduce time spent doing lookups by setting these on the prototype.
  for (var methodName in ReactClassInterface) {
    if (!Constructor.prototype[methodName]) {
      Constructor.prototype[methodName] = null;
    }
  }

  return Constructor;
}
