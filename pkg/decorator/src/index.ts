import 'reflect-metadata';

const formatMetadataKey = Symbol('format');
const requiredMetadataKey = Symbol('required');

function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}


class Greeter {
  // 属性装饰器
  @format('Hello, %s')
  // @Reflect.metadata(formatMetadataKey, 'Hello, %s')
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  // 方法装饰器
  @validate
  @enumerable(true)
  greet(@required name: string) {
    let formatString = getFormat(this, 'greeting');
    return formatString.replace('%s', `${name}, ${this.greeting}`);
  }
}
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  let method = descriptor.value;
  descriptor.value = function () {
    let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error('Missing required argument.');
        }
      }
    }
    console.log(this, arguments);
    return method.apply(this, arguments);
  };
}

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log(target, propertyKey, descriptor);
    descriptor.enumerable = value;
  };
}
const a = new Greeter('aaa');
console.log(a.greet('bbb'));