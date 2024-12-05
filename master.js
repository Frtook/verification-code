window.onload=()=>{
  let input1 = document.getElementsByTagName("input")[0]
  let input2 = document.getElementsByTagName("input")[1]
  let input3 = document.getElementsByTagName("input")[2]
  let input4 = document.getElementsByTagName("input")[3]
  let input5 = document.getElementsByTagName("input")[4]
  let input6 = document.getElementsByTagName("input")[5]
  input1.focus()
  input1.oninput=()=>{
    if(input1.value.length === 1){
      input2.focus()  
    }
  }
  input2.oninput=()=>{
    if(input2.value.length === 1){
      input3.focus()  
    }
  }
  input3.oninput=()=>{
    if(input3.value.length === 1){
      input4.focus()  
    }
  }
  input4.oninput=()=>{
    if(input4.value.length === 1){
      input5.focus()  
    }
  }
  input5.oninput=()=>{
    if(input5.value.length === 1){
      input6.focus()  
    }
  }
  input6.oninput=()=>{
    if(input5.value.length === 1){
      input6.blur()  
    }
  }

}