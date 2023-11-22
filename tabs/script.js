let linkButton = document.querySelectorAll(".tablinks");


for (let i = 0; i < linkButton.length; i++) {
    linkButton[i].addEventListener("click", function () {
        let linkId = this.dataset.tab;
        let linkContent = document.getElementById(linkId);
        let allHideContent = document.querySelectorAll(".tabcontent");
        let allLinkButton = document.querySelectorAll(".tablinks");

        for (let k = 0; k < allHideContent.length; k++) {
            allHideContent[k].style.display = "none";
        }

        for (let x = 0; x < allLinkButton.length; x++) {
            allLinkButton[x].classList.remove("active");
        }

        linkContent.style.display = "block";
        this.classList.add("active");
    });
};

document.querySelector(".tablinks").click();
