
function selectionSort(arr){
  
    let i = 0
    
  
    let j = 0  
    
    for(i=0 ; i < arr.length ; i++ ) {
      
      let min = i
      
      for(j = i+1 ; j < arr.length ; j++  ) {
        
        
          
        if (arr[j] < arr[min] ) { 
          
          min = j
      }
      }
      
      if(i!==min){
      console.log(i,min)
      console.log('BEFORE SWAPPING')
      console.log(arr)
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
      console.log('After Swapping')
      console.log(arr)
      console.log('*************')
      }
    
    }
          
  }
  
  selectionSort([2,3,4,1])