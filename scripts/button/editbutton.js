const backBtn2 = document.createElement("button")
backBtn2.innerHTML = "<"
backBtn2.style.borderRadius = "10px"
backBtn2.style.width = "80px"
backBtn2.style.height = "40px"
backBtn2.style.position = "sticky"
backBtn2.style.top = "754px"
backBtn2.style.marginRight = "220px"
backBtn2.style.marginLeft = "10px"
backBtn2.style.border = "none"
backBtn2.style.backgroundColor = "lightblue"
backBtn2.style.color = "white"
backBtn2.style.fontSize = "23px"
backBtn2.style.fontWeight = "700"
backBtn2.style.cursor = "pointer"
backBtn2.style.zIndex = "30"



const deleteBtn2 = document.createElement("button")
deleteBtn2.style.width = "120px"
deleteBtn2.style.position = "sticky"
deleteBtn2.style.top = "754px"
deleteBtn2.style.marginLeft = "235px"
deleteBtn2.style.cursor = "pointer"
deleteBtn2.style.height = "40px"
deleteBtn2.style.borderRadius = "10px"
deleteBtn2.innerHTML = "DELETE"
deleteBtn2.style.fontWeight = "700"
deleteBtn2.style.zIndex = "30"
deleteBtn2.style.fontSize = "20px"
deleteBtn2.style.color = "white"
deleteBtn2.style.border = "none"
deleteBtn2.style.backgroundColor = "red"

const flexedCopyStyleButton = document.createElement("div")
flexedCopyStyleButton.style.display = "flex"
flexedCopyStyleButton.style.position = "relative"
flexedCopyStyleButton.style.justifyContent = "center"
flexedCopyStyleButton.style.top = "-80px"

const copyStyleButton = document.createElement("button")
copyStyleButton.innerHTML = "Copy Style"
copyStyleButton.style.position = "relative"
copyStyleButton.style.marginRight = "20px"
copyStyleButton.style.fontSize = "18px"
copyStyleButton.style.color = "white"
copyStyleButton.style.cursor = "pointer"
copyStyleButton.style.backgroundColor = "cornflowerblue"
copyStyleButton.style.width = "130px"
copyStyleButton.style.height = "45px"
copyStyleButton.style.fontWeight = "800"
copyStyleButton.style.border = "none"
copyStyleButton.style.borderRadius = "10px"
copyStyleButton.classList.add("wholecopy")


const pasteStyleButton = document.createElement("button")
pasteStyleButton.style.position = "relative"
pasteStyleButton.innerHTML = "Paste Style"
pasteStyleButton.style.fontSize = "18px"
pasteStyleButton.style.cursor = "pointer"
pasteStyleButton.style.color = "white"
pasteStyleButton.style.backgroundColor = "chocolate"
pasteStyleButton.style.width =  "130px"
pasteStyleButton.style.height = "45px"
pasteStyleButton.style.fontWeight = "800"
pasteStyleButton.style.border = "none"
pasteStyleButton.style.borderRadius = "10px"
pasteStyleButton.classList.add("wholecopy")



flexedCopyStyleButton.appendChild(copyStyleButton)
flexedCopyStyleButton.appendChild(pasteStyleButton)

const changeText2 = document.createElement("input")
changeText2.style.position = "relative"
changeText2.style.top = "-140px"
changeText2.style.color = "black"
changeText2.style.fontWeight = "700"
changeText2.style.width = "320px"
changeText2.style.height = "50px"
changeText2.style.fontSize = "20px"
changeText2.style.left = "50%"
changeText2.style.transform = "translateX(-50%)"

const cordinates2 = document.createElement("p")
cordinates2.style.textAlign = "center"
cordinates2.style.position = "relative"
cordinates2.style.top = "-140px"
cordinates2.style.color = "red"
cordinates2.style.userSelect = "none"

const flexCord2 = document.createElement("div")
flexCord2.style.width = "100%"
flexCord2.style.height = "30px"
flexCord2.style.position = "absolute"
flexCord2.style.justifyContent = "center"
flexCord2.style.top = "125px"
flexCord2.style.display = "flex"

const leftInput2 = document.createElement("input")
leftInput2.setAttribute("placeholder", "Left")
leftInput2.style.width = "80px"
leftInput2.style.height = "30px"
leftInput2.style.position = "relative"
leftInput2.style.top = "40px"
leftInput2.style.marginRight = "10px"
leftInput2.setAttribute("type", "number")


const topInput2 = document.createElement("input")
topInput2.setAttribute("placeholder", "Top")
topInput2.style.width = "80px"
topInput2.style.height = "30px"
topInput2.style.position = "relative"
topInput2.style.top = "40px"
topInput2.setAttribute("type", "number")

flexCord2.appendChild(leftInput2)
flexCord2.appendChild(topInput2)


const widthText = document.createElement("p")
widthText.style.fontSize = "20px"
widthText.style.position = "relative"
widthText.style.top = "-80px"
widthText.style.marginLeft = "41px"
widthText.style.userSelect = "none"

const widthInput = document.createElement("input")
widthInput.setAttribute("type", "range")
widthInput.setAttribute("min", "10")
widthInput.setAttribute("max", "400")
widthInput.setAttribute("value", "70")
widthInput.style.position = "relative"
widthInput.style.zIndex = "4"
widthInput.style.top = "-100px"
widthInput.style.left = "50%"
widthInput.style.transform = "translateX(-50%)"

const flexedWidthInputDiv = document.createElement('div')
flexedWidthInputDiv.style.display = 'flex'
flexedWidthInputDiv.style.position = 'relative'
flexedWidthInputDiv.style.left = "61%"
flexedWidthInputDiv.style.transform = "translateX(-50%)"
flexedWidthInputDiv.style.top = '-125px'

const customWidthInputButton = document.createElement("input")
customWidthInputButton.setAttribute("type", "text")
customWidthInputButton.setAttribute("placeholder", "width in px")
customWidthInputButton.style.border = "2px solid"
customWidthInputButton.style.position = "relative"
customWidthInputButton.style.width = "110px"
customWidthInputButton.style.height = "40px"

const copyButtonWidth = document.createElement("button")
copyButtonWidth.innerHTML = "Copy"
copyButtonWidth.style.position = "relative"
copyButtonWidth.style.width = "70px"
copyButtonWidth.style.height = "44px"
copyButtonWidth.style.cursor = "pointer"
copyButtonWidth.style.top = "20px"
copyButtonWidth.style.left = "10px"
copyButtonWidth.style.border = "none"
copyButtonWidth.style.borderRadius = "8px"
copyButtonWidth.style.fontWeight = "700"
copyButtonWidth.style.color = "white"
copyButtonWidth.style.fontSize = "17px"
copyButtonWidth.style.backgroundColor = "orange"
copyButtonWidth.classList.add("copyhover")

const pasteButtonWidth = document.createElement("button")
pasteButtonWidth.innerHTML = "Paste"
pasteButtonWidth.style.position = "relative"
pasteButtonWidth.style.width = "70px"
pasteButtonWidth.style.height = "44px"
pasteButtonWidth.style.cursor = "pointer"
pasteButtonWidth.style.top = "20px"
pasteButtonWidth.style.left = "25px"
pasteButtonWidth.style.border = "none"
pasteButtonWidth.style.borderRadius = "8px"
pasteButtonWidth.style.fontWeight = "700"
pasteButtonWidth.style.color = "white"
pasteButtonWidth.style.fontSize = "17px"
pasteButtonWidth.style.backgroundColor = "brown"
pasteButtonWidth.classList.add("copyhover")

flexedWidthInputDiv.appendChild(customWidthInputButton)
flexedWidthInputDiv.appendChild(copyButtonWidth)
flexedWidthInputDiv.appendChild(pasteButtonWidth)



const heightText = document.createElement("p")
heightText.innerHTML = "Height: "
heightText.style.fontSize = "20px"
heightText.style.position = "relative"
heightText.style.top = "-120px"
heightText.style.marginLeft = "41px"
heightText.style.userSelect = "none"

const heightInput = document.createElement("input")
heightInput.setAttribute("type", "range")
heightInput.setAttribute("min", "10")
heightInput.setAttribute("max", "400")
heightInput.setAttribute("value", "30")
heightInput.style.position = "relative"
heightInput.style.top = "-140px"
heightInput.style.left = "50%"
heightInput.style.transform = "translateX(-50%)"
heightInput.style.zIndex = "4"

const flexedHeightDiv = document.createElement('div')
flexedHeightDiv.style.display = 'flex'
flexedHeightDiv.style.position = 'relative'
flexedHeightDiv.style.top = "-165px"
flexedHeightDiv.style.left = "61%"
flexedHeightDiv.style.transform = "translateX(-50%)"

const customHeightInputButton = document.createElement("input")
customHeightInputButton.setAttribute("type", "text")
customHeightInputButton.setAttribute("placeholder", "height in px")
customHeightInputButton.style.border = "2px solid"
customHeightInputButton.style.position = "relative"
customHeightInputButton.style.width = "110px"
customHeightInputButton.style.height = "40px"

const copyButtonHeight = document.createElement("button")
copyButtonHeight.innerHTML = "Copy"
copyButtonHeight.style.position = 'relative'
copyButtonHeight.style.top = '20px'
copyButtonHeight.style.width = "70px"
copyButtonHeight.style.height = "44px"
copyButtonHeight.style.cursor = "pointer"
copyButtonHeight.style.left = "10px"
copyButtonHeight.style.border = "none"
copyButtonHeight.style.borderRadius = "8px"
copyButtonHeight.style.fontWeight = "700"
copyButtonHeight.style.color = "white"
copyButtonHeight.style.fontSize = "17px"
copyButtonHeight.style.backgroundColor = "orange"
copyButtonHeight.classList.add("copyhover")


const pasteButtonHeight = document.createElement("button")
pasteButtonHeight.innerHTML = "Paste"
pasteButtonHeight.style.position = "relative"
pasteButtonHeight.style.width = "70px"
pasteButtonHeight.style.height = "44px"
pasteButtonHeight.style.cursor = "pointer"
pasteButtonHeight.style.top = '20px'
pasteButtonHeight.style.left = "25px"
pasteButtonHeight.style.border = "none"
pasteButtonHeight.style.borderRadius = "8px"
pasteButtonHeight.style.fontWeight = "700"
pasteButtonHeight.style.color = "white"
pasteButtonHeight.style.fontSize = "17px"
pasteButtonHeight.style.backgroundColor = "brown"
pasteButtonHeight.classList.add("copyhover")

flexedHeightDiv.appendChild(customHeightInputButton)
flexedHeightDiv.appendChild(copyButtonHeight)
flexedHeightDiv.appendChild(pasteButtonHeight)

const flexedBackColor = document.createElement('div')
flexedBackColor.style.display = 'flex'
flexedBackColor.style.position = 'relative'
flexedBackColor.style.left = "50%"
flexedBackColor.style.transform = "translateX(-50%)"
flexedBackColor.style.top = "-155px"

const colorInput2 = document.createElement("input")
colorInput2.setAttribute("type", "color")
colorInput2.setAttribute("value", "#e9e9ed")
colorInput2.style.position = "relative"
colorInput2.style.left = "50%"
colorInput2.style.cursor = "pointer"
colorInput2.style.transform = "translateX(-50%)"
colorInput2.style.width = "300px"
colorInput2.style.height = "40px"

const copyButtonBackgroundColor = document.createElement("button")
copyButtonBackgroundColor.innerHTML = "C"
copyButtonBackgroundColor.style.position = "relative"
copyButtonBackgroundColor.style.top = "25px"
copyButtonBackgroundColor.style.width = "30px"
copyButtonBackgroundColor.style.height = "30px"
copyButtonBackgroundColor.style.cursor = "pointer"
copyButtonBackgroundColor.style.left = "-30px"
copyButtonBackgroundColor.style.zIndex = "1"
copyButtonBackgroundColor.style.border = "none"
copyButtonBackgroundColor.style.fontWeight = "700"
copyButtonBackgroundColor.style.color = "white"
copyButtonBackgroundColor.style.fontSize = "17px"
copyButtonBackgroundColor.style.backgroundColor = "orange"
copyButtonBackgroundColor.classList.add("copyhover")

const pasteButtonBackgroundColor = document.createElement("button")
pasteButtonBackgroundColor.innerHTML = "P"
pasteButtonBackgroundColor.style.position = "relative"
pasteButtonBackgroundColor.style.width = "30px"
pasteButtonBackgroundColor.style.top = "25px"
pasteButtonBackgroundColor.style.height = "30px"
pasteButtonBackgroundColor.style.cursor = "pointer"
pasteButtonBackgroundColor.style.zIndex = "1"
pasteButtonBackgroundColor.style.left = "-30px"
pasteButtonBackgroundColor.style.border = "none"
pasteButtonBackgroundColor.style.borderLeft = "2px solid black"
pasteButtonBackgroundColor.style.fontWeight = "700"
pasteButtonBackgroundColor.style.color = "white"
pasteButtonBackgroundColor.style.fontSize = "17px"
pasteButtonBackgroundColor.style.backgroundColor = "brown"
pasteButtonBackgroundColor.classList.add("copyhover")

flexedBackColor.appendChild(colorInput2)
flexedBackColor.appendChild(copyButtonBackgroundColor)
flexedBackColor.appendChild(pasteButtonBackgroundColor)

const fontText2 = document.createElement("p")
fontText2.innerHTML = "Font Size: "
fontText2.style.fontSize = "20px"
fontText2.style.position = "relative"
fontText2.style.top = "-150px"
fontText2.style.marginLeft = "41px"
fontText2.style.userSelect = "none"

const fontInput2 = document.createElement("input")
fontInput2.setAttribute("type", "range")
fontInput2.setAttribute("min", "8")
fontInput2.setAttribute("max", "100")
fontInput2.setAttribute("value", "16")
fontInput2.style.position = "relative"
fontInput2.style.top = "-170px"
fontInput2.style.left = "50%"
fontInput2.style.transform = "translateX(-50%)"
fontInput2.style.zIndex = "4"

const flexedDivFontInput = document.createElement("div")
flexedDivFontInput.style.position = "relative"
flexedDivFontInput.style.display = "flex"
flexedDivFontInput.style.top = "-195px"
flexedDivFontInput.style.left = "61%"
flexedDivFontInput.style.transform = "translateX(-50%)"

const customFontInputButton = document.createElement("input")
customFontInputButton.setAttribute("type", "text")
customFontInputButton.setAttribute("placeholder", "font weight in px")
customFontInputButton.style.border = "2px solid"
customFontInputButton.style.width = "110px"
customFontInputButton.style.height = "40px"

const copyButtonFont = document.createElement("button")
copyButtonFont.innerHTML = "Copy"
copyButtonFont.style.position = "relative"
copyButtonFont.style.width = "70px"
copyButtonFont.style.height = "44px"
copyButtonFont.style.top = "21px"
copyButtonFont.style.cursor = "pointer"
copyButtonFont.style.border = "none"
copyButtonFont.style.borderRadius = "8px"
copyButtonFont.style.fontWeight = "700"
copyButtonFont.style.color = "white"
copyButtonFont.style.left = "10px"
copyButtonFont.style.fontSize = "17px"
copyButtonFont.style.backgroundColor = "orange"
copyButtonFont.classList.add("copyhover")

const pasteButtonFont = document.createElement("button")
pasteButtonFont.innerHTML = "Paste"
pasteButtonFont.style.position = "relative"
pasteButtonFont.style.width = "70px"
pasteButtonFont.style.top = "21px"
pasteButtonFont.style.height = "44px"
pasteButtonFont.style.cursor = "pointer"
pasteButtonFont.style.border = "none"
pasteButtonFont.style.borderRadius = "8px"
pasteButtonFont.style.fontWeight = "700"
pasteButtonFont.style.color = "white"
pasteButtonFont.style.left = "25px"
pasteButtonFont.style.fontSize = "17px"
pasteButtonFont.style.backgroundColor = "brown"
pasteButtonFont.classList.add("copyhover")

flexedDivFontInput.appendChild(customFontInputButton)
flexedDivFontInput.appendChild(copyButtonFont)
flexedDivFontInput.appendChild(pasteButtonFont)

const fontWeightText2 = document.createElement("p")
fontWeightText2.innerHTML = "Font Weight: "
fontWeightText2.style.fontSize = "20px"
fontWeightText2.style.position = "relative"
fontWeightText2.style.top = "-185px"
fontWeightText2.style.marginLeft = "41px"
fontWeightText2.style.userSelect = "none"

const fontWeightInput2 = document.createElement("input")
fontWeightInput2.setAttribute("type", "range")
fontWeightInput2.setAttribute("min", "100")
fontWeightInput2.setAttribute("max", "800")
fontWeightInput2.setAttribute("value", "400")
fontWeightInput2.style.position = "relative"
fontWeightInput2.style.top = "-210px"
fontWeightInput2.style.left = "50%"
fontWeightInput2.style.transform = "translateX(-50%)"
fontWeightInput2.style.zIndex = "4"

const flexedCustomWeightDiv = document.createElement("div")
flexedCustomWeightDiv.style.position = "relative"
flexedCustomWeightDiv.style.display = "flex"
flexedCustomWeightDiv.style.top = "-225px"
flexedCustomWeightDiv.style.left = "61%"
flexedCustomWeightDiv.style.transform = "translateX(-50%)"



const fontCustomWeightInput2 = document.createElement("input")
fontCustomWeightInput2.setAttribute("type", "text")
fontCustomWeightInput2.setAttribute("placeholder", "font weight")
fontCustomWeightInput2.style.border = "2px solid"
fontCustomWeightInput2.style.width = "110px"
fontCustomWeightInput2.style.height = "40px"

const copyButtonWeight = document.createElement("button")
copyButtonWeight.innerHTML = "Copy"
copyButtonWeight.style.position = "relative"
copyButtonWeight.style.width = "70px"
copyButtonWeight.style.height = "44px"
copyButtonWeight.style.top = "10px"
copyButtonWeight.style.cursor = "pointer"
copyButtonWeight.style.left = "10px"
copyButtonWeight.style.border = "none"
copyButtonWeight.style.borderRadius = "8px"
copyButtonWeight.style.top = "21px"
copyButtonWeight.style.fontWeight = "700"
copyButtonWeight.style.color = "white"
copyButtonWeight.style.fontSize = "17px"
copyButtonWeight.style.backgroundColor = "orange"
copyButtonWeight.classList.add("copyhover")


const pasteButtonWeight = document.createElement("button")
pasteButtonWeight.innerHTML = "Paste"
pasteButtonWeight.style.position = "relative"
pasteButtonWeight.style.width = "70px"
pasteButtonWeight.style.height = "44px"
pasteButtonWeight.style.top = "25px"
pasteButtonWeight.style.cursor = "pointer"
pasteButtonWeight.style.left = "25px"
pasteButtonWeight.style.top = "21px"
pasteButtonWeight.style.border = "none"
pasteButtonWeight.style.borderRadius = "8px"
pasteButtonWeight.style.fontWeight = "700"
pasteButtonWeight.style.color = "white"
pasteButtonWeight.style.fontSize = "17px"
pasteButtonWeight.style.backgroundColor = "brown"
pasteButtonWeight.classList.add("copyhover")

flexedCustomWeightDiv.appendChild(fontCustomWeightInput2)
flexedCustomWeightDiv.appendChild(copyButtonWeight)
flexedCustomWeightDiv.appendChild(pasteButtonWeight)


const fontChanger2 = document.createElement("div")
fontChanger2.style.width = "300px"
fontChanger2.style.height = "40px"
fontChanger2.style.border = "1px solid"
fontChanger2.style.position = "relative"
fontChanger2.style.borderRadius = "5px"
fontChanger2.style.top = "-175px"
fontChanger2.style.left = "50%"
fontChanger2.style.transform = "translateX(-50%)"
fontChanger2.style.cursor = "pointer"
fontChanger2.style.userSelect = "none"

const fontStyleText22 = document.createElement("p")
fontStyleText22.innerHTML = "Font"
fontStyleText22.style.fontSize = "12px"
fontStyleText22.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
fontStyleText22.style.textAlign = "center"
fontStyleText22.innerHTML = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
fontStyleText22.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"

fontChanger2.appendChild(fontStyleText22)

const flexedColorButton = document.createElement("div")
flexedColorButton.style.display = "flex"
flexedColorButton.style.position = "relative"
flexedColorButton.style.left = "50%"
flexedColorButton.style.transform = "translateX(-50%)"
flexedColorButton.style.top = "-175px"


const colorInput3 = document.createElement("input")
colorInput3.setAttribute("type", "color")
colorInput3.style.width = "300px"
colorInput3.style.position = "relative"
colorInput3.style.left = "50%"
colorInput3.style.cursor = "pointer"
colorInput3.style.transform = "translateX(-50%)"
colorInput3.style.width = "300px"
colorInput3.style.height = "40px"

const copyButtonColor = document.createElement("button")
copyButtonColor.innerHTML = "C"
copyButtonColor.style.position = "relative"
copyButtonColor.style.width = "30px"
copyButtonColor.style.height = "32px"
copyButtonColor.style.cursor = "pointer"
copyButtonColor.style.right = "70px"
copyButtonColor.style.zIndex = "1"
copyButtonColor.style.top = "24px"
copyButtonColor.style.left = "-30px"
copyButtonColor.style.border = "none"
copyButtonColor.style.fontWeight = "700"
copyButtonColor.style.color = "white"
copyButtonColor.style.fontSize = "17px"
copyButtonColor.style.backgroundColor = "orange"
copyButtonColor.classList.add("copyhover")

const pasteButtonColor = document.createElement("button")
pasteButtonColor.innerHTML = "P"
pasteButtonColor.style.position = "relative"
pasteButtonColor.style.width = "30px"
pasteButtonColor.style.top = "24px"
pasteButtonColor.style.height = "32px"
pasteButtonColor.style.cursor = "pointer"
pasteButtonColor.style.zIndex = "1"
pasteButtonColor.style.left = "-30px"
pasteButtonColor.style.border = "none"
pasteButtonColor.style.borderLeft = "2px solid black"
pasteButtonColor.style.fontWeight = "700"
pasteButtonColor.style.color = "white"
pasteButtonColor.style.fontSize = "17px"
pasteButtonColor.style.backgroundColor = "brown"
pasteButtonColor.classList.add("copyhover")

flexedColorButton.appendChild(colorInput3)
flexedColorButton.appendChild(copyButtonColor)
flexedColorButton.appendChild(pasteButtonColor)


const borderText = document.createElement("p")
borderText.innerHTML = "Border Radius: "
borderText.style.fontSize = "20px"
borderText.style.position = "relative"
borderText.style.top = "-160px"
borderText.style.marginLeft = "45px"
borderText.style.userSelect = "none"

const borderInput = document.createElement("input")
borderInput.setAttribute("type", "range")
borderInput.setAttribute("min", "0")
borderInput.setAttribute("max", "100")
borderInput.setAttribute("value", "0")
borderInput.style.position = "relative"
borderInput.style.top = "-180px"
borderInput.style.left = "50%"
borderInput.style.transform = "translateX(-50%)"
borderInput.style.zIndex = "4"

const flexedDivCopyRadius = document.createElement("div")
flexedDivCopyRadius.style.display = "flex"
flexedDivCopyRadius.style.position = "relative"
flexedDivCopyRadius.style.top = "-205px"
flexedDivCopyRadius.style.left = "60%"
flexedDivCopyRadius.style.transform = "translateX(-50%)"


const customBorderInputButton = document.createElement("input")
customBorderInputButton.setAttribute("type", "text")
customBorderInputButton.setAttribute("placeholder", "border radius in px")
customBorderInputButton.style.border = "2px solid"
customBorderInputButton.style.width = "110px"
customBorderInputButton.style.height = "40px"

const copyButtonBorderRadius = document.createElement("button")
copyButtonBorderRadius.innerHTML = "Copy"
copyButtonBorderRadius.style.position = "relative"
copyButtonBorderRadius.style.width = "70px"
copyButtonBorderRadius.style.height = "44px"
copyButtonBorderRadius.style.cursor = "pointer"
copyButtonBorderRadius.style.left = "10px"
copyButtonBorderRadius.style.top = "21px"
copyButtonBorderRadius.style.border = "none"
copyButtonBorderRadius.style.borderRadius = "8px"
copyButtonBorderRadius.style.fontWeight = "700"
copyButtonBorderRadius.style.color = "white"
copyButtonBorderRadius.style.fontSize = "17px"
copyButtonBorderRadius.style.backgroundColor = "orange"
copyButtonBorderRadius.classList.add("copyhover")

const pasteButtonBorderRadius = document.createElement("button")
pasteButtonBorderRadius.innerHTML = "Paste"
pasteButtonBorderRadius.style.position = "relative"
pasteButtonBorderRadius.style.width = "70px"
pasteButtonBorderRadius.style.height = "44px"
pasteButtonBorderRadius.style.cursor = "pointer"
pasteButtonBorderRadius.style.left = "25px"
pasteButtonBorderRadius.style.border = "none"
pasteButtonBorderRadius.style.top = "21px"
pasteButtonBorderRadius.style.borderRadius = "8px"
pasteButtonBorderRadius.style.fontWeight = "700"
pasteButtonBorderRadius.style.color = "white"
pasteButtonBorderRadius.style.fontSize = "17px"
pasteButtonBorderRadius.style.backgroundColor = "brown"
pasteButtonBorderRadius.classList.add("copyhover")

flexedDivCopyRadius.appendChild(customBorderInputButton)
flexedDivCopyRadius.appendChild(copyButtonBorderRadius)
flexedDivCopyRadius.appendChild(pasteButtonBorderRadius)


const borderText2 = document.createElement("p")
borderText2.style.fontSize = "20px"
borderText2.style.position = "relative"
borderText2.style.top = "-200px"
borderText2.style.marginLeft = "45px"
borderText2.style.userSelect = "none"

const borderInput2 = document.createElement("input")
borderInput2.setAttribute("type", "range")
borderInput2.setAttribute("min", "0")
borderInput2.setAttribute("max", "20")
borderInput2.setAttribute("value", "1")
borderInput2.style.position = "relative"
borderInput2.style.top = "-220px"
borderInput2.style.left = "50%"
borderInput2.style.transform = "translateX(-50%)"
borderInput2.style.zIndex = "4"

const flexedBorderSize = document.createElement("div")
flexedBorderSize.style.position = "relative"
flexedBorderSize.style.display = "flex"
flexedBorderSize.style.left = "60%"
flexedBorderSize.style.transform = "translateX(-50%)"
flexedBorderSize.style.top = "-247px"

const customBorderSizeInput = document.createElement("input")
customBorderSizeInput.setAttribute("type", "text")
customBorderSizeInput.setAttribute("placeholder", "border size(px)")
customBorderSizeInput.style.border = "2px solid"
customBorderSizeInput.style.width = "110px"
customBorderSizeInput.style.height = "40px"

const copyButtonBorderSize = document.createElement("button")
copyButtonBorderSize.innerHTML = "Copy"
copyButtonBorderSize.style.position = "relative"
copyButtonBorderSize.style.width = "70px"
copyButtonBorderSize.style.height = "44px"
copyButtonBorderSize.style.cursor = "pointer"
copyButtonBorderSize.style.left = "10px"
copyButtonBorderSize.style.top = "21px"
copyButtonBorderSize.style.border = "none"
copyButtonBorderSize.style.borderRadius = "8px"
copyButtonBorderSize.style.fontWeight = "700"
copyButtonBorderSize.style.color = "white"
copyButtonBorderSize.style.fontSize = "17px"
copyButtonBorderSize.style.backgroundColor = "orange"
copyButtonBorderSize.classList.add("copyhover")

const pasteButtonBorderSize = document.createElement("button")
pasteButtonBorderSize.innerHTML = "Paste"
pasteButtonBorderSize.style.position = "relative"
pasteButtonBorderSize.style.width = "70px"
pasteButtonBorderSize.style.height = "44px"
pasteButtonBorderSize.style.cursor = "pointer"
pasteButtonBorderSize.style.left = "25px"
pasteButtonBorderSize.style.border = "none"
pasteButtonBorderSize.style.top = "21px"
pasteButtonBorderSize.style.borderRadius = "8px"
pasteButtonBorderSize.style.fontWeight = "700"
pasteButtonBorderSize.style.color = "white"
pasteButtonBorderSize.style.fontSize = "17px"
pasteButtonBorderSize.style.backgroundColor = "brown"
pasteButtonBorderSize.classList.add("copyhover")

flexedBorderSize.appendChild(customBorderSizeInput)
flexedBorderSize.appendChild(copyButtonBorderSize)
flexedBorderSize.appendChild(pasteButtonBorderSize)

const flexedBorderColor = document.createElement("div")
flexedBorderColor.style.display = "flex"
flexedBorderColor.style.position = "relative"
flexedBorderColor.style.left = "50%"
flexedBorderColor.style.transform = "translateX(-50%)"
flexedBorderColor.style.top = "-235px"

const colorInput4 = document.createElement("input")
colorInput4.setAttribute("type", "color")
colorInput4.style.position = "relative"
colorInput4.style.left = "50%"
colorInput4.style.cursor = "pointer"
colorInput4.style.transform = "translateX(-50%)"
colorInput4.style.width = "300px"

const copyButtonRadiusColor = document.createElement("button")
copyButtonRadiusColor.innerHTML = "C"
copyButtonRadiusColor.style.position = "relative"
copyButtonRadiusColor.style.width = "30px"
copyButtonRadiusColor.style.height = "32px"
copyButtonRadiusColor.style.cursor = "pointer"
copyButtonRadiusColor.style.right = "70px"
copyButtonRadiusColor.style.zIndex = "1"
copyButtonRadiusColor.style.top = "24px"
copyButtonRadiusColor.style.left = "-30px"
copyButtonRadiusColor.style.border = "none"
copyButtonRadiusColor.style.fontWeight = "700"
copyButtonRadiusColor.style.color = "white"
copyButtonRadiusColor.style.fontSize = "17px"
copyButtonRadiusColor.style.backgroundColor = "orange"
copyButtonRadiusColor.classList.add("copyhover")

const pasteButtonRadiusColor = document.createElement("button")
pasteButtonRadiusColor.innerHTML = "P"
pasteButtonRadiusColor.style.position = "relative"
pasteButtonRadiusColor.style.width = "30px"
pasteButtonRadiusColor.style.top = "24px"
pasteButtonRadiusColor.style.height = "32px"
pasteButtonRadiusColor.style.cursor = "pointer"
pasteButtonRadiusColor.style.zIndex = "1"
pasteButtonRadiusColor.style.left = "-30px"
pasteButtonRadiusColor.style.border = "none"
pasteButtonRadiusColor.style.borderLeft = "2px solid black"
pasteButtonRadiusColor.style.fontWeight = "700"
pasteButtonRadiusColor.style.color = "white"
pasteButtonRadiusColor.style.fontSize = "17px"
pasteButtonRadiusColor.style.backgroundColor = "brown"
pasteButtonRadiusColor.classList.add("copyhover")

flexedBorderColor.appendChild(colorInput4)
flexedBorderColor.appendChild(copyButtonRadiusColor)
flexedBorderColor.appendChild(pasteButtonRadiusColor)

var advancedSettings2 = document.createElement("button")
advancedSettings2.style.position = "absolute"
advancedSettings2.style.top = "5px"
advancedSettings2.style.fontSize = "30px"
advancedSettings2.style.backgroundColor = "#ffffff00"
advancedSettings2.style.border = "none"
advancedSettings2.style.cursor = "pointer"
advancedSettings2.style.left = "50%"
advancedSettings2.style.transform = "translateX(-50%)"
advancedSettings2.innerHTML = "⚙️"



function addToPanel2() {




    thePanel.appendChild(deleteBtn2)
    thePanel.appendChild(backBtn2)
    thePanel.appendChild(changeText2)
    thePanel.appendChild(cordinates2)
    thePanel.appendChild(flexCord2)
    thePanel.appendChild(flexedCopyStyleButton)
    thePanel.appendChild(widthText)
    thePanel.appendChild(widthInput)
    thePanel.appendChild(flexedWidthInputDiv)
    thePanel.appendChild(heightText)
    thePanel.appendChild(heightInput)
    thePanel.appendChild(flexedHeightDiv)
    thePanel.appendChild(flexedBackColor)
    thePanel.appendChild(fontText2)
    thePanel.appendChild(fontInput2)
    thePanel.appendChild(flexedDivFontInput)
    thePanel.appendChild(fontWeightText2)
    thePanel.appendChild(fontWeightInput2)
    thePanel.appendChild(flexedCustomWeightDiv)
    thePanel.appendChild(fontChanger2)
    thePanel.appendChild(flexedColorButton)
    thePanel.appendChild(borderText)
    thePanel.appendChild(borderInput)
    thePanel.appendChild(flexedDivCopyRadius)
    thePanel.appendChild(borderText2)
    thePanel.appendChild(borderInput2)
    thePanel.appendChild(flexedBorderSize)
    thePanel.appendChild(flexedBorderColor)
    thePanel.appendChild(advancedSettings2)

}

function removeToPanel2() {
    if (thePanel.contains(deleteBtn2)) {


        thePanel.removeChild(deleteBtn2)
        thePanel.removeChild(changeText2)
        thePanel.removeChild(cordinates2)
        thePanel.removeChild(flexCord2)
        thePanel.removeChild(widthText)
        thePanel.removeChild(widthInput)
        thePanel.removeChild(heightText)
        thePanel.removeChild(heightInput)
        thePanel.removeChild(flexedCopyStyleButton)
        thePanel.removeChild(flexedBackColor)
        thePanel.removeChild(fontText2)
        thePanel.removeChild(fontInput2)
        thePanel.removeChild(borderText)
        thePanel.removeChild(borderInput)
        thePanel.removeChild(fontChanger2)
        thePanel.removeChild(flexedColorButton)
        thePanel.removeChild(borderText2)
        thePanel.removeChild(borderInput2)
        thePanel.removeChild(flexedBorderColor)
        thePanel.removeChild(backBtn2)
        thePanel.removeChild(advancedSettings2)
        thePanel.removeChild(flexedHeightDiv)
        thePanel.removeChild(flexedWidthInputDiv)
        thePanel.removeChild(fontWeightText2)
        thePanel.removeChild(fontWeightInput2)
        thePanel.removeChild(flexedCustomWeightDiv)
        thePanel.removeChild(flexedDivCopyRadius)
        thePanel.removeChild(flexedDivFontInput)
        thePanel.removeChild(flexedBorderSize)
    }

}

fontChanger2.addEventListener("click", toggleFonts2)

function toggleFonts2() {
    fontChanger2.classList.add("toggledfonts")
    fontChanger2.style.overflow = "auto"
    fontChanger2.style.height = "130px"
    fontChanger2.style.cursor = "default"
    fontStyleText22.style.fontSize = "0px"

    fontChanger2.appendChild(fontStyleButton1)
    fontChanger2.appendChild(fontStyleButton2)
    fontChanger2.appendChild(fontStyleButton3)
    fontChanger2.appendChild(fontStyleButton4)
    fontChanger2.appendChild(fontStyleButton5)
    fontChanger2.appendChild(fontStyleButton6)


    setTimeout(() => {
        fontStyleButton1.addEventListener("click", closeFonts2)
        fontStyleButton2.addEventListener("click", closeFonts2)
        fontStyleButton3.addEventListener("click", closeFonts2)
        fontStyleButton4.addEventListener("click", closeFonts2)
        fontStyleButton5.addEventListener("click", closeFonts2)
        fontStyleButton6.addEventListener("click", closeFonts2)
    }, 1);


}


function closeFonts2() {
    fontChanger2.style.overflow = "hidden"
    fontChanger2.removeEventListener("click", toggleFonts2)
    if (fontChanger2.classList.contains("toggledfonts")) {
        if (fontChanger2.contains(fontStyleButton1)) {
            fontChanger2.removeChild(fontStyleButton1)
            fontChanger2.removeChild(fontStyleButton2)
            fontChanger2.removeChild(fontStyleButton3)
            fontChanger2.removeChild(fontStyleButton4)
            fontChanger2.removeChild(fontStyleButton5)
            fontChanger2.removeChild(fontStyleButton6)
        }


        setTimeout(() => {
            fontChanger2.classList.remove("toggledfonts")
        }, 1);


    }
    fontChanger2.style.height = "40px"
    fontStyleText22.style.fontSize = "12px"
    fontChanger2.style.cursor = "pointer"
    fontStyleText22.style.cursor = "cursor"

    setTimeout(() => {
        fontChanger2.addEventListener("click", toggleFonts2)
        fontStyleButton1.removeEventListener("click", closeFonts2)
        fontStyleButton2.removeEventListener("click", closeFonts2)
        fontStyleButton3.removeEventListener("click", closeFonts2)
        fontStyleButton4.removeEventListener("click", closeFonts2)
        fontStyleButton5.removeEventListener("click", closeFonts2)
        fontStyleButton6.removeEventListener("click", closeFonts2)
    }, 1);


}


