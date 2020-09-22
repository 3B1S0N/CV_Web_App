const form = document.getElementById("MyForm");

function onsubmit(event){
    event.preventDefault();

    const first = form.elements["First_Name"].value;
    const Middle = form.elements["Middle_Name"].value;
    const Last = form.elements["Last_Name"].value;
    const Email = form.elements["Email"].value;
    const Number = form.elements["Number"].value;
    const Address = form.elements["Address"].value;

    

    function allLetters1() {   
        const letters = /^[A-Za-z]+$/;   
        if(first.match(letters)) {      
            return true;     
        }   
        else {     
            alert("Invalid First Name");     
            return false;              
        }  
    }
    allLetters1()

    function allLetters2() {   
        const letters = /^[A-Za-z]+$/;   
        if(Middle.match(letters)) {      
            return true;     
        }   
        else {     
            alert("Invalid Middle Name");     
            return false;              
        }  
    }
    allLetters2()

    function allLetters3() {   
        const letters = /^[A-Za-z]+$/;   
        if(Last.match(letters)) {      
            return true;     
        }   
        else {     
            alert("Invalid Last Name");     
            return false;              
        }  
    }
    allLetters3()

    function phonenumber(inputtxt){  
        var phoneno = /^\d{10}$/;  
        if((inputtxt.match(phoneno))){     
             return true;        
        }    
        else {      
             alert("Number Error");       
             return false;       
        }
    }
    phonenumber(Number)

    // COnsider second email & Number
    function ValidateEmail() { 
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email)){   
             return (true)  
        }
        else{
            alert("You have entered an invalid email address!")   
             return (false)
            }
    }
    ValidateEmail()


    if(Address === ""){
        alert("Please Enter an Address")
    } 

    localStorage.setItem("F",first);
    localStorage.setItem("M",Middle);
    localStorage.setItem("L",Last);
    localStorage.setItem("E",Email);
    localStorage.setItem("N",Number);
    localStorage.setItem("A",Address);

}


// It takes the form and listens for the submit button.
form.addEventListener("submit", onsubmit) 


