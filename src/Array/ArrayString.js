//Create a function that reverse a string "
// 'Hi My name is Andei' should be:
// 'iednA si eman yM iH'

function reverse(str) {
    //Check input 
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Not good input'
    }

    let arrayToRevert = []  //O(n)
    let stringRevert =''    //O(n)
    for (let i = str.length - 1 ; i >= 0; i--) {//O(n)
        arrayToRevert.push(str[i])
    }
    //C1:
    arrayToRevert.forEach(element => {
        stringRevert += element
    });
    //C2:
    console.log(arrayToRevert.join(''))
    return stringRevert
}

reverse('Toi ten la Hoang')