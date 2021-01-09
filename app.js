
// making navbar visible when scrolling  
const navbar = document.getElementById("nav")

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log(scroll)
    if(scroll > 150){
        navbar.classList.add("sticky-top")
        navbar.classList.add("shadow-sm")
    }else{
        navbar.classList.remove("sticky-top")
        navbar.classList.remove("shadow-sm")
    }
    
});

// setting up dymanic year 
const Currentyear = document.getElementById("year");

const currentDate =  new Date()
const yearNow = currentDate.getFullYear()

Currentyear.innerHTML = yearNow