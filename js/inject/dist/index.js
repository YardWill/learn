"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injector = {
    dependencies: {},
    register: function (key, value) {
        this.dependencies[key] = value;
    },
    resolve: function (deps, func, scope) {
        if (scope === void 0) { scope = {}; }
        var props = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            props[_i - 3] = arguments[_i];
        }
        var mineScope = scope;
        for (var i = 0; i < deps.length; i += 1) {
            var d = deps[i];
            if (this.dependencies[d]) {
                mineScope[d] = this.dependencies[d];
            }
            else {
                throw new Error("Can't resolve " + d);
            }
        }
        return function () {
            func.apply(mineScope, props.slice());
        };
    },
};
var Injector = /** @class */ (function () {
    function Injector(scope) {
        if (scope === void 0) { scope = {}; }
        this.dependencies = scope;
    }
    Injector.prototype.register = function (key, value) {
        this.dependencies[key] = value;
    };
    Injector.prototype.resolve = function (deps, func, scope) {
        if (scope === void 0) { scope = {}; }
        var props = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            props[_i - 3] = arguments[_i];
        }
        var mineScope = scope;
        for (var i = 0; i < deps.length; i += 1) {
            var d = deps[i];
            if (this.dependencies[d]) {
                mineScope[d] = this.dependencies[d];
            }
            else {
                throw new Error("Can't resolve " + d);
            }
        }
        return function () {
            func.apply(mineScope, props.slice());
        };
    };
    return Injector;
}());
exports.Injector = Injector;
