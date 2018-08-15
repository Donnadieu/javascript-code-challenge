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

describe('reverseArray()',() => {
  const firstArray = ['sense.','make', 'all', 'will', 'This']
  const secondArray = ['This', 'will', 'all', 'make', 'sense.']
  let newArray = reverseArray(firstArray)

  it('reverses the array', () => {
    expect(newArray).to.eql(['This', 'will', 'all', 'make', 'sense.'])
  })
  it("it's not hard coded", () => {
    expect(reverseArray(secondArray)).to.eql(['sense.','make', 'all', 'will', 'This'])
  })
})

describe('greetAliens() takes in an array of strings and uses a for loop to print a greeting with each string in the array',() => {
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  beforeEach(function() {
   let spy = sinon.spy(console, 'log');
   greetAliens(aliens)
  });

  afterEach(function() {
    console.log.restore();
  });

  it('should log "Oh powerful [stringElement], we humans offer our unconditional surrender!"', () => {
    expect(console.log).to.have.been.calledWith('Oh powerful, Blorgous we humans offer our unconditional surrender!');
    expect(console.log).to.have.been.calledWith('Oh powerful, Glamyx we humans offer our unconditional surrender!');
    expect(console.log).to.have.been.calledWith('Oh powerful, Wegord we humans offer our unconditional surrender!');
    expect(console.log).to.have.been.calledWith('Oh powerful, SpaceKing we humans offer our unconditional surrender!');
  })
})

describe('convertToBaby()',() => {
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human']
  const babyAnimals = ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human']

  it("takes in an array and, returns a new array with each string in the array prepended with 'baby'", () =>{
    expect(convertToBaby(animals)).to.eql(babyAnimals)
  })
  it("it's not hard coded", () => {
    expect(convertToBaby(babyAnimals)).to.eql(['baby baby panda', 'baby baby turtle', 'baby baby giraffe', 'baby baby hippo', 'baby baby sloth', 'baby baby human'])
  })
})

describe('smallestPowerOfTwo()', () =>{
   const numbers = [5, 3, 9, 30]
   const result = [8, 4, 16, 32]

   it("it returns an array with a collection of the smallest power of all the number passed in the array", () =>{
     expect(smallestPowerOfTwo(numbers)).to.eql(result)
   })
})
