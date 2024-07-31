window.addEventListener("orientationchange", function() {
    location.reload();
});

document.querySelector(".dark-btn").addEventListener("click", function(){
    document.body.classList.toggle("dark")
    document.body.classList.toggle("light")
})