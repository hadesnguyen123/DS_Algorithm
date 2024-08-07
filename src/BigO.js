const nemo = ['nemo'];

function findNemo1(array) {
    //   let t0 = performance.now()
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
    //   let t1 = performance.now();
    //   console.log("Call to find Nemo took: " + (t1 - t0) + " milliseconds.");
}

findNemo1(nemo);


//log all pairs of array
const boxes = [1, 2, 3, 4, 5]
for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
        // console.log([i,j])        
    }
}

//#5 Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log("booooo");
    }
}

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = "hi";
    }
    return hiArray;
}

arrayOfHiNTimes(6);