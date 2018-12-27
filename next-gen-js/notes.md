# Next Generation JavaScript


## Understanding "let" and "const"

ES6 introduced 'let' and 'const':
let - variable
const - constant value


## Arrow Functions
Different syntax for creating JS functions;

Regular function:
```
    function myFunction() {
         ...
    }
```

Arrow function:
```
    const myFunction = () => {
        ...
    }
```

Returns ``number * 2``
```
    const multiply = (number) => number * 2;
```


## Exports and Imports (Modules)
Import content from a file inside another file;

Exporting
```
    const person = {
        name: 'Gabi'
    }

    export default person
```
```
    export const clean = () => {...}
    export const baseData = 10;
```


Importing
```
    // default import
    import person from './person.js'
    import prs from './person.js'

    // named import
    import { baseData } from './utility.js'
    import { clean } from './utility.js'
```

Is also possible to assign aliases to imports:
```
    import {smth as Smth} from './utility.js'
```


## Classes

```
    class Human {
         gender = 'unicorn'

        printGender = () => {
            console.log(this.gender)
        }
    }



    class Person extends Human {
        name = 'Max';
        gender = 'unicorn-princess'

        printName = () => {
            console.log(this.name)
        }
    }

    const person = new Person();

    person.printName();
    person.printGender();
```

## Spread & Rest Operators

Spread - Used to split up array elements OR object properties
```
    const newArray = [...oldArray, 1, 2]
    const newObject = {...oldObject, newProp: 5}
```
Rest - Used to merge a list of function arguments into an array
```
    function sort(...args) {
        return args.sort()
    }
```

## Destructuring

Easily extract array elements or object properties and store them in variables

Array Destructuring
```
    [a, b] = ['Hello', 'Max']
    console.log(a)  // Hello
    console.log(b)  // Max
```

Object Destructuring
```
    {name} = {name: 'Max', age: 28}
    console.log(name)   // Max
    console.log(age)    // undefined
```


