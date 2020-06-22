/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
//console.log()
console.log(bubbleSort([1, 3, 10, 30, 10, 0]))
function bubbleSort(numArray) 
{  
    let done;
    do{
        done = false;       
        for(let i = 0; i<=numArray.length; i++) 
        {
            if (numArray[i] > numArray[i+1]) 
            {
            let temp=numArray[i]
            numArray[i]=numArray[i+1]
            numArray[i+1]=temp
            done = true
            }
        }
    }
    while(done)  
    return numArray   
}