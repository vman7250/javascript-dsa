function sumZero(arr){
  
    let left = 0;
    let right = arr.length - 1;
    
    while(right>left){
    
      let sum = arr[right] + arr[left]
      if(sum==0){
        return [arr[left],arr[right]];
      }
    if(sum>0){
      right--
    }
      else{
        left++
      }
    }
    
    
  }
  
  
  
  
  
  console.log(sumZero([-2,-1,0,1,2,3]))