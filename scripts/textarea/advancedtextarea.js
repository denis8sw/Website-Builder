
const backBtnAdv3 = document.createElement("button")
backBtnAdv3.innerHTML = "<"
backBtnAdv3.style.borderRadius = "10px"
backBtnAdv3.style.width = "80px"
backBtnAdv3.style.height = "40px"
backBtnAdv3.style.position = "sticky"
backBtnAdv3.style.top = "754px"
backBtnAdv3.style.marginRight = "220px"
backBtnAdv3.style.marginLeft = "10px"
backBtnAdv3.style.border = "none"
backBtnAdv3.style.backgroundColor = "lightblue"
backBtnAdv3.style.color = "white"
backBtnAdv3.style.fontSize = "23px"
backBtnAdv3.style.fontWeight = "700"
backBtnAdv3.style.cursor = "pointer"
backBtnAdv3.style.zIndex = "30"

const hoverButton3 = document.createElement("button")
hoverButton3.style.fontWeight = "600"
hoverButton3.innerHTML = "Hover Event [OFF]"
hoverButton3.style.color = "red"
hoverButton3.style.width = "190px"
hoverButton3.style.cursor = "pointer"
hoverButton3.style.height = "35px"
hoverButton3.style.top = "240px"
hoverButton3.style.border = "none"
hoverButton3.style.borderRadius = "10px"
hoverButton3.style.position = "absolute"
hoverButton3.style.left = "50%"
hoverButton3.style.transform = "translateX(-50%)"

const hoverColorButton3 = document.createElement("button")
hoverColorButton3.innerHTML = "Color Change [OFF]"
hoverColorButton3.style.color = "rgb(203, 30, 30)"
hoverColorButton3.style.fontWeight = "600"
hoverColorButton3.style.width = "190px"
hoverColorButton3.style.backgroundColor = "rgb(248, 197, 101)"
hoverColorButton3.style.cursor = "pointer"
hoverColorButton3.style.height = "30px"
hoverColorButton3.style.top = "280px"
hoverColorButton3.style.border = "none"
hoverColorButton3.style.borderRadius = "10px"
hoverColorButton3.style.position = "absolute"
hoverColorButton3.style.left = "50%"
hoverColorButton3.style.transform = "translateX(-50%)"

const colorsDiv3 = document.createElement("div")
colorsDiv3.style.position = "absolute"
colorsDiv3.style.width = "300px"
colorsDiv3.style.height = "150px"
colorsDiv3.style.top = "320px"
colorsDiv3.style.left = "50%"
colorsDiv3.style.transform = "translateX(-50%)"
colorsDiv3.style.backgroundColor = "rgba(210, 210, 210, 0.52)"
colorsDiv3.style.borderRadius = "10px"
colorsDiv3.style.overflowY = "auto"

const firstColors3 = document.createElement("div")
firstColors3.style.display = "flex"
firstColors3.style.position = "relative"
firstColors3.style.top = "10px"
firstColors3.style.width = "100%"
firstColors3.style.height = "40px"

const secondColors3 = document.createElement("div")
secondColors3.style.display = "flex"
secondColors3.style.position = "relative"
secondColors3.style.top = "20px"
secondColors3.style.width = "100%"
secondColors3.style.height = "40px"

colorsDiv3.appendChild(firstColors3)
colorsDiv3.appendChild(secondColors3)

const colorRed3 = document.createElement("div")
colorRed3.style.width = "40px"
colorRed3.style.height = "40px"
colorRed3.style.backgroundColor = "red"
colorRed3.style.marginLeft = "15px"
colorRed3.style.borderRadius = "10px"
colorRed3.style.cursor = "pointer"

const colorBlue3 = document.createElement("div")
colorBlue3.style.width = "40px"
colorBlue3.style.height = "40px"
colorBlue3.style.backgroundColor = "blue"
colorBlue3.style.marginLeft = "15px"
colorBlue3.style.borderRadius = "10px"
colorBlue3.style.cursor = "pointer"

const colorOrange3 = document.createElement("div")
colorOrange3.style.width = "40px"
colorOrange3.style.height = "40px"
colorOrange3.style.backgroundColor = "orange"
colorOrange3.style.marginLeft = "15px"
colorOrange3.style.borderRadius = "10px"
colorOrange3.style.cursor = "pointer"

const colorGreen3 = document.createElement("div")
colorGreen3.style.width = "40px"
colorGreen3.style.height = "40px"
colorGreen3.style.backgroundColor = "green"
colorGreen3.style.marginLeft = "15px"
colorGreen3.style.borderRadius = "10px"
colorGreen3.style.cursor = "pointer"

const colorPurple3 = document.createElement("div")
colorPurple3.style.width = "40px"
colorPurple3.style.height = "40px"
colorPurple3.style.backgroundColor = "purple"
colorPurple3.style.marginLeft = "15px"
colorPurple3.style.borderRadius = "10px"
colorPurple3.style.cursor = "pointer"

firstColors3.appendChild(colorRed3)
firstColors3.appendChild(colorBlue3)
firstColors3.appendChild(colorOrange3)
firstColors3.appendChild(colorGreen3)
firstColors3.appendChild(colorPurple3)

const colorGray3 = document.createElement("div")
colorGray3.style.width = "40px"
colorGray3.style.height = "40px"
colorGray3.style.backgroundColor = "gray"
colorGray3.style.marginLeft = "15px"
colorGray3.style.borderRadius = "10px"
colorGray3.style.cursor = "pointer"

const colorAqua3 = document.createElement("div")
colorAqua3.style.width = "40px"
colorAqua3.style.height = "40px"
colorAqua3.style.backgroundColor = "aqua"
colorAqua3.style.marginLeft = "15px"
colorAqua3.style.borderRadius = "10px"
colorAqua3.style.cursor = "pointer"

const colorBrown3 = document.createElement("div")
colorBrown3.style.width = "40px"
colorBrown3.style.height = "40px"
colorBrown3.style.backgroundColor = "brown"
colorBrown3.style.marginLeft = "15px"
colorBrown3.style.borderRadius = "10px"
colorBrown3.style.cursor = "pointer"

const colorYellow3 = document.createElement("div")
colorYellow3.style.width = "40px"
colorYellow3.style.height = "40px"
colorYellow3.style.backgroundColor = "yellow"
colorYellow3.style.marginLeft = "15px"
colorYellow3.style.borderRadius = "10px"
colorYellow3.style.cursor = "pointer"

const colorBlack3= document.createElement("div")
colorBlack3.style.width = "40px"
colorBlack3.style.height = "40px"
colorBlack3.style.backgroundColor = "black"
colorBlack3.style.marginLeft = "15px"
colorBlack3.style.borderRadius = "10px"
colorBlack3.style.cursor = "pointer"

secondColors3.appendChild(colorGray3)
secondColors3.appendChild(colorAqua3)
secondColors3.appendChild(colorBrown3)
secondColors3.appendChild(colorYellow3)
secondColors3.appendChild(colorBlack3)


const hoverSizeButton3 = document.createElement("button")
hoverSizeButton3.innerHTML = "Size Change [OFF]"
hoverSizeButton3.style.fontWeight = "600"
hoverSizeButton3.style.color = "rgb(203, 30, 30)"
hoverSizeButton3.style.backgroundColor = "rgb(248, 197, 101)"
hoverSizeButton3.style.width = "190px"
hoverSizeButton3.style.cursor = "pointer"
hoverSizeButton3.style.height = "30px"
hoverSizeButton3.style.top = "490px"
hoverSizeButton3.style.border = "none"
hoverSizeButton3.style.borderRadius = "10px"
hoverSizeButton3.style.position = "absolute"
hoverSizeButton3.style.left = "50%"
hoverSizeButton3.style.transform = "translateX(-50%)"

const sizesDiv3= document.createElement("div")
sizesDiv3.style.position = "absolute"
sizesDiv3.style.display = "flex"
sizesDiv3.style.justifyContent = "center"
sizesDiv3.style.width = "100%"
sizesDiv3.style.height = "40px"
sizesDiv3.style.top = "530px"


const sizeBox43 = document.createElement("div")
const sizeBox42 = document.createElement("div")
const sizeBox53= document.createElement("div")
const sizeBox64 = document.createElement("div")

const sizeText34 = document.createElement("p")
const sizeText42 = document.createElement("p")
const sizeText53= document.createElement("p")
const sizeText64 = document.createElement("p")

sizeText34.innerHTML = "1.1"
sizeText42.innerHTML = "1.2"
sizeText53.innerHTML = "1.3"
sizeText64.innerHTML = "1.4"



sizeBox43.style.width = "45px"
sizeBox43.style.height = "45px"
sizeBox43.style.backgroundColor = "white"
sizeBox43.style.border = "2px solid"
sizeBox43.style.borderRadius = "5px"
sizeBox43.style.marginRight = "10px"
sizeBox43.style.textAlign = "center"
sizeBox43.style.cursor = "pointer"

sizeBox42.style.width = "45px"
sizeBox42.style.height = "45px"
sizeBox42.style.backgroundColor = "white"
sizeBox42.style.border = "2px solid"
sizeBox42.style.borderRadius = "5px"
sizeBox42.style.marginRight = "10px"
sizeBox42.style.textAlign = "center"
sizeBox42.style.cursor = "pointer"

sizeBox53.style.width = "45px"
sizeBox53.style.height = "45px"
sizeBox53.style.backgroundColor = "white"
sizeBox53.style.border = "2px solid"
sizeBox53.style.borderRadius = "5px"
sizeBox53.style.marginRight = "10px"
sizeBox53.style.textAlign = "center"
sizeBox53.style.cursor = "pointer"

sizeBox64.style.width = "45px"
sizeBox64.style.height = "45px"
sizeBox64.style.backgroundColor = "white"
sizeBox64.style.border = "2px solid"
sizeBox64.style.borderRadius = "5px"
sizeBox64.style.marginRight = "10px"
sizeBox64.style.textAlign = "center"
sizeBox64.style.cursor = "pointer"



sizesDiv3.appendChild(sizeBox43)
sizesDiv3.appendChild(sizeBox42)
sizesDiv3.appendChild(sizeBox53)
sizesDiv3.appendChild(sizeBox64)

sizeBox43.appendChild(sizeText34)
sizeBox42.appendChild(sizeText42)
sizeBox53.appendChild(sizeText53)
sizeBox64.appendChild(sizeText64)

const clickEventButton3= document.createElement("button")
clickEventButton3.style.fontWeight = "600"
clickEventButton3.innerHTML = "Click Event [OFF]"
clickEventButton3.style.color = "red"
clickEventButton3.style.width = "190px"
clickEventButton3.style.cursor = "pointer"
clickEventButton3.style.height = "35px"
clickEventButton3.style.top = "590px"
clickEventButton3.style.border = "none"
clickEventButton3.style.borderRadius = "10px"
clickEventButton3.style.position = "absolute"
clickEventButton3.style.left = "50%"
clickEventButton3.style.transform = "translateX(-50%)"

const clickLinkInput3 = document.createElement("input")
clickLinkInput3.setAttribute("type", "text")
clickLinkInput3.setAttribute("placeholder", "Target Link")
clickLinkInput3.style.width = "190px"
clickLinkInput3.style.top = "630px"
clickLinkInput3.style.position = "absolute"
clickLinkInput3.style.border = "none"
clickLinkInput3.style.left = "50%"
clickLinkInput3.style.transform = "translateX(-50%)"

const smoothAnim3 = document.createElement("button")
smoothAnim3.innerHTML = "Smooth Animations [OFF]"
smoothAnim3.style.position = "absolute"
smoothAnim3.style.top = "677px"
smoothAnim3.style.left = "50%"
smoothAnim3.style.transform = "translateX(-50%)"
smoothAnim3.style.color = "red"
smoothAnim3.style.width = "190px"
smoothAnim3.style.fontWeight = "600"
smoothAnim3.style.cursor = "pointer"
smoothAnim3.style.height = "35px"
smoothAnim3.style.border = "none"
smoothAnim3.style.borderRadius = "10px"


function advancedAdd3() {
  thePanel.appendChild(backBtnAdv3)
  thePanel.appendChild(generalText)
  thePanel.appendChild(zIndexText)
  thePanel.appendChild(zIndexInput)
  thePanel.appendChild(styleText)
  thePanel.appendChild(smoothAnim3)
  thePanel.appendChild(hoverButton3)
  thePanel.appendChild(hoverColorButton3)
  thePanel.appendChild(colorsDiv3)
  thePanel.appendChild(hoverSizeButton3)
  thePanel.appendChild(sizesDiv3)
  thePanel.appendChild(clickEventButton3)
  thePanel.appendChild(clickLinkInput3)
}


function advancedRemove3() {
  if (thePanel.contains(backBtnAdv3)) {
    thePanel.removeChild(backBtnAdv3)
    thePanel.removeChild(generalText)
    thePanel.removeChild(zIndexText)
    thePanel.removeChild(zIndexInput)
    thePanel.removeChild(styleText)
    thePanel.removeChild(smoothAnim3)
    thePanel.removeChild(hoverButton3)
    thePanel.removeChild(clickEventButton3)
    thePanel.removeChild(colorsDiv3)
    thePanel.removeChild(hoverColorButton3)
    thePanel.removeChild(hoverSizeButton3)
    thePanel.removeChild(sizesDiv3)
    thePanel.removeChild(clickLinkInput3)
  }

}
