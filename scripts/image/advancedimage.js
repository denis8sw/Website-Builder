const backBtnAdv5 = document.createElement("button")
backBtnAdv5.innerHTML = "<"
backBtnAdv5.style.borderRadius = "10px"
backBtnAdv5.style.width = "80px"
backBtnAdv5.style.height = "40px"
backBtnAdv5.style.position = "sticky"
backBtnAdv5.style.top = "754px"
backBtnAdv5.style.marginRight = "220px"
backBtnAdv5.style.marginLeft = "10px"
backBtnAdv5.style.border = "none"
backBtnAdv5.style.backgroundColor = "lightblue"
backBtnAdv5.style.color = "white"
backBtnAdv5.style.fontSize = "23px"
backBtnAdv5.style.fontWeight = "700"
backBtnAdv5.style.cursor = "pointer"
backBtnAdv5.style.zIndex = "30"



function advancedAdd5() {
    thePanel.appendChild(backBtnAdv5)
    thePanel.appendChild(generalText)
    thePanel.appendChild(zIndexText)
    thePanel.appendChild(zIndexInput)

}


function advancedRemove5() {
    if (thePanel.contains(backBtnAdv5)) {
        thePanel.removeChild(backBtnAdv5)
        thePanel.removeChild(generalText)
        thePanel.removeChild(zIndexText)
        thePanel.removeChild(zIndexInput)
    }
    
}