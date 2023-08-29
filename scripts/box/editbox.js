const backBtn3 = document.createElement("button")
backBtn3.innerHTML = "<"
backBtn3.style.borderRadius = "10px"
backBtn3.style.width = "80px"
backBtn3.style.height = "40px"
backBtn3.style.position = "sticky"
backBtn3.style.top = "754px"
backBtn3.style.marginRight = "220px"
backBtn3.style.marginLeft = "10px"
backBtn3.style.border = "none"
backBtn3.style.backgroundColor = "lightblue"
backBtn3.style.color = "white"
backBtn3.style.zIndex = "3"
backBtn3.style.fontSize = "23px"
backBtn3.style.fontWeight = "700"
backBtn3.style.cursor = "pointer"


const deleteBtn3 = document.createElement("button")
deleteBtn3.style.width = "120px"
deleteBtn3.style.position = "sticky"
deleteBtn3.style.top = "754px"
deleteBtn3.style.marginLeft = "235px"
deleteBtn3.style.cursor = "pointer"
deleteBtn3.style.height = "40px"
deleteBtn3.style.borderRadius = "10px"
deleteBtn3.innerHTML = "DELETE"
deleteBtn3.style.fontWeight = "700"
deleteBtn3.style.zIndex = "30"
deleteBtn3.style.fontSize = "20px"
deleteBtn3.style.color = "white"
deleteBtn3.style.border = "none"
deleteBtn3.style.backgroundColor = "red"

const flexedBoxColor = document.createElement("div")
flexedBoxColor.style.position = "relative"
flexedBoxColor.style.display = "flex"
flexedBoxColor.style.left = "50%"
flexedBoxColor.style.transform = "translateX(-50%)"

const colorInput5 = document.createElement("input")
colorInput5.setAttribute("type", "color")
colorInput5.setAttribute("value", "#ff0000")
colorInput5.style.height = "60px"
colorInput5.style.position = "relative"
colorInput5.style.top = "-140px"
colorInput5.style.width = "300px"
colorInput5.style.left = "50%"
colorInput5.style.transform = "translateX(-50%)"

const copyBoxColor = document.createElement("button")
copyBoxColor.innerHTML = "Copy"
copyBoxColor.style.position = "relative"
copyBoxColor.style.width = "70px"
copyBoxColor.style.height = "50px"
copyBoxColor.style.cursor = "pointer"
copyBoxColor.style.left = "-64px"
copyBoxColor.style.top = "-135px"
copyBoxColor.style.border = "none"
copyBoxColor.style.fontWeight = "700"
copyBoxColor.style.color = "white"
copyBoxColor.style.fontSize = "17px"
copyBoxColor.style.backgroundColor = "orange"
copyBoxColor.classList.add("copyhover")

const pasteBoxColor = document.createElement("button")
pasteBoxColor.innerHTML = "Paste"
pasteBoxColor.style.position = "relative"
pasteBoxColor.style.width = "70px"
pasteBoxColor.style.height = "50px"
pasteBoxColor.style.cursor = "pointer"
pasteBoxColor.style.left = "-64px"
pasteBoxColor.style.top = "-135px"
pasteBoxColor.style.border = "none"
pasteBoxColor.style.fontWeight = "700"
pasteBoxColor.style.color = "white"
pasteBoxColor.style.fontSize = "17px"
pasteBoxColor.style.backgroundColor = "brown"
pasteBoxColor.classList.add("copyhover")

flexedBoxColor.appendChild(colorInput5)
flexedBoxColor.appendChild(copyBoxColor)
flexedBoxColor.appendChild(pasteBoxColor)

const cordinates3 = document.createElement("p")
cordinates3.style.textAlign = "center"
cordinates3.style.position = "relative"
cordinates3.style.top = "-140px"
cordinates3.style.color = "red"
cordinates3.style.userSelect = "none"

const flexCord3 = document.createElement("div")
flexCord3.style.width = "100%"
flexCord3.style.height = "30px"
flexCord3.style.position = "absolute"
flexCord3.style.justifyContent = "center"
flexCord3.style.top = "125px"
flexCord3.style.display = "flex"

const leftInput3 = document.createElement("input")
leftInput3.setAttribute("placeholder", "Left")
leftInput3.style.width = "80px"
leftInput3.style.height = "30px"
leftInput3.style.position = "relative"
leftInput3.style.top = "40px"
leftInput3.style.marginRight = "10px"
leftInput3.setAttribute("type", "number")


const topInput3 = document.createElement("input")
topInput3.setAttribute("placeholder", "Top")
topInput3.style.width = "80px"
topInput3.style.height = "30px"
topInput3.style.position = "relative"
topInput3.style.top = "40px"
topInput3.setAttribute("type", "number")

flexCord3.appendChild(leftInput3)
flexCord3.appendChild(topInput3)

const flexedCopyStyleBox = document.createElement("div")
flexedCopyStyleBox.style.display = "flex"
flexedCopyStyleBox.style.position = "relative"
flexedCopyStyleBox.style.justifyContent = "center"
flexedCopyStyleBox.style.top = "-80px"

const copyStyleBox = document.createElement("button")
copyStyleBox.innerHTML = "Copy Style"
copyStyleBox.style.position = "relative"
copyStyleBox.style.marginRight = "20px"
copyStyleBox.style.fontSize = "18px"
copyStyleBox.style.color = "white"
copyStyleBox.style.cursor = "pointer"
copyStyleBox.style.backgroundColor = "cornflowerblue"
copyStyleBox.style.width = "130px"
copyStyleBox.style.height = "45px"
copyStyleBox.style.fontWeight = "800"
copyStyleBox.style.border = "none"
copyStyleBox.style.borderRadius = "10px"
copyStyleBox.classList.add("wholecopy")


const pasteStyleBox = document.createElement("button")
pasteStyleBox.style.position = "relative"
pasteStyleBox.innerHTML = "Paste Style"
pasteStyleBox.style.fontSize = "18px"
pasteStyleBox.style.cursor = "pointer"
pasteStyleBox.style.color = "white"
pasteStyleBox.style.backgroundColor = "chocolate"
pasteStyleBox.style.width =  "130px"
pasteStyleBox.style.height = "45px"
pasteStyleBox.style.fontWeight = "800"
pasteStyleBox.style.border = "none"
pasteStyleBox.style.borderRadius = "10px"
pasteStyleBox.classList.add("wholecopy")



flexedCopyStyleBox.appendChild(copyStyleBox)
flexedCopyStyleBox.appendChild(pasteStyleBox)

const widthText2 = document.createElement("p")
widthText2.style.fontSize = "20px"
widthText2.style.position = "relative"
widthText2.style.top = "-90px"
widthText2.style.marginLeft = "41px"
widthText2.style.userSelect = "none"

const widthInput2 = document.createElement("input")
widthInput2.setAttribute("type", "range")
widthInput2.setAttribute("min", "10")
widthInput2.setAttribute("max", "2000")
widthInput2.setAttribute("value", "100")
widthInput2.style.zIndex = "2"
widthInput2.style.position = "relative"
widthInput2.style.top = "-110px"
widthInput2.style.left = "50%"
widthInput2.style.transform = "translateX(-50%)"

const flexedBoxCustomWidth = document.createElement("div")
flexedBoxCustomWidth.style.display = "flex"
flexedBoxCustomWidth.style.position = "relative"
flexedBoxCustomWidth.style.top = "-135px"
flexedBoxCustomWidth.style.left = "60%"
flexedBoxCustomWidth.style.transform = "translateX(-50%)"

const customwidthInput2 = document.createElement("input")
customwidthInput2.setAttribute("type", "text")
customwidthInput2.setAttribute("placeholder", "width in px")
customwidthInput2.style.border = "2px solid"
customwidthInput2.style.position = "relative"
customwidthInput2.style.width = "110px"
customwidthInput2.style.height = "40px"


const copyBoxWidth = document.createElement("button")
 copyBoxWidth.innerHTML = "Copy"
 copyBoxWidth.style.position = "relative"
 copyBoxWidth.style.width = "70px"
 copyBoxWidth.style.height = "44px"
 copyBoxWidth.style.cursor = "pointer"
 copyBoxWidth.style.left = "10px"
 copyBoxWidth.style.top = "21px"
 copyBoxWidth.style.border = "none"
 copyBoxWidth.style.borderRadius = "8px"
 copyBoxWidth.style.fontWeight = "700"
 copyBoxWidth.style.color = "white"
 copyBoxWidth.style.fontSize = "17px"
 copyBoxWidth.style.backgroundColor = "orange"
 copyBoxWidth.classList.add("copyhover")

const pasteBoxWidth = document.createElement("button")
pasteBoxWidth.innerHTML = "Paste"
pasteBoxWidth.style.position = "relative"
pasteBoxWidth.style.width = "70px"
pasteBoxWidth.style.height = "44px"
pasteBoxWidth.style.cursor = "pointer"
pasteBoxWidth.style.left = "25px"
pasteBoxWidth.style.border = "none"
pasteBoxWidth.style.top = "21px"
pasteBoxWidth.style.borderRadius = "8px"
pasteBoxWidth.style.fontWeight = "700"
pasteBoxWidth.style.color = "white"
pasteBoxWidth.style.fontSize = "17px"
pasteBoxWidth.style.backgroundColor = "brown"
pasteBoxWidth.classList.add("copyhover")

flexedBoxCustomWidth.appendChild(customwidthInput2)
flexedBoxCustomWidth.appendChild( copyBoxWidth)
flexedBoxCustomWidth.appendChild(pasteBoxWidth)



const heightText2 = document.createElement("p")
heightText2.style.fontSize = "20px"
heightText2.style.position = "relative"
heightText2.style.top = "-115px"
heightText2.style.marginLeft = "41px"
heightText2.style.userSelect = "none"

const heightInput2 = document.createElement("input")
heightInput2.setAttribute("type", "range")
heightInput2.setAttribute("min", "10")
heightInput2.setAttribute("max", "2000")
heightInput2.setAttribute("value", "30")
heightInput2.style.position = "relative"
heightInput2.style.zIndex = "2"
heightInput2.style.top = "-135px"
heightInput2.style.left = "50%"
heightInput2.style.transform = "translateX(-50%)"

const flexedBoxCustomHeight = document.createElement("div")
flexedBoxCustomHeight.style.display = "flex"
flexedBoxCustomHeight.style.position = "relative"
flexedBoxCustomHeight.style.top = "-160px"
flexedBoxCustomHeight.style.left = "60%"
flexedBoxCustomHeight.style.transform = "translateX(-50%)"


const customheightInput2 = document.createElement("input")
customheightInput2.setAttribute("type", "text")
customheightInput2.setAttribute("placeholder", "height in px")
customheightInput2.style.border = "2px solid"
customheightInput2.style.position = "relative"
customheightInput2.style.width = "110px"
customheightInput2.style.height = "40px"


const copyBoxHeight = document.createElement("button")
copyBoxHeight.innerHTML = "Copy"
copyBoxHeight.style.position = "relative"
copyBoxHeight.style.width = "70px"
copyBoxHeight.style.height = "44px"
copyBoxHeight.style.cursor = "pointer"
copyBoxHeight.style.left = "10px"
copyBoxHeight.style.top = "21px"
copyBoxHeight.style.border = "none"
copyBoxHeight.style.borderRadius = "8px"
copyBoxHeight.style.fontWeight = "700"
copyBoxHeight.style.color = "white"
copyBoxHeight.style.fontSize = "17px"
copyBoxHeight.style.backgroundColor = "orange"
copyBoxHeight.classList.add("copyhover")

const pasteBoxHeight = document.createElement("button")
pasteBoxHeight.innerHTML = "Paste"
pasteBoxHeight.style.position = "relative"
pasteBoxHeight.style.width = "70px"
pasteBoxHeight.style.height = "44px"
pasteBoxHeight.style.cursor = "pointer"
pasteBoxHeight.style.left = "25px"
pasteBoxHeight.style.border = "none"
pasteBoxHeight.style.top = "21px"
pasteBoxHeight.style.borderRadius = "8px"
pasteBoxHeight.style.fontWeight = "700"
pasteBoxHeight.style.color = "white"
pasteBoxHeight.style.fontSize = "17px"
pasteBoxHeight.style.backgroundColor = "brown"
pasteBoxHeight.classList.add("copyhover")

flexedBoxCustomHeight.appendChild(customheightInput2)
flexedBoxCustomHeight.appendChild(copyBoxHeight)
flexedBoxCustomHeight.appendChild(pasteBoxHeight)


const borderText3 = document.createElement("p")
borderText3.innerHTML = "Border Radius: "
borderText3.style.fontSize = "20px"
borderText3.style.position = "relative"
borderText3.style.top = "-195px"
borderText3.style.marginLeft = "43px"
borderText3.style.userSelect = "none"

const borderInput3 = document.createElement("input")
borderInput3.setAttribute("type", "range")
borderInput3.setAttribute("min", "0")
borderInput3.setAttribute("max", "100")
borderInput3.setAttribute("value", "5")
borderInput3.style.position = "relative"
borderInput3.style.zIndex = "2"
borderInput3.style.top = "-110px"
borderInput3.style.left = "50%"
borderInput3.style.transform = "translateX(-50%)"

const flexedBoxCustomBorder = document.createElement("div")
flexedBoxCustomBorder.style.display = "flex"
flexedBoxCustomBorder.style.position = "relative"
flexedBoxCustomBorder.style.top = "-190px"
flexedBoxCustomBorder.style.left = "60%"
flexedBoxCustomBorder.style.transform = "translateX(-50%)"


const customboxbordertInput2 = document.createElement("input")
customboxbordertInput2.setAttribute("type", "text")
customboxbordertInput2.setAttribute("placeholder", "border in px")
customboxbordertInput2.style.border = "2px solid"
customboxbordertInput2.style.position = "relative"
customboxbordertInput2.style.width = "110px"
customboxbordertInput2.style.height = "40px"


const copyBoxBorderRadius= document.createElement("button")
copyBoxBorderRadius.innerHTML = "Copy"
copyBoxBorderRadius.style.position = "relative"
copyBoxBorderRadius.style.width = "70px"
copyBoxBorderRadius.style.height = "44px"
copyBoxBorderRadius.style.cursor = "pointer"
copyBoxBorderRadius.style.left = "10px"
copyBoxBorderRadius.style.top = "21px"
copyBoxBorderRadius.style.border = "none"
copyBoxBorderRadius.style.borderRadius = "8px"
copyBoxBorderRadius.style.fontWeight = "700"
copyBoxBorderRadius.style.color = "white"
copyBoxBorderRadius.style.fontSize = "17px"
copyBoxBorderRadius.style.backgroundColor = "orange"
copyBoxBorderRadius.classList.add("copyhover")

const pasteBoxBorderRadius = document.createElement("button")
pasteBoxBorderRadius.innerHTML = "Paste"
pasteBoxBorderRadius.style.position = "relative"
pasteBoxBorderRadius.style.width = "70px"
pasteBoxBorderRadius.style.height = "44px"
pasteBoxBorderRadius.style.cursor = "pointer"
pasteBoxBorderRadius.style.left = "25px"
pasteBoxBorderRadius.style.border = "none"
pasteBoxBorderRadius.style.top = "21px"
pasteBoxBorderRadius.style.borderRadius = "8px"
pasteBoxBorderRadius.style.fontWeight = "700"
pasteBoxBorderRadius.style.color = "white"
pasteBoxBorderRadius.style.fontSize = "17px"
pasteBoxBorderRadius.style.backgroundColor = "brown"
pasteBoxBorderRadius.classList.add("copyhover")

flexedBoxCustomBorder.appendChild(customboxbordertInput2)
flexedBoxCustomBorder.appendChild(copyBoxBorderRadius)
flexedBoxCustomBorder.appendChild(pasteBoxBorderRadius)

const borderText4 = document.createElement("p")
borderText4.innerHTML = "Border Size: "
borderText4.style.fontSize = "20px"
borderText4.style.position = "relative"
borderText4.style.top = "-180px"
borderText4.style.marginLeft = "43px"
borderText4.style.userSelect = "none"

const borderInput4 = document.createElement("input")
borderInput4.setAttribute("type", "range")
borderInput4.setAttribute("min", "0")
borderInput4.setAttribute("max", "50")
borderInput4.setAttribute("value", "1")
borderInput4.style.position = "relative"
borderInput4.style.top = "-205px"
borderInput4.style.zIndex = "2"
borderInput4.style.left = "50%"
borderInput4.style.transform = "translateX(-50%)"

const flexedBoxCustomBorderSize = document.createElement("div")
flexedBoxCustomBorderSize.style.display = "flex"
flexedBoxCustomBorderSize.style.position = "relative"
flexedBoxCustomBorderSize.style.top = "-230px"
flexedBoxCustomBorderSize.style.left = "60%"
flexedBoxCustomBorderSize.style.transform = "translateX(-50%)"


const customboxbordersizetInput2 = document.createElement("input")
customboxbordersizetInput2.setAttribute("type", "text")
customboxbordersizetInput2.setAttribute("placeholder", "border size in px")
customboxbordersizetInput2.style.border = "2px solid"
customboxbordersizetInput2.style.position = "relative"
customboxbordersizetInput2.style.width = "110px"
customboxbordersizetInput2.style.height = "40px"


const copyBoxBorderSize= document.createElement("button")
copyBoxBorderSize.innerHTML = "Copy"
copyBoxBorderSize.style.position = "relative"
copyBoxBorderSize.style.width = "70px"
copyBoxBorderSize.style.height = "44px"
copyBoxBorderSize.style.cursor = "pointer"
copyBoxBorderSize.style.left = "10px"
copyBoxBorderSize.style.top = "21px"
copyBoxBorderSize.style.border = "none"
copyBoxBorderSize.style.borderRadius = "8px"
copyBoxBorderSize.style.fontWeight = "700"
copyBoxBorderSize.style.color = "white"
copyBoxBorderSize.style.fontSize = "17px"
copyBoxBorderSize.style.backgroundColor = "orange"
copyBoxBorderSize.classList.add("copyhover")

const pasteBoxBorderSize = document.createElement("button")
pasteBoxBorderSize.innerHTML = "Paste"
pasteBoxBorderSize.style.position = "relative"
pasteBoxBorderSize.style.width = "70px"
pasteBoxBorderSize.style.height = "44px"
pasteBoxBorderSize.style.cursor = "pointer"
pasteBoxBorderSize.style.left = "25px"
pasteBoxBorderSize.style.border = "none"
pasteBoxBorderSize.style.top = "21px"
pasteBoxBorderSize.style.borderRadius = "8px"
pasteBoxBorderSize.style.fontWeight = "700"
pasteBoxBorderSize.style.color = "white"
pasteBoxBorderSize.style.fontSize = "17px"
pasteBoxBorderSize.style.backgroundColor = "brown"
pasteBoxBorderSize.classList.add("copyhover")

flexedBoxCustomBorderSize.appendChild(customboxbordersizetInput2)
flexedBoxCustomBorderSize.appendChild(copyBoxBorderSize)
flexedBoxCustomBorderSize.appendChild(pasteBoxBorderSize)



const flexedBoxBoderColor = document.createElement("div")
flexedBoxBoderColor.style.display = "flex"
flexedBoxBoderColor.style.position = "relative"
flexedBoxBoderColor.style.top = "-200px"
flexedBoxBoderColor.style.left = "50%"
flexedBoxBoderColor.style.transform = "translateX(-50%)"


const colorInput6 = document.createElement("input")
colorInput6.setAttribute("type", "color")
colorInput6.style.position = "relative"
colorInput6.style.left = "50%"
colorInput6.style.transform = "translateX(-50%)"
colorInput6.style.width= "300px"


const copyBoxBorderColor = document.createElement("button")
copyBoxBorderColor.innerHTML = "C"
copyBoxBorderColor.style.position = "relative"
copyBoxBorderColor.style.width = "30px"
copyBoxBorderColor.style.height = "32px"
copyBoxBorderColor.style.cursor = "pointer"
copyBoxBorderColor.style.right = "70px"
copyBoxBorderColor.style.zIndex = "1"
copyBoxBorderColor.style.top = "24px"
copyBoxBorderColor.style.left = "-30px"
copyBoxBorderColor.style.border = "none"
copyBoxBorderColor.style.fontWeight = "700"
copyBoxBorderColor.style.color = "white"
copyBoxBorderColor.style.fontSize = "17px"
copyBoxBorderColor.style.backgroundColor = "orange"
copyBoxBorderColor.classList.add("copyhover")

const pasteBoxBorderColor = document.createElement("button")
pasteBoxBorderColor.innerHTML = "P"
pasteBoxBorderColor.style.position = "relative"
pasteBoxBorderColor.style.width = "30px"
pasteBoxBorderColor.style.top = "24px"
pasteBoxBorderColor.style.height = "32px"
pasteBoxBorderColor.style.cursor = "pointer"
pasteBoxBorderColor.style.zIndex = "1"
pasteBoxBorderColor.style.left = "-30px"
pasteBoxBorderColor.style.border = "none"
pasteBoxBorderColor.style.borderLeft = "2px solid black"
pasteBoxBorderColor.style.fontWeight = "700"
pasteBoxBorderColor.style.color = "white"
pasteBoxBorderColor.style.fontSize = "17px"
pasteBoxBorderColor.style.backgroundColor = "brown"
pasteBoxBorderColor.classList.add("copyhover")

flexedBoxBoderColor.appendChild(colorInput6)
flexedBoxBoderColor.appendChild(copyBoxBorderColor)
flexedBoxBoderColor.appendChild(pasteBoxBorderColor)



var advancedSettings4 = document.createElement("button")
advancedSettings4.style.position = "absolute"
advancedSettings4.style.top = "5px"
advancedSettings4.style.fontSize = "30px"
advancedSettings4.style.backgroundColor = "#ffffff00"
advancedSettings4.style.border = "none"
advancedSettings4.style.cursor = "pointer"
advancedSettings4.style.left = "50%"
advancedSettings4.style.transform = "translateX(-50%)"
advancedSettings4.innerHTML = "⚙️"


function addToPanel3() {
    thePanel.appendChild(deleteBtn3)
    thePanel.appendChild(backBtn3)
    thePanel.appendChild(flexedBoxColor)
    thePanel.appendChild(cordinates3)
    thePanel.appendChild(flexCord3)
    thePanel.appendChild(flexedCopyStyleBox)
    thePanel.appendChild(widthText2)
    thePanel.appendChild(widthInput2)
    thePanel.appendChild(flexedBoxCustomWidth)
    thePanel.appendChild(heightText2)
    thePanel.appendChild(heightInput2)
    thePanel.appendChild(flexedBoxCustomHeight)
    thePanel.appendChild(borderInput3)
    thePanel.appendChild(borderText3)
    thePanel.appendChild(flexedBoxCustomBorder)
    thePanel.appendChild(borderText4)
    thePanel.appendChild(borderInput4)
    thePanel.appendChild(flexedBoxCustomBorderSize)
    thePanel.appendChild(flexedBoxBoderColor)
    thePanel.appendChild(advancedSettings4)
    
}


function removeToPanel3() {
    if(thePanel.contains(deleteBtn3)) {
        thePanel.removeChild(deleteBtn3)
        thePanel.removeChild(flexedBoxColor)
        thePanel.removeChild(cordinates3)
        thePanel.removeChild(flexCord3)
        thePanel.removeChild(widthText2)
        thePanel.removeChild(widthInput2)
        thePanel.removeChild(flexedCopyStyleBox)
        thePanel.removeChild(flexedBoxCustomWidth)
        thePanel.removeChild(heightText2)
        thePanel.removeChild(heightInput2)
        thePanel.removeChild(flexedBoxCustomHeight)
        thePanel.removeChild(flexedBoxCustomBorder)
        thePanel.removeChild(flexedBoxCustomBorderSize)
        thePanel.removeChild(borderText3)
        thePanel.removeChild(borderInput3)
        thePanel.removeChild(borderText4)
        thePanel.removeChild(borderInput4)
        thePanel.removeChild(flexedBoxBoderColor)
        thePanel.removeChild(backBtn3)
        thePanel.removeChild(advancedSettings4)
    }
  
}