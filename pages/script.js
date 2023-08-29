const menuIcon = document.getElementById("menuicon")
const navPhone = document.getElementById("navphone")
const theBody = document.querySelector("body")
const theHtml = document.querySelector("html")


const closeNav = document.getElementById("closenav")

const phHrefs = document.querySelectorAll(".phhref")

const theMain = document.getElementById("themain")
const mainSec = document.getElementById("mainsec")

const faqMob = document.getElementById("faqmob")

closeNav.style.transition = "all 1s"
closeNav.style.opacity = "0"

phHrefs.forEach((href) => {
    href.style.opacity = "0"
})

navPhone.style.display = "none"

menuIcon.addEventListener("click", () => {

    menuIcon.classList.toggle("toggled")

    if (menuIcon.classList.contains("toggled")) {
        navPhone.style.display = "block"
        theBody.style.overflowY = "hidden"
        theHtml.style.overflowY = "hidden"


        navPhone.classList.add("animheight")

        setTimeout(() => {
            closeNav.style.transition = "all 1s"
            closeNav.style.opacity = "1"
            theBody.style.height = "0px"
            theHtml.style.height = "0px"
            theMain.style.height = "0px"
            mainSec.style.height = "0px"

            phHrefs.forEach((href) => {
                href.style.transition = "all 1s"
                href.style.opacity = "1"
            })
        }, 600);

    } else {

        navPhone.style.display = "none"
        theBody.style.overflowY = "visible"
        theHtml.style.overflowY = "visible"
    }

})


closeNav.addEventListener("click", () => {
    if (menuIcon.classList.contains("toggled")) {
        menuIcon.classList.remove("toggled")

        navPhone.classList.remove("animheight")
        navPhone.classList.add("animheightop")

        theBody.style.height = ""
        theHtml.style.height = ""
        theMain.style.height = "950px"

        setTimeout(() => {
            navPhone.style.display = "none"
        }, 400);
        theBody.style.overflowY = "visible"
        theHtml.style.overflowY = "visible"


        setTimeout(() => {
            navPhone.classList.add("animheight")
            navPhone.classList.remove("animheightop")
        }, 400);

        setTimeout(() => {
            closeNav.style.transition = "all 0s"
            closeNav.style.opacity = "0"

            phHrefs.forEach((href) => {
                href.style.transition = "all 0s"
                href.style.opacity = "0"
            })
        }, 1);

    }
})

faqMob.addEventListener("click", () => {
    menuIcon.classList.remove("toggled")

    navPhone.classList.remove("animheight")
    navPhone.classList.add("animheightop")

    theBody.style.height = ""
    theHtml.style.height = ""
    theMain.style.height = "950px"

    setTimeout(() => {
        navPhone.style.display = "none"
    }, 400);
    theBody.style.overflowY = "visible"
    theHtml.style.overflowY = "visible"


    setTimeout(() => {
        navPhone.classList.add("animheight")
        navPhone.classList.remove("animheightop")
    }, 400);

    setTimeout(() => {
        closeNav.style.transition = "all 0s"
        closeNav.style.opacity = "0"

        phHrefs.forEach((href) => {
            href.style.transition = "all 0s"
            href.style.opacity = "0"
        })
    }, 1);
}) 