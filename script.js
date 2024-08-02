function stringChop(str, size) {
  if (!str) return [];
  
  let chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size).join(", "));

// Test cases for verification
console.log(stringChop("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(stringChop("12345", 2)); // ["12", "34", "5"]
console.log(stringChop("abc", 5)); // ["abc"]