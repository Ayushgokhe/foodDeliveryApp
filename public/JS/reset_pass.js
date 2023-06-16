var goToLoginPage = () => {

}




var password = () => {
    var str = document.querySelector(".element1").value;
    str = str.trim();  

    var countCharacters = /[a-zA-Z]/g; // only count letters
    var countDigits = /[0-9]/g; // only count letters
    var specialchar = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;

    // if(str==null){
    //     document.querySelector("#abc").style.color = "red";
    //     document.querySelector("#abc").style.display = 'none'
    // }else{
    //     document.querySelector("#abc").innerHTML = "";
    // }

    if (str.length >= 8) {
        document.querySelector("#abc").style.display = "none";
    }
    else {
        document.querySelector("#abc").style.color = "red";
        document.querySelector("#abc").style.display = 'block'
    }

    if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {
        document.querySelector("#abc").style.display = "none";
    }
    else {
        document.querySelector("#abc").style.color = "red";
        document.querySelector("#abc").style.display = 'block'

    }

    if (str.match(countCharacters).length >= 3) {
        document.querySelector("#abc").style.display = "none";
    }
    else {
        document.querySelector("#abc").style.color = "red";
        document.querySelector("#abc").style.display = 'block'

    }

    if (str.match(specialchar).length >= 1) {
        document.querySelector("#abc").style.display = "none";
    }
    else {
        document.querySelector("#abc").style.color = "red";
        document.querySelector("#abc").style.display = 'block'

    }

    if (str.match(countDigits).length >= 1) {
        document.querySelector("#abc").style.display = "none";
    }
    else {
        document.querySelector("#abc").style.color = "red";
        document.querySelector("#abc").style.display = 'block'

    }

    var len = str.length - 1;
    if (str.charCodeAt(len) >= 48 && str.charCodeAt(len) <= 57) {
        document.querySelector("#abc").style.color = "red";
        document.querySelector("#abc").style.display = 'block'

    }
    else {
        document.querySelector("#abc").style.display = "none";
    }

    if(password == true){
        document.querySelector("#abc").style.display = 'none'
    }
}




// var password = () => {
//     // return false

//     var pass = document.querySelector(".element1").value 
    
//     var char = /[a-zA-Z]/g
//     var num = /[0-9]/g
//     var sym = /[-/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g

//     if(pass.length >= 8 && pass != null ){
//         console.log("true")
//     }else{
//         console.log("false")
//     }

//     if(){

//     }
// }


var confirmPassword = () => {
    // return true
    var str1 = document.querySelector(".element2").value;
    
    if(str == str1){
        document.querySelector("#abcd").style.display = 'none'
    }else{
        document.querySelector("#abcd").style.display = 'block'
    }
}