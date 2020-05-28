'use strict';

//1
function safeCall(f) {
  try {
    f();
    console.log(true);
  } catch {
    console.log(false)
  }
}

safeCall(() => console.log('Hello!')); // true
safeCall(() => JSON.parse('abc')); // false
safeCall(() => false); // true
safeCall(() => abc); // false

//2
function ChechError() {
  this.safeCall = function(f) {
    try {
      f();
      console.log(true);
    } catch {
      console.log(null)
    }
  }
}

const f = new ChechError();
f.safeCall(() => console.log('Hello!')); // true
f.safeCall(() => JSON.parse('abc')); // false
f.safeCall(() => false); // true
f.safeCall(() => abc); // false*/

