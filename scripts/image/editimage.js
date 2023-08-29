const backBtn5 = document.createElement("button")
backBtn5.innerHTML = "<"
backBtn5.style.borderRadius = "10px"
backBtn5.style.width = "80px"
backBtn5.style.height = "40px"
backBtn5.style.position = "sticky"
backBtn5.style.top = "754px"
backBtn5.style.marginRight = "220px"
backBtn5.style.marginLeft = "10px"
backBtn5.style.border = "none"
backBtn5.style.backgroundColor = "lightblue"
backBtn5.style.color = "white"
backBtn5.style.fontSize = "23px"
backBtn5.style.fontWeight = "700"
backBtn5.style.cursor = "pointer"


const deleteBtn5 = document.createElement("button")
deleteBtn5.style.width = "120px"
deleteBtn5.style.position = "sticky"
deleteBtn5.style.top = "754px"
deleteBtn5.style.marginLeft = "235px"
deleteBtn5.style.cursor = "pointer"
deleteBtn5.style.height = "40px"
deleteBtn5.style.borderRadius = "10px"
deleteBtn5.innerHTML = "DELETE"
deleteBtn5.style.fontWeight = "700"
deleteBtn5.style.zIndex = "30"
deleteBtn5.style.fontSize = "20px"
deleteBtn5.style.color = "white"
deleteBtn5.style.border = "none"
deleteBtn5.style.backgroundColor = "red"

const changeImage = document.createElement("input")
changeImage.setAttribute("placeholder", "url(f.e https://image.jpg)")
changeImage.style.position = "relative"
changeImage.style.top = "-140px"
changeImage.style.color = "black"
changeImage.style.fontWeight = "700"
changeImage.style.width = "320px"
changeImage.style.height = "50px"
changeImage.style.fontSize = "15px"
changeImage.style.left = "50%"
changeImage.style.transform = "translateX(-50%)"

const cordinates6 = document.createElement("p")
cordinates6.style.textAlign = "center"
cordinates6.style.position = "relative"
cordinates6.style.top = "-140px"
cordinates6.style.color = "red"
cordinates6.style.userSelect = "none"

const flexCord6 = document.createElement("div")
flexCord6.style.width = "100%"
flexCord6.style.height = "30px"
flexCord6.style.position = "absolute"
flexCord6.style.justifyContent = "center"
flexCord6.style.top = "125px"
flexCord6.style.display = "flex"

const leftInput6 = document.createElement("input")
leftInput6.setAttribute("placeholder", "Left")
leftInput6.style.width = "80px"
leftInput6.style.height = "30px"
leftInput6.style.position = "relative"
leftInput6.style.top = "40px"
leftInput6.style.marginRight = "10px"
leftInput6.setAttribute("type", "number")


const topInput6 = document.createElement("input")
topInput6.setAttribute("placeholder", "Top")
topInput6.style.width = "80px"
topInput6.style.height = "30px"
topInput6.style.position = "relative"
topInput6.style.top = "40px"
topInput6.setAttribute("type", "number")

flexCord6.appendChild(leftInput6)
flexCord6.appendChild(topInput6)


const flexedCopyStyleImage = document.createElement("div")
flexedCopyStyleImage.style.display = "flex"
flexedCopyStyleImage.style.position = "relative"
flexedCopyStyleImage.style.justifyContent = "center"
flexedCopyStyleImage.style.top = "-110px"

const copyStyleImage = document.createElement("button")
copyStyleImage.innerHTML = "Copy Style"
copyStyleImage.style.position = "relative"
copyStyleImage.style.marginRight = "20px"
copyStyleImage.style.fontSize = "18px"
copyStyleImage.style.color = "white"
copyStyleImage.style.cursor = "pointer"
copyStyleImage.style.backgroundColor = "cornflowerblue"
copyStyleImage.style.width = "130px"
copyStyleImage.style.height = "45px"
copyStyleImage.style.fontWeight = "800"
copyStyleImage.style.border = "none"
copyStyleImage.style.borderRadius = "10px"
copyStyleImage.classList.add("wholecopy")


const pasteStyleImage = document.createElement("button")
pasteStyleImage.style.position = "relative"
pasteStyleImage.innerHTML = "Paste Style"
pasteStyleImage.style.fontSize = "18px"
pasteStyleImage.style.cursor = "pointer"
pasteStyleImage.style.color = "white"
pasteStyleImage.style.backgroundColor = "chocolate"
pasteStyleImage.style.width = "130px"
pasteStyleImage.style.height = "45px"
pasteStyleImage.style.fontWeight = "800"
pasteStyleImage.style.border = "none"
pasteStyleImage.style.borderRadius = "10px"
pasteStyleImage.classList.add("wholecopy")



flexedCopyStyleImage.appendChild(copyStyleImage)
flexedCopyStyleImage.appendChild(pasteStyleImage)


const fileUpload = document.createElement("input")
fileUpload.setAttribute("type", "file")
fileUpload.style.top = "-275px"
fileUpload.style.marginLeft = "25px"
fileUpload.style.backgroundColor = "#ffffff00"
fileUpload.style.zIndex = "6"
fileUpload.style.cursor = "pointer"
fileUpload.style.width  = "100%"

const fileUploadText = document.createElement("p")
fileUploadText.innerHTML = "Select A File"
fileUploadText.style.position = "relative"
fileUploadText.style.fontWeight = "900"
fileUploadText.style.top = "-280px"
fileUploadText.style.left = "200px"
fileUploadText.style.zIndex = "5"
fileUploadText.style.fontSize = "0px"

const widthText6 = document.createElement("p")
widthText6.innerHTML = "Width: "
widthText6.style.position = "relative"
widthText6.style.fontSize = "20px"
widthText6.style.marginLeft = "40px"
widthText6.style.top = "-110px"
widthText6.style.userSelect = "none"

const widthInput6 = document.createElement("input")
widthInput6.setAttribute("type", "range")
widthInput6.setAttribute("min", "20")
widthInput6.setAttribute("max", "2550")
widthInput6.setAttribute("value", "150")
widthInput6.style.position = "relative"
widthInput6.style.top = "-130px"
widthInput6.style.zIndex = "10"
widthInput6.style.left = "50%"
widthInput6.style.transform = "translateX(-50%)"





const flexedWidthImage = document.createElement('div')
flexedWidthImage.style.display = 'flex'
flexedWidthImage.style.position = 'relative'
flexedWidthImage.style.left = "61%"
flexedWidthImage.style.transform = "translateX(-50%)"
flexedWidthImage.style.top = '-155px'

const customWidthInput6 = document.createElement("input")
customWidthInput6.setAttribute("type", "text")
customWidthInput6.setAttribute("placeholder", "width in px")
customWidthInput6.style.border = "2px solid"
customWidthInput6.style.position = "relative"
customWidthInput6.style.width = "110px"
customWidthInput6.style.height = "40px"

const copyImageWidth = document.createElement("button")
copyImageWidth.innerHTML = "Copy"
copyImageWidth.style.position = "relative"
copyImageWidth.style.width = "70px"
copyImageWidth.style.height = "44px"
copyImageWidth.style.cursor = "pointer"
copyImageWidth.style.top = "20px"
copyImageWidth.style.left = "10px"
copyImageWidth.style.border = "none"
copyImageWidth.style.borderRadius = "8px"
copyImageWidth.style.fontWeight = "700"
copyImageWidth.style.color = "white"
copyImageWidth.style.fontSize = "17px"
copyImageWidth.style.backgroundColor = "orange"
copyImageWidth.classList.add("copyhover")

const pasteImageWidth = document.createElement("button")
pasteImageWidth.innerHTML = "Paste"
pasteImageWidth.style.position = "relative"
pasteImageWidth.style.width = "70px"
pasteImageWidth.style.height = "44px"
pasteImageWidth.style.cursor = "pointer"
pasteImageWidth.style.top = "20px"
pasteImageWidth.style.left = "25px"
pasteImageWidth.style.border = "none"
pasteImageWidth.style.borderRadius = "8px"
pasteImageWidth.style.fontWeight = "700"
pasteImageWidth.style.color = "white"
pasteImageWidth.style.fontSize = "17px"
pasteImageWidth.style.backgroundColor = "brown"
pasteImageWidth.classList.add("copyhover")

flexedWidthImage.appendChild(customWidthInput6)
flexedWidthImage.appendChild(copyImageWidth)
flexedWidthImage.appendChild(pasteImageWidth)


const heightText6 = document.createElement("p")
heightText6.innerHTML = "Height: "
heightText6.style.position = "relative"
heightText6.style.fontSize = "20px"
heightText6.style.marginLeft = "40px"
heightText6.style.top = "-150px"
heightText6.style.userSelect = "none"


const heightInput6 = document.createElement("input")
heightInput6.setAttribute("type", "range")
heightInput6.setAttribute("min", "20")
heightInput6.setAttribute("max", "2550")
heightInput6.setAttribute("value", "150")
heightInput6.style.position = "relative"
heightInput6.style.zIndex = "10"
heightInput6.style.top = "-170px"
heightInput6.style.left = "50%"
heightInput6.style.transform = "translateX(-50%)"




const flexedHeightImage = document.createElement('div')
flexedHeightImage.style.display = 'flex'
flexedHeightImage.style.position = 'relative'
flexedHeightImage.style.left = "61%"
flexedHeightImage.style.transform = "translateX(-50%)"
flexedHeightImage.style.top = '-195px'

const customHeightInput6 = document.createElement("input")
customHeightInput6.setAttribute("type", "text")
customHeightInput6.setAttribute("placeholder", "height in px")
customHeightInput6.style.border = "2px solid"
customHeightInput6.style.position = "relative"
customHeightInput6.style.width = "110px"
customHeightInput6.style.height = "40px"


const copyImageHeight = document.createElement("button")
copyImageHeight.innerHTML = "Copy"
copyImageHeight.style.position = "relative"
copyImageHeight.style.width = "70px"
copyImageHeight.style.height = "44px"
copyImageHeight.style.cursor = "pointer"
copyImageHeight.style.top = "20px"
copyImageHeight.style.left = "10px"
copyImageHeight.style.border = "none"
copyImageHeight.style.borderRadius = "8px"
copyImageHeight.style.fontWeight = "700"
copyImageHeight.style.color = "white"
copyImageHeight.style.fontSize = "17px"
copyImageHeight.style.backgroundColor = "orange"
copyImageHeight.classList.add("copyhover")

const pasteImageHeight = document.createElement("button")
pasteImageHeight.innerHTML = "Paste"
pasteImageHeight.style.position = "relative"
pasteImageHeight.style.width = "70px"
pasteImageHeight.style.height = "44px"
pasteImageHeight.style.cursor = "pointer"
pasteImageHeight.style.top = "20px"
pasteImageHeight.style.left = "25px"
pasteImageHeight.style.border = "none"
pasteImageHeight.style.borderRadius = "8px"
pasteImageHeight.style.fontWeight = "700"
pasteImageHeight.style.color = "white"
pasteImageHeight.style.fontSize = "17px"
pasteImageHeight.style.backgroundColor = "brown"
pasteImageHeight.classList.add("copyhover")

flexedHeightImage.appendChild(customHeightInput6)
flexedHeightImage.appendChild(copyImageHeight)
flexedHeightImage.appendChild(pasteImageHeight)

const borderText6 = document.createElement("p")
borderText6.innerHTML = "Border Radius: "
borderText6.style.position = "relative"
borderText6.style.fontSize = "20px"
borderText6.style.marginLeft = "40px"
borderText6.style.top = "-190px"
borderText6.style.userSelect = "none"


const borderInput6 = document.createElement("input")
borderInput6.setAttribute("type", "range")
borderInput6.setAttribute("min", "0")
borderInput6.setAttribute("max", "500")
borderInput6.setAttribute("value", "0")
borderInput6.style.position = "relative"
borderInput6.style.top = "-210px"
borderInput6.style.left = "50%"
borderInput6.style.zIndex = "10"
borderInput6.style.transform = "translateX(-50%)"



const flexedBorderRadiusImage = document.createElement('div')
flexedBorderRadiusImage.style.display = 'flex'
flexedBorderRadiusImage.style.position = 'relative'
flexedBorderRadiusImage.style.left = "61%"
flexedBorderRadiusImage.style.transform = "translateX(-50%)"
flexedBorderRadiusImage.style.top = '-230px'

const customborderInput6 = document.createElement("input")
customborderInput6.setAttribute("type", "text")
customborderInput6.setAttribute("placeholder", "border in px")
customborderInput6.style.border = "2px solid"
customborderInput6.style.position = "relative"
customborderInput6.style.width = "110px"
customborderInput6.style.height = "40px"


const copyImageBorder = document.createElement("button")
copyImageBorder.innerHTML = "Copy"
copyImageBorder.style.position = "relative"
copyImageBorder.style.width = "70px"
copyImageBorder.style.height = "44px"
copyImageBorder.style.cursor = "pointer"
copyImageBorder.style.top = "20px"
copyImageBorder.style.left = "10px"
copyImageBorder.style.border = "none"
copyImageBorder.style.borderRadius = "8px"
copyImageBorder.style.fontWeight = "700"
copyImageBorder.style.color = "white"
copyImageBorder.style.fontSize = "17px"
copyImageBorder.style.backgroundColor = "orange"
copyImageBorder.classList.add("copyhover")

const pasteImageBorder = document.createElement("button")
pasteImageBorder.innerHTML = "Paste"
pasteImageBorder.style.position = "relative"
pasteImageBorder.style.width = "70px"
pasteImageBorder.style.height = "44px"
pasteImageBorder.style.cursor = "pointer"
pasteImageBorder.style.top = "20px"
pasteImageBorder.style.left = "25px"
pasteImageBorder.style.border = "none"
pasteImageBorder.style.borderRadius = "8px"
pasteImageBorder.style.fontWeight = "700"
pasteImageBorder.style.color = "white"
pasteImageBorder.style.fontSize = "17px"
pasteImageBorder.style.backgroundColor = "brown"
pasteImageBorder.classList.add("copyhover")

flexedBorderRadiusImage.appendChild(customborderInput6)
flexedBorderRadiusImage.appendChild(copyImageBorder)
flexedBorderRadiusImage.appendChild(pasteImageBorder)


var advancedSettings5 = document.createElement("button")
advancedSettings5.style.position = "absolute"
advancedSettings5.style.top = "5px"
advancedSettings5.style.fontSize = "30px"
advancedSettings5.style.backgroundColor = "#ffffff00"
advancedSettings5.style.border = "none"
advancedSettings5.style.cursor = "pointer"
advancedSettings5.style.left = "50%"
advancedSettings5.style.transform = "translateX(-50%)"
advancedSettings5.innerHTML = "⚙️"


function addToPanel5() {
    thePanel.appendChild(deleteBtn5)
    thePanel.appendChild(backBtn5)
    thePanel.appendChild(changeImage)
    thePanel.appendChild(cordinates6)
    thePanel.appendChild(flexCord6)
    thePanel.appendChild(fileUpload)
    thePanel.appendChild(fileUploadText)
    thePanel.appendChild(flexedCopyStyleImage)
    thePanel.appendChild(widthText6)
    thePanel.appendChild(widthInput6)
    thePanel.appendChild(flexedWidthImage)
    thePanel.appendChild(heightText6)
    thePanel.appendChild(heightInput6)
    thePanel.appendChild(flexedHeightImage)
    thePanel.appendChild(borderText6)
    thePanel.appendChild(borderInput6)
    thePanel.appendChild(flexedBorderRadiusImage)
    thePanel.appendChild(advancedSettings5)


}


function removeToPanel5() {
    if (thePanel.contains(deleteBtn5)) {
        thePanel.removeChild(deleteBtn5)
        thePanel.removeChild(backBtn5)
        thePanel.removeChild(changeImage)
        thePanel.removeChild(cordinates6)
        thePanel.removeChild(flexCord6)
        thePanel.removeChild(fileUpload)
        thePanel.removeChild(flexedCopyStyleImage)
        thePanel.removeChild(fileUploadText)
        thePanel.removeChild(widthText6)
        thePanel.removeChild(widthInput6)
        thePanel.removeChild(flexedWidthImage)
        thePanel.removeChild(heightText6)
        thePanel.removeChild(heightInput6)
        thePanel.removeChild(flexedHeightImage)
        thePanel.removeChild(borderText6)
        thePanel.removeChild(borderInput6)
        thePanel.removeChild(advancedSettings5)
        thePanel.removeChild(flexedBorderRadiusImage)
    }


}