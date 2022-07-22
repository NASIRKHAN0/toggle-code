
const navToggle = document.getElementsByClassName("toggle")[0];
const navs = document.getElementsByClassName("navs")[0];

navToggle.addEventListener("click",function(){
// console.log(navs.classlist);
// console.log(navs.classList.contains("show-links"))
if(navs.classList.contains("show-links")){
    navs.classList.remove("show-links")
}
else{
    navs.classList.add("show-links")
}


// navs.classList.toggle("show-links");

})
