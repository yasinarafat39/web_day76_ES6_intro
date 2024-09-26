const glass = {
    name: "glass",
    color: 'golden',
    price: 12,
    isCleaned: true
}

console.log(glass) 
// { name: 'glass', color: 'golden', price: 12, isCleaned: true }

// Keys
const keys = Object.keys(glass)
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys)

// values
const values = Object.values(glass)
// [ 'glass', 'golden', 12, true ]
console.log(values)

// entries
const entries = Object.entries(glass);
/**
 * [
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isCleaned', true ]
]
 */
console.log(entries)


// delete a propertry
delete glass.isCleaned;
// { name: 'glass', color: 'golden', price: 12 }

const {isCleaned, ...shortGlass} = glass;
// { name: 'glass', color: 'golden', price: 12 }
console.log(shortGlass)

// freeze
Object.freeze(glass)
glass.source = "Bangladesh"; // not work because glass is freeze
glass.price = 5000; // not work because glass is freeze
console.log(glass);
