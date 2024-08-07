let user = {
    age: 54,
    name: "hoang",
    magic: true,
    scream: function () {
        console.log('ahhhh!!!')
    },
}
console.log(user.age)   //O(1)
console.log(user.scream()) //O(1)

const a = new Map()
const b = new Set()