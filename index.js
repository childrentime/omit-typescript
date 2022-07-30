"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.omit = void 0;
var omit = function (obj, props) {
    var newObj = __assign({}, obj);
    props.forEach(function (prop) { return delete newObj[prop]; });
    return newObj;
};
exports.omit = omit;
exports["default"] = omit;
