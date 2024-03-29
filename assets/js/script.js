let inputButton=document.querySelector(".inputButton")
let submitButton=document.querySelector(".submitButton");
 

submitButton.addEventListener("click",function(){
let border=document.querySelector(".table .border")
let column=document.querySelector(".tablee .border tr")
let columns=document.querySelectorAll(".table .border tr td")
    if (inputButton.value === "") {
        alert("Bos giris edile bilmez!");
        return;
    }
    for (let i = 0; i < columns.length; i++) {
        if (columns[i].innerText.trim()==inputButton.value.trim()) {
            alert("Eyni melumatlar daxil edile bilmez!")
            inputButton.value="";
            return;
        }    
    }    
    let newRow=document.createElement("tr")
        let newColumnn=document.createElement("td")
        newColumnn.innerText=inputButton.value.trim();
            newRow.append(newColumnn);
            column.append(newRow);
            border.append(newRow)
            inputButton.value="";     
            return; 
})
