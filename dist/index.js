'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
//@ts-ignore
const base_njk_1 = tslib_1.__importDefault(require("../templates/base.njk"));
//@ts-ignore
const base2_njk_1 = tslib_1.__importDefault(require("../templates/base2.njk"));
//const hello = require('./second')
console.log(base_njk_1.default());
console.log(base2_njk_1.default());
