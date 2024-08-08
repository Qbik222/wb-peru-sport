window.addEventListener("orientationchange", function() {
    location.reload();
});

document.querySelector(".dark-btn").addEventListener("click", () =>{
    document.body.classList.toggle("light")
    document.body.classList.toggle("dark")
})