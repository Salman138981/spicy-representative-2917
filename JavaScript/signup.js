

document.querySelector("button").addEventListener("click",()=>{
    let Name= document.getElementById("name").value
    let Email= document.getElementById("email").value;
    let Password= document.getElementById("password").value;          
    let Confirm= document.getElementById("confirm").value;

    if(Password != Confirm){
     return  alert("confirm password does not match with password");
        
    }else{
        let obj={Name,Email,Password};
       
    
        localStorage.setItem("check",JSON.stringify(obj));

        window.location.href="../HTML/homepage.html";

    }

})