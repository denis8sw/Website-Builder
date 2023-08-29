const backBtnAdv4 = document.createElement("button")
backBtnAdv4.innerHTML = "<"
backBtnAdv4.style.borderRadius = "10px"
backBtnAdv4.style.width = "80px"
backBtnAdv4.style.height = "40px"
backBtnAdv4.style.position = "sticky"
backBtnAdv4.style.top = "754px"
backBtnAdv4.style.marginRight = "220px"
backBtnAdv4.style.marginLeft = "10px"
backBtnAdv4.style.border = "none"
backBtnAdv4.style.backgroundColor = "lightblue"
backBtnAdv4.style.color = "white"
backBtnAdv4.style.fontSize = "23px"
backBtnAdv4.style.fontWeight = "700"
backBtnAdv4.style.cursor = "pointer"
backBtnAdv4.style.zIndex = "30"

const hoverButton4 = document.createElement("button")
hoverButton4.style.fontWeight = "600"
hoverButton4.innerHTML = "Hover Event [OFF]"
hoverButton4.style.color = "red"
hoverButton4.style.width = "190px"
hoverButton4.style.cursor = "pointer"
hoverButton4.style.height = "35px"
hoverButton4.style.top = "240px"
hoverButton4.style.border = "none"
hoverButton4.style.borderRadius = "10px"
hoverButton4.style.position = "absolute"
hoverButton4.style.left = "50%"
hoverButton4.style.transform = "translateX(-50%)"

const hoverColorButton4 = document.createElement("button")
hoverColorButton4.innerHTML = "Color Change [OFF]"
hoverColorButton4.style.color = "rgb(203, 30, 30)"
hoverColorButton4.style.fontWeight = "600"
hoverColorButton4.style.width = "190px"
hoverColorButton4.style.backgroundColor = "rgb(248, 197, 101)"
hoverColorButton4.style.cursor = "pointer"
hoverColorButton4.style.height = "30px"
hoverColorButton4.style.top = "280px"
hoverColorButton4.style.border = "none"
hoverColorButton4.style.borderRadius = "10px"
hoverColorButton4.style.position = "absolute"
hoverColorButton4.style.left = "50%"
hoverColorButton4.style.transform = "translateX(-50%)"


const colorsDiv4 = document.createElement("div")
colorsDiv4.style.position = "absolute"
colorsDiv4.style.width = "300px"
colorsDiv4.style.height = "150px"
colorsDiv4.style.top = "320px"
colorsDiv4.style.left = "50%"
colorsDiv4.style.transform = "translateX(-50%)"
colorsDiv4.style.backgroundColor = "rgba(210, 210, 210, 0.52)"
colorsDiv4.style.borderRadius = "10px"
colorsDiv4.style.overflowY = "auto"

const firstColors4 = document.createElement("div")
firstColors4.style.display = "flex"
firstColors4.style.position = "relative"
firstColors4.style.top = "10px"
firstColors4.style.width = "100%"
firstColors4.style.height = "40px"

const secondColors4 = document.createElement("div")
secondColors4.style.display = "flex"
secondColors4.style.position = "relative"
secondColors4.style.top = "20px"
secondColors4.style.width = "100%"
secondColors4.style.height = "40px"

colorsDiv4.appendChild(firstColors4)
colorsDiv4.appendChild(secondColors4)

const colorRed4 = document.createElement("div")
colorRed4.style.width = "40px"
colorRed4.style.height = "40px"
colorRed4.style.backgroundColor = "red"
colorRed4.style.marginLeft = "15px"
colorRed4.style.borderRadius = "10px"
colorRed4.style.cursor = "pointer"

const colorBlue4 = document.createElement("div")
colorBlue4.style.width = "40px"
colorBlue4.style.height = "40px"
colorBlue4.style.backgroundColor = "blue"
colorBlue4.style.marginLeft = "15px"
colorBlue4.style.borderRadius = "10px"
colorBlue4.style.cursor = "pointer"

const colorOrange4 = document.createElement("div")
colorOrange4.style.width = "40px"
colorOrange4.style.height = "40px"
colorOrange4.style.backgroundColor = "orange"
colorOrange4.style.marginLeft = "15px"
colorOrange4.style.borderRadius = "10px"
colorOrange4.style.cursor = "pointer"

const colorGreen4 = document.createElement("div")
colorGreen4.style.width = "40px"
colorGreen4.style.height = "40px"
colorGreen4.style.backgroundColor = "green"
colorGreen4.style.marginLeft = "15px"
colorGreen4.style.borderRadius = "10px"
colorGreen4.style.cursor = "pointer"

const colorPurple4 = document.createElement("div")
colorPurple4.style.width = "40px"
colorPurple4.style.height = "40px"
colorPurple4.style.backgroundColor = "purple"
colorPurple4.style.marginLeft = "15px"
colorPurple4.style.borderRadius = "10px"
colorPurple4.style.cursor = "pointer"

firstColors4.appendChild(colorRed4)
firstColors4.appendChild(colorBlue4)
firstColors4.appendChild(colorOrange4)
firstColors4.appendChild(colorGreen4)
firstColors4.appendChild(colorPurple4)

const colorGray4 = document.createElement("div")
colorGray4.style.width = "40px"
colorGray4.style.height = "40px"
colorGray4.style.backgroundColor = "gray"
colorGray4.style.marginLeft = "15px"
colorGray4.style.borderRadius = "10px"
colorGray4.style.cursor = "pointer"

const colorAqua4 = document.createElement("div")
colorAqua4.style.width = "40px"
colorAqua4.style.height = "40px"
colorAqua4.style.backgroundColor = "aqua"
colorAqua4.style.marginLeft = "15px"
colorAqua4.style.borderRadius = "10px"
colorAqua4.style.cursor = "pointer"

const colorBrown4 = document.createElement("div")
colorBrown4.style.width = "40px"
colorBrown4.style.height = "40px"
colorBrown4.style.backgroundColor = "brown"
colorBrown4.style.marginLeft = "15px"
colorBrown4.style.borderRadius = "10px"
colorBrown4.style.cursor = "pointer"

const colorYellow4 = document.createElement("div")
colorYellow4.style.width = "40px"
colorYellow4.style.height = "40px"
colorYellow4.style.backgroundColor = "yellow"
colorYellow4.style.marginLeft = "15px"
colorYellow4.style.borderRadius = "10px"
colorYellow4.style.cursor = "pointer"

const colorBlack4= document.createElement("div")
colorBlack4.style.width = "40px"
colorBlack4.style.height = "40px"
colorBlack4.style.backgroundColor = "black"
colorBlack4.style.marginLeft = "15px"
colorBlack4.style.borderRadius = "10px"
colorBlack4.style.cursor = "pointer"

secondColors4.appendChild(colorGray4)
secondColors4.appendChild(colorAqua4)
secondColors4.appendChild(colorBrown4)
secondColors4.appendChild(colorYellow4)
secondColors4.appendChild(colorBlack4)

const hoverSizeButton4 = document.createElement("button")
hoverSizeButton4.innerHTML = "Size Change [OFF]"
hoverSizeButton4.style.fontWeight = "600"
hoverSizeButton4.style.color = "rgb(203, 30, 30)"
hoverSizeButton4.style.backgroundColor = "rgb(248, 197, 101)"
hoverSizeButton4.style.width = "190px"
hoverSizeButton4.style.cursor = "pointer"
hoverSizeButton4.style.height = "30px"
hoverSizeButton4.style.top = "490px"
hoverSizeButton4.style.border = "none"
hoverSizeButton4.style.borderRadius = "10px"
hoverSizeButton4.style.position = "absolute"
hoverSizeButton4.style.left = "50%"
hoverSizeButton4.style.transform = "translateX(-50%)"

const sizesDiv4= document.createElement("div")
sizesDiv4.style.position = "absolute"
sizesDiv4.style.display = "flex"
sizesDiv4.style.justifyContent = "center"
sizesDiv4.style.width = "100%"
sizesDiv4.style.height = "40px"
sizesDiv4.style.top = "530px"


const sizeBox01 = document.createElement("div")
const sizeBox02 = document.createElement("div")
const sizeBox03= document.createElement("div")
const sizeBox04 = document.createElement("div")

const sizeText01 = document.createElement("p")
const sizeText02 = document.createElement("p")
const sizeText03= document.createElement("p")
const sizeText04 = document.createElement("p")

sizeText01.innerHTML = "1.1"
sizeText02.innerHTML = "1.2"
sizeText03.innerHTML = "1.3"
sizeText04.innerHTML = "1.4"



sizeBox01.style.width = "45px"
sizeBox01.style.height = "45px"
sizeBox01.style.backgroundColor = "white"
sizeBox01.style.border = "2px solid"
sizeBox01.style.borderRadius = "5px"
sizeBox01.style.marginRight = "10px"
sizeBox01.style.textAlign = "center"
sizeBox01.style.cursor = "pointer"

sizeBox02.style.width = "45px"
sizeBox02.style.height = "45px"
sizeBox02.style.backgroundColor = "white"
sizeBox02.style.border = "2px solid"
sizeBox02.style.borderRadius = "5px"
sizeBox02.style.marginRight = "10px"
sizeBox02.style.textAlign = "center"
sizeBox02.style.cursor = "pointer"

sizeBox03.style.width = "45px"
sizeBox03.style.height = "45px"
sizeBox03.style.backgroundColor = "white"
sizeBox03.style.border = "2px solid"
sizeBox03.style.borderRadius = "5px"
sizeBox03.style.marginRight = "10px"
sizeBox03.style.textAlign = "center"
sizeBox03.style.cursor = "pointer"

sizeBox04.style.width = "45px"
sizeBox04.style.height = "45px"
sizeBox04.style.backgroundColor = "white"
sizeBox04.style.border = "2px solid"
sizeBox04.style.borderRadius = "5px"
sizeBox04.style.marginRight = "10px"
sizeBox04.style.textAlign = "center"
sizeBox04.style.cursor = "pointer"



sizesDiv4.appendChild(sizeBox01)
sizesDiv4.appendChild(sizeBox02)
sizesDiv4.appendChild(sizeBox03)
sizesDiv4.appendChild(sizeBox04)

sizeBox01.appendChild(sizeText01)
sizeBox02.appendChild(sizeText02)
sizeBox03.appendChild(sizeText03)
sizeBox04.appendChild(sizeText04)

const clickEventButton4= document.createElement("button")
clickEventButton4.style.fontWeight = "600"
clickEventButton4.innerHTML = "Click Event [OFF]"
clickEventButton4.style.color = "red"
clickEventButton4.style.width = "190px"
clickEventButton4.style.cursor = "pointer"
clickEventButton4.style.height = "35px"
clickEventButton4.style.top = "590px"
clickEventButton4.style.border = "none"
clickEventButton4.style.borderRadius = "10px"
clickEventButton4.style.position = "absolute"
clickEventButton4.style.left = "50%"
clickEventButton4.style.transform = "translateX(-50%)"

const clickLinkInput4 = document.createElement("input")
clickLinkInput4.setAttribute("type", "text")
clickLinkInput4.setAttribute("placeholder", "Target Link")
clickLinkInput4.style.width = "190px"
clickLinkInput4.style.top = "630px"
clickLinkInput4.style.position = "absolute"
clickLinkInput4.style.border = "none"
clickLinkInput4.style.left = "50%"
clickLinkInput4.style.transform = "translateX(-50%)"

const smoothAnim4 = document.createElement("button")
smoothAnim4.innerHTML = "Smooth Animations [OFF]"
smoothAnim4.style.position = "absolute"
smoothAnim4.style.top = "677px"
smoothAnim4.style.left = "50%"
smoothAnim4.style.transform = "translateX(-50%)"
smoothAnim4.style.color = "red"
smoothAnim4.style.width = "190px"
smoothAnim4.style.fontWeight = "600"
smoothAnim4.style.cursor = "pointer"
smoothAnim4.style.height = "35px"
smoothAnim4.style.border = "none"
smoothAnim4.style.borderRadius = "10px"



function advancedAdd4() {
    thePanel.appendChild(backBtnAdv4)
    thePanel.appendChild(generalText)
    thePanel.appendChild(zIndexText)
    thePanel.appendChild(zIndexInput)
    thePanel.appendChild(styleText)
    thePanel.appendChild(smoothAnim4)
    thePanel.appendChild(hoverButton4)
    thePanel.appendChild(hoverColorButton4)
    thePanel.appendChild(colorsDiv4)
    thePanel.appendChild(hoverSizeButton4)
    thePanel.appendChild(sizesDiv4)
    thePanel.appendChild(clickEventButton4)
    thePanel.appendChild(clickLinkInput4)
}


function advancedRemove4() {
    if (thePanel.contains(backBtnAdv4)) {
        thePanel.removeChild(backBtnAdv4)
        thePanel.removeChild(generalText)
        thePanel.removeChild(zIndexText)
        thePanel.removeChild(zIndexInput)
        thePanel.removeChild(styleText)
        thePanel.removeChild(smoothAnim4)
        thePanel.removeChild(hoverButton4)
        thePanel.removeChild(clickEventButton4)
        thePanel.removeChild(colorsDiv4)
        thePanel.removeChild(hoverColorButton4)
        thePanel.removeChild(hoverSizeButton4)
        thePanel.removeChild(sizesDiv4)
        thePanel.removeChild(clickLinkInput4)
    }
}
