const Stack = require('./stack')
const Queue = require('./queue')


//1. Creat a stack class
const starTrek = new Stack()

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

//2. Useful methods for a stack
function peek(stack) {
  return stack.top
}

console.log('peek(starTrek)', peek(starTrek))

function isEmpty(stack) {
  return (stack.top === null)
}

console.log('isEmpty(starTrek)', isEmpty(starTrek))

function display(stack) {
  if (isEmpty(stack)) {
    return
  }
  currNode = stack.top
  nodeNum = 1
  while (currNode !== null) {
    console.log(`Node ${nodeNum}: ${currNode.data}`)
    currNode = currNode.next
    nodeNum++
  }
}

display(starTrek)
starTrek.pop()
display(starTrek)
// starTrek.pop()
// starTrek.push('Scotty')

//3. Check for polindromes using a stack

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  const pal = new Stack()
  let reverseS = ''
  for (let i = 0; i < s.length; i++) {
    pal.push(s[i])
  }
  while (pal.top !== null) {
    reverseS = reverseS + pal.pop()
  }
  return (s === reverseS)
}

console.log(is_palindrome('dad'))
console.log(is_palindrome('A man, a plan, a canal: Panama'))
console.log(is_palindrome('1001'))
console.log(is_palindrome('Taudida'))

//4. Matching parenthesis in an expression

