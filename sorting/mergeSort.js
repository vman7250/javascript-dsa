

function merge(arr1,arr2){
  
    let result = []
    let j = 0
    let i = 0 
  
    result_length = arr1.length + arr2.length 
    
    while (result.length < result_length ) {
      
      
      if(arr1[i] == undefined || arr1[i] > arr2[j]) {
        
          result.push(arr2[j])
          j++
            }
    
      else if (arr2[j] == undefined || arr2[j] > arr1[i]) {
      
        result.push(arr1[i])
        i++
        }
    }
        
     
        
    return result
  }
  
function mergeSort(arr) {
    
    if(arr.length <= 1)return arr
    let mid = Math.floor((arr.length)/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
  
    return merge(left,right)
  }  
          
  
  console.log ( mergeSort([2,14,1000,99]) )