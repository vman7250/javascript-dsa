function same(arr1,arr2){

    freqcounter1 = {};
    freqcounter2 = {};

    for (let val of arr1){

        freqcounter1[val] = (freqcounter1[val] || 0)+1

        console.log(freqcounter1)   
    }
    for (let val of arr2){

        freqcounter2[val] = (freqcounter2[val]||0)+1
    }
    
    for(let key in freqcounter1){
        if(!(key**2 in freqcounter2)){
          return false
        }

        if(freqcounter2[key*2] !== freqcounter1[key]){
            return false
        }
    
    }

    
    return true
        
        
    }
    


console.log(same([1,2,3],[4,1,9]))