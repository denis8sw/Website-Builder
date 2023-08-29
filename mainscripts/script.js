const editBtn = document.getElementById("editbtn")
const widthInput = document.getElementById("widthinput")
const heightInput = document.getElementById("heightinput")
const fontInput = document.getElementById("fontinput")
const colorInput = document.getElementById("colorinp")

const editBox = document.getElementById("editbox")
const widthInput2 = document.getElementById("widthinput2")
const heightInput2 = document.getElementById("heightinput2")
const fontInput2 = document.getElementById("fontinput2")
const colorInput2 = document.getElementById("colorinp2")

const editText = document.getElementById("edittext")
const fontInput3 = document.getElementById("fontinput3")
const fontweightInput = document.getElementById("fontweightinput")
const colorInput3 = document.getElementById("colorinp3")


editBtn.style.width = "120px"
editBtn.style.height = "40px"
editBtn.style.fontSize = "18px"
editBtn.style.backgroundColor = "white"

editBox.style.width = "70px"
editBox.style.height = "40px"
editBox.style.backgroundColor = "white"

editText.style.fontSize = "30px"
editText.style.fontWeight = "600"

widthInput.value = parseInt(editBtn.style.width)
heightInput.value = parseInt(editBtn.style.height)
fontInput.value = parseFloat(editBtn.style.fontSize)
colorInput.value = "#FFFFFF"

widthInput2.value = parseInt(editBox.style.width)
heightInput2.value = parseInt(editBox.style.height)
colorInput2.value = "#FFFFFF"

fontInput3.value = parseInt(editText.style.fontSize)
fontweightInput.value = editText.style.fontWeight
colorInput3.value = "#000000"



widthInput.addEventListener("input", () => {
    editBtn.style.width = widthInput.value + "px"
})

heightInput.addEventListener("input", () => {
    editBtn.style.height = heightInput.value + "px"
})

fontInput.addEventListener("input", () => {
    editBtn.style.fontSize = fontInput.value + "px"
})

colorInput.addEventListener("input", () => {
    editBtn.style.backgroundColor = colorInput.value
})




widthInput2.addEventListener("input", () => {
    editBox.style.width = widthInput2.value + "px"
})

heightInput2.addEventListener("input", () => {
    editBox.style.height = heightInput2.value + "px"
})


colorInput2.addEventListener("input", () => {
    editBox.style.backgroundColor = colorInput2.value
})

fontInput3.addEventListener("input", () => {
    editText.style.fontSize = fontInput3.value + "px"
})

fontweightInput.addEventListener("input", () => {
    editText.style.fontWeight = fontweightInput.value
})


colorInput3.addEventListener("input", () => {
    editText.style.color = colorInput3.value
})


const thirdMain = document.getElementById("thirdmain")

const faqBoxes = document.querySelectorAll(".faq");

const faQ1 = document.getElementById("faq1")
const faQ2 = document.getElementById("faq2")
const faQ3 = document.getElementById("faq3")
const faQ4 = document.getElementById("faq4")
const faQ5 = document.getElementById("faq5")
const faQ6 = document.getElementById("faq6")

const faQan1 = document.getElementById("faqan1")
const faQan2 = document.getElementById("faqan2")
const faQan3 = document.getElementById("faqan3")
const faQan4 = document.getElementById("faqan4")
const faQan5 = document.getElementById("faqan5")
const faQan6 = document.getElementById("faqan6")


faqBoxes.forEach((element) => {
    element.addEventListener("mouseover", function () {
        const faqIcons = element.querySelectorAll("ion-icon");
        faqIcons.forEach((icon) => {
            icon.style.color = "white"

            element.addEventListener("mouseout", function () {
                icon.style.color = "black"
            })
        });
    });
});


faqBoxes.forEach((box) => {
    box.addEventListener("click", function toggleAr() {
        const faqIcons = box.querySelectorAll("ion-icon");
        faqIcons.forEach((icon) => {
            icon.style.transition = "all 0.2s"
            icon.style.transform = "rotate(90deg)"
            //here


            setTimeout(() => {
                icon.style.transition = "0.6s ease all"
            }, 1000);
            setTimeout(() => {
                box.classList.toggle("toggled")
            }, 1);


            if (box.classList.contains("toggled")) {
                icon.style.transition = "all 0.2s"
                icon.style.transform = "rotate(0deg)"

                //here

                setTimeout(() => {
                    icon.style.transition = "0.6s ease all"
                }, 1000);
            }

        });
    })
})


const textChild = faQan1.children[0]
faQan1.removeChild(textChild)

const textChild2 = faQan2.children[0]
faQan2.removeChild(textChild2)

const textChild3 = faQan3.children[0]
faQan3.removeChild(textChild3)

const textChild4 = faQan4.children[0]
faQan4.removeChild(textChild4)

const textChild5 = faQan5.children[0]
faQan5.removeChild(textChild5)

const textChild6 = faQan6.children[0]
faQan6.removeChild(textChild6)

let counter = 0

faQ1.addEventListener("click", function () {

})


const x = window.matchMedia("(max-width: 1517px)")


faQ1.addEventListener("click", function () {
    faQan1.classList.toggle("faqan1")
    faQan1.appendChild(textChild)
    if (!faQ1.classList.contains("checked")) {
        counter++
    }


    if (counter > 3) {
        if (!x.matches) {
            thirdMain.style.height = "1800px"
        }
    }

    if (x.matches && counter > 2) {
        thirdMain.style.height = "2750px"

    }



    if (counter > 5) {
        if (!x.matches) {
            thirdMain.style.height = "2000px"
        }
    }

    setTimeout(() => {
        faQ1.classList.toggle("checked")
    }, 1);

    if (faQ1.classList.contains("checked")) {
        faQan1.removeChild(textChild)
        counter--
        if (counter < 3) {
            if (!x.matches) {
                thirdMain.style.height = "1600px"
            }
            if (x.matches) {
                thirdMain.style.height = "2350px"
            }
        }
    }
})

faQ2.addEventListener("click", function () {
    faQan2.classList.toggle("faqan1")
    faQan2.appendChild(textChild2)
    if (!faQ2.classList.contains("checked")) {
        counter++
    }

    if (counter > 3) {
        if (!x.matches) {
            thirdMain.style.height = "1800px"
        }
    }

    if (x.matches && counter > 2) {
        thirdMain.style.height = "2750px"

    }



    if (counter > 5) {
        if (!x.matches) {
            thirdMain.style.height = "2000px"
        }
    }
    setTimeout(() => {
        faQ2.classList.toggle("checked")
    }, 1);

    if (faQ2.classList.contains("checked")) {
        faQan2.removeChild(textChild2)
        counter--
        if (counter < 3) {
            if (!x.matches) {
                thirdMain.style.height = "1600px"
            }

            if (x.matches) {
                thirdMain.style.height = "2350px"
            }
        }
    }
})

faQ3.addEventListener("click", function () {
    faQan3.classList.toggle("faqan1")
    faQan3.appendChild(textChild3)
    if (!faQ3.classList.contains("checked")) {
        counter++
    }

    if (counter > 3) {
        if (!x.matches) {
            thirdMain.style.height = "1800px"
        }
    }

    if (x.matches && counter > 2) {
        thirdMain.style.height = "2750px"

    }


    if (counter > 5) {
        if (!x.matches) {
            thirdMain.style.height = "2000px"
        }
    }
    setTimeout(() => {
        faQ3.classList.toggle("checked")
    }, 1);

    if (faQ3.classList.contains("checked")) {
        faQan3.removeChild(textChild3)
        counter--
        if (counter < 3) {
            if (!x.matches) {
                thirdMain.style.height = "1600px"
            }
            if (x.matches) {
                thirdMain.style.height = "2350px"
            }
        }
    }
})



faQ4.addEventListener("click", function () {
    faQan4.classList.toggle("faqan1")
    faQan4.appendChild(textChild4)
    if (!faQ4.classList.contains("checked")) {
        counter++
    }

    if (counter > 3) {
        if (!x.matches) {
            thirdMain.style.height = "1800px"
        }
    }

    if (x.matches && counter > 2) {
        thirdMain.style.height = "2750px"

    }


    if (counter > 5) {
        if (!x.matches) {
            thirdMain.style.height = "2000px"
        }
    }
    setTimeout(() => {
        faQ4.classList.toggle("checked")
    }, 1);

    if (faQ4.classList.contains("checked")) {
        faQan4.removeChild(textChild4)
        counter--
        if (counter < 3) {
            if (!x.matches) {
                thirdMain.style.height = "1600px"
            }
            if (x.matches) {
                thirdMain.style.height = "2350px"
            }
        }
    }
})
faQ5.addEventListener("click", function () {
    faQan5.classList.toggle("faqan1")
    faQan5.appendChild(textChild5)
    if (!faQ5.classList.contains("checked")) {
        counter++
    }

    if (counter > 3) {
        if (!x.matches) {
            thirdMain.style.height = "1800px"
        }
    }

    if (x.matches && counter > 2) {
        thirdMain.style.height = "2750px"

    }

    if (counter > 5) {
        if (!x.matches) {
            thirdMain.style.height = "2000px"
        }
    }
    setTimeout(() => {
        faQ5.classList.toggle("checked")
    }, 1);

    if (faQ5.classList.contains("checked")) {
        faQan5.removeChild(textChild5)
        counter--
        if (counter < 3) {
            if (!x.matches) {
                thirdMain.style.height = "1600px"
            }
            if (x.matches) {
                thirdMain.style.height = "2350px"
            }
        }
    }
})
faQ6.addEventListener("click", function () {
    faQan6.classList.toggle("faqan1")
    if (!faQ6.classList.contains("checked")) {
        counter++
    }
    faQan6.appendChild(textChild6)

    if (counter > 3) {
        if (!x.matches) {
            thirdMain.style.height = "1800px"
        }

    }

    if (x.matches && counter > 2) {
        thirdMain.style.height = "2750px"

    }



    if (counter > 5) {
        if (!x.matches) {
            thirdMain.style.height = "2000px"
        }
    }

    setTimeout(() => {
        faQ6.classList.toggle("checked")
    }, 1);

    if (faQ6.classList.contains("checked")) {
        faQan6.removeChild(textChild6)
        counter--
        if (counter < 3) {
            if (!x.matches) {
                thirdMain.style.height = "1600px"
            }
            if (x.matches) {
                thirdMain.style.height = "2350px"
            }
        }
    }
})




let imageCounter = 0


var images = [];

images[0] = ['images/imagevx.png'];
images[1] = ['images/main.png'];
images[2] = ['images/showcaseimage3.png'];
var index = 0;







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