const form = document.querySelector("#form-container");
const nameinput = document.getElementById("name");
const phoneinpu = document.getElementById("phone");
const messageinpu =document.getElementById("message")

form.addEventListener("submit" ,(r) =>{
    r.preventDefault();
    if(nameinput.value.trim() === ""){
        alert("please fill your name");
        return
    }

    if(phoneinpu.value.trim()===""){
        alert("fill number");
        return
    }

    if(messageinpu.value.trim() === ""){
        alert("just type bro...")
    }

    alert("all field suss thank you broo...")
    
    nameinput.value = "";
    phoneinpu.value = "";
    messageinpu.value = "";
})