const inputData=document.getElementById("result");
const buttons=document.querySelectorAll(".btn");
buttons.forEach((button)=>{

button.addEventListener('click',(e)=>{
    e.preventDefault();
    const data=button.textContent;
    if (data === "==") {
        try {
            const result = eval(inputData.value);
            inputData.value = result; 
        } catch (error) {
            inputData.value = "Error"; 
        }
        } 
       
        else if (data === "←") { 
            if (inputData.value.length > 0) {
            inputData.value = inputData.value.slice(0, -1);
    } 
    }else {
        
        if (inputData.value === "0") {
            inputData.value = data; 
        } else {
            inputData.value += data;
        }
    }
    document.getElementById('clear').addEventListener('click', function (event) {
        event.preventDefault(); 
        document.getElementById('result').value = '';
    });
});
}); 



