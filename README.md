# lhash

Simple layered sha-256 hashing for a bit more security


## Install
    npm install --save lhash

## Usage

There are two methods, one for computing the hash of the input, and one for double-hashing it:

```js
const lhash = require("lhash").lhash;
console.log(lhash.l128("string"))
console.log(lhash.l256("string"))
console.log(lhash.l512("string"))
console.log(lhash.l64k("string"))
console.log(lhash.custom("string", 2, true))
```
#### The functions
They take 2 args, one of them is optional (the last one)

##### String
Contains the string you want to hash

##### Debug (Optional, default  = false)
Prints debug log if set to true, defualt is false.


#### The `lhash.custom()` function
It takes 3 args

##### String
Contains the string you want to hash

##### Times
How many times you want to layer the hashing 

##### Debug (Optional, default  = false)
Prints debug log if set to true, defualt is false.


## Example 
```js
const lhash = require("lhash").lhash
const sha256 = require("sha256")
let string = "Hello";

console.log(`This is a demo of lhash
We take a string, in this case "Hello" and we show the difference between normal sha256
and lhash layered hashing

We start by hashing "Hello" using a standard sha256 hashing function`)
console.time("Normal sha256")
console.log(sha256(string))
console.timeEnd("Normal sha256")

console.log("Now we hash it with 512 layers using lhash")
console.time("lhash with 512 encoding layers")
console.log(lhash.l512(string))
console.timeEnd("lhash with 512 encoding layers")
```

# Credits

 * The sha256 module
https://www.npmjs.com/package/sha256
(Copyright 2013, JP Richardson jprichardson@gmail.com)

* lhash
Jay Fox - jayyisdev@gmail.com

# License
MIT License

Copyright (c) 2021 DashFox

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.