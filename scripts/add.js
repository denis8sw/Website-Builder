const boX1 = document.getElementById("box1")
const fakeBody = document.getElementById("fakebody")
const allElements = document.getElementById("allelements")
boX1.addEventListener("click", addText)
let originalValue;
let hoverValue;


let selectedElement = null;

function addText() {

    const textElement = document.createElement("p")
    const divElement = document.createElement("div")

    textElement.textContent = "Text"
    textElement.style.userSelect = "none"
    textElement.style.fontSize = "16px"
    textElement.style.fontWeight = "400"
    textElement.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"




    divElement.style.left = "50%"
    divElement.style.transform = "translateX(-50%)"
    divElement.style.position = "absolute"
    divElement.style.zIndex = "9"

    divElement.appendChild(textElement)
    allElements.appendChild(divElement)


    divElement.addEventListener("mousedown", onMouseDown)
    divElement.addEventListener("dblclick", selectText)

    divElement.classList.add("texts")



    function selectText() {
        fakeBody.addEventListener("click", removeBorder)
        fakeBody.classList.remove("noediting")
        if (selectedElement) {
            selectedElement.style.border = "0px solid black";
        }
        thePanel.removeEventListener("click", togglePanel)
        selectedElement = divElement;

        if (!(selectedElement == null)) {
            divElement.style.border = "2px solid black";
        }

        if (selectedElement == divElement) {
            selectedElement2 = null
            selectedElement3 = null
            selectedElement4 = null
            selectedElement5 = null
            if (thePanel.contains(deleteBtn2)) {
                removeToPanel2()
            }
            if (thePanel.contains(backBtn3)) {
                removeToPanel3()
            }
            if (thePanel.contains(deleteBtn4)) {
                removeToPanel4()
            }
            if (thePanel.contains(deleteBtn5)) {
                removeToPanel5()
            }
            var elements = document.getElementsByClassName("buttons");
            var elements2 = document.getElementsByClassName("boxes");
            var elements3 = document.getElementsByClassName("textareas");
            var elements4 = document.getElementsByClassName("images");


            // Loop through the elements and modify their styles
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.border = "0px";
            }
            for (var i = 0; i < elements2.length; i++) {
                elements2[i].style.border = "0px";
            }
            for (var i = 0; i < elements3.length; i++) {
                elements3[i].style.border = "0px";
            }
            for (var i = 0; i < elements4.length; i++) {
                elements4[i].style.border = "0px";
            }
        }

        advancedRemove4()

        backBtn.addEventListener("click", removeBorder)

        advancedRemove5()
        //removing default elements
        elementsPosClose()
        //adding the edit elements
        addToPanel()
        advancedRemove2()

        if (thePanel.contains(generalText)) {
            advancedRemove()
        }
        //settings actions

        changeText.addEventListener("keyup", displayedText)
        changeText.value = textElement.innerHTML
        function displayedText() {
            if (selectedElement == divElement) {
                textElement.innerHTML = changeText.value
                if (changeText.value == "") {
                    textElement.innerHTML = "Text"
                }
            }
        }

        deleteBtn.addEventListener("click", removeText)
        function removeText() {
            if (selectedElement == divElement) {
                if (allElements.contains(divElement)) {
                    allElements.removeChild(divElement)
                }
                removeToPanel()
            }
            setTimeout(() => {
                selectedElement = null;
                divElement.style.border = "0px solid black";
                elementsPosShow()
                thePanel.addEventListener("click", togglePanel)
            }, 1);

        }

        centerBtn.addEventListener("click", centerElement)
        function centerElement() {
            if (selectedElement == divElement) {
                divElement.style.left = "50%"
                divElement.style.transform = "translateX(-50%)"
            }
        }


        fontText.innerHTML = "Font Size:" + " " + textElement.style.fontSize
        fontInput.addEventListener("input", changeFontSize)
        const fontSizeValue = parseFloat(getComputedStyle(textElement).fontSize);
        fontInput.value = fontSizeValue;
        function changeFontSize() {
            if (selectedElement == divElement) {
                fontText.innerHTML = "Font Size:" + " " + textElement.style.fontSize
                textElement.style.fontSize = fontInput.value + "px"
                customTextFontSize.value = parseInt(textElement.style.fontSize)
            }
        }

        customTextFontSize.addEventListener("keypress", customFontSize)
        customTextFontSize.value = parseInt(textElement.style.fontSize)

        function customFontSize(event) {
            if (selectedElement == divElement) {
                if (event.keyCode === 13) {
                    textElement.style.fontSize = customTextFontSize.value + "px"
                    fontText.innerHTML = "Font Size:" + " " + textElement.style.fontSize
                    fontInput.value = parseInt(textElement.style.fontSize)
                }
            }
        }


        copyTextFontSize.addEventListener("click", copyFont)

        function copyFont() {
            if (selectedElement == divElement) {
                copyNumber = parseInt(textElement.style.fontSize)
            }
        }

        pasteTextFontSize.addEventListener("click", pasteFont)

        function pasteFont() {
            if (selectedElement == divElement) {
                textElement.style.fontSize = copyNumber + "px"
                fontText.innerHTML = "Font Size:" + " " + textElement.style.fontSize
                fontInput.value = parseInt(textElement.style.fontSize)
                customTextFontSize.value = parseInt(textElement.style.fontSize)
            }
        }

        weightText.innerHTML = "Font Weight:" + " " + textElement.style.fontWeight
        weightInput.addEventListener("input", changeWeightSize)
        weightInput.value = textElement.style.fontWeight
        function changeWeightSize() {
            if (selectedElement == divElement) {
                weightText.innerHTML = "Font Weight:" + " " + textElement.style.fontWeight
                textElement.style.fontWeight = weightInput.value
                customTextFontWeightSize.value = textElement.style.fontWeight
            }
        }

        customTextFontWeightSize.addEventListener("keypress", customFontWeight)
        customTextFontWeightSize.value = textElement.style.fontWeight

        function customFontWeight() {
            if (selectedElement == divElement) {
                if (event.keyCode === 13) {
                    textElement.style.fontWeight = customTextFontWeightSize.value
                    weightText.innerHTML = "Font Weight:" + " " + textElement.style.fontWeight
                    weightInput.value = textElement.style.fontWeight
                }
            }
        }

        copyTextFontWeightSize.addEventListener("click", copyFontWeight)

        function copyFontWeight() {
            if (selectedElement == divElement) {
                copyNumber = textElement.style.fontWeight
            }
        }

        pasteTextFontWeightSize.addEventListener("click", pasteFontWeight)

        function pasteFontWeight() {
            if (selectedElement == divElement) {
                textElement.style.fontWeight = copyNumber
                weightText.innerHTML = "Font Weight:" + " " + textElement.style.fontWeight
                weightInput.value = textElement.style.fontWeight
                customTextFontWeightSize.value = textElement.style.fontWeight
            }
        }


        fontStyleText.innerHTML = textElement.style.fontFamily
        fontStyleText.style.fontFamily = textElement.style.fontFamily




        fontStyleText1.addEventListener("click", changeFontStyle1)
        function changeFontStyle1() {
            if (selectedElement == divElement) {
                textElement.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
                fontStyleText.innerHTML = textElement.style.fontFamily
                fontStyleText.style.fontFamily = textElement.style.fontFamily
            }
        }


        fontStyleText2.addEventListener("click", changeFontStyle2)
        function changeFontStyle2() {
            if (selectedElement == divElement) {
                textElement.style.fontFamily = "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif"
                fontStyleText.innerHTML = textElement.style.fontFamily
                fontStyleText.style.fontFamily = textElement.style.fontFamily
            }
        }

        fontStyleText3.addEventListener("click", changeFontStyle3)
        function changeFontStyle3() {
            if (selectedElement == divElement) {
                textElement.style.fontFamily = "Arial, Helvetica, sans-serif"
                fontStyleText.innerHTML = textElement.style.fontFamily
                fontStyleText.style.fontFamily = textElement.style.fontFamily
            }
        }

        fontStyleText4.addEventListener("click", changeFontStyle4)
        function changeFontStyle4() {
            if (selectedElement == divElement) {
                textElement.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
                fontStyleText.innerHTML = textElement.style.fontFamily
                fontStyleText.style.fontFamily = textElement.style.fontFamily
            }
        }

        fontStyleText5.addEventListener("click", changeFontStyle5)
        function changeFontStyle5() {
            if (selectedElement == divElement) {
                textElement.style.fontFamily = "Times New Roman, Times, serif"
                fontStyleText.innerHTML = textElement.style.fontFamily
                fontStyleText.style.fontFamily = textElement.style.fontFamily
            }
        }

        fontStyleText6.addEventListener("click", changeFontStyle6)
        function changeFontStyle6() {
            if (selectedElement == divElement) {
                textElement.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
                fontStyleText.innerHTML = textElement.style.fontFamily
                fontStyleText.style.fontFamily = textElement.style.fontFamily
            }
        }


        var color = tinycolor(textElement.style.color);

        colorInput.value = textElement.style.color = color.toString("hex")
        colorInput.addEventListener("input", changeTextColor)

        function changeTextColor() {
            if (selectedElement == divElement) {
                textElement.style.color = colorInput.value
            }
        }

        copyTextColor.addEventListener("click", copyTheTextColor)

        function copyTheTextColor() {
            if (selectedElement == divElement) {

                copyColor = textElement.style.color
            }
        }

        pasteTextColor.addEventListener("click", pasteTheTextColor)

        function pasteTheTextColor() {
            if (selectedElement == divElement) {
                textElement.style.color = copyColor

                var color2 = tinycolor(copyColor);
                colorInput.value = copyColor = color2.toString("hex")
            }
        }




        Box1.addEventListener("click", makeUppperCase)
        if (selectedElement == divElement) {
            if (!(textElement.style.textTransform == "uppercase")) {
                boxtext1.style.color = "white"
                Box1.addEventListener("click", makeUppperCase)
                Box1.removeEventListener("click", removeUpperCase)
            } else {
                boxtext1.style.color = "orange"
                Box1.removeEventListener("click", makeUppperCase)
                Box1.addEventListener("click", removeUpperCase)
            }
        }
        function makeUppperCase() {
            if (selectedElement == divElement) {
                boxtext1.style.color = "orange"
                textElement.style.textTransform = "uppercase"
                setTimeout(() => {
                    Box1.removeEventListener("click", makeUppperCase)
                    Box1.addEventListener("click", removeUpperCase)
                }, 1);
            }
        }
        function removeUpperCase() {
            if (selectedElement == divElement) {
                boxtext1.style.color = "white"
                textElement.style.textTransform = "none"
                setTimeout(() => {
                    Box1.removeEventListener("click", removeUpperCase)
                    Box1.addEventListener("click", makeUppperCase)
                }, 1);
            }
        }



        if (selectedElement == divElement) {
            if (!(textElement.style.fontStyle == "italic")) {
                boxtext2.style.color = "white"
                Box2.addEventListener("click", makeItalic)
                Box2.removeEventListener("click", removeItalic)
            } else {
                boxtext2.style.color = "orange"
                Box2.removeEventListener("click", makeItalic)
                Box2.addEventListener("click", removeItalic)
            }
        }
        Box2.addEventListener("click", makeItalic)
        function makeItalic() {
            if (selectedElement == divElement) {
                boxtext2.style.color = "orange"
                textElement.style.fontStyle = "italic"

                setTimeout(() => {
                    Box2.removeEventListener("click", makeItalic)
                    Box2.addEventListener("click", removeItalic)
                }, 1);
            }
        }

        function removeItalic() {
            if (selectedElement == divElement) {
                boxtext2.style.color = "white"
                textElement.style.fontStyle = "normal"

                setTimeout(() => {
                    Box2.addEventListener("click", makeItalic)
                    Box2.removeEventListener("click", removeItalic)
                }, 1);
            }
        }



        if (selectedElement == divElement) {
            if (!(textElement.style.textDecoration == "underline")) {
                boxtext3.style.color = "white"
                Box3.addEventListener("click", makeUnderline)
                Box3.removeEventListener("click", removeUnderline)
            } else {
                boxtext3.style.color = "orange"
                Box3.removeEventListener("click", makeUnderline)
                Box3.addEventListener("click", removeUnderline)
            }
        }
        Box3.addEventListener("click", makeUnderline)
        function makeUnderline() {
            if (selectedElement == divElement) {
                boxtext3.style.color = "orange"
                textElement.style.textDecoration = "underline"

                setTimeout(() => {
                    Box3.removeEventListener("click", makeUnderline)
                    Box3.addEventListener("click", removeUnderline)
                }, 1);
            }
        }

        function removeUnderline() {
            if (selectedElement == divElement) {
                boxtext3.style.color = "white"
                textElement.style.textDecoration = "none"

                setTimeout(() => {
                    Box3.addEventListener("click", makeUnderline)
                    Box3.removeEventListener("click", removeUnderline)
                }, 1);
            }
        }

        BoxOutline.addEventListener("click", addOutline)





        if (selectedElement == divElement) {
            if (outlineInput.value = textElement.style.webkitTextStroke ? parseInt(textElement.style.webkitTextStroke) : "") {
                outlinetext.style.color = "orange"
                BoxOutline.addEventListener("click", removeOutline)
            } else {
                outlinetext.style.color = "white"
                BoxOutline.addEventListener("click", addOutline)
            }
        }




        function addOutline() {
            if (selectedElement == divElement) {
                textElement.style.webkitTextStroke = outlineInput.value + "px"
                outlineInput.value = textElement.style.webkitTextStroke ? parseInt(textElement.style.webkitTextStroke) : "";
                textElement.style.webkitTextStrokeColor = outlineColor.value
                outlinetext.style.color = "orange"

                setTimeout(() => {
                    BoxOutline.removeEventListener("click", addOutline)
                    BoxOutline.addEventListener("click", removeOutline)
                }, 1);
            }
        }

        function removeOutline() {
            if (selectedElement == divElement) {
                textElement.style.webkitTextStroke = "0px"
                textElement.style.webkitTextStrokeColor = null
                outlinetext.style.color = "white"

                setTimeout(() => {
                    BoxOutline.removeEventListener("click", removeOutline)
                    BoxOutline.addEventListener("click", addOutline)
                }, 1);
            }
        }

        outlineInput.addEventListener("input", controlOutline)
        outlineInput.value = textElement.style.webkitTextStroke ? parseInt(textElement.style.webkitTextStroke) : "";
        function controlOutline() {
            if (selectedElement == divElement) {
                if (outlinetext.style.color == "orange") {
                    textElement.style.webkitTextStroke = outlineInput.value + "px"
                    textElement.style.webkitTextStrokeColor = outlineColor.value
                } else {
                    textElement.style.webkitTextStroke = "none"
                    textElement.style.webkitTextStrokeColor = null
                }

            }
        }



        var color2 = tinycolor(textElement.style.webkitTextStrokeColor);
        outlineColor.value = textElement.style.webkitTextStrokeColor = color2.toString("hex")


        outlineColor.addEventListener("input", controlOutlineColor)
        function controlOutlineColor() {
            if (selectedElement == divElement) {
                if (outlinetext.style.color == "orange") {
                    textElement.style.webkitTextStroke = outlineInput.value + "px"
                    textElement.style.webkitTextStrokeColor = outlineColor.value

                } else {
                    textElement.style.webkitTextStroke = "0px"
                    textElement.style.webkitTextStrokeColor = null
                }

            }
        }



        divElement.addEventListener("mousemove", updatingCordinates)
        cordinates.innerHTML = "Cordinates - " + "Left: " + divElement.style.left + " / " + "Top: " + divElement.style.top
        function updatingCordinates() {
            if (selectedElement == divElement) {
                cordinates.innerHTML = "Cordinates - " + "Left: " + divElement.style.left + " / " + "Top: " + divElement.style.top
                leftInput.value = divElement.style.left ? parseInt(divElement.style.left) : ""
                topInput.value = divElement.style.top ? parseInt(divElement.style.top) : ""
            }

        }



        leftInput.addEventListener("keypress", customLeft)
        leftInput.value = divElement.style.left ? parseInt(divElement.style.left) : ""
        function customLeft(event) {
            if (event.keyCode === 13) {
                if (selectedElement == divElement) {
                    divElement.style.left = leftInput.value + "px"
                    cordinates.innerHTML = "Cordinates - " + "Left: " + leftInput.value + "px" + " / " + "Top: " + divElement.style.top

                }

            }
        }


        topInput.addEventListener("keypress", customTop)
        topInput.value = divElement.style.top ? parseInt(divElement.style.top) : ""
        function customTop(event) {
            if (event.keyCode === 13) {
                if (selectedElement == divElement) {
                    divElement.style.top = topInput.value + "px"
                    cordinates.innerHTML = "Cordinates - " + "Left: " + leftInput.value + "px" + " / " + "Top: " + divElement.style.top
                }

            }
        }

        copyStyleText.addEventListener("click", copyWholeStyle)


        function copyWholeStyle() {
            if (selectedElement == divElement) {
                textFont = parseInt(textElement.style.fontSize)
                textWeight = textElement.style.fontWeight
                textFontFamily = textElement.style.fontFamily
                textColor = textElement.style.color


                if (textElement.style.textTransform == "uppercase") {
                    upperCase = true
                } else {
                    upperCase = false
                }
                if (textElement.style.fontStyle == "italic") {
                    italicStyle = true
                } else {
                    italicStyle = false
                }
                if (textElement.style.textDecoration == "underline") {
                    underLine = true
                } else {
                    underLine = false
                }
                if (outlineInput.value = textElement.style.webkitTextStroke ? parseInt(textElement.style.webkitTextStroke) : "") {
                    outlineStyle = true
                } else {
                    outlineStyle = false
                }

                outlineTextSize = parseInt(textElement.style.webkitTextStroke)
                outlineTextColor =   textElement.style.webkitTextStrokeColor

            }
        }

        pasteStyleText.addEventListener("click", pasteWholeStyle)

        function pasteWholeStyle() {
            if (selectedElement == divElement) {


                textElement.style.fontSize = textFont + "px"
                customTextFontSize.value = parseInt(textElement.style.fontSize)
                fontText.innerHTML = "Font Size:" + " " + textElement.style.fontSize
                fontInput.value = parseInt(textElement.style.fontSize)


                textElement.style.fontWeight = textWeight
                customTextFontWeightSize.value = textElement.style.fontWeight
                weightText.innerHTML = "Font Weight:" + " " + textElement.style.fontWeight
                weightInput.value = textElement.style.fontWeight


                textElement.style.fontFamily = textFontFamily
                fontStyleText.innerHTML = textElement.style.fontFamily
                fontStyleText.style.fontFamily = textElement.style.fontFamily


                textElement.style.color = textColor
                var color3 = tinycolor(textColor);
                colorInput.value = textColor = color3.toString("hex")

                if (upperCase == true) {
                    textElement.classList.add("uppercase")
                    boxtext1.style.color = "orange"
                    textElement.style.textTransform = "uppercase"
                    Box1.removeEventListener("click", makeUppperCase)
                    Box1.addEventListener("click", removeUpperCase)
                } else {
                    boxtext1.style.color = "white"
                    textElement.style.textTransform = "none"

                    Box1.removeEventListener("click", removeUpperCase)
                    Box1.addEventListener("click", makeUppperCase)
                }
                if (italicStyle == true) {
                    boxtext2.style.color = "orange"
                    textElement.style.fontStyle = "italic"

                    Box2.removeEventListener("click", makeItalic)
                    Box2.addEventListener("click", removeItalic)
                } else {
                    boxtext2.style.color = "white"
                    textElement.style.fontStyle = "normal"


                    Box2.addEventListener("click", makeItalic)
                    Box2.removeEventListener("click", removeItalic)
                }
                if (underLine == true) {
                    boxtext3.style.color = "orange"
                    textElement.style.textDecoration = "underline"


                    Box3.removeEventListener("click", makeUnderline)
                    Box3.addEventListener("click", removeUnderline)
                } else {
                    boxtext3.style.color = "white"
                    textElement.style.textDecoration = "none"


                    Box3.addEventListener("click", makeUnderline)
                    Box3.removeEventListener("click", removeUnderline)
                }
                if (outlineStyle == true) {
                    textElement.style.webkitTextStroke = outlineInput.value + "px"
                    outlineInput.value = textElement.style.webkitTextStroke ? parseInt(textElement.style.webkitTextStroke) : "";
                    textElement.style.webkitTextStrokeColor = outlineColor.value
                    outlinetext.style.color = "orange"


                    BoxOutline.removeEventListener("click", addOutline)
                    BoxOutline.addEventListener("click", removeOutline)
                } else {
                    textElement.style.webkitTextStroke = "0px"
                    textElement.style.webkitTextStrokeColor = null
                    outlinetext.style.color = "white"


                    BoxOutline.removeEventListener("click", removeOutline)
                    BoxOutline.addEventListener("click", addOutline)
                }

                textElement.style.webkitTextStroke = outlineTextSize +  "px"
                outlineInput.value = textElement.style.webkitTextStroke ? parseInt(textElement.style.webkitTextStroke) : "";


                textElement.style.webkitTextStrokeColor = outlineTextColor
                var color3 = tinycolor(outlineTextColor);
                outlineColor.value =outlineTextColor = color3.toString("hex")

            }
        }

        advancedRemove3()

        advancedSettings1.addEventListener("click", openAdvanceMenu)


        function openAdvanceMenu() {
            if (thePanel.contains(changeText)) {
                removeToPanel()
                advancedAdd()
            }
        }


        backBtnAdv.addEventListener("click", closeAdvanced)

        function closeAdvanced() {
            addToPanel()
            advancedRemove()
        }

        zIndexInput.addEventListener("keypress", changeZIndex)
        zIndexInput.value = divElement.style.zIndex

        function changeZIndex(event) {
            if (event.keyCode === 13) {
                if (selectedElement == divElement) {
                    divElement.style.zIndex = zIndexInput.value
                }
            }
        }

        hoverButton.addEventListener("click", addHoverEvent)

        if (selectedElement == divElement) {
            if (textElement.classList.contains("hoverevent")) {
                hoverButton.classList.add("check")
                hoverButton.style.color = "green"
                hoverButton.innerHTML = "Hover Event [ON]"

                setTimeout(() => {
                    hoverButton.removeEventListener("click", addHoverEvent)
                    hoverButton.addEventListener("click", removeHoverEvent)
                }, 1);
            } else {
                hoverButton.classList.remove("check")
                hoverButton.style.color = "red"
                hoverButton.innerHTML = "Hover Event [OFF]"

                hoverColorButton.style.color = "red"
                hoverColorButton.innerHTML = "Color Change [OFF]"

                hoverSizeButton.innerHTML = "Size Change [OFF]"
                hoverSizeButton.style.color = "red"



                hoverSizeButton.addEventListener("click", toggleHoverSize)
                hoverSizeButton.removeEventListener("click", removeHoverSize)

                hoverSizeButton.removeEventListener("click", toggleHoverSize)
                hoverSizeButton.removeEventListener("click", removeHoverSize)



                hoverColorButton.removeEventListener("click", toggleHoverColor)
                hoverColorButton.removeEventListener("click", removeHoverColor)

                textElement.classList.remove("size")
                textElement.classList.remove("size2")
                textElement.classList.remove("size3")
                textElement.classList.remove("size4")

                sizeBox.style.backgroundColor = "white"
                sizeBox2.style.backgroundColor = "white"
                sizeBox3.style.backgroundColor = "white"
                sizeBox4.style.backgroundColor = "white"


                setTimeout(() => {
                    hoverButton.addEventListener("click", addHoverEvent)
                    hoverButton.removeEventListener("click", removeHoverEvent)
                }, 1);


            }
        }



        function addHoverEvent() {
            if (selectedElement == divElement) {
                textElement.classList.add("hoverevent")
                hoverButton.classList.add("check")
                hoverButton.style.color = "green"
                hoverButton.innerHTML = "Hover Event [ON]"
                hoverColorButton.addEventListener("click", toggleHoverColor)
                hoverSizeButton.addEventListener("click", toggleHoverSize)
                setTimeout(() => {
                    hoverButton.removeEventListener("click", addHoverEvent)
                    hoverButton.addEventListener("click", removeHoverEvent)
                }, 1);
            }
        }


        function removeHoverEvent() {
            if (selectedElement == divElement) {
                textElement.classList.remove("hoverevent")
                hoverButton.classList.remove("check")
                hoverButton.style.color = "red"
                hoverButton.innerHTML = "Hover Event [OFF]"

                hoverColorButton.style.color = "red"
                hoverColorButton.innerHTML = "Color Change [OFF]"

                hoverSizeButton.innerHTML = "Size Change [OFF]"
                hoverSizeButton.style.color = "red"
                textElement.classList.remove("size")

                hoverColorButton.removeEventListener("click", toggleHoverColor)


                hoverSizeButton.addEventListener("click", toggleHoverSize)
                hoverSizeButton.removeEventListener("click", removeHoverSize)

                textElement.classList.remove("size")
                textElement.classList.remove("size2")
                textElement.classList.remove("size3")
                textElement.classList.remove("size4")

                sizeBox.style.backgroundColor = "white"
                sizeBox2.style.backgroundColor = "white"
                sizeBox3.style.backgroundColor = "white"
                sizeBox4.style.backgroundColor = "white"

                colorRed.style.border = "0px solid"
                textElement.classList.remove("isred")

                colorBlue.style.border = "0px solid"
                textElement.classList.remove("isblue")

                colorOrange.style.border = "0px solid"
                textElement.classList.remove("isorange")

                colorGreen.style.border = "0px solid"
                textElement.classList.remove("isgreen")

                colorPurple.style.border = "0px solid"
                textElement.classList.remove("ispurple")


                colorGray.style.border = "0px solid"
                textElement.classList.remove("isgray")

                colorAqua.style.border = "0px solid"
                textElement.classList.remove("isaqua")

                colorBrown.style.border = "0px solid"
                textElement.classList.remove("isbrown")

                colorYellow.style.border = "0px solid"
                textElement.classList.remove("isyellow")

                colorBlack.style.border = "0px solid"
                textElement.classList.remove("isblack")

                hoverColorButton.removeEventListener("click", toggleHoverColor)
                hoverColorButton.removeEventListener("click", removeHoverColor)

                hoverSizeButton.removeEventListener("click", toggleHoverSize)
                hoverSizeButton.removeEventListener("click", removeHoverSize)

                textElement.classList.remove("hovercolor")

                smoothAnim.addEventListener("click", toggleSmooth)
                smoothAnim.removeEventListener("click", removeSmooth)

                colorRed.removeEventListener("click", removeRed)
                colorBlue.removeEventListener("click", removeBlue)
                colorOrange.removeEventListener("click", removeOrange)
                colorGreen.removeEventListener("click", removeGreen)
                colorPurple.removeEventListener("click", removePurple)
                colorGray.removeEventListener("click", removeGray)
                colorAqua.removeEventListener("click", removeAqua)
                colorBrown.removeEventListener("click", removeBrown)
                colorYellow.removeEventListener("click", removeYellow)
                colorBlack.removeEventListener("click", removeBlack)

                colorRed.removeEventListener("click", hoverRed)
                colorBlue.removeEventListener("click", hoverBlue)
                colorOrange.removeEventListener("click", hoverOrange)
                colorGreen.removeEventListener("click", hoverGreen)
                colorPurple.removeEventListener("click", hoverPurple)
                colorGray.removeEventListener("click", hoverGray)
                colorAqua.removeEventListener("click", hoverAqua)
                colorBrown.removeEventListener("click", hoverBrown)
                colorYellow.removeEventListener("click", hoverYellow)
                colorBlack.removeEventListener("click", hoverBlack)


                setTimeout(() => {
                    hoverButton.addEventListener("click", addHoverEvent)
                    hoverButton.removeEventListener("click", removeHoverEvent)
                }, 1);


            }
        }






        if (selectedElement == divElement) {
            if (textElement.classList.contains("hovercolor")) {
                textElement.classList.add("hovercolor")
                hoverColorButton.style.color = "green"
                hoverColorButton.innerHTML = "Color Change [ON]"


                setTimeout(() => {
                    hoverColorButton.removeEventListener("click", toggleHoverColor)
                    hoverColorButton.addEventListener("click", removeHoverColor)
                }, 1);
            } else {
                textElement.classList.remove("hovercolor")
                hoverColorButton.style.color = "red"
                hoverColorButton.innerHTML = "Color Change [OFF]"
                //removing colors
                textElement.classList.remove("isred")
                textElement.classList.remove("isblue")
                textElement.classList.remove("isorange")
                textElement.classList.remove("isgreen")
                textElement.classList.remove("isgray")
                textElement.classList.remove("isaqua")
                textElement.classList.remove("isbrown")
                textElement.classList.remove("isyellow")
                textElement.classList.remove("isblack")
                colorRed.style.border = "0px solid"
                colorBlue.style.border = "0px solid"
                colorOrange.style.border = "0px solid"
                colorGreen.style.border = "0px solid"
                colorGray.style.border = "0px solid"
                colorAqua.style.border = "0px solid"
                colorBrown.style.border = "0px solid"
                colorYellow.style.border = "0px solid"
                colorBlack.style.border = "0px solid"

                colorRed.removeEventListener("click", hoverRed)
                colorBlack.removeEventListener("click", hoverBlue)
                colorOrange.removeEventListener("click", hoverOrange)
                colorGreen.removeEventListener("click", hoverGreen)



            }
            setTimeout(() => {
                hoverColorButton.removeEventListener("click", toggleHoverColor)
                hoverColorButton.removeEventListener("click", removeHoverColor)
            }, 1);
        }


        function toggleHoverColor() {
            if (selectedElement == divElement) {
                textElement.classList.add("hovercolor")
                hoverColorButton.style.color = "green"
                hoverColorButton.innerHTML = "Color Change [ON]"

                colorRed.addEventListener("click", removeRed)
                colorBlue.addEventListener("click", removeBlue)
                colorOrange.addEventListener("click", removeOrange)
                colorGreen.addEventListener("click", removeGreen)
                colorPurple.addEventListener("click", removePurple)
                colorGray.addEventListener("click", removeGray)
                colorAqua.addEventListener("click", removeAqua)
                colorBrown.addEventListener("click", removeBrown)
                colorYellow.addEventListener("click", removeYellow)
                colorBlack.addEventListener("click", removeBlack)

            }
            setTimeout(() => {
                hoverColorButton.removeEventListener("click", toggleHoverColor)
                hoverColorButton.addEventListener("click", removeHoverColor)
            }, 1);
        }


        function removeHoverColor() {
            if (selectedElement == divElement) {
                textElement.classList.remove("hovercolor")
                hoverColorButton.style.color = "red"
                hoverColorButton.innerHTML = "Color Change [OFF]"

                //removing colors
                textElement.classList.remove("isred")
                textElement.classList.remove("isblue")
                textElement.classList.remove("isorange")
                textElement.classList.remove("isgreen")
                textElement.classList.remove("ispurple")
                textElement.classList.remove("isgray")
                textElement.classList.remove("isaqua")
                textElement.classList.remove("isbrown")
                textElement.classList.remove("isyellow")
                textElement.classList.remove("isblack")
                colorRed.style.border = "0px solid"
                colorBlue.style.border = "0px solid"
                colorOrange.style.border = "0px solid"
                colorGreen.style.border = "0px solid"
                colorPurple.style.border = "0px solid"
                colorGray.style.border = "0px solid"
                colorAqua.style.border = "0px solid"
                colorBrown.style.border = "0px solid"
                colorYellow.style.border = "0px solid"
                colorBlack.style.border = "0px solid"


                colorRed.removeEventListener("click", removeRed)
                colorBlue.removeEventListener("click", removeBlue)
                colorOrange.removeEventListener("click", removeOrange)
                colorGreen.removeEventListener("click", removeGreen)
                colorPurple.removeEventListener("click", removePurple)
                colorGray.removeEventListener("click", removeGray)
                colorAqua.removeEventListener("click", removeAqua)
                colorBrown.removeEventListener("click", removeBrown)
                colorYellow.removeEventListener("click", removeYellow)
                colorBlack.removeEventListener("click", removeBlack)

                colorRed.removeEventListener("click", hoverRed)
                colorBlue.removeEventListener("click", hoverBlue)
                colorOrange.removeEventListener("click", hoverOrange)
                colorGreen.removeEventListener("click", hoverGreen)
                colorPurple.removeEventListener("click", hoverPurple)
                colorGray.removeEventListener("click", hoverGray)
                colorAqua.removeEventListener("click", hoverAqua)
                colorBrown.removeEventListener("click", hoverBrown)
                colorYellow.removeEventListener("click", hoverYellow)
                colorBlack.removeEventListener("click", hoverBlack)



                smoothAnim.addEventListener("click", toggleSmooth)
                smoothAnim.removeEventListener("click", removeSmooth)


            }
            setTimeout(() => {
                hoverColorButton.addEventListener("click", toggleHoverColor)
                hoverColorButton.removeEventListener("click", removeHoverColor)
            }, 1);
        }



        //adding hover colors

        if (selectedElement == divElement) {
            if (textElement.classList.contains("isred")) {
                colorRed.style.border = "2px solid"
            } else {
                colorRed.style.border = "0px solid"
            }
        }



        function hoverRed() {
            if (selectedElement == divElement) {
                colorRed.style.border = "2px solid"
                colorBlue.style.border = "0px solid"
                colorOrange.style.border = "0px solid"
                colorGreen.style.border = "0px solid"
                colorPurple.style.border = "0px solid"
                colorGray.style.border = "0px solid"
                colorAqua.style.border = "0px solid"
                colorBrown.style.border = "0px solid"
                colorYellow.style.border = "0px solid"
                colorBlack.style.border = "0px solid"

                textElement.classList.add("isred")
                textElement.classList.remove("isblue")
                textElement.classList.remove("isorange")
                textElement.classList.remove("isgreen")
                textElement.classList.remove("ispurple")
                textElement.classList.remove("isgray")
                textElement.classList.remove("isaqua")
                textElement.classList.remove("isbrown")
                textElement.classList.remove("isyellow")
                textElement.classList.remove("isblack")

                colorBlue.addEventListener("click", hoverBlue)
                colorBlue.removeEventListener("click", removeBlue)

                colorOrange.addEventListener("click", hoverOrange)
                colorOrange.removeEventListener("click", removeOrange)

                colorGreen.addEventListener("click", hoverGreen)
                colorGreen.removeEventListener("click", removeGreen)

                colorPurple.addEventListener("click", hoverPurple)
                colorPurple.removeEventListener("click", removePurple)

                colorGray.addEventListener("click", hoverGray)
                colorGray.removeEventListener("click", removeGray)

                colorAqua.addEventListener("click", hoverAqua)
                colorAqua.removeEventListener("click", removeAqua)

                colorBrown.addEventListener("click", hoverBrown)
                colorBrown.removeEventListener("click", removeBrown)

                colorYellow.addEventListener("click", hoverYellow)
                colorYellow.removeEventListener("click", removeYellow)

                colorBlack.addEventListener("click", hoverBlack)
                colorBlack.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorRed.removeEventListener("click", hoverRed)
                    colorRed.addEventListener("click", removeRed)
                }, 1);
            }
        }

        function removeRed() {
            if (selectedElement == divElement) {
                colorRed.style.border = "0px solid"
                textElement.classList.remove("isred")


                setTimeout(() => {
                    colorRed.addEventListener("click", hoverRed)
                    colorRed.removeEventListener("click", removeRed)
                }, 1);
            }
        }



        if (selectedElement == divElement) {
            if (textElement.classList.contains("isblue")) {
                colorBlue.style.border = "2px solid"
            } else {
                colorBlue.style.border = "0px solid"
            }
        }


        function hoverBlue() {
            if (selectedElement == divElement) {
                colorBlue.style.border = "2px solid"
                colorRed.style.border = "0px solid"
                colorOrange.style.border = "0px solid"
                colorGreen.style.border = "0px solid"
                colorPurple.style.border = "0px solid"
                colorGray.style.border = "0px solid"
                colorAqua.style.border = "0px solid"
                colorBrown.style.border = "0px solid"
                colorYellow.style.border = "0px solid"
                colorBlack.style.border = "0px solid"

                textElement.classList.add("isblue")
                textElement.classList.remove("isred")
                textElement.classList.remove("isorange")
                textElement.classList.remove("isgreen")
                textElement.classList.remove("ispurple")
                textElement.classList.remove("isgray")
                textElement.classList.remove("isaqua")
                textElement.classList.remove("isbrown")
                textElement.classList.remove("isyellow")
                textElement.classList.remove("isblack")

                colorRed.addEventListener("click", hoverRed)
                colorRed.removeEventListener("click", removeRed)

                colorOrange.addEventListener("click", hoverOrange)
                colorOrange.removeEventListener("click", removeOrange)

                colorGreen.addEventListener("click", hoverGreen)
                colorGreen.removeEventListener("click", removeGreen)

                colorPurple.addEventListener("click", hoverPurple)
                colorPurple.removeEventListener("click", removePurple)

                colorGray.addEventListener("click", hoverGray)
                colorGray.removeEventListener("click", removeGray)

                colorAqua.addEventListener("click", hoverAqua)
                colorAqua.removeEventListener("click", removeAqua)

                colorBrown.addEventListener("click", hoverBrown)
                colorBrown.removeEventListener("click", removeBrown)

                colorYellow.addEventListener("click", hoverYellow)
                colorYellow.removeEventListener("click", removeYellow)

                colorBlack.addEventListener("click", hoverBlack)
                colorBlack.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorBlue.removeEventListener("click", hoverBlue)
                    colorBlue.addEventListener("click", removeBlue)
                }, 1);
            }
        }

        function removeBlue() {
            if (selectedElement == divElement) {
                colorBlue.style.border = "0px solid"
                textElement.classList.remove("isblue")

                setTimeout(() => {
                    colorBlue.addEventListener("click", hoverBlue)
                    colorBlue.removeEventListener("click", removeBlue)
                }, 1);
            }
        }




        if (selectedElement == divElement) {
            if (textElement.classList.contains("isorange")) {
                colorOrange.style.border = "2px solid"
            } else {
                colorOrange.style.border = "0px solid"
            }
        }



        function hoverOrange() {
            if (selectedElement == divElement) {
                colorOrange.style.border = "2px solid"
                colorBlue.style.border = "0px solid"
                colorRed.style.border = "0px solid"
                colorGreen.style.border = "0px solid"
                colorPurple.style.border = "0px solid"
                colorGray.style.border = "0px solid"
                colorAqua.style.border = "0px solid"
                colorBrown.style.border = "0px solid"
                colorYellow.style.border = "0px solid"
                colorBlack.style.border = "0px solid"

                textElement.classList.add("isorange")
                textElement.classList.remove("isblue")
                textElement.classList.remove("isred")
                textElement.classList.remove("isgreen")
                textElement.classList.remove("ispurple")
                textElement.classList.remove("isgray")
                textElement.classList.remove("isaqua")
                textElement.classList.remove("isbrown")
                textElement.classList.remove("isyellow")
                textElement.classList.remove("isblack")

                colorBlue.addEventListener("click", hoverBlue)
                colorBlue.removeEventListener("click", removeBlue)

                colorRed.addEventListener("click", hoverRed)
                colorRed.removeEventListener("click", removeRed)

                colorGreen.addEventListener("click", hoverGreen)
                colorGreen.removeEventListener("click", removeGreen)

                colorPurple.addEventListener("click", hoverPurple)
                colorPurple.removeEventListener("click", removePurple)

                colorGray.addEventListener("click", hoverGray)
                colorGray.removeEventListener("click", removeGray)

                colorAqua.addEventListener("click", hoverAqua)
                colorAqua.removeEventListener("click", removeAqua)

                colorBrown.addEventListener("click", hoverBrown)
                colorBrown.removeEventListener("click", removeBrown)

                colorYellow.addEventListener("click", hoverYellow)
                colorYellow.removeEventListener("click", removeYellow)

                colorBlack.addEventListener("click", hoverBlack)
                colorBlack.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorOrange.removeEventListener("click", hoverOrange)
                    colorOrange.addEventListener("click", removeOrange)
                }, 1);
            }
        }

        function removeOrange() {
            if (selectedElement == divElement) {
                colorOrange.style.border = "0px solid"
                textElement.classList.remove("isorange")

                setTimeout(() => {
                    colorOrange.addEventListener("click", hoverOrange)
                    colorOrange.removeEventListener("click", removeOrange)
                }, 1);
            }
        }




        if (selectedElement == divElement) {
            if (textElement.classList.contains("isgreen")) {
                colorGreen.style.border = "2px solid"
            } else {
                colorGreen.style.border = "0px solid"
            }
        }



        function hoverGreen() {
            if (selectedElement == divElement) {
                colorGreen.style.border = "2px solid"
                colorBlue.style.border = "0px solid"
                colorRed.style.border = "0px solid"
                colorOrange.style.border = "0px solid"
                colorPurple.style.border = "0px solid"
                colorGray.style.border = "0px solid"
                colorAqua.style.border = "0px solid"
                colorBrown.style.border = "0px solid"
                colorYellow.style.border = "0px solid"
                colorBlack.style.border = "0px solid"

                textElement.classList.add("isgreen")
                textElement.classList.remove("isblue")
                textElement.classList.remove("isred")
                textElement.classList.remove("isorange")
                textElement.classList.remove("ispurple")
                textElement.classList.remove("isgray")
                textElement.classList.remove("isaqua")
                textElement.classList.remove("isbrown")
                textElement.classList.remove("isyellow")
                textElement.classList.remove("isblack")

                colorBlue.addEventListener("click", hoverBlue)
                colorBlue.removeEventListener("click", removeBlue)

                colorOrange.addEventListener("click", hoverOrange)
                colorOrange.removeEventListener("click", removeOrange)

                colorRed.addEventListener("click", hoverRed)
                colorRed.removeEventListener("click", removeRed)

                colorPurple.addEventListener("click", hoverPurple)
                colorPurple.removeEventListener("click", removePurple)

                colorGray.addEventListener("click", hoverGray)
                colorGray.removeEventListener("click", removeGray)

                colorAqua.addEventListener("click", hoverAqua)
                colorAqua.removeEventListener("click", removeAqua)

                colorBrown.addEventListener("click", hoverBrown)
                colorBrown.removeEventListener("click", removeBrown)

                colorYellow.addEventListener("click", hoverYellow)
                colorYellow.removeEventListener("click", removeYellow)

                colorBlack.addEventListener("click", hoverBlack)
                colorBlack.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorGreen.removeEventListener("click", hoverGreen)
                    colorGreen.addEventListener("click", removeGreen)
                }, 1);
            }
        }

        function removeGreen() {
            if (selectedElement == divElement) {
                colorGreen.style.border = "0px solid"
                textElement.classList.remove("isgreen")

                setTimeout(() => {
                    colorGreen.addEventListener("click", hoverGreen)
                    colorGreen.removeEventListener("click", removeGreen)
                }, 1);
            }
        }



        if (selectedElement == divElement) {
            if (textElement.classList.contains("ispurple")) {
                colorPurple.style.border = "2px solid"
            } else {
                colorPurple.style.border = "0px solid"
            }
        }



        function hoverPurple() {
            if (selectedElement == divElement) {
                colorPurple.style.border = "2px solid"
                colorBlue.style.border = "0px solid"
                colorRed.style.border = "0px solid"
                colorOrange.style.border = "0px solid"
                colorGreen.style.border = "0px solid"
                colorGray.style.border = "0px solid"
                colorAqua.style.border = "0px solid"
                colorBrown.style.border = "0px solid"
                colorYellow.style.border = "0px solid"
                colorBlack.style.border = "0px solid"

                textElement.classList.add("ispurple")
                textElement.classList.remove("isblue")
                textElement.classList.remove("isred")
                textElement.classList.remove("isorange")
                textElement.classList.remove("isgreen")
                textElement.classList.remove("isgray")
                textElement.classList.remove("isaqua")
                textElement.classList.remove("isbrown")
                textElement.classList.remove("isyellow")
                textElement.classList.remove("isblack")

                colorBlue.addEventListener("click", hoverBlue)
                colorBlue.removeEventListener("click", removeBlue)

                colorOrange.addEventListener("click", hoverOrange)
                colorOrange.removeEventListener("click", removeOrange)

                colorGreen.addEventListener("click", hoverGreen)
                colorGreen.removeEventListener("click", removeGreen)

                colorRed.addEventListener("click", hoverRed)
                colorRed.removeEventListener("click", removeRed)

                colorGray.addEventListener("click", hoverGray)
                colorGray.removeEventListener("click", removeGray)

                colorAqua.addEventListener("click", hoverAqua)
                colorAqua.removeEventListener("click", removeAqua)

                colorBrown.addEventListener("click", hoverBrown)
                colorBrown.removeEventListener("click", removeBrown)

                colorYellow.addEventListener("click", hoverYellow)
                colorYellow.removeEventListener("click", removeYellow)

                colorBlack.addEventListener("click", hoverBlack)
                colorBlack.removeEventListener("click", removeBlack)


                setTimeout(() => {
                    colorPurple.removeEventListener("click", hoverPurple)
                    colorPurple.addEventListener("click", removePurple)
                }, 1);
            }
        }

        function removePurple() {
            if (selectedElement == divElement) {
                colorPurple.style.border = "0px solid"
                textElement.classList.remove("ispurple")

                setTimeout(() => {
                    colorPurple.addEventListener("click", hoverPurple)
                    colorPurple.removeEventListener("click", removePurple)
                }, 1);
            }
        }



        if (selectedElement == divElement) {
            if (textElement.classList.contains("isgray")) {
                colorGray.style.border = "2px solid"
            } else {
                colorGray.style.border = "0px solid"
            }
        }



        function hoverGray() {
            if (selectedElement == divElement) {
                colorGray.style.border = "2px solid"
                colorBlue.style.border = "0px solid"
                colorRed.style.border = "0px solid"
                colorOrange.style.border = "0px solid"
                colorGreen.style.border = "0px solid"
                colorPurple.style.border = "0px solid"
                colorAqua.style.border = "0px solid"
                colorBrown.style.border = "0px solid"
                colorYellow.style.border = "0px solid"
                colorBlack.style.border = "0px solid"

                textElement.classList.add("isgray")
                textElement.classList.remove("isblue")
                textElement.classList.remove("isred")
                textElement.classList.remove("isorange")
                textElement.classList.remove("isgreen")
                textElement.classList.remove("ispurple")
                textElement.classList.remove("isaqua")
                textElement.classList.remove("isbrown")
                textElement.classList.remove("isyellow")
                textElement.classList.remove("isblack")

                colorBlue.addEventListener("click", hoverBlue)
                colorBlue.removeEventListener("click", removeBlue)

                colorOrange.addEventListener("click", hoverOrange)
                colorOrange.removeEventListener("click", removeOrange)

                colorGreen.addEventListener("click", hoverGreen)
                colorGreen.removeEventListener("click", removeGreen)

                colorPurple.addEventListener("click", hoverPurple)
                colorPurple.removeEventListener("click", removePurple)

                colorRed.addEventListener("click", hoverRed)
                colorRed.removeEventListener("click", removeRed)

                colorAqua.addEventListener("click", hoverAqua)
                colorAqua.removeEventListener("click", removeAqua)

                colorBrown.addEventListener("click", hoverBrown)
                colorBrown.removeEventListener("click", removeBrown)

                colorYellow.addEventListener("click", hoverYellow)
                colorYellow.removeEventListener("click", removeYellow)

                colorBlack.addEventListener("click", hoverBlack)
                colorBlack.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorGray.removeEventListener("click", hoverGray)
                    colorGray.addEventListener("click", removeGray)
                }, 1);
            }
        }

        function removeGray() {
            if (selectedElement == divElement) {
                colorGray.style.border = "0px solid"
                textElement.classList.remove("isgray")

                setTimeout(() => {
                    colorGray.addEventListener("click", hoverGray)
                    colorGray.removeEventListener("click", removeGray)
                }, 1);
            }
        }







        if (selectedElement == divElement) {
            if (textElement.classList.contains("isaqua")) {
                colorAqua.style.border = "2px solid"
            } else {
                colorAqua.style.border = "0px solid"
            }
        }



        function hoverAqua() {
            if (selectedElement == divElement) {
                colorAqua.style.border = "2px solid"
                colorBlue.style.border = "0px solid"
                colorRed.style.border = "0px solid"
                colorOrange.style.border = "0px solid"
                colorGreen.style.border = "0px solid"
                colorPurple.style.border = "0px solid"
                colorGray.style.border = "0px solid"
                colorBrown.style.border = "0px solid"
                colorYellow.style.border = "0px solid"
                colorBlack.style.border = "0px solid"

                textElement.classList.add("isaqua")
                textElement.classList.remove("isblue")
                textElement.classList.remove("isred")
                textElement.classList.remove("isorange")
                textElement.classList.remove("isgreen")
                textElement.classList.remove("ispurple")
                textElement.classList.remove("isgray")
                textElement.classList.remove("isbrown")
                textElement.classList.remove("isyellow")
                textElement.classList.remove("isblack")

                colorBlue.addEventListener("click", hoverBlue)
                colorBlue.removeEventListener("click", removeBlue)

                colorOrange.addEventListener("click", hoverOrange)
                colorOrange.removeEventListener("click", removeOrange)

                colorGreen.addEventListener("click", hoverGreen)
                colorGreen.removeEventListener("click", removeGreen)

                colorPurple.addEventListener("click", hoverPurple)
                colorPurple.removeEventListener("click", removePurple)

                colorGray.addEventListener("click", hoverGray)
                colorGray.removeEventListener("click", removeGray)

                colorRed.addEventListener("click", hoverRed)
                colorRed.removeEventListener("click", removeRed)

                colorBrown.addEventListener("click", hoverBrown)
                colorBrown.removeEventListener("click", removeBrown)

                colorYellow.addEventListener("click", hoverYellow)
                colorYellow.removeEventListener("click", removeYellow)

                colorBlack.addEventListener("click", hoverBlack)
                colorBlack.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorAqua.removeEventListener("click", hoverAqua)
                    colorAqua.addEventListener("click", removeAqua)
                }, 1);
            }
        }

        function removeAqua() {
            if (selectedElement == divElement) {
                colorAqua.style.border = "0px solid"
                textElement.classList.remove("isaqua")

                setTimeout(() => {
                    colorAqua.addEventListener("click", hoverAqua)
                    colorAqua.removeEventListener("click", removeAqua)
                }, 1);
            }
        }


        if (selectedElement == divElement) {
            if (textElement.classList.contains("isbrown")) {
                colorBrown.style.border = "2px solid"
            } else {
                colorBrown.style.border = "0px solid"
            }
        }



        function hoverBrown() {
            if (selectedElement == divElement) {
                colorBrown.style.border = "2px solid"
                colorBlue.style.border = "0px solid"
                colorRed.style.border = "0px solid"
                colorOrange.style.border = "0px solid"
                colorGreen.style.border = "0px solid"
                colorPurple.style.border = "0px solid"
                colorGray.style.border = "0px solid"
                colorAqua.style.border = "0px solid"
                colorYellow.style.border = "0px solid"
                colorBlack.style.border = "0px solid"

                textElement.classList.add("isbrown")
                textElement.classList.remove("isblue")
                textElement.classList.remove("isred")
                textElement.classList.remove("isorange")
                textElement.classList.remove("isgreen")
                textElement.classList.remove("ispurple")
                textElement.classList.remove("isgray")
                textElement.classList.remove("isaqua")
                textElement.classList.remove("isyellow")
                textElement.classList.remove("isblack")

                colorBlue.addEventListener("click", hoverBlue)
                colorBlue.removeEventListener("click", removeBlue)

                colorOrange.addEventListener("click", hoverOrange)
                colorOrange.removeEventListener("click", removeOrange)

                colorGreen.addEventListener("click", hoverGreen)
                colorGreen.removeEventListener("click", removeGreen)

                colorPurple.addEventListener("click", hoverPurple)
                colorPurple.removeEventListener("click", removePurple)

                colorGray.addEventListener("click", hoverGray)
                colorGray.removeEventListener("click", removeGray)

                colorAqua.addEventListener("click", hoverAqua)
                colorAqua.removeEventListener("click", removeAqua)

                colorRed.addEventListener("click", hoverRed)
                colorRed.removeEventListener("click", removeRed)

                colorYellow.addEventListener("click", hoverYellow)
                colorYellow.removeEventListener("click", removeYellow)

                colorBlack.addEventListener("click", hoverBlack)
                colorBlack.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorBrown.removeEventListener("click", hoverBrown)
                    colorBrown.addEventListener("click", removeBrown)
                }, 1);
            }
        }

        function removeBrown() {
            if (selectedElement == divElement) {
                colorBrown.style.border = "0px solid"
                textElement.classList.remove("isbrown")

                setTimeout(() => {
                    colorBrown.addEventListener("click", hoverBrown)
                    colorBrown.removeEventListener("click", removeBrown)
                }, 1);
            }
        }


        if (selectedElement == divElement) {
            if (textElement.classList.contains("isyellow")) {
                colorYellow.style.border = "2px solid"
            } else {
                colorYellow.style.border = "0px solid"
            }
        }



        function hoverYellow() {
            if (selectedElement == divElement) {
                colorYellow.style.border = "2px solid"
                colorBlue.style.border = "0px solid"
                colorRed.style.border = "0px solid"
                colorOrange.style.border = "0px solid"
                colorGreen.style.border = "0px solid"
                colorPurple.style.border = "0px solid"
                colorGray.style.border = "0px solid"
                colorAqua.style.border = "0px solid"
                colorBrown.style.border = "0px solid"
                colorBlack.style.border = "0px solid"

                textElement.classList.add("isyellow")
                textElement.classList.remove("isblue")
                textElement.classList.remove("isred")
                textElement.classList.remove("isorange")
                textElement.classList.remove("isgreen")
                textElement.classList.remove("ispurple")
                textElement.classList.remove("isgray")
                textElement.classList.remove("isaqua")
                textElement.classList.remove("isbrown")
                textElement.classList.remove("isblack")

                colorBlue.addEventListener("click", hoverBlue)
                colorBlue.removeEventListener("click", removeBlue)

                colorOrange.addEventListener("click", hoverOrange)
                colorOrange.removeEventListener("click", removeOrange)

                colorGreen.addEventListener("click", hoverGreen)
                colorGreen.removeEventListener("click", removeGreen)

                colorPurple.addEventListener("click", hoverPurple)
                colorPurple.removeEventListener("click", removePurple)

                colorGray.addEventListener("click", hoverGray)
                colorGray.removeEventListener("click", removeGray)

                colorAqua.addEventListener("click", hoverAqua)
                colorAqua.removeEventListener("click", removeAqua)

                colorBrown.addEventListener("click", hoverBrown)
                colorBrown.removeEventListener("click", removeBrown)

                colorRed.addEventListener("click", hoverRed)
                colorRed.removeEventListener("click", removeRed)

                colorBlack.addEventListener("click", hoverBlack)
                colorBlack.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorYellow.removeEventListener("click", hoverYellow)
                    colorYellow.addEventListener("click", removeYellow)
                }, 1);
            }
        }

        function removeYellow() {
            if (selectedElement == divElement) {
                colorYellow.style.border = "0px solid"
                textElement.classList.remove("isyellow")

                setTimeout(() => {
                    colorYellow.addEventListener("click", hoverYellow)
                    colorYellow.removeEventListener("click", removeYellow)
                }, 1);
            }
        }








        if (selectedElement == divElement) {
            if (textElement.classList.contains("isblack")) {
                colorBlack.style.border = "2px solid"
            } else {
                colorBlack.style.border = "0px solid"
            }
        }



        function hoverBlack() {
            if (selectedElement == divElement) {
                colorBlack.style.border = "2px solid"
                colorBlue.style.border = "0px solid"
                colorRed.style.border = "0px solid"
                colorOrange.style.border = "0px solid"
                colorGreen.style.border = "0px solid"
                colorPurple.style.border = "0px solid"
                colorGray.style.border = "0px solid"
                colorAqua.style.border = "0px solid"
                colorBrown.style.border = "0px solid"
                colorYellow.style.border = "0px solid"

                textElement.classList.add("isblack")
                textElement.classList.remove("isblue")
                textElement.classList.remove("isred")
                textElement.classList.remove("isorange")
                textElement.classList.remove("isgreen")
                textElement.classList.remove("ispurple")
                textElement.classList.remove("isgray")
                textElement.classList.remove("isaqua")
                textElement.classList.remove("isbrown")
                textElement.classList.remove("isyellow")

                colorBlue.addEventListener("click", hoverBlue)
                colorBlue.removeEventListener("click", removeBlue)

                colorOrange.addEventListener("click", hoverOrange)
                colorOrange.removeEventListener("click", removeOrange)

                colorGreen.addEventListener("click", hoverGreen)
                colorGreen.removeEventListener("click", removeGreen)

                colorPurple.addEventListener("click", hoverPurple)
                colorPurple.removeEventListener("click", removePurple)

                colorGray.addEventListener("click", hoverGray)
                colorGray.removeEventListener("click", removeGray)

                colorAqua.addEventListener("click", hoverAqua)
                colorAqua.removeEventListener("click", removeAqua)

                colorBrown.addEventListener("click", hoverBrown)
                colorBrown.removeEventListener("click", removeBrown)

                colorRed.addEventListener("click", hoverRed)
                colorRed.removeEventListener("click", removeRed)

                colorYellow.addEventListener("click", hoverYellow)
                colorYellow.removeEventListener("click", removeYellow)

                setTimeout(() => {
                    colorBlack.removeEventListener("click", hoverBlack)
                    colorBlack.addEventListener("click", removeBlack)
                }, 1);
            }
        }

        function removeBlack() {
            if (selectedElement == divElement) {
                colorBlack.style.border = "0px solid"
                textElement.classList.remove("isblack")

                setTimeout(() => {
                    colorBlack.addEventListener("click", hoverBlack)
                    colorBlack.removeEventListener("click", removeBlack)
                }, 1);
            }
        }




        smoothAnim.addEventListener("click", toggleSmooth)


        if (selectedElement == divElement) {
            if (textElement.classList.contains("addsmooth")) {
                smoothAnim.innerHTML = "Smooth Animations [ON]"
                smoothAnim.style.color = "green"
                textElement.classList.add("addsmooth")

                smoothAnim.removeEventListener("click", toggleSmooth)
                smoothAnim.addEventListener("click", removeSmooth)
            } else {
                smoothAnim.innerHTML = "Smooth Animations [OFF]"
                smoothAnim.style.color = "red"
                textElement.classList.remove("addsmooth")

                smoothAnim.addEventListener("click", toggleSmooth)
                smoothAnim.removeEventListener("click", removeSmooth)
            }
        }

        function toggleSmooth() {
            if (selectedElement == divElement) {
                smoothAnim.innerHTML = "Smooth Animations [ON]"
                smoothAnim.style.color = "green"
                textElement.classList.add("addsmooth")


                setTimeout(() => {
                    smoothAnim.removeEventListener("click", toggleSmooth)
                    smoothAnim.addEventListener("click", removeSmooth)
                }, 1);
            }
        }

        function removeSmooth() {
            if (selectedElement == divElement) {
                smoothAnim.innerHTML = "Smooth Animations [OFF]"
                smoothAnim.style.color = "red"
                textElement.classList.remove("addsmooth")


                setTimeout(() => {
                    smoothAnim.addEventListener("click", toggleSmooth)
                    smoothAnim.removeEventListener("click", removeSmooth)
                }, 1);
            }
        }



        function toggleHoverSize() {
            if (selectedElement == divElement) {
                hoverSizeButton.innerHTML = "Size Change [ON]"
                hoverSizeButton.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton.addEventListener("click", removeHoverSize)
                }, 1);
            }

        }

        function removeHoverSize() {
            if (selectedElement == divElement) {
                hoverSizeButton.innerHTML = "Size Change [OFF]"
                hoverSizeButton.style.color = "red"
                textElement.classList.remove("size")
                textElement.classList.remove("size2")
                textElement.classList.remove("size3")
                textElement.classList.remove("size4")

                sizeBox.style.backgroundColor = "white"
                sizeBox2.style.backgroundColor = "white"
                sizeBox3.style.backgroundColor = "white"
                sizeBox4.style.backgroundColor = "white"

                sizeBox.style.backgroundColor = "white"

                setTimeout(() => {
                    hoverSizeButton.addEventListener("click", toggleHoverSize)
                    hoverSizeButton.removeEventListener("click", removeHoverSize)
                }, 1);
            }

        }




        if (selectedElement == divElement) {
            if (textElement.classList.contains("size")) {
                sizeBox.style.backgroundColor = "gray"
                sizeBox2.style.backgroundColor = "white"
                sizeBox3.style.backgroundColor = "white"
                sizeBox4.style.backgroundColor = "white"

                hoverSizeButton.innerHTML = "Size Change [ON]"
                hoverSizeButton.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox.style.backgroundColor = "white"
            }
            if (textElement.classList.contains("size2")) {
                sizeBox2.style.backgroundColor = "gray"
                sizeBox.style.backgroundColor = "white"
                sizeBox3.style.backgroundColor = "white"
                sizeBox4.style.backgroundColor = "white"

                hoverSizeButton.innerHTML = "Size Change [ON]"
                hoverSizeButton.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox2.style.backgroundColor = "white"
            }

            if (textElement.classList.contains("size3")) {
                sizeBox3.style.backgroundColor = "gray"
                sizeBox2.style.backgroundColor = "white"
                sizeBox.style.backgroundColor = "white"
                sizeBox4.style.backgroundColor = "white"

                hoverSizeButton.innerHTML = "Size Change [ON]"
                hoverSizeButton.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox3.style.backgroundColor = "white"
            }
            if (textElement.classList.contains("size4")) {
                sizeBox4.style.backgroundColor = "gray"
                sizeBox2.style.backgroundColor = "white"
                sizeBox3.style.backgroundColor = "white"
                sizeBox.style.backgroundColor = "white"

                hoverSizeButton.innerHTML = "Size Change [ON]"
                hoverSizeButton.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton.addEventListener("click", removeHoverSize)
                }, 1);
            } else {
                sizeBox4.style.backgroundColor = "white"
            }
        }


        sizeBox.addEventListener("click", changeHoverSize)


        function changeHoverSize() {
            if (hoverSizeButton.style.color == "green") {
                if (selectedElement == divElement) {
                    textElement.classList.add("size")
                    textElement.classList.remove("size2")
                    textElement.classList.remove("size3")
                    textElement.classList.remove("size4")
                    sizeBox.style.backgroundColor = "gray"
                    sizeBox4.style.backgroundColor = "white"
                    sizeBox2.style.backgroundColor = "white"
                    sizeBox3.style.backgroundColor = "white"
                }
            }


        }





        sizeBox2.addEventListener("click", changeHoverSize2)


        function changeHoverSize2() {
            if (hoverSizeButton.style.color == "green") {
                if (selectedElement == divElement) {
                    textElement.classList.add("size2")
                    textElement.classList.remove("size1")
                    textElement.classList.remove("size3")
                    textElement.classList.remove("size4")
                    sizeBox2.style.backgroundColor = "gray"
                    sizeBox.style.backgroundColor = "white"
                    sizeBox4.style.backgroundColor = "white"
                    sizeBox3.style.backgroundColor = "white"
                }
            }


        }


        sizeBox3.addEventListener("click", changeHoverSize3)


        function changeHoverSize3() {
            if (hoverSizeButton.style.color == "green") {
                if (selectedElement == divElement) {
                    textElement.classList.add("size3")
                    textElement.classList.remove("size1")
                    textElement.classList.remove("size2")
                    textElement.classList.remove("size4")
                    sizeBox3.style.backgroundColor = "gray"
                    sizeBox.style.backgroundColor = "white"
                    sizeBox2.style.backgroundColor = "white"
                    sizeBox4.style.backgroundColor = "white"
                }
            }


        }







        sizeBox4.addEventListener("click", changeHoverSize4)


        function changeHoverSize4() {
            if (hoverSizeButton.style.color == "green") {
                if (selectedElement == divElement) {
                    textElement.classList.add("size4")
                    textElement.classList.remove("size1")
                    textElement.classList.remove("size2")
                    textElement.classList.remove("size3")
                    sizeBox4.style.backgroundColor = "gray"
                    sizeBox.style.backgroundColor = "white"
                    sizeBox2.style.backgroundColor = "white"
                    sizeBox3.style.backgroundColor = "white"
                }
            }


        }

        if (selectedElement == divElement) {
            if (textElement.classList.contains("clickevent")) {
                clickEventButton.innerHTML = "Click Event [ON]"
                clickEventButton.style.color = "green"
                textElement.style.cursor = "pointer"
                textElement.classList.add("clickevent")

                textElement.addEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton.removeEventListener("click", toggleClickEvent)
                    clickEventButton.addEventListener("click", removeClickEvent)
                }, 1);
            } else {
                clickEventButton.innerHTML = "Click Event [OFF]"
                clickEventButton.style.color = "red"
                textElement.style.cursor = ""

                textElement.removeEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton.addEventListener("click", toggleClickEvent)
                    clickEventButton.removeEventListener("click", removeClickEvent)
                }, 1);
            }

        }


        clickEventButton.addEventListener("click", toggleClickEvent)

        var userAlert = 0

        function toggleClickEvent() {
            if (selectedElement == divElement) {
                clickEventButton.innerHTML = "Click Event [ON]"
                clickEventButton.style.color = "green"
                textElement.style.cursor = "pointer"
                textElement.classList.add("clickevent")

                textElement.addEventListener("click", addLinkTarget)

                if (userAlert == 0) {
                    alert("It will work only when element is selected, and when the page is exported(finished)")
                }
                setTimeout(() => {
                    userAlert = 1
                }, 1);

                setTimeout(() => {
                    clickEventButton.removeEventListener("click", toggleClickEvent)
                    clickEventButton.addEventListener("click", removeClickEvent)
                }, 1);
            }
        }



        function removeClickEvent() {
            if (selectedElement == divElement) {
                clickEventButton.innerHTML = "Click Event [OFF]"
                clickEventButton.style.color = "red"
                textElement.style.cursor = ""
                textElement.classList.remove("clickevent")

                textElement.removeEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton.addEventListener("click", toggleClickEvent)
                    clickEventButton.removeEventListener("click", removeClickEvent)
                }, 1);
            }
        }




        function addLinkTarget() {
            if (selectedElement == divElement) {
                window.open(clickLinkInput.value)
            }
        }



        clickLinkInput.addEventListener("input", handleLinkInp)
        clickLinkInput.value = textElement.getAttribute("alt")

        function handleLinkInp() {
            if (selectedElement == divElement) {
                textElement.setAttribute("alt", clickLinkInput.value)
            }
        }




        document.addEventListener("keydown", pasteElement)
        function pasteElement(event) {
            if (selectedElement == divElement) {
                if (event.ctrlKey && event.key === 'v') {

                }
            }

        }









        if (thePanel.classList.contains("closed")) {
            if (isRight == false) {
                thePanel.removeEventListener("click", togglePanel)
                thePanel.classList.remove("panel")
                thePanel.classList.add("panel2")
            } else {
                thePanel.classList.remove("panel4")
                thePanel.classList.add("panel3")
            }

        }

        function removeBorder() {
            fakeBody.removeEventListener("click", removeBorder)
            fakeBody.classList.add("noediting")
            fontChanger.removeEventListener("click", toggleFonts)
            if (selectedElement == divElement) {
                selectedElement = null;
                divElement.style.border = "0px solid black";
                elementsPosShow()
                thePanel.addEventListener("click", togglePanel)
                if (thePanel.contains(changeText)) {
                    removeToPanel()

                }
                if (thePanel.contains(generalText)) {
                    advancedRemove()
                }
            }


            closeFonts()



            fontStyleText1.removeEventListener("click", closeFonts)
            fontStyleText2.removeEventListener("click", closeFonts)
            fontStyleText3.removeEventListener("click", closeFonts)
            fontStyleText4.removeEventListener("click", closeFonts)
            fontStyleText5.removeEventListener("click", closeFonts)
            fontStyleText6.removeEventListener("click", closeFonts)

            fontChanger.style.height = "40px"
            fontStyleText.style.fontSize = "12px"
            fontChanger.style.cursor = "pointer"
            fontStyleText.style.cursor = "cursor"

            setTimeout(() => {
                fontChanger.addEventListener("click", toggleFonts)
            }, 1);
        }


    }




}






//outside main function//outside main function//outside main function//outside main function
//outside main function//outside main function//outside main function//outside main function
function elementsPosShow() {
    if (isRight == false) {
        hideBtn.style.right = "5px"
        posBtn.style.right = "90px"
        extractBtn.style.right = "170px"
        theInput.style.right = "0px"
        elementS1.style.right = "0px"
        elementS2.style.right = "0px"
        elementS3.style.right = "0px"

        hideBtn.style.left = ''
        posBtn.style.left = ''
        extractBtn.style.left = ""
        theInput.style.left = ''
        elementS1.style.left = ''
        elementS2.style.left = ''
        elementS3.style.left = ''

    }

    if (isRight == true) {
        hideBtn.style.right = "5px"
        posBtn.style.right = "90px"
        extractBtn.style.right = "170px"
        theInput.style.right = "0px"
        elementS1.style.right = "0px"
        elementS2.style.right = "0px"
        elementS3.style.right = "0px"

        hideBtn.style.left = ''
        posBtn.style.left = ''
        extractBtn.style.left = ""
        theInput.style.left = ''
        elementS1.style.left = ''
        elementS2.style.left = ''
        elementS3.style.left = ''
    }
}

function elementsPosClose() {
    if (isRight == false) {
        hideBtn.style.right = "3000px"
        posBtn.style.right = "3000px"
        theInput.style.right = "3000px"
        extractBtn.style.right = "3000px"
        elementS1.style.right = "3000px"
        elementS2.style.right = "3000px"
        elementS3.style.right = "3000px"

        hideBtn.style.left = ''
        posBtn.style.left = ''
        extractBtn.style.left = ""
        theInput.style.left = ''
        elementS1.style.left = ''
        elementS2.style.left = ''
        elementS3.style.left = ''
    }

    if (isRight == true) {
        hideBtn.style.left = "3000px"
        posBtn.style.left = "3000px"
        extractBtn.style.right = "3000px"
        theInput.style.left = "3000px"
        elementS1.style.left = "3000px"
        elementS2.style.left = "3000px"
        elementS3.style.left = "3000px"
    }
}