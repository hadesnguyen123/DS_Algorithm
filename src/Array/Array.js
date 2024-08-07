const strings = ['a', 'b', 'c', 'd']
// 4*4 = 16 bytes of storage 

//push + pop
strings.push('e') //O(1)
strings.pop()  //O(1)

//unshift => add to start of array
strings.unshift('x')   //O(n)

//splice
strings.splice(2, 1, 'hades')  // O(n)

console.log(strings)

//C++
//int a[20]