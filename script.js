let preview_shoes= document.querySelectorAll(".preview-shoes img");
let primary_shoe = document.querySelector(".primary img");
let shadow  = document.querySelector(".shadow");
let key_word = document.querySelector(".key_word");

preview_shoes.forEach((el)=>{
    el.addEventListener("click", (e)=>{
        primary_shoe.src = e.target.src;
        shadow.style.background = e.target.dataset.bg;
        key_word.style.color = e.target.dataset.bg;
    })
})

const heartIcon = document.getElementById('heart');

// Define the toggle function
function toggleClass() {
    // Check if the current class is 'fa-heart', then change it to 'fa-solid'
    if (heartIcon.classList.contains('fa-solid')) {
        heartIcon.className = 'fa-regular fa-heart fa-xl';
    } else { // If the current class is not 'fa-heart', change it back to 'fa-heart'
        heartIcon.className = 'fa-solid fa-heart fa-xl me';
    }
}

// Add event listener to the element
heartIcon.addEventListener('click', toggleClass);
