function binarySearch ( arr,val ){
    // add whatever parameters you deem necessary - good luck!
  
  
    let left = 0
    let right = arr.length - 1
    let middle = 0
    
    while( arr[middle]!=val && left <= right )    {
    
        if( val < arr[middle] ) { right = middle - 1 ;  }
         
        else if(val > arr[middle]) {left = middle + 1 }
           
        middle = Math.floor( ( left + right ) / 2 )
        
        if ( arr[middle]===val ) { return middle }
    
        
    }
    
    return -1
    
  }