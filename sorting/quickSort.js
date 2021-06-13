function pivot(arr,start = 0,end = arr.length) {
    function swap(array,i,j){
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    
    let pivot = arr[start]
    swapIdx = start
    let i = 0
    
    for(let i = start + 1 ; i < arr.length ; i++) {
     
      if(pivot > arr[i]) {
        
        swapIdx++
        swap(arr,swapIdx,i)
        
        
      }
      
        
    }  
    swap(arr,start,swapIdx)
    return swapIdx
    
  }
    
  function quickSort(arr,left = 0,right = arr.length -1) {
    if(left < right){
    pivot_index = pivot(arr,left,right)
    //left  
    quickSort(arr,left,pivot_index -1 )
    //right 
    quickSort(arr,pivot_index+1,right)
    }
    return arr
    
  }
  
  
  
  
  
  
console.log(quickSort([4,6,9,1,2,5,3]))  
    