//google question: which one repeat first
//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]
//It sould return undefined

const findRepeatNumber = (arr) => {
    if (arr.length === 0)
        return 'undefined'
    let mapValue = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (!mapValue.get(arr[i])) {
            mapValue.get(arr[i], 1)
        }
    }
    return 1
}


let res = findRepeatNumber([2, 5, 1, 2, 3, 5, 1, 2, 4])
console.log(res)