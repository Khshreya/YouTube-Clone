const menuButton=document.querySelectorAll(".menu-button");
const screenOverlay=document.querySelector(".screen-overlay");
const themeButton=document.querySelector(".theme-button i");

//load dark mode state from local storage
// LOAD STATE
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    themeButton.classList.replace("uil-moon", "uil-sun");

    
}else{
     themeButton.classList.replace("uil-sun","uil-moon");
    
}
//toggle dark mode and change icon
themeButton.addEventListener("click", ()=>{
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
});

menuButton.forEach(button=>{
    button.addEventListener("click",()=>{
        document.body.classList.toggle("sidebar-hidden");
    });
    

});

//toggle sidebar vissibility when screen overlay is clicked
screenOverlay.addEventListener("click",()=>{
    document.body.classList.toggle("sidebar-hidden");
});
//show sidebar on large screen by default
if(window.innerWidth>=768){
      document.body.classList.remove("sidebar-hidden");

}
