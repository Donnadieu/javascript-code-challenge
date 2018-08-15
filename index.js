const reverseArray = array => {
  let newArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray
}

const greetAliens = aliens => {
  for (var i = 0; i < aliens.length; i++) {
    console.log('Oh powerful, ' + aliens[i] + ' we humans offer our unconditional surrender!');
  }
}

const convertToBaby = array => {
  let newArray = []
  array.forEach((element) => {
    newArray.push('baby ' + element)
  })
  return newArray
}

const smallestPowerOfTwo = numbers => {
  let results = [];
      // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < numbers.length; i++) {
    number = numbers[i];
    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    j = 1
    while (j < number) {
      j = j * 2
    }
    results.push(j)
  }
  return results
}

const politeDecline = element => {
  console.log('No ' + element + ' please. I will have pizza with extra cheese.');
}

const politelyAccept = element => {
  console.log('Ok, I guess I will eat some' + element + '.');
}

const declineEverything = array => {
  array.forEach(element => {
    politeDecline(element)
  })
}

const acceptEverything = array => {
  array.forEach(element => {
    politelyAccept(element)
  })
}

const squareNumbers = numbers => {
  return numbers.map(number => {
    return number*number
  })
}

const shoutGreetings = array => {
  return array.forEach(element => {
    console.log(element.toUpperCase() + '!')
  })
}

const sortYears = years =>{
  return years.sort((a, b) => b - a )
}

const justCoolStuff = (array1, array2) => {
  return array1.filter((element) => array2.includes(element));
}

const isTheDinnerVegan = dinner => {
  return dinner.every(meal => meal.source === "plant")
}

const dogFactory = (name, breed, weight) => {
  return new Dog(name, breed, weight)
}

class Dog{
  constructor(name, breed, weight){
    this.name = name
    this.breed = breed
    this.weight = weight
  }
}
