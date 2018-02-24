/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var isDone = false;
var decLiteral = 6;
var hhh = "bob";
var sentence = "Hello, my name is " + hhh + ".\nI'll be " + (decLiteral + 1) + " years old next month.";
var list = [1, 2, 3];
var x = ['hello', 10];
console.log(x[0].substr(1)); // OK
console.log(x[3]);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c, Color);
var colorName = Color[3];
console.log(c, colorName);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
function error(message) {
    throw new Error(message);
}
// for (let i = 0; i < 10 ; i++) {
//   setTimeout(function() {console.log(i); }, 100 * i);
//   console.log(1, i)
// }
console.log([1].concat(list));
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object", a: '2' };
printLabel(myObj);
var p1 = { x: 10, y: 20 };
console.log(p1.x);
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log(myStr);
var a = [1, 2];
console.log.apply(console, a);
console.log.apply(console, [1, 2, 3]);
var cc = function () { return 1; };
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
        this.hhh = function () {
            return 1;
        };
        console.log(1);
    }
    Object.defineProperty(Grid.prototype, "getScale", {
        get: function () {
            return this.scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "setScale", {
        set: function (value) {
            this.scale = value;
        },
        enumerable: true,
        configurable: true
    });
    Grid.origin = { X: 0, y: 0 };
    return Grid;
}());


/***/ })
/******/ ]);