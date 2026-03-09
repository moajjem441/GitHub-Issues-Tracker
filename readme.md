1.var, let, and const
var: The old way. It’s "leaky"—it can be seen outside of the loops or if blocks where it was created, which causes bugs.

let: its go-to for variables that need to change like a counter or a toggle. It stays locked inside the block {} where we define it.

const: Short for constant. we use this for anything we don't want to accidentally overwrite 




2️. Spread Operator (...)
Think of this as "unboxing." If we have an array [1, 2] and we want to put its contents into a new array, ... pulls them out so we don't end up with an array inside an array. It’s great for making quick copies of data.


3️ map(), filter(), and forEach()
forEach: Use this when we just want to "do something" like console.log for every item. It doesn't give us anything back.

map: Use this when we want to transform a list eg: turning a list of names into a list of HTML cards. It returns a new array.

filter: Use this to shrink a list. It looks at your data and only keeps the items that meet a condition 


4.Arrow Function
A shorter way to write functions using =>. It’s cleaner to read, especially when passed inside other methods like map or filter. 

5.Template Literals
Strings wrapped in backticks (`). it allow us to drop variables directly into text using ${variable} instead of using a bunch of + signs to glue strings together.