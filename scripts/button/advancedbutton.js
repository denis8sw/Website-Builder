
const backBtnAdv2 = document.createElement("button")
backBtnAdv2.innerHTML = "<"
backBtnAdv2.style.borderRadius = "10px"
backBtnAdv2.style.width = "80px"
backBtnAdv2.style.height = "40px"
backBtnAdv2.style.position = "sticky"
backBtnAdv2.style.top = "754px"
backBtnAdv2.style.marginRight = "220px"
backBtnAdv2.style.marginLeft = "10px"
backBtnAdv2.style.border = "none"
backBtnAdv2.style.backgroundColor = "lightblue"
backBtnAdv2.style.color = "white"
backBtnAdv2.style.fontSize = "23px"
backBtnAdv2.style.fontWeight = "700"
backBtnAdv2.style.cursor = "pointer"
backBtnAdv2.style.zIndex = "30"



const hoverButton2 = document.createElement("button")
hoverButton2.style.fontWeight = "600"
hoverButton2.innerHTML = "Hover Event [OFF]"
hoverButton2.style.color = "red"
hoverButton2.style.width = "190px"
hoverButton2.style.cursor = "pointer"
hoverButton2.style.height = "35px"
hoverButton2.style.top = "240px"
hoverButton2.style.border = "none"
hoverButton2.style.borderRadius = "10px"
hoverButton2.style.position = "absolute"
hoverButton2.style.left = "50%"
hoverButton2.style.transform = "translateX(-50%)"

const hoverColorButton2 = document.createElement("button")
hoverColorButton2.innerHTML = "Color Change [OFF]"
hoverColorButton2.style.color = "rgb(203, 30, 30)"
hoverColorButton2.style.fontWeight = "600"
hoverColorButton2.style.width = "190px"
hoverColorButton2.style.backgroundColor = "rgb(248, 197, 101)"
hoverColorButton2.style.cursor = "pointer"
hoverColorButton2.style.height = "30px"
hoverColorButton2.style.top = "280px"
hoverColorButton2.style.border = "none"
hoverColorButton2.style.borderRadius = "10px"
hoverColorButton2.style.position = "absolute"
hoverColorButton2.style.left = "50%"
hoverColorButton2.style.transform = "translateX(-50%)"


const colorsDiv2 = document.createElement("div")
colorsDiv2.style.position = "absolute"
colorsDiv2.style.width = "300px"
colorsDiv2.style.height = "150px"
colorsDiv2.style.top = "320px"
colorsDiv2.style.left = "50%"
colorsDiv2.style.transform = "translateX(-50%)"
colorsDiv2.style.backgroundColor = "rgba(210, 210, 210, 0.52)"
colorsDiv2.style.borderRadius = "10px"
colorsDiv2.style.overflowY = "auto"

const firstColors2 = document.createElement("div")
firstColors2.style.display = "flex"
firstColors2.style.position = "relative"
firstColors2.style.top = "10px"
firstColors2.style.width = "100%"
firstColors2.style.height = "40px"

const secondColors2 = document.createElement("div")
secondColors2.style.display = "flex"
secondColors2.style.position = "relative"
secondColors2.style.top = "20px"
secondColors2.style.width = "100%"
secondColors2.style.height = "40px"

colorsDiv2.appendChild(firstColors2)
colorsDiv2.appendChild(secondColors2)

const colorRed2 = document.createElement("div")
colorRed2.style.width = "40px"
colorRed2.style.height = "40px"
colorRed2.style.backgroundColor = "red"
colorRed2.style.marginLeft = "15px"
colorRed2.style.borderRadius = "10px"
colorRed2.style.cursor = "pointer"

const colorBlue2 = document.createElement("div")
colorBlue2.style.width = "40px"
colorBlue2.style.height = "40px"
colorBlue2.style.backgroundColor = "blue"
colorBlue2.style.marginLeft = "15px"
colorBlue2.style.borderRadius = "10px"
colorBlue2.style.cursor = "pointer"

const colorOrange2 = document.createElement("div")
colorOrange2.style.width = "40px"
colorOrange2.style.height = "40px"
colorOrange2.style.backgroundColor = "orange"
colorOrange2.style.marginLeft = "15px"
colorOrange2.style.borderRadius = "10px"
colorOrange2.style.cursor = "pointer"

const colorGreen2 = document.createElement("div")
colorGreen2.style.width = "40px"
colorGreen2.style.height = "40px"
colorGreen2.style.backgroundColor = "green"
colorGreen2.style.marginLeft = "15px"
colorGreen2.style.borderRadius = "10px"
colorGreen2.style.cursor = "pointer"

const colorPurple2 = document.createElement("div")
colorPurple2.style.width = "40px"
colorPurple2.style.height = "40px"
colorPurple2.style.backgroundColor = "purple"
colorPurple2.style.marginLeft = "15px"
colorPurple2.style.borderRadius = "10px"
colorPurple2.style.cursor = "pointer"

firstColors2.appendChild(colorRed2)
firstColors2.appendChild(colorBlue2)
firstColors2.appendChild(colorOrange2)
firstColors2.appendChild(colorGreen2)
firstColors2.appendChild(colorPurple2)

const colorGray2 = document.createElement("div")
colorGray2.style.width = "40px"
colorGray2.style.height = "40px"
colorGray2.style.backgroundColor = "gray"
colorGray2.style.marginLeft = "15px"
colorGray2.style.borderRadius = "10px"
colorGray2.style.cursor = "pointer"

const colorAqua2 = document.createElement("div")
colorAqua2.style.width = "40px"
colorAqua2.style.height = "40px"
colorAqua2.style.backgroundColor = "aqua"
colorAqua2.style.marginLeft = "15px"
colorAqua2.style.borderRadius = "10px"
colorAqua2.style.cursor = "pointer"

const colorBrown2 = document.createElement("div")
colorBrown2.style.width = "40px"
colorBrown2.style.height = "40px"
colorBrown2.style.backgroundColor = "brown"
colorBrown2.style.marginLeft = "15px"
colorBrown2.style.borderRadius = "10px"
colorBrown2.style.cursor = "pointer"

const colorYellow2 = document.createElement("div")
colorYellow2.style.width = "40px"
colorYellow2.style.height = "40px"
colorYellow2.style.backgroundColor = "yellow"
colorYellow2.style.marginLeft = "15px"
colorYellow2.style.borderRadius = "10px"
colorYellow2.style.cursor = "pointer"

const colorBlack2= document.createElement("div")
colorBlack2.style.width = "40px"
colorBlack2.style.height = "40px"
colorBlack2.style.backgroundColor = "black"
colorBlack2.style.marginLeft = "15px"
colorBlack2.style.borderRadius = "10px"
colorBlack2.style.cursor = "pointer"

secondColors2.appendChild(colorGray2)
secondColors2.appendChild(colorAqua2)
secondColors2.appendChild(colorBrown2)
secondColors2.appendChild(colorYellow2)
secondColors2.appendChild(colorBlack2)

const hoverSizeButton2 = document.createElement("button")
hoverSizeButton2.innerHTML = "Size Change [OFF]"
hoverSizeButton2.style.fontWeight = "600"
hoverSizeButton2.style.color = "rgb(203, 30, 30)"
hoverSizeButton2.style.backgroundColor = "rgb(248, 197, 101)"
hoverSizeButton2.style.width = "190px"
hoverSizeButton2.style.cursor = "pointer"
hoverSizeButton2.style.height = "30px"
hoverSizeButton2.style.top = "490px"
hoverSizeButton2.style.border = "none"
hoverSizeButton2.style.borderRadius = "10px"
hoverSizeButton2.style.position = "absolute"
hoverSizeButton2.style.left = "50%"
hoverSizeButton2.style.transform = "translateX(-50%)"


const sizesDiv2 = document.createElement("div")
sizesDiv2.style.position = "absolute"
sizesDiv2.style.display = "flex"
sizesDiv2.style.justifyContent = "center"
sizesDiv2.style.width = "100%"
sizesDiv2.style.height = "40px"
sizesDiv2.style.top = "530px"


const sizeBox23 = document.createElement("div")
const sizeBox22 = document.createElement("div")
const sizeBox33= document.createElement("div")
const sizeBox44 = document.createElement("div")

const sizeText23 = document.createElement("p")
const sizeText22 = document.createElement("p")
const sizeText33= document.createElement("p")
const sizeText44 = document.createElement("p")

sizeText23.innerHTML = "1.1"
sizeText22.innerHTML = "1.2"
sizeText33.innerHTML = "1.3"
sizeText44.innerHTML = "1.4"



sizeBox23.style.width = "45px"
sizeBox23.style.height = "45px"
sizeBox23.style.backgroundColor = "white"
sizeBox23.style.border = "2px solid"
sizeBox23.style.borderRadius = "5px"
sizeBox23.style.marginRight = "10px"
sizeBox23.style.textAlign = "center"
sizeBox23.style.cursor = "pointer"

sizeBox22.style.width = "45px"
sizeBox22.style.height = "45px"
sizeBox22.style.backgroundColor = "white"
sizeBox22.style.border = "2px solid"
sizeBox22.style.borderRadius = "5px"
sizeBox22.style.marginRight = "10px"
sizeBox22.style.textAlign = "center"
sizeBox22.style.cursor = "pointer"

sizeBox33.style.width = "45px"
sizeBox33.style.height = "45px"
sizeBox33.style.backgroundColor = "white"
sizeBox33.style.border = "2px solid"
sizeBox33.style.borderRadius = "5px"
sizeBox33.style.marginRight = "10px"
sizeBox33.style.textAlign = "center"
sizeBox33.style.cursor = "pointer"

sizeBox44.style.width = "45px"
sizeBox44.style.height = "45px"
sizeBox44.style.backgroundColor = "white"
sizeBox44.style.border = "2px solid"
sizeBox44.style.borderRadius = "5px"
sizeBox44.style.marginRight = "10px"
sizeBox44.style.textAlign = "center"
sizeBox44.style.cursor = "pointer"



sizesDiv2.appendChild(sizeBox23)
sizesDiv2.appendChild(sizeBox22)
sizesDiv2.appendChild(sizeBox33)
sizesDiv2.appendChild(sizeBox44)

sizeBox23.appendChild(sizeText23)
sizeBox22.appendChild(sizeText22)
sizeBox33.appendChild(sizeText33)
sizeBox44.appendChild(sizeText44)


const clickEventButton2 = document.createElement("button")
clickEventButton2.style.fontWeight = "600"
clickEventButton2.innerHTML = "Click Event [OFF]"
clickEventButton2.style.color = "red"
clickEventButton2.style.width = "190px"
clickEventButton2.style.cursor = "pointer"
clickEventButton2.style.height = "35px"
clickEventButton2.style.top = "590px"
clickEventButton2.style.border = "none"
clickEventButton2.style.borderRadius = "10px"
clickEventButton2.style.position = "absolute"
clickEventButton2.style.left = "50%"
clickEventButton2.style.transform = "translateX(-50%)"

const clickLinkInput2 = document.createElement("input")
clickLinkInput2.setAttribute("type", "text")
clickLinkInput2.setAttribute("placeholder", "Target Link")
clickLinkInput2.style.width = "190px"
clickLinkInput2.style.top = "630px"
clickLinkInput2.style.position = "absolute"
clickLinkInput2.style.border = "none"
clickLinkInput2.style.left = "50%"
clickLinkInput2.style.transform = "translateX(-50%)"


const smoothAnim2 = document.createElement("button")
smoothAnim2.innerHTML = "Smooth Animations [OFF]"
smoothAnim2.style.position = "absolute"
smoothAnim2.style.top = "677px"
smoothAnim2.style.left = "50%"
smoothAnim2.style.transform = "translateX(-50%)"
smoothAnim2.style.color = "red"
smoothAnim2.style.width = "190px"
smoothAnim2.style.fontWeight = "600"
smoothAnim2.style.cursor = "pointer"
smoothAnim2.style.height = "35px"
smoothAnim2.style.border = "none"
smoothAnim2.style.borderRadius = "10px"



function advancedAdd2() {
    thePanel.appendChild(backBtnAdv2)
    thePanel.appendChild(generalText)
    thePanel.appendChild(zIndexText)
    thePanel.appendChild(zIndexInput)
    thePanel.appendChild(styleText)
    thePanel.appendChild(smoothAnim2)
    thePanel.appendChild(hoverButton2)
    thePanel.appendChild(hoverColorButton2)
    thePanel.appendChild(colorsDiv2)
    thePanel.appendChild(hoverSizeButton2)
    thePanel.appendChild(sizesDiv2)
    thePanel.appendChild(clickEventButton2)
    thePanel.appendChild(clickLinkInput2)
}


function advancedRemove2() {
    if (thePanel.contains(backBtnAdv2)) {
        thePanel.removeChild(backBtnAdv2)
        thePanel.removeChild(generalText)
        thePanel.removeChild(zIndexText)
        thePanel.removeChild(zIndexInput)
        thePanel.removeChild(styleText)
        thePanel.removeChild(smoothAnim2)
        thePanel.removeChild(hoverButton2)
        thePanel.removeChild(clickEventButton2)
        thePanel.removeChild(colorsDiv2)
        thePanel.removeChild(hoverColorButton2)
        thePanel.removeChild(hoverSizeButton2)
        thePanel.removeChild(sizesDiv2)
        thePanel.removeChild(clickLinkInput2)
    }
    
}