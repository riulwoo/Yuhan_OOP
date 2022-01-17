const toggle = document.getElementById("toggle");
const img = document.getElementById("img");

toggle.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);

})

toggle.addEventListener("change", (e) => {
    if(e.target.checked)
    {
        img.src = "logo/light.png";
    }
    else
        img.src = "logo/dark.png";
})