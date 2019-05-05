"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const formatMetadataKey = Symbol('format');
const requiredMetadataKey = Symbol('required');
function format(formatString) {
    return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target, propertyKey) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    // 方法装饰器
    greet(name) {
        let formatString = getFormat(this, 'greeting');
        return formatString.replace('%s', `${name}, ${this.greeting}`);
    }
}
__decorate([
    format('Hello, %s')
    // @Reflect.metadata(formatMetadataKey, 'Hello, %s')
    ,
    __metadata("design:type", String)
], Greeter.prototype, "greeting", void 0);
__decorate([
    validate,
    enumerable(true),
    __param(0, required),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Greeter.prototype, "greet", null);
function required(target, propertyKey, parameterIndex) {
    let existingRequiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
function validate(target, propertyName, descriptor) {
    let method = descriptor.value;
    descriptor.value = function () {
        let requiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
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
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        // console.log(target, propertyKey, descriptor);
        descriptor.enumerable = value;
    };
}
const a = new Greeter('aaa');
console.log(a.greet('bbb'));
