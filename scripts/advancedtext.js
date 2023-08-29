const backBtnAdv = document.createElement("button")
backBtnAdv.innerHTML = "<"
backBtnAdv.style.borderRadius = "10px"
backBtnAdv.style.width = "80px"
backBtnAdv.style.height = "40px"
backBtnAdv.style.position = "sticky"
backBtnAdv.style.top = "754px"
backBtnAdv.style.marginRight = "220px"
backBtnAdv.style.marginLeft = "10px"
backBtnAdv.style.border = "none"
backBtnAdv.style.backgroundColor = "lightblue"
backBtnAdv.style.color = "white"
backBtnAdv.style.fontSize = "23px"
backBtnAdv.style.fontWeight = "700"
backBtnAdv.style.cursor = "pointer"
backBtnAdv.style.zIndex = "30"


const generalText = document.createElement("p")
generalText.innerHTML = "General Settings"
generalText.style.fontSize = "25px"
generalText.style.position = "absolute"
generalText.style.left = "50%"
generalText.style.top = "10px"
generalText.style.transform = "translateX(-50%)"
generalText.style.fontWeight = "800"
generalText.style.userSelect = "none"

const zIndexText = document.createElement("p")
zIndexText.innerHTML = "z-Index"
zIndexText.style.position = "absolute"
zIndexText.style.color = "gray"
zIndexText.style.left = "50%"
zIndexText.style.top = "70px"
zIndexText.style.fontSize = "20px"
zIndexText.style.transform = "translateX(-50%)"
zIndexText.style.userSelect = "none"

const zIndexInput = document.createElement("input")
zIndexInput.setAttribute("type", "number")
zIndexInput.setAttribute("placeholder", "z-index")
zIndexInput.style.position = "relative"
zIndexInput.style.top = "-40px"
zIndexInput.style.left = "50%"
zIndexInput.style.transform = "translateX(-50%)"
zIndexInput.style.width = "100px"


const styleText = document.createElement("p")
styleText.innerHTML = "Event Settings"
styleText.style.fontSize = "25px"
styleText.style.position = "absolute"
styleText.style.left = "50%"
styleText.style.top = "170px"
styleText.style.transform = "translateX(-50%)"
styleText.style.fontWeight = "800"
styleText.style.userSelect = "none"


const hoverButton = document.createElement("button")
hoverButton.style.fontWeight = "600"
hoverButton.innerHTML = "Hover Event [OFF]"
hoverButton.style.color = "red"
hoverButton.style.width = "190px"
hoverButton.style.cursor = "pointer"
hoverButton.style.height = "35px"
hoverButton.style.top = "240px"
hoverButton.style.border = "none"
hoverButton.style.borderRadius = "10px"
hoverButton.style.position = "absolute"
hoverButton.style.left = "50%"
hoverButton.style.transform = "translateX(-50%)"

const hoverColorButton = document.createElement("button")
hoverColorButton.innerHTML = "Color Change [OFF]"
hoverColorButton.style.color = "rgb(203, 30, 30)"
hoverColorButton.style.fontWeight = "600"
hoverColorButton.style.width = "190px"
hoverColorButton.style.backgroundColor = "rgb(248, 197, 101)"
hoverColorButton.style.cursor = "pointer"
hoverColorButton.style.height = "30px"
hoverColorButton.style.top = "280px"
hoverColorButton.style.border = "none"
hoverColorButton.style.borderRadius = "10px"
hoverColorButton.style.position = "absolute"
hoverColorButton.style.left = "50%"
hoverColorButton.style.transform = "translateX(-50%)"

const colorsDiv = document.createElement("div")
colorsDiv.style.position = "absolute"
colorsDiv.style.width = "300px"
colorsDiv.style.height = "150px"
colorsDiv.style.top = "320px"
colorsDiv.style.left = "50%"
colorsDiv.style.transform = "translateX(-50%)"
colorsDiv.style.backgroundColor = "rgba(210, 210, 210, 0.52)"
colorsDiv.style.borderRadius = "10px"
colorsDiv.style.overflowY = "auto"

const firstColors = document.createElement("div")
firstColors.style.display = "flex"
firstColors.style.position = "relative"
firstColors.style.top = "10px"
firstColors.style.width = "100%"
firstColors.style.height = "40px"

const secondColors = document.createElement("div")
secondColors.style.display = "flex"
secondColors.style.position = "relative"
secondColors.style.top = "20px"
secondColors.style.width = "100%"
secondColors.style.height = "40px"

const smoothAnim = document.createElement("button")
smoothAnim.innerHTML = "Smooth Animations [OFF]"
smoothAnim.style.position = "absolute"
smoothAnim.style.top = "677px"
smoothAnim.style.left = "50%"
smoothAnim.style.transform = "translateX(-50%)"
smoothAnim.style.color = "red"
smoothAnim.style.width = "190px"
smoothAnim.style.fontWeight = "600"
smoothAnim.style.cursor = "pointer"
smoothAnim.style.height = "35px"
smoothAnim.style.border = "none"
smoothAnim.style.borderRadius = "10px"


colorsDiv.appendChild(firstColors)
colorsDiv.appendChild(secondColors)

const colorRed = document.createElement("div")
colorRed.style.width = "40px"
colorRed.style.height = "40px"
colorRed.style.backgroundColor = "red"
colorRed.style.marginLeft = "15px"
colorRed.style.borderRadius = "10px"
colorRed.style.cursor = "pointer"

const colorBlue= document.createElement("div")
colorBlue.style.width = "40px"
colorBlue.style.height = "40px"
colorBlue.style.backgroundColor = "blue"
colorBlue.style.marginLeft = "15px"
colorBlue.style.borderRadius = "10px"
colorBlue.style.cursor = "pointer"

const colorOrange = document.createElement("div")
colorOrange.style.width = "40px"
colorOrange.style.height = "40px"
colorOrange.style.backgroundColor = "orange"
colorOrange.style.marginLeft = "15px"
colorOrange.style.borderRadius = "10px"
colorOrange.style.cursor = "pointer"

const colorGreen = document.createElement("div")
colorGreen.style.width = "40px"
colorGreen.style.height = "40px"
colorGreen.style.backgroundColor = "green"
colorGreen.style.marginLeft = "15px"
colorGreen.style.borderRadius = "10px"
colorGreen.style.cursor = "pointer"

const colorPurple = document.createElement("div")
colorPurple.style.width = "40px"
colorPurple.style.height = "40px"
colorPurple.style.backgroundColor = "purple"
colorPurple.style.marginLeft = "15px"
colorPurple.style.borderRadius = "10px"
colorPurple.style.cursor = "pointer"

firstColors.appendChild(colorRed)
firstColors.appendChild(colorBlue)
firstColors.appendChild(colorOrange)
firstColors.appendChild(colorGreen)
firstColors.appendChild(colorPurple)

const colorGray = document.createElement("div")
colorGray.style.width = "40px"
colorGray.style.height = "40px"
colorGray.style.backgroundColor = "gray"
colorGray.style.marginLeft = "15px"
colorGray.style.borderRadius = "10px"
colorGray.style.cursor = "pointer"

const colorAqua = document.createElement("div")
colorAqua.style.width = "40px"
colorAqua.style.height = "40px"
colorAqua.style.backgroundColor = "aqua"
colorAqua.style.marginLeft = "15px"
colorAqua.style.borderRadius = "10px"
colorAqua.style.cursor = "pointer"

const colorBrown = document.createElement("div")
colorBrown.style.width = "40px"
colorBrown.style.height = "40px"
colorBrown.style.backgroundColor = "brown"
colorBrown.style.marginLeft = "15px"
colorBrown.style.borderRadius = "10px"
colorBrown.style.cursor = "pointer"

const colorYellow = document.createElement("div")
colorYellow.style.width = "40px"
colorYellow.style.height = "40px"
colorYellow.style.backgroundColor = "yellow"
colorYellow.style.marginLeft = "15px"
colorYellow.style.borderRadius = "10px"
colorYellow.style.cursor = "pointer"

const colorBlack= document.createElement("div")
colorBlack.style.width = "40px"
colorBlack.style.height = "40px"
colorBlack.style.backgroundColor = "black"
colorBlack.style.marginLeft = "15px"
colorBlack.style.borderRadius = "10px"
colorBlack.style.cursor = "pointer"

secondColors.appendChild(colorGray)
secondColors.appendChild(colorAqua)
secondColors.appendChild(colorBrown)
secondColors.appendChild(colorYellow)
secondColors.appendChild(colorBlack)

const hoverSizeButton = document.createElement("button")
hoverSizeButton.innerHTML = "Size Change [OFF]"
hoverSizeButton.style.fontWeight = "600"
hoverSizeButton.style.color = "rgb(203, 30, 30)"
hoverSizeButton.style.backgroundColor = "rgb(248, 197, 101)"
hoverSizeButton.style.width = "190px"
hoverSizeButton.style.cursor = "pointer"
hoverSizeButton.style.height = "30px"
hoverSizeButton.style.top = "490px"
hoverSizeButton.style.border = "none"
hoverSizeButton.style.borderRadius = "10px"
hoverSizeButton.style.position = "absolute"
hoverSizeButton.style.left = "50%"
hoverSizeButton.style.transform = "translateX(-50%)"


const sizesDiv = document.createElement("div")
sizesDiv.style.position = "absolute"
sizesDiv.style.display = "flex"
sizesDiv.style.justifyContent = "center"
sizesDiv.style.width = "100%"
sizesDiv.style.height = "40px"
sizesDiv.style.top = "530px"


const sizeBox = document.createElement("div")
const sizeBox2 = document.createElement("div")
const sizeBox3= document.createElement("div")
const sizeBox4 = document.createElement("div")

const sizeText = document.createElement("p")
const sizeText2 = document.createElement("p")
const sizeText3= document.createElement("p")
const sizeText4 = document.createElement("p")

sizeText.innerHTML = "1.1"
sizeText2.innerHTML = "1.2"
sizeText3.innerHTML = "1.3"
sizeText4.innerHTML = "1.4"

sizeText.style.userSelect = "none"
sizeText2.style.userSelect = "none"
sizeText3.style.userSelect = "none"
sizeText4.style.userSelect = "none"


sizeBox.style.width = "45px"
sizeBox.style.height = "45px"
sizeBox.style.backgroundColor = "white"
sizeBox.style.border = "2px solid"
sizeBox.style.borderRadius = "5px"
sizeBox.style.marginRight = "10px"
sizeBox.style.textAlign = "center"
sizeBox.style.cursor = "pointer"

sizeBox2.style.width = "45px"
sizeBox2.style.height = "45px"
sizeBox2.style.backgroundColor = "white"
sizeBox2.style.border = "2px solid"
sizeBox2.style.borderRadius = "5px"
sizeBox2.style.marginRight = "10px"
sizeBox2.style.textAlign = "center"
sizeBox2.style.cursor = "pointer"

sizeBox3.style.width = "45px"
sizeBox3.style.height = "45px"
sizeBox3.style.backgroundColor = "white"
sizeBox3.style.border = "2px solid"
sizeBox3.style.borderRadius = "5px"
sizeBox3.style.marginRight = "10px"
sizeBox3.style.textAlign = "center"
sizeBox3.style.cursor = "pointer"

sizeBox4.style.width = "45px"
sizeBox4.style.height = "45px"
sizeBox4.style.backgroundColor = "white"
sizeBox4.style.border = "2px solid"
sizeBox4.style.borderRadius = "5px"
sizeBox4.style.marginRight = "10px"
sizeBox4.style.textAlign = "center"
sizeBox4.style.cursor = "pointer"



sizesDiv.appendChild(sizeBox)
sizesDiv.appendChild(sizeBox2)
sizesDiv.appendChild(sizeBox3)
sizesDiv.appendChild(sizeBox4)

sizeBox.appendChild(sizeText)
sizeBox2.appendChild(sizeText2)
sizeBox3.appendChild(sizeText3)
sizeBox4.appendChild(sizeText4)



const hoverColor = document.createElement("input")
hoverColor.setAttribute("type", "color")
hoverColor.style.position = "absolute"
hoverColor.style.top = "280px"
hoverColor.style.left = "50%"
hoverColor.style.transform = "translateX(-50%)"
hoverColor.style.width = "80px"




const clickEventButton = document.createElement("button")
clickEventButton.style.fontWeight = "600"
clickEventButton.innerHTML = "Click Event [OFF]"
clickEventButton.style.color = "red"
clickEventButton.style.width = "190px"
clickEventButton.style.cursor = "pointer"
clickEventButton.style.height = "35px"
clickEventButton.style.top = "590px"
clickEventButton.style.border = "none"
clickEventButton.style.borderRadius = "10px"
clickEventButton.style.position = "absolute"
clickEventButton.style.left = "50%"
clickEventButton.style.transform = "translateX(-50%)"

const clickLinkInput = document.createElement("input")
clickLinkInput.setAttribute("type", "text")
clickLinkInput.setAttribute("placeholder", "Target Link")
clickLinkInput.style.width = "190px"
clickLinkInput.style.top = "630px"
clickLinkInput.style.position = "absolute"
clickLinkInput.style.border = "none"
clickLinkInput.style.left = "50%"
clickLinkInput.style.transform = "translateX(-50%)"

function advancedAdd() {
    thePanel.appendChild(backBtnAdv)
    thePanel.appendChild(generalText)
    thePanel.appendChild(zIndexText)
    thePanel.appendChild(zIndexInput)
    thePanel.appendChild(styleText)
    thePanel.appendChild(smoothAnim)
    thePanel.appendChild(hoverButton)
    thePanel.appendChild(hoverColorButton)
    thePanel.appendChild(colorsDiv)
    thePanel.appendChild(hoverSizeButton)
    thePanel.appendChild(sizesDiv)
    thePanel.appendChild(clickEventButton)
    thePanel.appendChild(clickLinkInput)
}


function advancedRemove() {
    if (thePanel.contains(backBtnAdv)) {
        thePanel.removeChild(backBtnAdv)
        thePanel.removeChild(generalText)
        thePanel.removeChild(zIndexText)
        thePanel.removeChild(zIndexInput)
        thePanel.removeChild(styleText)
        thePanel.removeChild(smoothAnim)
        thePanel.removeChild(hoverButton)
        thePanel.removeChild(clickEventButton)
        thePanel.removeChild(colorsDiv)
        thePanel.removeChild(hoverColorButton)
        thePanel.removeChild(hoverSizeButton)
        thePanel.removeChild(sizesDiv)
        thePanel.removeChild(clickLinkInput)
    }
    
}









