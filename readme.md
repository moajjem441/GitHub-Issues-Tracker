1.var, let, and const
var: The old way. It’s "leaky"—it can be seen outside of the loops or if blocks where it was created, which causes bugs.

let: The go-to for variables that need to change (like a counter or a toggle). It stays locked inside the block {} where you define it.

const: Short for constant. Use this for anything you don't want to accidentally overwrite 




2️. Spread Operator (...)
Think of this as "unboxing." If you have an array [1, 2] and you want to put its contents into a new array, ... pulls them out so you don't end up with an array inside an array. It’s great for making quick copies of data.


3️ map(), filter(), and forEach()
forEach: Use this when you just want to "do something" (like console.log) for every item. It doesn't give you anything back.

map: Use this when you want to transform a list (e.g., turning a list of names into a list of HTML cards). It returns a new array.

filter: Use this to shrink a list. It looks at your data and only keeps the items that meet a condition 


4.Arrow Function
A shorter way to write functions using =>. It’s cleaner to read, especially when passed inside other methods like map or filter. A big plus: it doesn't get confused about what this refers to.


5.Template Literals
Strings wrapped in backticks (`). They allow you to drop variables directly into text using ${variable} instead of using a bunch of + signs to glue strings together.