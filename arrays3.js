//Write a function that accepts an array of strings and console.logs
// each element using a for loop.


function Array(arr) {
    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }
    }
    
   
    const strings = ['neptune', 'makemake', 'jupiter', 'mercury'];
    Array(strings);

    //Write a function that accepts an array of numbers
    // and uses the forEach() method to console.log each number multiplied by 2.
    function multiply(arr7) {
        arr7.forEach(function(number) {
        console.log(number * 2);
        });
        console.log(arr7);
        }
        let numbers = [1, 2, 3, 4, 5];
        multiply(numbers);
        
        
       // Write a function that takes in an array of numbers and consoles the 
       //first four items multiplied by 8 and the last two added by 5. 
       //Console the array with the new values
      
       function manipulateArray(arr) {
        let newArr = [...arr];
        newArr[0] = newArr[0] * 8;
        newArr[1] = newArr[1] * 8;
        newArr[2] = newArr[2] * 8;
        newArr[3] = newArr[3] * 8;
        for (i=0;i<=4;i++){
            
           (newArr[i*8]);
           console.log(newArr)
           
        }
        
        newArr[arr.length-1] = newArr[arr.length-1] + 5;
        newArr[arr.length-2] = newArr[arr.length-2] + 5;
        console.log(newArr);
        
        }
        
        let myArray = [1, 2, 3, 4, 5, 6];
        manipulateArray(myArray);
    
      function findIndex(array) {
        let i = 0;
        while (i < array.length) {
        if (array[i] === array[3]) {
        break;
        i
        }
        i++;
        }
        return i;
        }
        
        let Num = [1,2,3,4,5,6,7,8,9];
        console.log(findIndex(Num));

        function printFruits(fruitArray) {
            for(let i=0; i<fruitArray.length; i++) {
            if(i === 2) {
            continue;
            }
            console.log(fruitArray[i]);
            }
            }
            
            let fruits= ['amino','peptobismol','fentanyl','opioid','mandrax'];
            printFruits(fruits);
