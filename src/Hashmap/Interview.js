//google question: which one repeat first
//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]
//It sould return undefined

const findRepeatNumber = (arr) => {
    let mapValue = {}
    for (let i = 0; i < arr.length; i++) {
        if (mapValue[arr[i]] !== undefined) {      //Truy xuất phần tử trong object, và object được xem như là map
            return arr[i]
        } else {
            mapValue[arr[i]] = i;
        }
        console.log(mapValue)
    }
    return undefined
}




let res = findRepeatNumber([2, 5, 1, 2, 3, 5, 1, 2, 4])
console.log(res)