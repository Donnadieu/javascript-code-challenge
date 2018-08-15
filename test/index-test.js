const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);
const assert = require('assert');
const fs = require('fs')
const vm = require('vm')
const path = './index.js'
const code = fs.readFileSync(path)
vm.runInThisContext(code)
chai.use(require('sinon-chai'));
