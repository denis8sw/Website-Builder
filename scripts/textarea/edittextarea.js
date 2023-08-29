const backBtn4 = document.createElement("button")
backBtn4.innerHTML = "<"
backBtn4.style.borderRadius = "10px"
backBtn4.style.width = "80px"
backBtn4.style.height = "40px"
backBtn4.style.position = "sticky"
backBtn4.style.top = "754px"
backBtn4.style.marginRight = "220px"
backBtn4.style.marginLeft = "10px"
backBtn4.style.border = "none"
backBtn4.style.backgroundColor = "lightblue"
backBtn4.style.color = "white"
backBtn4.style.fontSize = "23px"
backBtn4.style.fontWeight = "700"
backBtn4.style.cursor = "pointer"
backBtn4.style.zIndex = "30"



const deleteBtn4 = document.createElement("button")
deleteBtn4.style.width = "120px"
deleteBtn4.style.position = "sticky"
deleteBtn4.style.top = "754px"
deleteBtn4.style.marginLeft = "235px"
deleteBtn4.style.cursor = "pointer"
deleteBtn4.style.height = "40px"
deleteBtn4.style.borderRadius = "10px"
deleteBtn4.innerHTML = "DELETE"
deleteBtn4.style.fontWeight = "700"
deleteBtn4.style.zIndex = "30"
deleteBtn4.style.fontSize = "20px"
deleteBtn4.style.color = "white"
deleteBtn4.style.border = "none"
deleteBtn4.style.backgroundColor = "red"

const changeText4 = document.createElement("textarea")
changeText4.style.position = "relative"
changeText4.style.resize = "none"
changeText4.style.top = "-140px"
changeText4.style.outline = "none"
changeText4.style.width = "320px"
changeText4.style.height = "150px"
changeText4.style.border = "2px solid rgb(154, 154, 154)"
changeText4.style.fontSize = "12px"
changeText4.style.left = "50%"
changeText4.style.transform = "translateX(-50%)"

const cordinates4 = document.createElement("p")
cordinates4.innerHTML = "2321 311"
cordinates4.style.textAlign = "center"
cordinates4.style.position = "relative"
cordinates4.style.top = "-140px"
cordinates4.style.color = "red"
cordinates4.style.userSelect = "none"

const flexCord4 = document.createElement("div")
flexCord4.style.width = "100%"
flexCord4.style.height = "30px"
flexCord4.style.position = "absolute"
flexCord4.style.justifyContent = "center"
flexCord4.style.top = "240px"
flexCord4.style.display = "flex"

const leftInput4= document.createElement("input")
leftInput4.setAttribute("placeholder", "Left")
leftInput4.style.width = "80px"
leftInput4.style.height = "30px"
leftInput4.style.position = "relative"
leftInput4.style.top = "40px"
leftInput4.style.marginRight = "10px"
leftInput4.setAttribute("type", "number")


const topInput4 = document.createElement("input")
topInput4.setAttribute("placeholder", "Top")
topInput4.style.width = "80px"
topInput4.style.height = "30px"
topInput4.style.position = "relative"
topInput4.style.top = "40px"
topInput4.setAttribute("type", "number")

flexCord4.appendChild(leftInput4)
flexCord4.appendChild(topInput4)

const flexedCopyStyleTextArea = document.createElement("div")
flexedCopyStyleTextArea.style.display = "flex"
flexedCopyStyleTextArea.style.position = "relative"
flexedCopyStyleTextArea.style.justifyContent = "center"
flexedCopyStyleTextArea.style.top = "-80px"

const copyStyleTextArea = document.createElement("button")
copyStyleTextArea.innerHTML = "Copy Style"
copyStyleTextArea.style.position = "relative"
copyStyleTextArea.style.marginRight = "20px"
copyStyleTextArea.style.fontSize = "18px"
copyStyleTextArea.style.color = "white"
copyStyleTextArea.style.cursor = "pointer"
copyStyleTextArea.style.backgroundColor = "cornflowerblue"
copyStyleTextArea.style.width = "130px"
copyStyleTextArea.style.height = "45px"
copyStyleTextArea.style.fontWeight = "800"
copyStyleTextArea.style.border = "none"
copyStyleTextArea.style.borderRadius = "10px"
copyStyleTextArea.classList.add("wholecopy")


const pasteStyleTextArea = document.createElement("button")
pasteStyleTextArea.style.position = "relative"
pasteStyleTextArea.innerHTML = "Paste Style"
pasteStyleTextArea.style.fontSize = "18px"
pasteStyleTextArea.style.cursor = "pointer"
pasteStyleTextArea.style.color = "white"
pasteStyleTextArea.style.backgroundColor = "chocolate"
pasteStyleTextArea.style.width =  "130px"
pasteStyleTextArea.style.height = "45px"
pasteStyleTextArea.style.fontWeight = "800"
pasteStyleTextArea.style.border = "none"
pasteStyleTextArea.style.borderRadius = "10px"
pasteStyleTextArea.classList.add("wholecopy")



flexedCopyStyleTextArea.appendChild(copyStyleTextArea)
flexedCopyStyleTextArea.appendChild(pasteStyleTextArea)

const widthText4 = document.createElement("p")
widthText4.innerHTML = "Width: "
widthText4.style.fontSize = "20px"
widthText4.style.position = "relative"
widthText4.style.top = "-80px"
widthText4.style.marginLeft = "41px"
widthText4.style.userSelect = "none"


const widthInput4 = document.createElement("input")
widthInput4.setAttribute("type", "range")
widthInput4.setAttribute("min", "10")
widthInput4.setAttribute("max", "600")
widthInput4.setAttribute("value", "320")
widthInput4.style.zIndex = "2"
widthInput4.style.position = "relative"
widthInput4.style.top = "-100px"
widthInput4.style.left = "50%"
widthInput4.style.cursor = "pointer"
widthInput4.style.transform = "translateX(-50%)"

const flexedCustomWidth = document.createElement("div")
flexedCustomWidth.style.display = "flex"
flexedCustomWidth.style.position = "relative"
flexedCustomWidth.style.top = "-125px"
flexedCustomWidth.style.left = "60%"
flexedCustomWidth.style.transform = "translateX(-50%)"


const customTextAreaWidth = document.createElement("input")
customTextAreaWidth.setAttribute("type", "text")
customTextAreaWidth.setAttribute("placeholder", "width size(px)")
customTextAreaWidth.style.border = "2px solid"
customTextAreaWidth.style.width = "110px"
customTextAreaWidth.style.height = "40px"

const copyTextAreaWidth = document.createElement("button")
copyTextAreaWidth.innerHTML = "Copy"
copyTextAreaWidth.style.position = "relative"
copyTextAreaWidth.style.width = "70px"
copyTextAreaWidth.style.height = "44px"
copyTextAreaWidth.style.cursor = "pointer"
copyTextAreaWidth.style.left = "10px"
copyTextAreaWidth.style.top = "21px"
copyTextAreaWidth.style.border = "none"
copyTextAreaWidth.style.borderRadius = "8px"
copyTextAreaWidth.style.fontWeight = "700"
copyTextAreaWidth.style.color = "white"
copyTextAreaWidth.style.fontSize = "17px"
copyTextAreaWidth.style.backgroundColor = "orange"
copyTextAreaWidth.classList.add("copyhover")

const pasteTextAreaWidth = document.createElement("button")
pasteTextAreaWidth.innerHTML = "Paste"
pasteTextAreaWidth.style.position = "relative"
pasteTextAreaWidth.style.width = "70px"
pasteTextAreaWidth.style.height = "44px"
pasteTextAreaWidth.style.cursor = "pointer"
pasteTextAreaWidth.style.left = "25px"
pasteTextAreaWidth.style.border = "none"
pasteTextAreaWidth.style.top = "21px"
pasteTextAreaWidth.style.borderRadius = "8px"
pasteTextAreaWidth.style.fontWeight = "700"
pasteTextAreaWidth.style.color = "white"
pasteTextAreaWidth.style.fontSize = "17px"
pasteTextAreaWidth.style.backgroundColor = "brown"
pasteTextAreaWidth.classList.add("copyhover")

flexedCustomWidth.appendChild(customTextAreaWidth)
flexedCustomWidth.appendChild(copyTextAreaWidth)
flexedCustomWidth.appendChild(pasteTextAreaWidth)


const heightText4 = document.createElement("p")
heightText4.innerHTML = "Height: "
heightText4.style.fontSize = "20px"
heightText4.style.position = "relative"
heightText4.style.top = "-110px"
heightText4.style.marginLeft = "41px"
heightText4.style.userSelect = "none"


const heightInput4 = document.createElement("input")
heightInput4.setAttribute("type", "range")
heightInput4.setAttribute("min", "10")
heightInput4.setAttribute("max", "600")
heightInput4.setAttribute("value", "320")
heightInput4.style.position = "relative"
heightInput4.style.top = "-130px"
heightInput4.style.left = "50%"
heightInput4.style.cursor = "pointer"
heightInput4.style.zIndex = "2"
heightInput4.style.transform = "translateX(-50%)"

const flexedCustomHeight = document.createElement("div")
flexedCustomHeight .style.display = "flex"
flexedCustomHeight .style.position = "relative"
flexedCustomHeight .style.top = "-155px"
flexedCustomHeight .style.left = "60%"
flexedCustomHeight .style.transform = "translateX(-50%)"


const customTextAreaHeight = document.createElement("input")
customTextAreaHeight.setAttribute("type", "text")
customTextAreaHeight.setAttribute("placeholder", "height size(px)")
customTextAreaHeight.style.border = "2px solid"
customTextAreaHeight.style.width = "110px"
customTextAreaHeight.style.height = "40px"

const copyTextAreaHeight = document.createElement("button")
copyTextAreaHeight.innerHTML = "Copy"
copyTextAreaHeight.style.position = "relative"
copyTextAreaHeight.style.width = "70px"
copyTextAreaHeight.style.height = "44px"
copyTextAreaHeight.style.cursor = "pointer"
copyTextAreaHeight.style.left = "10px"
copyTextAreaHeight.style.top = "21px"
copyTextAreaHeight.style.border = "none"
copyTextAreaHeight.style.borderRadius = "8px"
copyTextAreaHeight.style.fontWeight = "700"
copyTextAreaHeight.style.color = "white"
copyTextAreaHeight.style.fontSize = "17px"
copyTextAreaHeight.style.backgroundColor = "orange"
copyTextAreaHeight.classList.add("copyhover")

const pasteTextAreaHeight = document.createElement("button")
pasteTextAreaHeight.innerHTML = "Paste"
pasteTextAreaHeight.style.position = "relative"
pasteTextAreaHeight.style.width = "70px"
pasteTextAreaHeight.style.height = "44px"
pasteTextAreaHeight.style.cursor = "pointer"
pasteTextAreaHeight.style.left = "25px"
pasteTextAreaHeight.style.border = "none"
pasteTextAreaHeight.style.top = "21px"
pasteTextAreaHeight.style.borderRadius = "8px"
pasteTextAreaHeight.style.fontWeight = "700"
pasteTextAreaHeight.style.color = "white"
pasteTextAreaHeight.style.fontSize = "17px"
pasteTextAreaHeight.style.backgroundColor = "brown"
pasteTextAreaHeight.classList.add("copyhover")

flexedCustomHeight.appendChild(customTextAreaHeight)
flexedCustomHeight.appendChild(copyTextAreaHeight)
flexedCustomHeight.appendChild(pasteTextAreaHeight)



const fontText4 = document.createElement("p")
fontText4.innerHTML = "Font Size: "
fontText4.style.fontSize = "20px"
fontText4.style.position = "relative"
fontText4.style.top = "-140px"
fontText4.style.marginLeft = "41px"
fontText4.style.userSelect = "none"


const fontInput4 = document.createElement("input")
fontInput4.setAttribute("type", "range")
fontInput4.setAttribute("min", "8")
fontInput4.setAttribute("max", "100")
fontInput4.setAttribute("value", "16")
fontInput4.style.position = "relative"
fontInput4.style.top = "-160px"
fontInput4.style.left = "50%"
fontInput4.style.zIndex = "2"
fontInput4.style.cursor = "pointer"
fontInput4.style.transform = "translateX(-50%)"

const flexedCustomFont = document.createElement("div")
flexedCustomFont.style.display = "flex"
flexedCustomFont.style.position = "relative"
flexedCustomFont.style.top = "-180px"
flexedCustomFont.style.left = "60%"
flexedCustomFont.style.transform = "translateX(-50%)"


const customTextAreaFont = document.createElement("input")
customTextAreaFont.setAttribute("type", "text")
customTextAreaFont.setAttribute("placeholder", "font size(px)")
customTextAreaFont.style.border = "2px solid"
customTextAreaFont.style.width = "110px"
customTextAreaFont.style.height = "40px"

const copyTextAreaFont = document.createElement("button")
copyTextAreaFont.innerHTML = "Copy"
copyTextAreaFont.style.position = "relative"
copyTextAreaFont.style.width = "70px"
copyTextAreaFont.style.height = "44px"
copyTextAreaFont.style.cursor = "pointer"
copyTextAreaFont.style.left = "10px"
copyTextAreaFont.style.top = "21px"
copyTextAreaFont.style.border = "none"
copyTextAreaFont.style.borderRadius = "8px"
copyTextAreaFont.style.fontWeight = "700"
copyTextAreaFont.style.color = "white"
copyTextAreaFont.style.fontSize = "17px"
copyTextAreaFont.style.backgroundColor = "orange"
copyTextAreaFont.classList.add("copyhover")

const pasteTextAreaFont = document.createElement("button")
pasteTextAreaFont.innerHTML = "Paste"
pasteTextAreaFont.style.position = "relative"
pasteTextAreaFont.style.width = "70px"
pasteTextAreaFont.style.height = "44px"
pasteTextAreaFont.style.cursor = "pointer"
pasteTextAreaFont.style.left = "25px"
pasteTextAreaFont.style.border = "none"
pasteTextAreaFont.style.top = "21px"
pasteTextAreaFont.style.borderRadius = "8px"
pasteTextAreaFont.style.fontWeight = "700"
pasteTextAreaFont.style.color = "white"
pasteTextAreaFont.style.fontSize = "17px"
pasteTextAreaFont.style.backgroundColor = "brown"
pasteTextAreaFont.classList.add("copyhover")

flexedCustomFont.appendChild(customTextAreaFont)
flexedCustomFont.appendChild(copyTextAreaFont)
flexedCustomFont.appendChild(pasteTextAreaFont)

const weightText4 = document.createElement("p")
weightText4.innerHTML = "Font Weight: "
weightText4.style.fontSize = "20px"
weightText4.style.position = "relative"
weightText4.style.top = "-170px"
weightText4.style.marginLeft = "41px"
weightText4.style.userSelect = "none"


const weightInput4 = document.createElement("input")
weightInput4.setAttribute("type", "range")
weightInput4.setAttribute("min", "100")
weightInput4.setAttribute("max", "800")
weightInput4.setAttribute("value", "400")
weightInput4.style.position = "relative"
weightInput4.style.top = "-180px"
weightInput4.style.zIndex = "2"
weightInput4.style.left = "50%"
weightInput4.style.cursor = "pointer"
weightInput4.style.transform = "translateX(-50%)"

const flexedCustomWeight = document.createElement("div")
flexedCustomWeight.style.display = "flex"
flexedCustomWeight.style.position = "relative"
flexedCustomWeight.style.top = "-205px"
flexedCustomWeight.style.left = "60%"
flexedCustomWeight.style.transform = "translateX(-50%)"


const customTextAreaWeight = document.createElement("input")
customTextAreaWeight.setAttribute("type", "text")
customTextAreaWeight.setAttribute("placeholder", "font weight(px)")
customTextAreaWeight.style.border = "2px solid"
customTextAreaWeight.style.width = "110px"
customTextAreaWeight.style.height = "40px"

const copyTextAreaWeight = document.createElement("button")
copyTextAreaWeight.innerHTML = "Copy"
copyTextAreaWeight.style.position = "relative"
copyTextAreaWeight.style.width = "70px"
copyTextAreaWeight.style.height = "44px"
copyTextAreaWeight.style.cursor = "pointer"
copyTextAreaWeight.style.left = "10px"
copyTextAreaWeight.style.top = "21px"
copyTextAreaWeight.style.border = "none"
copyTextAreaWeight.style.borderRadius = "8px"
copyTextAreaWeight.style.fontWeight = "700"
copyTextAreaWeight.style.color = "white"
copyTextAreaWeight.style.fontSize = "17px"
copyTextAreaWeight.style.backgroundColor = "orange"
copyTextAreaWeight.classList.add("copyhover")

const pasteTextAreaWeight = document.createElement("button")
pasteTextAreaWeight.innerHTML = "Paste"
pasteTextAreaWeight.style.position = "relative"
pasteTextAreaWeight.style.width = "70px"
pasteTextAreaWeight.style.height = "44px"
pasteTextAreaWeight.style.cursor = "pointer"
pasteTextAreaWeight.style.left = "25px"
pasteTextAreaWeight.style.border = "none"
pasteTextAreaWeight.style.top = "21px"
pasteTextAreaWeight.style.borderRadius = "8px"
pasteTextAreaWeight.style.fontWeight = "700"
pasteTextAreaWeight.style.color = "white"
pasteTextAreaWeight.style.fontSize = "17px"
pasteTextAreaWeight.style.backgroundColor = "brown"
pasteTextAreaWeight.classList.add("copyhover")

flexedCustomWeight.appendChild(customTextAreaWeight)
flexedCustomWeight.appendChild(copyTextAreaWeight)
flexedCustomWeight.appendChild(pasteTextAreaWeight)

const flexedTextAreaColor = document.createElement("div")
flexedTextAreaColor.style.display = "flex"
flexedTextAreaColor.style.position = "relative"
flexedTextAreaColor.style.top = "-170px"
flexedTextAreaColor.style.left = "50%"
flexedTextAreaColor.style.transform = "translateX(-50%)"


const colorInput8 = document.createElement("input")
colorInput8.setAttribute("type", "color")
colorInput8.setAttribute("value", "400")
colorInput8.style.position = "relative"
colorInput8.style.left = "50%"
colorInput8.style.cursor = "pointer"
colorInput8.style.width = "300px"
colorInput8.style.transform = "translateX(-50%)"

const copyTextAreaColor = document.createElement("button")
copyTextAreaColor.innerHTML = "C"
copyTextAreaColor.style.position = "relative"
copyTextAreaColor.style.width = "30px"
copyTextAreaColor.style.height = "32px"
copyTextAreaColor.style.cursor = "pointer"
copyTextAreaColor.style.right = "70px"
copyTextAreaColor.style.zIndex = "1"
copyTextAreaColor.style.top = "24px"
copyTextAreaColor.style.left = "-30px"
copyTextAreaColor.style.border = "none"
copyTextAreaColor.style.fontWeight = "700"
copyTextAreaColor.style.color = "white"
copyTextAreaColor.style.fontSize = "17px"
copyTextAreaColor.style.backgroundColor = "orange"
copyTextAreaColor.classList.add("copyhover")

const pasteTextAreaColor = document.createElement("button")
pasteTextAreaColor.innerHTML = "P"
pasteTextAreaColor.style.position = "relative"
pasteTextAreaColor.style.width = "30px"
pasteTextAreaColor.style.top = "24px"
pasteTextAreaColor.style.height = "32px"
pasteTextAreaColor.style.cursor = "pointer"
pasteTextAreaColor.style.zIndex = "1"
pasteTextAreaColor.style.left = "-30px"
pasteTextAreaColor.style.border = "none"
pasteTextAreaColor.style.borderLeft = "2px solid black"
pasteTextAreaColor.style.fontWeight = "700"
pasteTextAreaColor.style.color = "white"
pasteTextAreaColor.style.fontSize = "17px"
pasteTextAreaColor.style.backgroundColor = "brown"
pasteTextAreaColor.classList.add("copyhover")

flexedTextAreaColor.appendChild(colorInput8)
flexedTextAreaColor.appendChild(copyTextAreaColor)
flexedTextAreaColor.appendChild(pasteTextAreaColor)


var advancedSettings3 = document.createElement("button")
advancedSettings3.style.position = "absolute"
advancedSettings3.style.top = "5px"
advancedSettings3.style.fontSize = "30px"
advancedSettings3.style.backgroundColor = "#ffffff00"
advancedSettings3.style.border = "none"
advancedSettings3.style.cursor = "pointer"
advancedSettings3.style.left = "50%"
advancedSettings3.style.transform = "translateX(-50%)"
advancedSettings3.innerHTML = "⚙️"

const fontChanger3 = document.createElement("div")
fontChanger3.style.width = "300px"
fontChanger3.style.height = "40px"
fontChanger3.style.border = "1px solid"
fontChanger3.style.position = "relative"
fontChanger3.style.borderRadius = "5px"
fontChanger3.style.top = "-170px"
fontChanger3.style.left = "50%"
fontChanger3.style.transform = "translateX(-50%)"
fontChanger3.style.cursor = "pointer"
fontChanger3.style.userSelect = "none"

const fontStyleText32 = document.createElement("p")
fontStyleText32.innerHTML = "Font"
fontStyleText32.style.fontSize = "12px"
fontStyleText32.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
fontStyleText32.style.textAlign = "center"
fontStyleText32.innerHTML = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
fontStyleText32.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"

fontChanger3.appendChild(fontStyleText32)


function addToPanel4() {
    thePanel.appendChild(deleteBtn4)
    thePanel.appendChild(backBtn4)
    thePanel.appendChild(changeText4)
    thePanel.appendChild(cordinates4)
    thePanel.appendChild(flexCord4)
    thePanel.appendChild(flexedCopyStyleTextArea)
    thePanel.appendChild(widthText4)
    thePanel.appendChild(widthInput4)
    thePanel.appendChild(flexedCustomWidth)
    thePanel.appendChild(heightText4)
    thePanel.appendChild(heightInput4)
    thePanel.appendChild(flexedCustomHeight)
    thePanel.appendChild(fontText4)
    thePanel.appendChild(fontInput4)
    thePanel.appendChild(flexedCustomFont)
    thePanel.appendChild(weightText4)
    thePanel.appendChild(weightInput4)
    thePanel.appendChild(flexedCustomWeight)
    thePanel.appendChild(fontChanger3)
    thePanel.appendChild(flexedTextAreaColor)
    thePanel.appendChild(advancedSettings3)

    
}

function removeToPanel4() {
    if(thepanel.contains(deleteBtn4)) {
        thePanel.removeChild(deleteBtn4)
        thePanel.removeChild(backBtn4)
        thePanel.removeChild(changeText4)
        thePanel.removeChild(cordinates4)
        thePanel.removeChild(flexCord4)
        thePanel.removeChild(flexedCopyStyleTextArea)
        thePanel.removeChild(widthText4)
        thePanel.removeChild(widthInput4)
        thePanel.removeChild(heightText4)
        thePanel.removeChild(heightInput4)
        thePanel.removeChild(fontText4)
        thePanel.removeChild(flexedCustomFont)
        thePanel.removeChild(fontInput4)
        thePanel.removeChild(flexedCustomWidth)
        thePanel.removeChild(flexedCustomHeight)
        thePanel.removeChild(weightText4)
        thePanel.removeChild(weightInput4)
        thePanel.removeChild(fontChanger3)
        thePanel.removeChild(flexedCustomWeight)
        thePanel.removeChild(flexedTextAreaColor)
        thePanel.removeChild(advancedSettings3)
    }
 
}


fontChanger3.addEventListener("click", toggleFonts3)

function toggleFonts3() {
    fontChanger3.classList.add("toggledfonts")
    fontChanger3.style.overflow = "auto"
    fontChanger3.style.height = "130px"
    fontChanger3.style.cursor = "default"
    fontStyleText32.style.fontSize = "0px"

    fontChanger3.appendChild(fontStyleButton11)
    fontChanger3.appendChild(fontStyleButton22)
    fontChanger3.appendChild(fontStyleButton33)
    fontChanger3.appendChild(fontStyleButton44)
    fontChanger3.appendChild(fontStyleButton55)
    fontChanger3.appendChild(fontStyleButton66)


    setTimeout(() => {
        fontStyleButton11.addEventListener("click", closeFonts3)
        fontStyleButton22.addEventListener("click", closeFonts3)
        fontStyleButton33.addEventListener("click", closeFonts3)
        fontStyleButton44.addEventListener("click", closeFonts3)
        fontStyleButton55.addEventListener("click", closeFonts3)
        fontStyleButton66.addEventListener("click", closeFonts3)
    }, 1);


}


function closeFonts3() {
    fontChanger3.style.overflow = "hidden"
    fontChanger3.removeEventListener("click", toggleFonts3)
    if (fontChanger3.classList.contains("toggledfonts")) {
        if (fontChanger3.contains(fontStyleButton11)) {
            fontChanger3.removeChild(fontStyleButton11)
            fontChanger3.removeChild(fontStyleButton22)
            fontChanger3.removeChild(fontStyleButton33)
            fontChanger3.removeChild(fontStyleButton44)
            fontChanger3.removeChild(fontStyleButton55)
            fontChanger3.removeChild(fontStyleButton66)
        }


        setTimeout(() => {
            fontChanger3.classList.remove("toggledfonts")
        }, 1);


    }
    fontChanger3.style.height = "40px"
    fontStyleText32.style.fontSize = "12px"
    fontChanger3.style.cursor = "pointer"
    fontStyleText32.style.cursor = "cursor"

    setTimeout(() => {
        fontChanger3.addEventListener("click", toggleFonts3)
        fontStyleButton11.removeEventListener("click", closeFonts3)
        fontStyleButton22.removeEventListener("click", closeFonts3)
        fontStyleButton33.removeEventListener("click", closeFonts3)
        fontStyleButton44.removeEventListener("click", closeFonts3)
        fontStyleButton55.removeEventListener("click", closeFonts3)
        fontStyleButton66.removeEventListener("click", closeFonts3)
    }, 1);


}

