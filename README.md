# _[pizza-parlor]_

#### By **Zach Wilson**

#### _[A Fictional Pizza Parlor that is NOT run by Aliens]_

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

## Description

_[Select between your choice of toppings and size for a Pizza built exactly to your tastes. The price will be revealed after your selections are made.]_

## Setup/Installation Requirements

* Clone this repository to your Desktop
* Navigate to the new folder titled 'pizza-parlor' and open it
* Open index.html with your browser
* Answer the questions provided and click 'Submit' to see your answer

## Known Bugs

Currently no known bugs.

## License

MIT License

Copyright (c) [2021] [Zachary Wilson]

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

### Feel free to fix/edit all contained code to your liking. If you encounter and problems, contact me at zwilson22495@gmail.com


---------------------------------------

TEST LOG

Describe: Pizza(size)

  Test: "Should show testPizza as 10"
  Code:
  let testPizza = 10
  Expected Output: 10

  Test: "Should recognize testPizza's size as large"
  Code:
  function Pizza(size) {
    this.size = size;
  }
  const large = 10;
  let testPizza = new Pizza(large);
  Expected Output: 10

  Test: "Should return different numbers depending on pizza size"
  Code:
  function Pizza(size) {
    this.size = size;
  }
  const large = 10;
  const small = 5
  let bigPizza = new Pizza(large);
  let smallPizza = new Pizza(small);
  Expected Output: 10 for bigPizza, 5 for smallPizza

  Test: "Should add both meat and mushrooms to testPizza"
  Code: 
  let testPizza = []
  testArray.push("meat, mushrooms")
  Expected Output: testPizza = "meat, mushrooms"
