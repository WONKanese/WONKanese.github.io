for (let i = 1; i < 101; i++) {
    console.log(i + ". Please forgive me for my horrible css and screen size responsiveness");
}

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")

    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) 
    {
        return;
    } //if clicking dropdown menu ignore

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) {
            return
        }
        dropdown.classList.remove('active')
    })
})

document.getElementById("toprojects").addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("tocontact").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});