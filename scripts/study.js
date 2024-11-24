const myText = document.getElementById("myText")
const mySubmit = document.getElementById("mySubmit")
const result = document.getElementById("result")

let age;
let hasLicense = true;

mySubmit.onclick = function(){


    age = myText.value;
    age = Number(age);


    if (age >= 100){
        
        result.textContent = "your are TOO old to drive"
    }
    
    if (age >= 16){
        result.textContent = "your are old enough to drive"
    
            if (hasLicense){
            
                result.textContent = "you have your license"
        }
    
            else {
            
                result.textContent = "but you do not have a license"
        }
    }
    else {
        
        result.textContent = "you must be 16+ to have a license"
    }
    
}


