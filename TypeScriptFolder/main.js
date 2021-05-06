"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var x = 10;
var y = 20;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var c = Color.green;
console.log(c);
