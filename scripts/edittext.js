const backBtn = document.createElement("button")
backBtn.innerHTML = "<"
backBtn.style.borderRadius = "10px"
backBtn.style.width = "80px"
backBtn.style.height = "40px"
backBtn.style.position = "sticky"
backBtn.style.top = "754px"
backBtn.style.marginRight = "220px"
backBtn.style.marginLeft = "10px"
backBtn.style.border = "none"
backBtn.style.backgroundColor = "lightblue"
backBtn.style.color = "white"
backBtn.style.fontSize = "23px"
backBtn.style.fontWeight = "700"
backBtn.style.cursor = "pointer"
backBtn.style.zIndex = "30"

const deleteBtn = document.createElement("button")
deleteBtn.style.width = "120px"
deleteBtn.style.position = "sticky"
deleteBtn.style.top = "754px"
deleteBtn.style.marginLeft = "235px"
deleteBtn.style.cursor = "pointer"
deleteBtn.style.height = "40px"
deleteBtn.style.borderRadius = "10px"
deleteBtn.innerHTML = "DELETE"
deleteBtn.style.fontWeight = "700"
deleteBtn.style.zIndex = "30"
deleteBtn.style.fontSize = "20px"
deleteBtn.style.color = "white"
deleteBtn.style.border = "none"
deleteBtn.style.backgroundColor = "red"

const centerBtn = document.createElement("button")
centerBtn.style.width = "120px"
centerBtn.style.position = "absolute"
centerBtn.style.top = "755px"
centerBtn.style.right = "140px"
centerBtn.style.cursor = "pointer"
centerBtn.style.height = "40px"
centerBtn.style.borderRadius = "10px"
centerBtn.innerHTML = "CENTER"
centerBtn.style.fontWeight = "700"
centerBtn.style.fontSize = "20px"
centerBtn.style.color = "white"
centerBtn.style.border = "none"
centerBtn.style.backgroundColor = "lightblue"

const cordinates = document.createElement("p")
cordinates.style.textAlign = "center"
cordinates.style.position = "relative"
cordinates.style.top = "-140px"
cordinates.style.color = "red"
cordinates.style.userSelect = "none"

const flexCord1 = document.createElement("div")
flexCord1.style.width = "100%"
flexCord1.style.height = "30px"
flexCord1.style.position = "absolute"
flexCord1.style.justifyContent = "center"
flexCord1.style.top = "125px"
flexCord1.style.display = "flex"

const leftInput = document.createElement("input")
leftInput.setAttribute("placeholder", "Left")
leftInput.style.width = "80px"
leftInput.style.height = "30px"
leftInput.style.position = "relative"
leftInput.style.top = "40px"
leftInput.style.marginRight = "10px"
leftInput.setAttribute("type", "number")


const topInput = document.createElement("input")
topInput.setAttribute("placeholder", "Top")
topInput.style.width = "80px"
topInput.style.height = "30px"
topInput.style.position = "relative"
topInput.style.top = "40px"
topInput.setAttribute("type", "number")

flexCord1.appendChild(leftInput)
flexCord1.appendChild(topInput)

const flexedCopyStyleText = document.createElement("div")
flexedCopyStyleText.style.display = "flex"
flexedCopyStyleText.style.position = "relative"
flexedCopyStyleText.style.justifyContent = "center"
flexedCopyStyleText.style.top = "-80px"

const copyStyleText = document.createElement("button")
copyStyleText.innerHTML = "Copy Style"
copyStyleText.style.position = "relative"
copyStyleText.style.marginRight = "20px"
copyStyleText.style.fontSize = "18px"
copyStyleText.style.color = "white"
copyStyleText.style.cursor = "pointer"
copyStyleText.style.backgroundColor = "cornflowerblue"
copyStyleText.style.width = "130px"
copyStyleText.style.height = "45px"
copyStyleText.style.fontWeight = "800"
copyStyleText.style.border = "none"
copyStyleText.style.borderRadius = "10px"
copyStyleText.classList.add("wholecopy")


const pasteStyleText = document.createElement("button")
pasteStyleText.style.position = "relative"
pasteStyleText.innerHTML = "Paste Style"
pasteStyleText.style.fontSize = "18px"
pasteStyleText.style.cursor = "pointer"
pasteStyleText.style.color = "white"
pasteStyleText.style.backgroundColor = "chocolate"
pasteStyleText.style.width =  "130px"
pasteStyleText.style.height = "45px"
pasteStyleText.style.fontWeight = "800"
pasteStyleText.style.border = "none"
pasteStyleText.style.borderRadius = "10px"
pasteStyleText.classList.add("wholecopy")



flexedCopyStyleText.appendChild(copyStyleText)
flexedCopyStyleText.appendChild(pasteStyleText)


//creating edit elements 
const changeText = document.createElement("input")
changeText.style.position = "relative"
changeText.style.top = "-140px"
changeText.style.color = "black"
changeText.style.fontWeight = "700"
changeText.style.width = "320px"
changeText.style.height = "50px"
changeText.style.fontSize = "20px"
changeText.style.left = "50%"
changeText.style.transform = "translateX(-50%)"

const fontText = document.createElement("p")
fontText.style.fontSize = "20px"
fontText.style.position = "relative"
fontText.style.top = "-90px"
fontText.style.marginLeft = "42px"
fontText.style.userSelect = "none"




const fontInput = document.createElement("input")
fontInput.setAttribute("type", "range")
fontInput.setAttribute("min", "8")
fontInput.setAttribute("max", "100")
fontInput.setAttribute("value", "16")
fontInput.style.position = "relative"
fontInput.style.top = "-110px"
fontInput.style.zIndex = "2"
fontInput .style.left = "50%"
fontInput .style.transform = "translateX(-50%)"


const flexedTextInput = document.createElement("div")
flexedTextInput.style.display = "flex"
flexedTextInput.style.position = "relative"
flexedTextInput.style.left = "60%"
flexedTextInput .style.top = "-135px"
flexedTextInput.style.transform = "translateX(-50%)"

const customTextFontSize = document.createElement("input")
customTextFontSize.setAttribute("type", "text")
customTextFontSize.setAttribute("placeholder", "font size(px)")
customTextFontSize.style.border = "2px solid"
customTextFontSize.style.width = "110px"
customTextFontSize.style.height = "40px"

const copyTextFontSize = document.createElement("button")
copyTextFontSize.innerHTML = "Copy"
copyTextFontSize.style.position = "relative"
copyTextFontSize.style.width = "70px"
copyTextFontSize.style.height = "44px"
copyTextFontSize.style.cursor = "pointer"
copyTextFontSize.style.left = "10px"
copyTextFontSize.style.top = "21px"
copyTextFontSize.style.border = "none"
copyTextFontSize.style.borderRadius = "8px"
copyTextFontSize.style.fontWeight = "700"
copyTextFontSize.style.color = "white"
copyTextFontSize.style.fontSize = "17px"
copyTextFontSize.style.backgroundColor = "orange"
copyTextFontSize.classList.add("copyhover")

const pasteTextFontSize = document.createElement("button")
pasteTextFontSize.innerHTML = "Paste"
pasteTextFontSize.style.position = "relative"
pasteTextFontSize.style.width = "70px"
pasteTextFontSize.style.height = "44px"
pasteTextFontSize.style.cursor = "pointer"
pasteTextFontSize.style.left = "25px"
pasteTextFontSize.style.border = "none"
pasteTextFontSize.style.top = "21px"
pasteTextFontSize.style.borderRadius = "8px"
pasteTextFontSize.style.fontWeight = "700"
pasteTextFontSize.style.color = "white"
pasteTextFontSize.style.fontSize = "17px"
pasteTextFontSize.style.backgroundColor = "brown"
pasteTextFontSize.classList.add("copyhover")


flexedTextInput.appendChild(customTextFontSize)
flexedTextInput.appendChild(copyTextFontSize)
flexedTextInput.appendChild(pasteTextFontSize)


const weightText = document.createElement("p")
weightText.style.fontSize = "20px"
weightText.style.position = "relative"
weightText.style.top = "-120px"
weightText.style.marginLeft = "42px"
weightText.style.userSelect = "none"

const weightInput = document.createElement("input")
weightInput.setAttribute("type", "range")
weightInput.setAttribute("min", "100")
weightInput.setAttribute("max", "600")
weightInput.setAttribute("value", "400")
weightInput.style.position = "relative"
weightInput.style.zIndex = "2"
weightInput.style.top = "-140px"
weightInput.style.left = "50%"
weightInput.style.transform = "translateX(-50%)"

const flexedTextWeightInput = document.createElement("div")
flexedTextWeightInput.style.display = "flex"
flexedTextWeightInput.style.position = "relative"
flexedTextWeightInput.style.left = "60%"
flexedTextWeightInput.style.top = "-170px"
flexedTextWeightInput.style.transform = "translateX(-50%)"

const customTextFontWeightSize = document.createElement("input")
customTextFontWeightSize.setAttribute("type", "text")
customTextFontWeightSize.setAttribute("placeholder", "font weight size(px)")
customTextFontWeightSize.style.border = "2px solid"
customTextFontWeightSize.style.width = "110px"
customTextFontWeightSize.style.height = "40px"

const copyTextFontWeightSize = document.createElement("button")
copyTextFontWeightSize.innerHTML = "Copy"
copyTextFontWeightSize.style.position = "relative"
copyTextFontWeightSize.style.width = "70px"
copyTextFontWeightSize.style.height = "44px"
copyTextFontWeightSize.style.cursor = "pointer"
copyTextFontWeightSize.style.left = "10px"
copyTextFontWeightSize.style.top = "21px"
copyTextFontWeightSize.style.border = "none"
copyTextFontWeightSize.style.borderRadius = "8px"
copyTextFontWeightSize.style.fontWeight = "700"
copyTextFontWeightSize.style.color = "white"
copyTextFontWeightSize.style.fontSize = "17px"
copyTextFontWeightSize.style.backgroundColor = "orange"
copyTextFontWeightSize.classList.add("copyhover")

const pasteTextFontWeightSize = document.createElement("button")
pasteTextFontWeightSize.innerHTML = "Paste"
pasteTextFontWeightSize.style.position = "relative"
pasteTextFontWeightSize.style.width = "70px"
pasteTextFontWeightSize.style.height = "44px"
pasteTextFontWeightSize.style.cursor = "pointer"
pasteTextFontWeightSize.style.left = "25px"
pasteTextFontWeightSize.style.border = "none"
pasteTextFontWeightSize.style.top = "21px"
pasteTextFontWeightSize.style.borderRadius = "8px"
pasteTextFontWeightSize.style.fontWeight = "700"
pasteTextFontWeightSize.style.color = "white"
pasteTextFontWeightSize.style.fontSize = "17px"
pasteTextFontWeightSize.style.backgroundColor = "brown"
pasteTextFontWeightSize.classList.add("copyhover")

flexedTextWeightInput.appendChild(customTextFontWeightSize)
flexedTextWeightInput.appendChild(copyTextFontWeightSize)
flexedTextWeightInput.appendChild(pasteTextFontWeightSize)

const fontChanger = document.createElement("div")
fontChanger.style.width = "300px"
fontChanger.style.height = "40px"
fontChanger.style.border = "1px solid"
fontChanger.style.position = "relative"
fontChanger.style.borderRadius = "5px"
fontChanger.style.top = "-135px"
fontChanger.style.left = "50%"
fontChanger.style.transform = "translateX(-50%)"
fontChanger.style.cursor = "pointer"
fontChanger.style.userSelect = "none"



const fontStyleText = document.createElement("p")
fontStyleText.style.fontSize = "12px"
fontStyleText.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
fontStyleText.style.textAlign = "center"


const flexedColorDiv = document.createElement("div")
flexedColorDiv.style.display = "flex"
flexedColorDiv.style.position = "relative"
flexedColorDiv.style.top = "-140px"
flexedColorDiv.style.left = "50%"
flexedColorDiv.style.cursor = "pointer"
flexedColorDiv.style.transform = "translateX(-50%)"

const colorInput = document.createElement("input")
colorInput.setAttribute("type", "color")
colorInput.style.position = "relative"
colorInput.style.left = "50%"
colorInput.style.cursor = "pointer"
colorInput.style.transform = "translateX(-50%)"
colorInput.style.width = "300px"

const copyTextColor = document.createElement("button")
copyTextColor.innerHTML = "C"
copyTextColor.style.position = "relative"
copyTextColor.style.width = "30px"
copyTextColor.style.height = "32px"
copyTextColor.style.cursor = "pointer"
copyTextColor.style.right = "70px"
copyTextColor.style.zIndex = "1"
copyTextColor.style.top = "24px"
copyTextColor.style.left = "-30px"
copyTextColor.style.border = "none"
copyTextColor.style.fontWeight = "700"
copyTextColor.style.color = "white"
copyTextColor.style.fontSize = "17px"
copyTextColor.style.backgroundColor = "orange"
copyTextColor.classList.add("copyhover")

const pasteTextColor = document.createElement("button")
pasteTextColor.innerHTML = "P"
pasteTextColor.style.position = "relative"
pasteTextColor.style.width = "30px"
pasteTextColor.style.top = "24px"
pasteTextColor.style.height = "32px"
pasteTextColor.style.cursor = "pointer"
pasteTextColor.style.zIndex = "1"
pasteTextColor.style.left = "-30px"
pasteTextColor.style.border = "none"
pasteTextColor.style.borderLeft = "2px solid black"
pasteTextColor.style.fontWeight = "700"
pasteTextColor.style.color = "white"
pasteTextColor.style.fontSize = "17px"
pasteTextColor.style.backgroundColor = "brown"
pasteTextColor.classList.add("copyhover")

flexedColorDiv.appendChild(colorInput)
flexedColorDiv.appendChild(copyTextColor)
flexedColorDiv.appendChild(pasteTextColor)

const outlineDiv = document.createElement("div")
outlineDiv.style.width = "100%"
outlineDiv.style.position = "relative"
outlineDiv.style.top = "-90px"
outlineDiv.style.height = "60px"
outlineDiv.style.display = "flex"
outlineDiv.style.justifyContent = "center"
outlineDiv.style.textAlign = "center"

const outlineColor = document.createElement("input")
outlineColor.setAttribute("type", "color")
outlineColor.setAttribute("value", "#FFA500")
outlineColor.style.width = "60px"
outlineColor.style.position = "relative"
outlineColor.style.top = "4px"
outlineColor.style.marginLeft = "15px"
outlineColor.style.left = "17px"
outlineColor.style.cursor = "pointer"

const outlineInput = document.createElement("input")
outlineInput.setAttribute("type", "range")
outlineInput.setAttribute("min", "0")
outlineInput.setAttribute("max", "10")
outlineInput.style.width = "110px"
outlineInput.style.position = "relative"
outlineInput.style.left = "25px"

outlineInput.style.top = "4px"



const BoxOutline = document.createElement("div")
BoxOutline.style.width = "45px"
BoxOutline.style.height = "45px"
BoxOutline.style.borderRadius = "10px"
BoxOutline.style.cursor = "pointer"
BoxOutline.style.marginLeft = "18px"
BoxOutline.style.backgroundColor = "#34363c"

const outlinetext = document.createElement("p")
outlinetext.style.position = "relative"
outlinetext.innerHTML = "O"
outlinetext.style.fontSize = "25px"
outlinetext.style.textAlign = "center"
outlinetext.style.top = "-15px"
outlinetext.style.color = "white"
outlinetext.style.userSelect = "none"

outlineDiv.appendChild(BoxOutline)
BoxOutline.appendChild(outlinetext)
outlineDiv.appendChild(outlineColor)
outlineDiv.appendChild(outlineInput)

const flexedDiv = document.createElement("div")
flexedDiv.style.display = "flex"
flexedDiv.style.justifyContent = "center"
flexedDiv.style.width = "100%"
flexedDiv.style.height = "80px"
flexedDiv.style.top = "-80px"
flexedDiv.style.position = "relative"



const Box1 = document.createElement("div")
Box1.style.width = "45px"
Box1.style.height = "45px"
Box1.style.marginRight = "40px"
Box1.style.borderRadius = "10px"
Box1.style.cursor = "pointer"
Box1.style.backgroundColor = "#34363c"

const Box2 = document.createElement("div")
Box2.style.width = "45px"
Box2.style.height = "45px"
Box2.style.marginRight = "40px"
Box2.style.borderRadius = "10px"
Box2.style.cursor = "pointer"
Box2.style.backgroundColor = "#34363c"

const Box3 = document.createElement("div")
Box3.style.width = "45px"
Box3.style.height = "45px"
Box3.style.borderRadius = "10px"
Box3.style.cursor = "pointer"
Box3.style.backgroundColor = "#34363c"

const boxtext1 = document.createElement("p")
boxtext1.style.position = "relative"
boxtext1.innerHTML = "U"
boxtext1.style.fontSize = "25px"
boxtext1.style.textAlign = "center"
boxtext1.style.top = "-15px"
boxtext1.style.color = "white"
boxtext1.style.userSelect = "none"

const boxtext2 = document.createElement("p")
boxtext2.style.position = "relative"
boxtext2.innerHTML = "I"
boxtext2.style.fontStyle = "italic"
boxtext2.style.fontSize = "25px"
boxtext2.style.textAlign = "center"
boxtext2.style.top = "-15px"
boxtext2.style.color = "white"
boxtext2.style.userSelect = "none"

const boxtext3 = document.createElement("p")
boxtext3.style.position = "relative"
boxtext3.innerHTML = "P"
boxtext3.style.textDecoration = "underline"
boxtext3.style.fontSize = "25px"
boxtext3.style.textAlign = "center"
boxtext3.style.top = "-15px"
boxtext3.style.color = "white"
boxtext3.style.userSelect = "none"

//outside appending
flexedDiv.appendChild(Box1)
flexedDiv.appendChild(Box2)
flexedDiv.appendChild(Box3)

Box1.appendChild(boxtext1)
Box2.appendChild(boxtext2)
Box3.appendChild(boxtext3)

var styleSettings1 = document.createElement("button")
styleSettings1.style.position = "absolute"
styleSettings1.style.top = "5px"
styleSettings1.style.fontSize = "30px"
styleSettings1.style.backgroundColor = "#ffffff00"
styleSettings1.style.border = "none"
styleSettings1.style.cursor = "pointer"
styleSettings1.style.left = "50%"
styleSettings1.style.transform = "translateX(-50%)"
styleSettings1.innerHTML = "⚙️"

var advancedSettings1 = document.createElement("button")
advancedSettings1.style.position = "absolute"
advancedSettings1.style.top = "5px"
advancedSettings1.style.fontSize = "30px"
advancedSettings1.style.backgroundColor = "#ffffff00"
advancedSettings1.style.border = "none"
advancedSettings1.style.cursor = "pointer"
advancedSettings1.style.left = "50%"
advancedSettings1.style.transform = "translateX(-50%)"
advancedSettings1.innerHTML = "⚙️"


//handle appends
function addToPanel() {
    thePanel.appendChild(deleteBtn)
    thePanel.appendChild(backBtn)
    thePanel.appendChild(changeText)
    thePanel.appendChild(cordinates)
    thePanel.appendChild(flexedCopyStyleText)
    thePanel.appendChild(fontText)
    thePanel.appendChild(fontInput)
    thePanel.appendChild(flexedTextInput)
    thePanel.appendChild(weightText)
    thePanel.appendChild(weightInput)
    thePanel.appendChild(flexedTextWeightInput)
    thePanel.appendChild(fontChanger)
    thePanel.appendChild(flexedColorDiv)
    thePanel.appendChild(flexedDiv)
    thePanel.appendChild(outlineDiv)
    thePanel.appendChild(flexCord1)
    thePanel.appendChild(styleSettings1)
    thePanel.appendChild(advancedSettings1)
   

    fontChanger.appendChild(fontStyleText)


}

function removeToPanel() {
    if(thePanel.contains(changeText)) {
        thePanel.removeChild(changeText)
        thePanel.removeChild(cordinates)
        thePanel.removeChild(fontText)
        thePanel.removeChild(fontInput)
        thePanel.removeChild(weightText)
        thePanel.removeChild(weightInput)
        thePanel.removeChild(flexedCopyStyleText)
        thePanel.removeChild(fontChanger)
        thePanel.removeChild(flexedColorDiv)
        thePanel.removeChild(flexedTextInput)
        thePanel.removeChild(deleteBtn)
        thePanel.removeChild(flexedTextWeightInput)
        thePanel.removeChild(flexedDiv)
        thePanel.removeChild(outlineDiv)
        thePanel.removeChild(flexCord1)
        thePanel.removeChild(backBtn)
        thePanel.removeChild(styleSettings1)
        thePanel.removeChild(advancedSettings1)
    }

    if (fontChanger.hasChildNodes("fontStyleText1", "fontStyleText2")) {
        fontChanger.style.overflow = "hidden"
        fontChanger.style.height = "40px"
        fontStyleText.style.fontSize = "12px"
        fontChanger.style.cursor = "pointer"
        fontStyleText.style.cursor = "cursor"

    }
}

fontChanger.addEventListener("click", toggleFonts)

function toggleFonts() {
    fontChanger.classList.add("toggledfonts")
    fontChanger.style.overflow = "auto"
    fontChanger.style.height = "130px"
    fontChanger.style.cursor = "default"
    fontStyleText.style.fontSize = "0px"

    fontChanger.appendChild(fontStyleText1)
    fontChanger.appendChild(fontStyleText2)
    fontChanger.appendChild(fontStyleText3)
    fontChanger.appendChild(fontStyleText4)
    fontChanger.appendChild(fontStyleText5)
    fontChanger.appendChild(fontStyleText6)
    

    setTimeout(() => {
        fontStyleText1.addEventListener("click", closeFonts)
        fontStyleText2.addEventListener("click", closeFonts)
        fontStyleText3.addEventListener("click", closeFonts)
        fontStyleText4.addEventListener("click", closeFonts)
        fontStyleText5.addEventListener("click", closeFonts)
        fontStyleText6.addEventListener("click", closeFonts)
    }, 1);


}


function closeFonts() {
    fontChanger.style.overflow = "hidden"
    fontChanger.removeEventListener("click", toggleFonts)
    if (fontChanger.classList.contains("toggledfonts")) {
        fontChanger.removeChild(fontStyleText1)
        fontChanger.removeChild(fontStyleText2)
        fontChanger.removeChild(fontStyleText3)
        fontChanger.removeChild(fontStyleText4)
        fontChanger.removeChild(fontStyleText5)
        fontChanger.removeChild(fontStyleText6)

        setTimeout(() => {
        fontChanger.classList.remove("toggledfonts")
        }, 1);
      
       
    }
    fontChanger.style.height = "40px"
    fontStyleText.style.fontSize = "12px"
    fontChanger.style.cursor = "pointer"
    fontStyleText.style.cursor = "cursor"

    setTimeout(() => {
        fontChanger.addEventListener("click", toggleFonts)
        fontStyleText1.removeEventListener("click", closeFonts)
        fontStyleText2.removeEventListener("click", closeFonts)
        fontStyleText3.removeEventListener("click", closeFonts)
        fontStyleText4.removeEventListener("click", closeFonts)
        fontStyleText5.removeEventListener("click", closeFonts)
        fontStyleText6.removeEventListener("click", closeFonts)
    }, 1);


}

