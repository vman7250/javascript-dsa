function anagram(str1,str2){
  
    if(str1.length != str2.length){
      return false
    }
    
    freqcounter1 = {}
    freqcounter2 = {}
    
    
    for(val of str1)
    {
        freqcounter1[val] = (freqcounter1[val] ||0)+1
    }
    
    for(val of str2)
    {
        freqcounter2[val] = (freqcounter2[val] ||0)+1
    }
    
    for (let keys in freqcounter1) {
      
      if(!(keys in freqcounter2)){
        return  false
        
      }
      if(freqcounter2[keys]!==freqcounter1[keys]){
        return false
      }
      
    }
    
    return true  
    
  }
    
    
    
    
  
  
  console.log(anagram('cinema','iceman'))
  
  
  // str = 'Hello'
  
  // for(let i of str1){
  
  // console.log(i)  
      