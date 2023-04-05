function passcheck(data){
  var passClass = document.getElementsByClassName("password_check")
 const lowerCasea = new RegExp('(?=.*?[a-z])');
 const upperCase = new RegExp('(?=.*?[A-Z])');
 const number = new RegExp('(?=.*?[0-9])');
 const specialChar = new RegExp('(?=.*?[#?!@$ %^&*-])');
 const eightChar = new RegExp('(?=.{8,})');
 console.log("hellow")
 if(eightChar.test(data)){
passClass[0].style.color ="darkgreen";
}else{
passClass[0].style.color = "grey";
}

if(lowerCasea.test(data)){
passClass[1].style.color ="darkgreen";

}else{
passClass[1].style.color = "grey";
}

if(upperCase.test(data)){
passClass[2].style.color ="darkgreen";
}else{
passClass[2].style.color = "grey";
}

if(number.test(data)){
passClass[3].style.color ="darkgreen";
}else{
passClass[3].style.color = "grey";
}
if(specialChar.test(data)){
passClass[4].style.color ="darkgreen";
}else{
passClass[4].style.color = "grey";
}
}