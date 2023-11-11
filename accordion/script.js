let btnToggle = document.getElementsByClassName("toggle-icon");
let open = document.getElementsByClassName("open");
let close = document.getElementsByClassName("close");
let hidebox = document.getElementsByClassName("hidden-content");

for (let i = 0; i < btnToggle.length; i++) {

    close[i].style.display = "none";
    
    btnToggle[i].addEventListener("click", () => {
        let result = btnToggle[i].classList.toggle("active");
        hidebox[i].classList.toggle("active");
        
        if(result){
            open[i].style.display = "none";
            close[i].style.display = "block";
        }else{
            open[i].style.display = "block";
            close[i].style.display = "none";
        }
    })
}