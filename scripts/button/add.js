const boX2 = document.getElementById("box2")
let selectedElement2 = null;

boX2.addEventListener("click", addButton)

function addButton() {
    const buttonElement = document.createElement("button")
    const divElement = document.createElement("div")
    buttonElement.textContent = "Button"
    buttonElement.style.userSelect = "none"
    buttonElement.style.fontSize = "16px"
    buttonElement.style.fontWeight = "400"
    buttonElement.style.width = "70px"
    buttonElement.style.height = "30px"
    buttonElement.style.fontWeight = "400"
    buttonElement.style.borderRadius = "0px"
    buttonElement.style.border = "1px solid"
    buttonElement.style.backgroundColor = "#e9e9ed"
    buttonElement.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"

    divElement.style.left = "50%"
    divElement.style.transform = "translateX(-50%)"
    divElement.style.position = "absolute"
    divElement.style.zIndex = "9"
    divElement.appendChild(buttonElement)
    allElements.appendChild(divElement)

    divElement.addEventListener("mousedown", onMouseDown)
    divElement.addEventListener("dblclick", selectButton)

    divElement.classList.add("buttons")

    function selectButton() {
        fakeBody.addEventListener("click", removeBorder2)
        fakeBody.classList.remove("noediting")
        if (selectedElement2) {
            selectedElement2.style.border = "0px solid black";
        }


        thePanel.removeEventListener("click", togglePanel)
        selectedElement2 = divElement;
        divElement.style.border = "2px solid black";


        if (selectedElement2 == divElement) {
            selectedElement = null
            selectedElement3 = null
            selectedElement4 = null
            selectedElement5 = null

            if (thePanel.contains(changeText)) {
                removeToPanel()
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


            var elements = document.getElementsByClassName("texts");
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


        elementsPosClose()
        //adding the edit elements
        addToPanel2()

        advancedRemove()

        if (thePanel.contains(deleteBtn2)) {
            advancedRemove2()
        }

        backBtn2.addEventListener("click", removeBorder2)




        deleteBtn2.addEventListener("click", removeButton)
        function removeButton() {
            if (selectedElement2 == divElement) {
                if (allElements.contains(divElement)) {
                    allElements.removeChild(divElement)
                }
                removeToPanel2()
            }
            setTimeout(() => {
                selectedElement2 = null;
                divElement.style.border = "0px solid black";
                elementsPosShow()
                thePanel.addEventListener("click", togglePanel)
            }, 1);

        }

        changeText2.addEventListener("keyup", displayedButton)
        changeText2.value = buttonElement.innerHTML
        function displayedButton() {
            if (selectedElement2 == divElement) {
                buttonElement.innerHTML = changeText2.value
                if (changeText2.value == "") {
                    buttonElement.innerHTML = "Button"
                }
            }
        }


        divElement.addEventListener("mousemove", updatingCordinatesBtn)
        cordinates2.innerHTML = "Cordinates - " + "Left: " + divElement.style.left + " / " + "Top: " + divElement.style.top
        function updatingCordinatesBtn() {
            if (selectedElement2 == divElement) {
                cordinates2.innerHTML = "Cordinates - " + "Left: " + divElement.style.left + " / " + "Top: " + divElement.style.top
                leftInput2.value = divElement.style.left ? parseInt(divElement.style.left) : ""
                topInput2.value = divElement.style.top ? parseInt(divElement.style.top) : ""
            }

        }

        leftInput2.addEventListener("keypress", customLeft2)
        leftInput2.value = divElement.style.left ? parseInt(divElement.style.left) : ""
        function customLeft2(event) {
            if (event.keyCode === 13) {
                if (selectedElement2 == divElement) {
                    divElement.style.left = leftInput2.value + "px"
                    cordinates2.innerHTML = "Cordinates - " + "Left: " + leftInput2.value + "px" + " / " + "Top: " + divElement.style.top
                }

            }
        }


        topInput2.addEventListener("keypress", customTop2)
        topInput2.value = divElement.style.top ? parseInt(divElement.style.top) : ""
        function customTop2(event) {
            if (event.keyCode === 13) {
                if (selectedElement2 == divElement) {
                    divElement.style.top = topInput2.value + "px"
                    cordinates2.innerHTML = "Cordinates - " + "Left: " + leftInput2.value + "px" + " / " + "Top: " + divElement.style.top
                }

            }
        }


        widthInput.addEventListener("input", changeWidth2)
        widthInput.value = parseInt(buttonElement.style.width.match(/\d+/)[0], 10);
        widthText.innerHTML = "Width: " + buttonElement.style.width

        function changeWidth2() {
            if (selectedElement2 == divElement) {
                buttonElement.style.width = widthInput.value + "px"
                widthText.innerHTML = "Width: " + buttonElement.style.width
                customWidthInputButton.value = parseInt(buttonElement.style.width.match(/\d+/)[0], 10);
            }
        }

        customWidthInputButton.addEventListener("keypress", customChangeWidth)

        customWidthInputButton.value = parseInt(buttonElement.style.width.match(/\d+/)[0], 10);

        function customChangeWidth(event) {
            if (selectedElement2 == divElement) {
                if (event.keyCode === 13) {
                    buttonElement.style.width = customWidthInputButton.value + "px"
                    widthText.innerHTML = "Width: " + buttonElement.style.width
                    widthInput.value = parseInt(buttonElement.style.width.match(/\d+/)[0], 10);

                }
            }
        }

        copyButtonWidth.addEventListener("click", copyWidth)

        function copyWidth() {
            if (selectedElement2 == divElement) {
                copyNumber = parseInt(buttonElement.style.width)
            }
        }

        pasteButtonWidth.addEventListener("click", pasteWidth)

        function pasteWidth() {
            if (selectedElement2 == divElement) {
                buttonElement.style.width = copyNumber + "px"

                customWidthInputButton.value = parseInt(buttonElement.style.width.match(/\d+/)[0], 10);
                widthText.innerHTML = "Width: " + buttonElement.style.width
                widthInput.value = parseInt(buttonElement.style.width.match(/\d+/)[0], 10);
            }
        }




        heightInput.addEventListener("input", changeHeight2)
        heightInput.value = parseInt(buttonElement.style.height.match(/\d+/)[0], 10);
        heightText.innerHTML = "Height: " + buttonElement.style.height

        function changeHeight2() {
            if (selectedElement2 == divElement) {
                buttonElement.style.height = heightInput.value + "px"
                heightText.innerHTML = "Height: " + buttonElement.style.height
                customHeightInputButton.value = parseInt(buttonElement.style.height.match(/\d+/)[0], 10);
            }
        }

        customHeightInputButton.addEventListener("keypress", customChangeHeight)

        customHeightInputButton.value = parseInt(buttonElement.style.height.match(/\d+/)[0], 10);

        function customChangeHeight(event) {
            if (selectedElement2 == divElement) {
                if (event.keyCode === 13) {
                    buttonElement.style.height = customHeightInputButton.value + "px"
                    heightText.innerHTML = "Height: " + buttonElement.style.height
                    heightInput.value = parseInt(buttonElement.style.height.match(/\d+/)[0], 10);
                }
            }
        }

        copyButtonHeight.addEventListener("click", copyHeight)

        function copyHeight() {
            if (selectedElement2 == divElement) {
                copyNumber = parseInt(buttonElement.style.height)
            }
        }

        pasteButtonHeight.addEventListener("click", pasteHeight)

        function pasteHeight() {
            if (selectedElement2 == divElement) {
                buttonElement.style.height = copyNumber + "px"

                customHeightInputButton.value = parseInt(buttonElement.style.height.match(/\d+/)[0], 10);
                heightText.innerHTML = "Width: " + buttonElement.style.height
                heightInput.value = parseInt(buttonElement.style.height.match(/\d+/)[0], 10);
            }
        }





        colorInput2.addEventListener("input", changeBackgroundColor)
        var color = tinycolor(buttonElement.style.backgroundColor);
        colorInput2.value = buttonElement.style.backgroundColor = color.toString("hex")
        function changeBackgroundColor() {
            if (selectedElement2 == divElement) {
                buttonElement.style.backgroundColor = colorInput2.value
            }
        }

        copyButtonBackgroundColor.addEventListener("click", copyTheBackgroundColor)

        function copyTheBackgroundColor() {
            if (selectedElement2 == divElement) {
                copyColor = buttonElement.style.backgroundColor
            }
        }

        pasteButtonBackgroundColor.addEventListener("click", pasteColor)

        function pasteColor() {
            if (selectedElement2 == divElement) {
                var color22 = tinycolor(copyColor);
                colorInput2.value = copyColor = color22.toString("hex")
                buttonElement.style.backgroundColor = copyColor
            }
        }


        fontInput2.addEventListener("input", changeFontSize2)
        fontText2.innerHTML = "Font Size: " + buttonElement.style.fontSize
        fontInput2.value = parseInt(buttonElement.style.fontSize)



        function changeFontSize2() {
            if (selectedElement2 == divElement) {
                buttonElement.style.fontSize = fontInput2.value + "px"
                fontText2.innerHTML = "Font Size: " + fontInput2.value + "px"
                customFontInputButton.value = parseInt(buttonElement.style.fontSize)
                buttonElement.style.fontSize = customFontInputButton.value + "px"
            }
        }


        customFontInputButton.addEventListener("keypress", changeCustomFontSize)

        customFontInputButton.value = parseInt(buttonElement.style.fontSize)

        function changeCustomFontSize(event) {
            if (selectedElement2 == divElement) {
                if (event.keyCode === 13) {
                    buttonElement.style.fontSize = customFontInputButton.value + "px"
                    fontInput2.value = parseInt(buttonElement.style.fontSize)
                    fontText2.innerHTML = "Font Size: " + fontInput2.value + "px"
                }
            }
        }


        copyButtonFont.addEventListener("click", copyFont)

        function copyFont() {
            if (selectedElement2 == divElement) {
                copyNumber = parseInt(buttonElement.style.fontSize)
            }

        }

        pasteButtonFont.addEventListener("click", pasteFont)

        function pasteFont() {
            if (selectedElement2 == divElement) {
                buttonElement.style.fontSize = copyNumber + "px"
                fontInput2.value = parseInt(buttonElement.style.fontSize)
                fontText2.innerHTML = "Font Size: " + fontInput2.value + "px"
                customFontInputButton.value = parseInt(buttonElement.style.fontSize)
            }
        }


        fontWeightInput2.addEventListener("input", changeFontWeight)

        fontWeightInput2.value = buttonElement.style.fontWeight
        fontWeightText2.innerHTML = "Font Weight: " + buttonElement.style.fontWeight

        function changeFontWeight() {
            if (selectedElement2 == divElement) {
                buttonElement.style.fontWeight = fontWeightInput2.value
                fontWeightText2.innerHTML = "Font Weight: " + buttonElement.style.fontWeight
                fontWeightInput2.value = buttonElement.style.fontWeight
                fontCustomWeightInput2.value = buttonElement.style.fontWeight
            }
        }

        fontCustomWeightInput2.addEventListener("keypress", changeCustomFontWeight)
        fontCustomWeightInput2.value = buttonElement.style.fontWeight

        function changeCustomFontWeight(event) {
            if (selectedElement2 == divElement) {
                if (event.keyCode === 13) {
                    buttonElement.style.fontWeight = fontCustomWeightInput2.value
                    fontWeightText2.innerHTML = "Font Weight: " + buttonElement.style.fontWeight
                    fontWeightInput2.value = buttonElement.style.fontWeight
                }
            }
        }


        copyButtonWeight.addEventListener("click", copyWeight)

        function copyWeight() {
            if (selectedElement2 == divElement) {
                copyNumber = buttonElement.style.fontWeight
            }
        }

        pasteButtonWeight.addEventListener("click", pasteWeight)

        function pasteWeight() {
            if (selectedElement2 == divElement) {
                buttonElement.style.fontWeight = copyNumber
                fontWeightText2.innerHTML = "Font Weight: " + buttonElement.style.fontWeight
                fontWeightInput2.value = buttonElement.style.fontWeight
                fontCustomWeightInput2.value = buttonElement.style.fontWeight
            }
        }

        colorInput3.addEventListener("input", changeColor2)
        var color2 = tinycolor(buttonElement.style.color);
        colorInput3.value = buttonElement.style.color = color2.toString("hex")

        function changeColor2() {
            if (selectedElement2 == divElement) {
                buttonElement.style.color = colorInput3.value
            }
        }

        copyButtonColor.addEventListener("click", copyOtherColor)

        function copyOtherColor() {
            if (selectedElement2 == divElement) {
                copyColor = buttonElement.style.color
            }
        }

        pasteButtonColor.addEventListener("click", pasteOtherColor)

        function pasteOtherColor() {
            if (selectedElement2 == divElement) {
                var color23 = tinycolor(copyColor);
                colorInput3.value = copycolor = color23.toString("hex")
                buttonElement.style.color = copycolor
            }
        }





        borderInput.addEventListener("input", changeBorderRadius)
        borderText.innerHTML = "Border Radius: " + buttonElement.style.borderRadius
        borderInput.value = parseInt(buttonElement.style.borderRadius)


        function changeBorderRadius() {
            if (selectedElement2 == divElement) {
                buttonElement.style.borderRadius = borderInput.value + "px"
                divElement.style.borderRadius = borderInput.value + "px"
                borderText.innerHTML = "Border Radius: " + buttonElement.style.borderRadius
                customBorderInputButton.value = parseInt(buttonElement.style.borderRadius)
            }
        }

        customBorderInputButton.addEventListener("keypress", changeBorderCustomRadius)
        customBorderInputButton.value = parseInt(buttonElement.style.borderRadius)

        function changeBorderCustomRadius(event) {
            if (selectedElement2 == divElement) {
                if (event.keyCode === 13) {
                    buttonElement.style.borderRadius = customBorderInputButton.value + "px"
                    divElement.style.borderRadius = customBorderInputButton.value + "px"
                    borderText.innerHTML = "Border Radius: " + buttonElement.style.borderRadius
                    borderInput.value = parseInt(buttonElement.style.borderRadius)
                }
            }
        }

        copyButtonBorderRadius.addEventListener("click", copyBorderRadius)


        function copyBorderRadius() {
            if (selectedElement2 == divElement) {
                copyNumber = parseInt(buttonElement.style.borderRadius)
            }
        }

        pasteButtonBorderRadius.addEventListener("click", pasteBorderRadius)

        function pasteBorderRadius() {
            if (selectedElement2 == divElement) {
                buttonElement.style.borderRadius = copyNumber + "px"
                borderText.innerHTML = "Border Radius: " + buttonElement.style.borderRadius
                divElement.style.borderRadius = copyNumber + "px"
                borderInput.value = parseInt(buttonElement.style.borderRadius)
                customBorderInputButton.value = parseInt(buttonElement.style.borderRadius)
            }
        }

        borderInput2.addEventListener("input", changeBorderSize)
        borderText2.innerHTML = "Border Size: " + parseInt(buttonElement.style.border)
        borderInput2.value = parseInt(buttonElement.style.border)


        function changeBorderSize() {
            if (selectedElement2 == divElement) {
                buttonElement.style.border = borderInput2.value + "px solid" + colorInput4.value
                divElement.style.border = borderInput2.value + "px solid" + colorInput4.value
                borderText2.innerHTML = "Border Size: " + parseInt(buttonElement.style.border)
                customBorderSizeInput.value = parseInt(buttonElement.style.border)
            }
        }


        customBorderSizeInput.addEventListener("keypress", customBorderSize)
        customBorderSizeInput.value = parseInt(buttonElement.style.border)


        function customBorderSize(event) {
            if(selectedElement2 == divElement) {
                if(event.keyCode === 13) {
                buttonElement.style.border =  customBorderSizeInput.value + "px solid" + colorInput4.value
                divElement.style.border =  customBorderSizeInput.value + "px solid" + colorInput4.value
                borderText2.innerHTML = "Border Size: " + parseInt(buttonElement.style.border)
                borderInput2.value = parseInt(buttonElement.style.border)
                }
            }
        }

        copyButtonBorderSize.addEventListener("click", copyBorderSize)
        

        function copyBorderSize() {
            if(selectedElement2 == divElement) {
                copyNumber = parseInt(buttonElement.style.border)
            }
        }

        pasteButtonBorderSize.addEventListener("click", pasteBorderSize)

        function pasteBorderSize() {
            if(selectedElement2 == divElement) {
                buttonElement.style.border = copyNumber + "px solid" + colorInput4.value
                divElement.style.border =  copyNumber + "px solid" + colorInput4.value
                borderText2.innerHTML = "Border Size: " + parseInt(buttonElement.style.border)
                borderInput2.value = parseInt(buttonElement.style.border)
                customBorderSizeInput.value = parseInt(buttonElement.style.border)
            }
        }


        colorInput4.addEventListener("input", changeBorderColor)
        let border = buttonElement.style.border;
        let colorMatch = border.match(/rgb\(.+?\)/);
        let colorString = colorMatch ? colorMatch[0] : "#000000"; // Default to black if no match found
        let colorc = tinycolor(colorString);
        colorInput4.value = colorc.toHexString();
        divElement.style.border = borderInput2.value + "px solid" + colorInput4.value

        function changeBorderColor() {
            if (selectedElement2 == divElement) {
                buttonElement.style.border = borderInput2.value + "px solid" + colorInput4.value
                divElement.style.border = borderInput2.value + "px solid" + colorInput4.value
            }
        }

        copyButtonRadiusColor.addEventListener("click", copyBorderColor)

        function copyBorderColor() {
            if (selectedElement2 == divElement) {
                let border2 = buttonElement.style.border;
                let colorMatch2 = border2.match(/rgb\(.+?\)/);
                let colorString2 = colorMatch2 ? colorMatch2[0] : "#000000"; // Default to black if no match found
                let colorc2 = tinycolor(colorString2);
                copyColor = colorc2.toHexString();
            }
        }

        pasteButtonRadiusColor.addEventListener("click", pasteBorderColor)

        function pasteBorderColor() {
            if(selectedElement2 == divElement) {
                buttonElement.style.border = borderInput2.value + "px solid" + copyColor
                divElement.style.border = borderInput2.value + "px solid" + copyColor
                let border3 = buttonElement.style.border;
                let colorMatch3 = border3.match(/rgb\(.+?\)/);
                let colorString3 = colorMatch3 ? colorMatch3[0] : "#000000"; // Default to black if no match found
                let colorc3 = tinycolor(colorString3);
                colorInput4.value = colorc3.toHexString();
                
            }
        }



        fontStyleText22.innerHTML = buttonElement.style.fontFamily
        fontStyleText22.style.fontFamily = buttonElement.style.fontFamily




        fontStyleButton1.addEventListener("click", changeFontStyle1)
        function changeFontStyle1() {
            if (selectedElement2 == divElement) {
                buttonElement.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
                fontStyleText22.innerHTML = buttonElement.style.fontFamily
                fontStyleText22.style.fontFamily = buttonElement.style.fontFamily
            }
        }


        fontStyleButton2.addEventListener("click", changeFontStyle2)
        function changeFontStyle2() {
            if (selectedElement2 == divElement) {
                buttonElement.style.fontFamily = "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif"
                fontStyleText22.innerHTML = buttonElement.style.fontFamily
                fontStyleText22.style.fontFamily = buttonElement.style.fontFamily
            }
        }

        fontStyleButton3.addEventListener("click", changeFontStyle3)
        function changeFontStyle3() {
            if (selectedElement2 == divElement) {
                buttonElement.style.fontFamily = "Arial, Helvetica, sans-serif"
                fontStyleText22.innerHTML = buttonElement.style.fontFamily
                fontStyleText22.style.fontFamily = buttonElement.style.fontFamily
            }
        }

        fontStyleButton4.addEventListener("click", changeFontStyle4)
        function changeFontStyle4() {
            if (selectedElement2 == divElement) {
                buttonElement.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
                fontStyleText22.innerHTML = buttonElement.style.fontFamily
                fontStyleText22.style.fontFamily = buttonElement.style.fontFamily
            }
        }

        fontStyleButton5.addEventListener("click", changeFontStyle5)
        function changeFontStyle5() {
            if (selectedElement2 == divElement) {
                buttonElement.style.fontFamily = "Times New Roman, Times, serif"
                fontStyleText22.innerHTML = buttonElement.style.fontFamily
                fontStyleText22.style.fontFamily = buttonElement.style.fontFamily
            }
        }

        fontStyleButton6.addEventListener("click", changeFontStyle6)
        function changeFontStyle6() {
            if (selectedElement2 == divElement) {
                buttonElement.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
                fontStyleText22.innerHTML = buttonElement.style.fontFamily
                fontStyleText22.style.fontFamily = buttonElement.style.fontFamily
            }
        }

        copyStyleButton.addEventListener("click", copyWholeStyle)

        function copyWholeStyle() {
            if (selectedElement2 == divElement) {
                buttonWidth = parseInt(buttonElement.style.width)
                buttonHeight = parseInt(buttonElement.style.height)
                buttonBackgroundColor = buttonElement.style.backgroundColor
                buttonFontSize = parseInt(buttonElement.style.fontSize)
                buttonFontWeight = buttonElement.style.fontWeight
                buttonColor = buttonElement.style.color
                buttonBorderRadius = parseInt(buttonElement.style.borderRadius)
                buttonBorderSize = parseInt(buttonElement.style.border)
                let border3 = buttonElement.style.border;
                let colorMatch3 = border3.match(/rgb\(.+?\)/);
                let colorString3 = colorMatch3 ? colorMatch3[0] : "#000000"; // Default to black if no match found
                let colorc3 = tinycolor(colorString3);
                buttonBorderColor = colorc3.toHexString();
                buttonFontFamily = buttonElement.style.fontFamily

            }
        }


        pasteStyleButton.addEventListener("click", pasteWholeStyle)

        function pasteWholeStyle() {
            if (selectedElement2 == divElement) {

                buttonElement.style.width = buttonWidth + "px"
                customWidthInputButton.value = parseInt(buttonElement.style.width.match(/\d+/)[0], 10);
                widthText.innerHTML = "Width: " + buttonElement.style.width
                widthInput.value = parseInt(buttonElement.style.width.match(/\d+/)[0], 10);


                buttonElement.style.height = buttonHeight + "px"
                customHeightInputButton.value = parseInt(buttonElement.style.height.match(/\d+/)[0], 10);
                heightText.innerHTML = "Width: " + buttonElement.style.height
                heightInput.value = parseInt(buttonElement.style.height.match(/\d+/)[0], 10);

                var color24 = tinycolor(buttonBackgroundColor);
                colorInput2.value = buttonBackgroundColor = color24.toString("hex")
                buttonElement.style.backgroundColor = buttonBackgroundColor

                buttonElement.style.fontSize = buttonFontSize + "px"
                fontInput2.value = parseInt(buttonElement.style.fontSize)
                fontText2.innerHTML = "Font Size: " + fontInput2.value + "px"
                customFontInputButton.value = parseInt(buttonElement.style.fontSize)

                buttonElement.style.fontWeight = buttonFontWeight
                fontWeightText2.innerHTML = "Font Weight: " + buttonElement.style.fontWeight
                fontWeightInput2.value = buttonElement.style.fontWeight
                fontCustomWeightInput2.value = buttonElement.style.fontWeight


                var color25 = tinycolor(buttonColor);
                colorInput3.value = buttonColor = color25.toString("hex")
                buttonElement.style.color = buttonColor

                buttonElement.style.borderRadius = buttonBorderRadius + "px"
                borderText.innerHTML = "Border Radius: " + buttonElement.style.borderRadius
                divElement.style.borderRadius = copyNumber + "px"
                borderInput.value = parseInt(buttonElement.style.borderRadius)
                customBorderInputButton.value = parseInt(buttonElement.style.borderRadius)

                buttonElement.style.border = buttonBorderSize  + "px solid" + colorInput4.value
                divElement.style.border =  buttonBorderSize  + "px solid" + colorInput4.value
                borderText2.innerHTML = "Border Size: " + parseInt(buttonElement.style.border)
                borderInput2.value = parseInt(buttonElement.style.border)
                customBorderSizeInput.value = parseInt(buttonElement.style.border)

                buttonElement.style.border = buttonBorderSize + "px solid" + buttonBorderColor
                divElement.style.border = buttonBorderSize + "px solid" + buttonBorderColor
                let border4 = buttonElement.style.border;
                let colorMatch4 = border4.match(/rgb\(.+?\)/);
                let colorString4 = colorMatch4 ? colorMatch4[0] : "#000000"; // Default to black if no match found
                let colorc4 = tinycolor(colorString4);
                colorInput4.value = colorc4.toHexString();

                buttonElement.style.fontFamily = buttonFontFamily
                fontStyleText22.innerHTML = buttonElement.style.fontFamily
                fontStyleText22.style.fontFamily = buttonElement.style.fontFamily

            }
        }






        advancedRemove3()
        advancedSettings2.addEventListener("click", openAdvanceMenu)


        function openAdvanceMenu() {
            if (thePanel.contains(changeText2)) {
                removeToPanel2()
                advancedAdd2()
            }
        }


        backBtnAdv2.addEventListener("click", closeAdvanced)

        function closeAdvanced() {
            addToPanel2()
            advancedRemove2()
        }



        zIndexInput.addEventListener("keypress", changeZIndex)
        zIndexInput.value = divElement.style.zIndex

        function changeZIndex(event) {
            if (event.keyCode === 13) {
                if (selectedElement2 == divElement) {
                    divElement.style.zIndex = zIndexInput.value
                }
            }
        }




        hoverButton2.addEventListener("click", addHoverEvent)



        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("hoverevent")) {
                hoverButton2.classList.add("check")
                hoverButton2.style.color = "green"
                hoverButton2.innerHTML = "Hover Event [ON]"

                setTimeout(() => {
                    hoverButton2.removeEventListener("click", addHoverEvent)
                    hoverButton2.addEventListener("click", removeHoverEvent)
                }, 1);
            } else {
                hoverButton2.classList.remove("check")
                hoverButton2.style.color = "red"
                hoverButton2.innerHTML = "Hover Event [OFF]"

                hoverColorButton2.style.color = "red"
                hoverColorButton2.innerHTML = "Color Change [OFF]"

                hoverSizeButton2.innerHTML = "Size Change [OFF]"
                hoverSizeButton2.style.color = "red"



                hoverSizeButton2.addEventListener("click", toggleHoverSize)
                hoverSizeButton2.removeEventListener("click", removeHoverSize)

                hoverSizeButton2.removeEventListener("click", toggleHoverSize)
                hoverSizeButton2.removeEventListener("click", removeHoverSize)



                hoverColorButton2.removeEventListener("click", toggleHoverColor)
                hoverColorButton2.removeEventListener("click", removeHoverColor)

                buttonElement.classList.remove("size")
                buttonElement.classList.remove("size2")
                buttonElement.classList.remove("size3")
                buttonElement.classList.remove("size4")

                sizeBox23.style.backgroundColor = "white"
                sizeBox22.style.backgroundColor = "white"
                sizeBox33.style.backgroundColor = "white"
                sizeBox44.style.backgroundColor = "white"


                setTimeout(() => {
                    hoverButton2.addEventListener("click", addHoverEvent)
                    hoverButton2.removeEventListener("click", removeHoverEvent)
                }, 1);


            }
        }




        function addHoverEvent() {
            if (selectedElement2 == divElement) {
                buttonElement.classList.add("hoverevent")
                hoverButton2.classList.add("check")
                hoverButton2.style.color = "green"
                hoverButton2.innerHTML = "Hover Event [ON]"
                hoverColorButton2.addEventListener("click", toggleHoverColor)
                hoverSizeButton2.addEventListener("click", toggleHoverSize)
                setTimeout(() => {
                    hoverButton2.removeEventListener("click", addHoverEvent)
                    hoverButton2.addEventListener("click", removeHoverEvent)
                }, 1);
            }
        }


        function removeHoverEvent() {
            if (selectedElement2 == divElement) {
                buttonElement.classList.remove("hoverevent")
                hoverButton2.classList.remove("check")
                hoverButton2.style.color = "red"
                hoverButton2.innerHTML = "Hover Event [OFF]"


                hoverColorButton2.style.color = "red"
                hoverColorButton2.innerHTML = "Color Change [OFF]"

                hoverSizeButton2.innerHTML = "Size Change [OFF]"
                hoverSizeButton2.style.color = "red"
                buttonElement.classList.remove("size")

                hoverColorButton2.removeEventListener("click", toggleHoverColor)

                hoverSizeButton2.addEventListener("click", toggleHoverSize)
                hoverSizeButton2.removeEventListener("click", removeHoverSize)

                buttonElement.classList.remove("size")
                buttonElement.classList.remove("size2")
                buttonElement.classList.remove("size3")
                buttonElement.classList.remove("size4")

                sizeBox23.style.backgroundColor = "white"
                sizeBox22.style.backgroundColor = "white"
                sizeBox33.style.backgroundColor = "white"
                sizeBox44.style.backgroundColor = "white"

                colorRed2.style.border = "0px solid"
                buttonElement.classList.remove("isred")

                colorBlue2.style.border = "0px solid"
                buttonElement.classList.remove("isblue")

                colorOrange2.style.border = "0px solid"
                buttonElement.classList.remove("isorange")

                colorGreen2.style.border = "0px solid"
                buttonElement.classList.remove("isgreen")

                colorPurple2.style.border = "0px solid"
                buttonElement.classList.remove("ispurple")


                colorGray2.style.border = "0px solid"
                buttonElement.classList.remove("isgray")

                colorAqua2.style.border = "0px solid"
                buttonElement.classList.remove("isaqua")

                colorBrown2.style.border = "0px solid"
                buttonElement.classList.remove("isbrown")

                colorYellow2.style.border = "0px solid"
                buttonElement.classList.remove("isyellow")

                colorBlack2.style.border = "0px solid"
                buttonElement.classList.remove("isblack")

                hoverColorButton2.removeEventListener("click", toggleHoverColor)
                hoverColorButton2.removeEventListener("click", removeHoverColor)

                hoverSizeButton2.removeEventListener("click", toggleHoverSize)
                hoverSizeButton2.removeEventListener("click", removeHoverSize)

                buttonElement.classList.remove("hovercolor")

                smoothAnim2.addEventListener("click", toggleSmooth)
                smoothAnim2.removeEventListener("click", removeSmooth)

                colorRed2.removeEventListener("click", removeRed)
                colorBlue2.removeEventListener("click", removeBlue)
                colorOrange2.removeEventListener("click", removeOrange)
                colorGreen2.removeEventListener("click", removeGreen)
                colorPurple2.removeEventListener("click", removePurple)
                colorGray2.removeEventListener("click", removeGray)
                colorAqua2.removeEventListener("click", removeAqua)
                colorBrown2.removeEventListener("click", removeBrown)
                colorYellow2.removeEventListener("click", removeYellow)
                colorBlack2.removeEventListener("click", removeBlack)

                colorRed2.removeEventListener("click", hoverRed)
                colorBlue2.removeEventListener("click", hoverBlue)
                colorOrange2.removeEventListener("click", hoverOrange)
                colorGreen2.removeEventListener("click", hoverGreen)
                colorPurple2.removeEventListener("click", hoverPurple)
                colorGray2.removeEventListener("click", hoverGray)
                colorAqua2.removeEventListener("click", hoverAqua)
                colorBrown2.removeEventListener("click", hoverBrown)
                colorYellow2.removeEventListener("click", hoverYellow)
                colorBlack2.removeEventListener("click", hoverBlack)
            }

            setTimeout(() => {
                hoverButton2.addEventListener("click", addHoverEvent)
                hoverButton2.removeEventListener("click", removeHoverEvent)
            }, 1);
        }




        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("hovercolor")) {
                buttonElement.classList.add("hovercolor")
                hoverColorButton2.style.color = "green"
                hoverColorButton2.innerHTML = "Color Change [ON]"


                setTimeout(() => {
                    hoverColorButton2.removeEventListener("click", toggleHoverColor)
                    hoverColorButton2.addEventListener("click", removeHoverColor)
                }, 1);
            } else {
                buttonElement.classList.remove("hovercolor")
                hoverColorButton2.style.color = "red"
                hoverColorButton2.innerHTML = "Color Change [OFF]"
                //removing colors
                buttonElement.classList.remove("isred")
                buttonElement.classList.remove("isblue")
                buttonElement.classList.remove("isorange")
                buttonElement.classList.remove("isgreen")
                buttonElement.classList.remove("isgray")
                buttonElement.classList.remove("isaqua")
                buttonElement.classList.remove("isbrown")
                buttonElement.classList.remove("isyellow")
                buttonElement.classList.remove("isblack")
                colorRed2.style.border = "0px solid"
                colorBlue2.style.border = "0px solid"
                colorOrange2.style.border = "0px solid"
                colorGreen2.style.border = "0px solid"
                colorGray2.style.border = "0px solid"
                colorAqua2.style.border = "0px solid"
                colorBrown2.style.border = "0px solid"
                colorYellow2.style.border = "0px solid"
                colorBlack2.style.border = "0px solid"

                colorRed2.removeEventListener("click", hoverRed)
                colorBlack2.removeEventListener("click", hoverBlue)
                colorOrange2.removeEventListener("click", hoverOrange)
                colorGreen2.removeEventListener("click", hoverGreen)



            }
            setTimeout(() => {
                hoverColorButton2.removeEventListener("click", toggleHoverColor)
                hoverColorButton2.removeEventListener("click", removeHoverColor)
            }, 1);
        }



        function toggleHoverColor() {
            if (selectedElement2 == divElement) {
                buttonElement.classList.add("hovercolor")
                hoverColorButton2.style.color = "green"
                hoverColorButton2.innerHTML = "Color Change [ON]"

                colorRed2.addEventListener("click", removeRed)
                colorBlue2.addEventListener("click", removeBlue)
                colorOrange2.addEventListener("click", removeOrange)
                colorGreen2.addEventListener("click", removeGreen)
                colorPurple2.addEventListener("click", removePurple)
                colorGray2.addEventListener("click", removeGray)
                colorAqua2.addEventListener("click", removeAqua)
                colorBrown2.addEventListener("click", removeBrown)
                colorYellow2.addEventListener("click", removeYellow)
                colorBlack2.addEventListener("click", removeBlack)

            }
            setTimeout(() => {
                hoverColorButton2.removeEventListener("click", toggleHoverColor)
                hoverColorButton2.addEventListener("click", removeHoverColor)
            }, 1);
        }



        function removeHoverColor() {
            if (selectedElement2 == divElement) {
                buttonElement.classList.remove("hovercolor")
                hoverColorButton2.style.color = "red"
                hoverColorButton2.innerHTML = "Color Change [OFF]"

                //removing colors
                buttonElement.classList.remove("isred")
                buttonElement.classList.remove("isblue")
                buttonElement.classList.remove("isorange")
                buttonElement.classList.remove("isgreen")
                buttonElement.classList.remove("ispurple")
                buttonElement.classList.remove("isgray")
                buttonElement.classList.remove("isaqua")
                buttonElement.classList.remove("isbrown")
                buttonElement.classList.remove("isyellow")
                buttonElement.classList.remove("isblack")
                colorRed2.style.border = "0px solid"
                colorBlue2.style.border = "0px solid"
                colorOrange2.style.border = "0px solid"
                colorGreen2.style.border = "0px solid"
                colorPurple2.style.border = "0px solid"
                colorGray2.style.border = "0px solid"
                colorAqua2.style.border = "0px solid"
                colorBrown2.style.border = "0px solid"
                colorYellow2.style.border = "0px solid"
                colorBlack2.style.border = "0px solid"


                colorRed2.removeEventListener("click", removeRed)
                colorBlue2.removeEventListener("click", removeBlue)
                colorOrange2.removeEventListener("click", removeOrange)
                colorGreen2.removeEventListener("click", removeGreen)
                colorPurple2.removeEventListener("click", removePurple)
                colorGray2.removeEventListener("click", removeGray)
                colorAqua2.removeEventListener("click", removeAqua)
                colorBrown2.removeEventListener("click", removeBrown)
                colorYellow2.removeEventListener("click", removeYellow)
                colorBlack2.removeEventListener("click", removeBlack)

                colorRed2.removeEventListener("click", hoverRed)
                colorBlue2.removeEventListener("click", hoverBlue)
                colorOrange2.removeEventListener("click", hoverOrange)
                colorGreen2.removeEventListener("click", hoverGreen)
                colorPurple2.removeEventListener("click", hoverPurple)
                colorGray2.removeEventListener("click", hoverGray)
                colorAqua2.removeEventListener("click", hoverAqua)
                colorBrown2.removeEventListener("click", hoverBrown)
                colorYellow2.removeEventListener("click", hoverYellow)
                colorBlack2.removeEventListener("click", hoverBlack)





            }
            setTimeout(() => {
                hoverColorButton2.addEventListener("click", toggleHoverColor)
                hoverColorButton2.removeEventListener("click", removeHoverColor)
            }, 1);
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


        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("isred")) {
                colorRed2.style.border = "2px solid"
            } else {
                colorRed2.style.border = "0px solid"
            }
        }



        function hoverRed() {
            if (selectedElement2 == divElement) {
                colorRed2.style.border = "2px solid"
                colorBlue2.style.border = "0px solid"
                colorOrange2.style.border = "0px solid"
                colorGreen2.style.border = "0px solid"
                colorPurple2.style.border = "0px solid"
                colorGray2.style.border = "0px solid"
                colorAqua2.style.border = "0px solid"
                colorBrown2.style.border = "0px solid"
                colorYellow2.style.border = "0px solid"
                colorBlack2.style.border = "0px solid"

                buttonElement.classList.add("isred")
                buttonElement.classList.remove("isblue")
                buttonElement.classList.remove("isorange")
                buttonElement.classList.remove("isgreen")
                buttonElement.classList.remove("ispurple")
                buttonElement.classList.remove("isgray")
                buttonElement.classList.remove("isaqua")
                buttonElement.classList.remove("isbrown")
                buttonElement.classList.remove("isyellow")
                buttonElement.classList.remove("isblack")

                colorBlue2.addEventListener("click", hoverBlue)
                colorBlue2.removeEventListener("click", removeBlue)

                colorOrange2.addEventListener("click", hoverOrange)
                colorOrange2.removeEventListener("click", removeOrange)

                colorGreen2.addEventListener("click", hoverGreen)
                colorGreen2.removeEventListener("click", removeGreen)

                colorPurple2.addEventListener("click", hoverPurple)
                colorPurple2.removeEventListener("click", removePurple)

                colorGray2.addEventListener("click", hoverGray)
                colorGray2.removeEventListener("click", removeGray)

                colorAqua2.addEventListener("click", hoverAqua)
                colorAqua2.removeEventListener("click", removeAqua)

                colorBrown2.addEventListener("click", hoverBrown)
                colorBrown2.removeEventListener("click", removeBrown)

                colorYellow2.addEventListener("click", hoverYellow)
                colorYellow2.removeEventListener("click", removeYellow)

                colorBlack2.addEventListener("click", hoverBlack)
                colorBlack2.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorRed2.removeEventListener("click", hoverRed)
                    colorRed2.addEventListener("click", removeRed)
                }, 1);
            }
        }

        function removeRed() {
            if (selectedElement2 == divElement) {
                colorRed2.style.border = "0px solid"
                buttonElement.classList.remove("isred")


                setTimeout(() => {
                    colorRed2.addEventListener("click", hoverRed)
                    colorRed2.removeEventListener("click", removeRed)
                }, 1);
            }
        }



        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("isblue")) {
                colorBlue2.style.border = "2px solid"
            } else {
                colorBlue2.style.border = "0px solid"
            }
        }


        function hoverBlue() {
            if (selectedElement2 == divElement) {
                colorBlue2.style.border = "2px solid"
                colorRed2.style.border = "0px solid"
                colorOrange2.style.border = "0px solid"
                colorGreen2.style.border = "0px solid"
                colorPurple2.style.border = "0px solid"
                colorGray2.style.border = "0px solid"
                colorAqua2.style.border = "0px solid"
                colorBrown2.style.border = "0px solid"
                colorYellow2.style.border = "0px solid"
                colorBlack2.style.border = "0px solid"

                buttonElement.classList.add("isblue")
                buttonElement.classList.remove("isred")
                buttonElement.classList.remove("isorange")
                buttonElement.classList.remove("isgreen")
                buttonElement.classList.remove("ispurple")
                buttonElement.classList.remove("isgray")
                buttonElement.classList.remove("isaqua")
                buttonElement.classList.remove("isbrown")
                buttonElement.classList.remove("isyellow")
                buttonElement.classList.remove("isblack")

                colorRed2.addEventListener("click", hoverRed)
                colorRed2.removeEventListener("click", removeRed)

                colorOrange2.addEventListener("click", hoverOrange)
                colorOrange2.removeEventListener("click", removeOrange)

                colorGreen2.addEventListener("click", hoverGreen)
                colorGreen2.removeEventListener("click", removeGreen)

                colorPurple2.addEventListener("click", hoverPurple)
                colorPurple2.removeEventListener("click", removePurple)

                colorGray2.addEventListener("click", hoverGray)
                colorGray2.removeEventListener("click", removeGray)

                colorAqua2.addEventListener("click", hoverAqua)
                colorAqua2.removeEventListener("click", removeAqua)

                colorBrown2.addEventListener("click", hoverBrown)
                colorBrown2.removeEventListener("click", removeBrown)

                colorYellow2.addEventListener("click", hoverYellow)
                colorYellow2.removeEventListener("click", removeYellow)

                colorBlack2.addEventListener("click", hoverBlack)
                colorBlack2.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorBlue2.removeEventListener("click", hoverBlue)
                    colorBlue2.addEventListener("click", removeBlue)
                }, 1);
            }
        }

        function removeBlue() {
            if (selectedElement2 == divElement) {
                colorBlue2.style.border = "0px solid"
                buttonElement.classList.remove("isblue")

                setTimeout(() => {
                    colorBlue2.addEventListener("click", hoverBlue)
                    colorBlue2.removeEventListener("click", removeBlue)
                }, 1);
            }
        }




        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("isorange")) {
                colorOrange2.style.border = "2px solid"
            } else {
                colorOrange2.style.border = "0px solid"
            }
        }



        function hoverOrange() {
            if (selectedElement2 == divElement) {
                colorOrange2.style.border = "2px solid"
                colorBlue2.style.border = "0px solid"
                colorRed2.style.border = "0px solid"
                colorGreen2.style.border = "0px solid"
                colorPurple2.style.border = "0px solid"
                colorGray2.style.border = "0px solid"
                colorAqua2.style.border = "0px solid"
                colorBrown2.style.border = "0px solid"
                colorYellow2.style.border = "0px solid"
                colorBlack2.style.border = "0px solid"

                buttonElement.classList.add("isorange")
                buttonElement.classList.remove("isblue")
                buttonElement.classList.remove("isred")
                buttonElement.classList.remove("isgreen")
                buttonElement.classList.remove("ispurple")
                buttonElement.classList.remove("isgray")
                buttonElement.classList.remove("isaqua")
                buttonElement.classList.remove("isbrown")
                buttonElement.classList.remove("isyellow")
                buttonElement.classList.remove("isblack")

                colorBlue2.addEventListener("click", hoverBlue)
                colorBlue2.removeEventListener("click", removeBlue)

                colorRed2.addEventListener("click", hoverRed)
                colorRed2.removeEventListener("click", removeRed)

                colorGreen2.addEventListener("click", hoverGreen)
                colorGreen2.removeEventListener("click", removeGreen)

                colorPurple2.addEventListener("click", hoverPurple)
                colorPurple2.removeEventListener("click", removePurple)

                colorGray2.addEventListener("click", hoverGray)
                colorGray2.removeEventListener("click", removeGray)

                colorAqua2.addEventListener("click", hoverAqua)
                colorAqua2.removeEventListener("click", removeAqua)

                colorBrown2.addEventListener("click", hoverBrown)
                colorBrown2.removeEventListener("click", removeBrown)

                colorYellow2.addEventListener("click", hoverYellow)
                colorYellow2.removeEventListener("click", removeYellow)

                colorBlack2.addEventListener("click", hoverBlack)
                colorBlack2.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorOrange2.removeEventListener("click", hoverOrange)
                    colorOrange2.addEventListener("click", removeOrange)
                }, 1);
            }
        }

        function removeOrange() {
            if (selectedElement2 == divElement) {
                colorOrange2.style.border = "0px solid"
                buttonElement.classList.remove("isorange")

                setTimeout(() => {
                    colorOrange2.addEventListener("click", hoverOrange)
                    colorOrange2.removeEventListener("click", removeOrange)
                }, 1);
            }
        }




        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("isgreen")) {
                colorGreen2.style.border = "2px solid"
            } else {
                colorGreen2.style.border = "0px solid"
            }
        }



        function hoverGreen() {
            if (selectedElement2 == divElement) {
                colorGreen2.style.border = "2px solid"
                colorBlue2.style.border = "0px solid"
                colorRed2.style.border = "0px solid"
                colorOrange2.style.border = "0px solid"
                colorPurple2.style.border = "0px solid"
                colorGray2.style.border = "0px solid"
                colorAqua2.style.border = "0px solid"
                colorBrown2.style.border = "0px solid"
                colorYellow2.style.border = "0px solid"
                colorBlack2.style.border = "0px solid"

                buttonElement.classList.add("isgreen")
                buttonElement.classList.remove("isblue")
                buttonElement.classList.remove("isred")
                buttonElement.classList.remove("isorange")
                buttonElement.classList.remove("ispurple")
                buttonElement.classList.remove("isgray")
                buttonElement.classList.remove("isaqua")
                buttonElement.classList.remove("isbrown")
                buttonElement.classList.remove("isyellow")
                buttonElement.classList.remove("isblack")

                colorBlue2.addEventListener("click", hoverBlue)
                colorBlue2.removeEventListener("click", removeBlue)

                colorOrange2.addEventListener("click", hoverOrange)
                colorOrange2.removeEventListener("click", removeOrange)

                colorRed2.addEventListener("click", hoverRed)
                colorRed2.removeEventListener("click", removeRed)

                colorPurple2.addEventListener("click", hoverPurple)
                colorPurple2.removeEventListener("click", removePurple)

                colorGray2.addEventListener("click", hoverGray)
                colorGray2.removeEventListener("click", removeGray)

                colorAqua2.addEventListener("click", hoverAqua)
                colorAqua2.removeEventListener("click", removeAqua)

                colorBrown2.addEventListener("click", hoverBrown)
                colorBrown2.removeEventListener("click", removeBrown)

                colorYellow2.addEventListener("click", hoverYellow)
                colorYellow2.removeEventListener("click", removeYellow)

                colorBlack2.addEventListener("click", hoverBlack)
                colorBlack2.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorGreen2.removeEventListener("click", hoverGreen)
                    colorGreen2.addEventListener("click", removeGreen)
                }, 1);
            }
        }

        function removeGreen() {
            if (selectedElement2 == divElement) {
                colorGreen2.style.border = "0px solid"
                buttonElement.classList.remove("isgreen")

                setTimeout(() => {
                    colorGreen2.addEventListener("click", hoverGreen)
                    colorGreen2.removeEventListener("click", removeGreen)
                }, 1);
            }
        }



        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("ispurple")) {
                colorPurple2.style.border = "2px solid"
            } else {
                colorPurple2.style.border = "0px solid"
            }
        }



        function hoverPurple() {
            if (selectedElement2 == divElement) {
                colorPurple2.style.border = "2px solid"
                colorBlue2.style.border = "0px solid"
                colorRed2.style.border = "0px solid"
                colorOrange2.style.border = "0px solid"
                colorGreen2.style.border = "0px solid"
                colorGray2.style.border = "0px solid"
                colorAqua2.style.border = "0px solid"
                colorBrown2.style.border = "0px solid"
                colorYellow2.style.border = "0px solid"
                colorBlack2.style.border = "0px solid"

                buttonElement.classList.add("ispurple")
                buttonElement.classList.remove("isblue")
                buttonElement.classList.remove("isred")
                buttonElement.classList.remove("isorange")
                buttonElement.classList.remove("isgreen")
                buttonElement.classList.remove("isgray")
                buttonElement.classList.remove("isaqua")
                buttonElement.classList.remove("isbrown")
                buttonElement.classList.remove("isyellow")
                buttonElement.classList.remove("isblack")

                colorBlue2.addEventListener("click", hoverBlue)
                colorBlue2.removeEventListener("click", removeBlue)

                colorOrange2.addEventListener("click", hoverOrange)
                colorOrange2.removeEventListener("click", removeOrange)

                colorGreen2.addEventListener("click", hoverGreen)
                colorGreen2.removeEventListener("click", removeGreen)

                colorRed2.addEventListener("click", hoverRed)
                colorRed2.removeEventListener("click", removeRed)

                colorGray2.addEventListener("click", hoverGray)
                colorGray2.removeEventListener("click", removeGray)

                colorAqua2.addEventListener("click", hoverAqua)
                colorAqua2.removeEventListener("click", removeAqua)

                colorBrown2.addEventListener("click", hoverBrown)
                colorBrown2.removeEventListener("click", removeBrown)

                colorYellow2.addEventListener("click", hoverYellow)
                colorYellow2.removeEventListener("click", removeYellow)

                colorBlack2.addEventListener("click", hoverBlack)
                colorBlack2.removeEventListener("click", removeBlack)


                setTimeout(() => {
                    colorPurple2.removeEventListener("click", hoverPurple)
                    colorPurple2.addEventListener("click", removePurple)
                }, 1);
            }
        }

        function removePurple() {
            if (selectedElement2 == divElement) {
                colorPurple2.style.border = "0px solid"
                buttonElement.classList.remove("ispurple")

                setTimeout(() => {
                    colorPurple2.addEventListener("click", hoverPurple)
                    colorPurple2.removeEventListener("click", removePurple)
                }, 1);
            }
        }



        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("isgray")) {
                colorGray2.style.border = "2px solid"
            } else {
                colorGray2.style.border = "0px solid"
            }
        }



        function hoverGray() {
            if (selectedElement2 == divElement) {
                colorGray2.style.border = "2px solid"
                colorBlue2.style.border = "0px solid"
                colorRed2.style.border = "0px solid"
                colorOrange2.style.border = "0px solid"
                colorGreen2.style.border = "0px solid"
                colorPurple2.style.border = "0px solid"
                colorAqua2.style.border = "0px solid"
                colorBrown2.style.border = "0px solid"
                colorYellow2.style.border = "0px solid"
                colorBlack2.style.border = "0px solid"

                buttonElement.classList.add("isgray")
                buttonElement.classList.remove("isblue")
                buttonElement.classList.remove("isred")
                buttonElement.classList.remove("isorange")
                buttonElement.classList.remove("isgreen")
                buttonElement.classList.remove("ispurple")
                buttonElement.classList.remove("isaqua")
                buttonElement.classList.remove("isbrown")
                buttonElement.classList.remove("isyellow")
                buttonElement.classList.remove("isblack")

                colorBlue2.addEventListener("click", hoverBlue)
                colorBlue2.removeEventListener("click", removeBlue)

                colorOrange2.addEventListener("click", hoverOrange)
                colorOrange2.removeEventListener("click", removeOrange)

                colorGreen2.addEventListener("click", hoverGreen)
                colorGreen2.removeEventListener("click", removeGreen)

                colorPurple2.addEventListener("click", hoverPurple)
                colorPurple2.removeEventListener("click", removePurple)

                colorRed2.addEventListener("click", hoverRed)
                colorRed2.removeEventListener("click", removeRed)

                colorAqua2.addEventListener("click", hoverAqua)
                colorAqua2.removeEventListener("click", removeAqua)

                colorBrown2.addEventListener("click", hoverBrown)
                colorBrown2.removeEventListener("click", removeBrown)

                colorYellow2.addEventListener("click", hoverYellow)
                colorYellow2.removeEventListener("click", removeYellow)

                colorBlack2.addEventListener("click", hoverBlack)
                colorBlack2.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorGray2.removeEventListener("click", hoverGray)
                    colorGray2.addEventListener("click", removeGray)
                }, 1);
            }
        }

        function removeGray() {
            if (selectedElement2 == divElement) {
                colorGray2.style.border = "0px solid"
                buttonElement.classList.remove("isgray")

                setTimeout(() => {
                    colorGray2.addEventListener("click", hoverGray)
                    colorGray2.removeEventListener("click", removeGray)
                }, 1);
            }
        }







        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("isaqua")) {
                colorAqua2.style.border = "2px solid"
            } else {
                colorAqua2.style.border = "0px solid"
            }
        }



        function hoverAqua() {
            if (selectedElement2 == divElement) {
                colorAqua2.style.border = "2px solid"
                colorBlue2.style.border = "0px solid"
                colorRed2.style.border = "0px solid"
                colorOrange2.style.border = "0px solid"
                colorGreen2.style.border = "0px solid"
                colorPurple2.style.border = "0px solid"
                colorGray2.style.border = "0px solid"
                colorBrown2.style.border = "0px solid"
                colorYellow2.style.border = "0px solid"
                colorBlack2.style.border = "0px solid"

                buttonElement.classList.add("isaqua")
                buttonElement.classList.remove("isblue")
                buttonElement.classList.remove("isred")
                buttonElement.classList.remove("isorange")
                buttonElement.classList.remove("isgreen")
                buttonElement.classList.remove("ispurple")
                buttonElement.classList.remove("isgray")
                buttonElement.classList.remove("isbrown")
                buttonElement.classList.remove("isyellow")
                buttonElement.classList.remove("isblack")

                colorBlue2.addEventListener("click", hoverBlue)
                colorBlue2.removeEventListener("click", removeBlue)

                colorOrange2.addEventListener("click", hoverOrange)
                colorOrange2.removeEventListener("click", removeOrange)

                colorGreen2.addEventListener("click", hoverGreen)
                colorGreen2.removeEventListener("click", removeGreen)

                colorPurple2.addEventListener("click", hoverPurple)
                colorPurple2.removeEventListener("click", removePurple)

                colorGray2.addEventListener("click", hoverGray)
                colorGray2.removeEventListener("click", removeGray)

                colorRed2.addEventListener("click", hoverRed)
                colorRed2.removeEventListener("click", removeRed)

                colorBrown2.addEventListener("click", hoverBrown)
                colorBrown2.removeEventListener("click", removeBrown)

                colorYellow2.addEventListener("click", hoverYellow)
                colorYellow2.removeEventListener("click", removeYellow)

                colorBlack2.addEventListener("click", hoverBlack)
                colorBlack2.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorAqua2.removeEventListener("click", hoverAqua)
                    colorAqua2.addEventListener("click", removeAqua)
                }, 1);
            }
        }

        function removeAqua() {
            if (selectedElement2 == divElement) {
                colorAqua2.style.border = "0px solid"
                buttonElement.classList.remove("isaqua")

                setTimeout(() => {
                    colorAqua2.addEventListener("click", hoverAqua)
                    colorAqua2.removeEventListener("click", removeAqua)
                }, 1);
            }
        }


        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("isbrown")) {
                colorBrown2.style.border = "2px solid"
            } else {
                colorBrown2.style.border = "0px solid"
            }
        }



        function hoverBrown() {
            if (selectedElement2 == divElement) {
                colorBrown2.style.border = "2px solid"
                colorBlue2.style.border = "0px solid"
                colorRed2.style.border = "0px solid"
                colorOrange2.style.border = "0px solid"
                colorGreen2.style.border = "0px solid"
                colorPurple2.style.border = "0px solid"
                colorGray2.style.border = "0px solid"
                colorAqua2.style.border = "0px solid"
                colorYellow2.style.border = "0px solid"
                colorBlack2.style.border = "0px solid"

                buttonElement.classList.add("isbrown")
                buttonElement.classList.remove("isblue")
                buttonElement.classList.remove("isred")
                buttonElement.classList.remove("isorange")
                buttonElement.classList.remove("isgreen")
                buttonElement.classList.remove("ispurple")
                buttonElement.classList.remove("isgray")
                buttonElement.classList.remove("isaqua")
                buttonElement.classList.remove("isyellow")
                buttonElement.classList.remove("isblack")

                colorBlue2.addEventListener("click", hoverBlue)
                colorBlue2.removeEventListener("click", removeBlue)

                colorOrange2.addEventListener("click", hoverOrange)
                colorOrange2.removeEventListener("click", removeOrange)

                colorGreen2.addEventListener("click", hoverGreen)
                colorGreen2.removeEventListener("click", removeGreen)

                colorPurple2.addEventListener("click", hoverPurple)
                colorPurple2.removeEventListener("click", removePurple)

                colorGray2.addEventListener("click", hoverGray)
                colorGray2.removeEventListener("click", removeGray)

                colorAqua2.addEventListener("click", hoverAqua)
                colorAqua2.removeEventListener("click", removeAqua)

                colorRed2.addEventListener("click", hoverRed)
                colorRed2.removeEventListener("click", removeRed)

                colorYellow2.addEventListener("click", hoverYellow)
                colorYellow2.removeEventListener("click", removeYellow)

                colorBlack2.addEventListener("click", hoverBlack)
                colorBlack2.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorBrown2.removeEventListener("click", hoverBrown)
                    colorBrown2.addEventListener("click", removeBrown)
                }, 1);
            }
        }

        function removeBrown() {
            if (selectedElement2 == divElement) {
                colorBrown2.style.border = "0px solid"
                buttonElement.classList.remove("isbrown")

                setTimeout(() => {
                    colorBrown2.addEventListener("click", hoverBrown)
                    colorBrown2.removeEventListener("click", removeBrown)
                }, 1);
            }
        }


        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("isyellow")) {
                colorYellow2.style.border = "2px solid"
            } else {
                colorYellow2.style.border = "0px solid"
            }
        }



        function hoverYellow() {
            if (selectedElement2 == divElement) {
                colorYellow2.style.border = "2px solid"
                colorBlue2.style.border = "0px solid"
                colorRed2.style.border = "0px solid"
                colorOrange2.style.border = "0px solid"
                colorGreen2.style.border = "0px solid"
                colorPurple2.style.border = "0px solid"
                colorGray2.style.border = "0px solid"
                colorAqua2.style.border = "0px solid"
                colorBrown2.style.border = "0px solid"
                colorBlack2.style.border = "0px solid"

                buttonElement.classList.add("isyellow")
                buttonElement.classList.remove("isblue")
                buttonElement.classList.remove("isred")
                buttonElement.classList.remove("isorange")
                buttonElement.classList.remove("isgreen")
                buttonElement.classList.remove("ispurple")
                buttonElement.classList.remove("isgray")
                buttonElement.classList.remove("isaqua")
                buttonElement.classList.remove("isbrown")
                buttonElement.classList.remove("isblack")

                colorBlue2.addEventListener("click", hoverBlue)
                colorBlue2.removeEventListener("click", removeBlue)

                colorOrange2.addEventListener("click", hoverOrange)
                colorOrange2.removeEventListener("click", removeOrange)

                colorGreen2.addEventListener("click", hoverGreen)
                colorGreen2.removeEventListener("click", removeGreen)

                colorPurple2.addEventListener("click", hoverPurple)
                colorPurple2.removeEventListener("click", removePurple)

                colorGray2.addEventListener("click", hoverGray)
                colorGray2.removeEventListener("click", removeGray)

                colorAqua2.addEventListener("click", hoverAqua)
                colorAqua2.removeEventListener("click", removeAqua)

                colorBrown2.addEventListener("click", hoverBrown)
                colorBrown2.removeEventListener("click", removeBrown)

                colorRed2.addEventListener("click", hoverRed)
                colorRed2.removeEventListener("click", removeRed)

                colorBlack2.addEventListener("click", hoverBlack)
                colorBlack2.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorYellow2.removeEventListener("click", hoverYellow)
                    colorYellow2.addEventListener("click", removeYellow)
                }, 1);
            }
        }

        function removeYellow() {
            if (selectedElement2 == divElement) {
                colorYellow2.style.border = "0px solid"
                buttonElement.classList.remove("isyellow")

                setTimeout(() => {
                    colorYellow2.addEventListener("click", hoverYellow)
                    colorYellow2.removeEventListener("click", removeYellow)
                }, 1);
            }
        }








        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("isblack")) {
                colorBlack2.style.border = "2px solid"
            } else {
                colorBlack2.style.border = "0px solid"
            }
        }



        function hoverBlack() {
            if (selectedElement2 == divElement) {
                colorBlack2.style.border = "2px solid"
                colorBlue2.style.border = "0px solid"
                colorRed2.style.border = "0px solid"
                colorOrange2.style.border = "0px solid"
                colorGreen2.style.border = "0px solid"
                colorPurple2.style.border = "0px solid"
                colorGray2.style.border = "0px solid"
                colorAqua2.style.border = "0px solid"
                colorBrown2.style.border = "0px solid"
                colorYellow2.style.border = "0px solid"

                buttonElement.classList.add("isblack")
                buttonElement.classList.remove("isblue")
                buttonElement.classList.remove("isred")
                buttonElement.classList.remove("isorange")
                buttonElement.classList.remove("isgreen")
                buttonElement.classList.remove("ispurple")
                buttonElement.classList.remove("isgray")
                buttonElement.classList.remove("isaqua")
                buttonElement.classList.remove("isbrown")
                buttonElement.classList.remove("isyellow")

                colorBlue2.addEventListener("click", hoverBlue)
                colorBlue2.removeEventListener("click", removeBlue)

                colorOrange2.addEventListener("click", hoverOrange)
                colorOrange2.removeEventListener("click", removeOrange)

                colorGreen2.addEventListener("click", hoverGreen)
                colorGreen2.removeEventListener("click", removeGreen)

                colorPurple2.addEventListener("click", hoverPurple)
                colorPurple2.removeEventListener("click", removePurple)

                colorGray2.addEventListener("click", hoverGray)
                colorGray2.removeEventListener("click", removeGray)

                colorAqua2.addEventListener("click", hoverAqua)
                colorAqua2.removeEventListener("click", removeAqua)

                colorBrown2.addEventListener("click", hoverBrown)
                colorBrown2.removeEventListener("click", removeBrown)

                colorRed2.addEventListener("click", hoverRed)
                colorRed2.removeEventListener("click", removeRed)

                colorYellow2.addEventListener("click", hoverYellow)
                colorYellow2.removeEventListener("click", removeYellow)

                setTimeout(() => {
                    colorBlack2.removeEventListener("click", hoverBlack)
                    colorBlack2.addEventListener("click", removeBlack)
                }, 1);
            }
        }

        function removeBlack() {
            if (selectedElement2 == divElement) {
                colorBlack2.style.border = "0px solid"
                buttonElement.classList.remove("isblack")

                setTimeout(() => {
                    colorBlack2.addEventListener("click", hoverBlack)
                    colorBlack2.removeEventListener("click", removeBlack)
                }, 1);
            }
        }


        smoothAnim2.addEventListener("click", toggleSmooth)


        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("addsmooth")) {
                smoothAnim2.innerHTML = "Smooth Animations [ON]"
                smoothAnim2.style.color = "green"
                buttonElement.classList.add("addsmooth")

                smoothAnim2.removeEventListener("click", toggleSmooth)
                smoothAnim2.addEventListener("click", removeSmooth)
            } else {
                smoothAnim2.innerHTML = "Smooth Animations [OFF]"
                smoothAnim2.style.color = "red"
                buttonElement.classList.remove("addsmooth")

                smoothAnim2.addEventListener("click", toggleSmooth)
                smoothAnim2.removeEventListener("click", removeSmooth)
            }
        }



        function toggleSmooth() {
            if (selectedElement2 == divElement) {
                smoothAnim2.innerHTML = "Smooth Animations [ON]"
                smoothAnim2.style.color = "green"
                buttonElement.classList.add("addsmooth")


                setTimeout(() => {
                    smoothAnim2.removeEventListener("click", toggleSmooth)
                    smoothAnim2.addEventListener("click", removeSmooth)
                }, 1);
            }
        }

        function removeSmooth() {
            if (selectedElement2 == divElement) {
                smoothAnim2.innerHTML = "Smooth Animations [OFF]"
                smoothAnim2.style.color = "red"
                buttonElement.classList.remove("addsmooth")


                setTimeout(() => {
                    smoothAnim2.addEventListener("click", toggleSmooth)
                    smoothAnim2.removeEventListener("click", removeSmooth)
                }, 1);
            }
        }




        function toggleHoverSize() {
            if (selectedElement2 == divElement) {
                hoverSizeButton2.innerHTML = "Size Change [ON]"
                hoverSizeButton2.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton2.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton2.addEventListener("click", removeHoverSize)
                }, 1);
            }

        }

        function removeHoverSize() {
            if (selectedElement2 == divElement) {
                hoverSizeButton2.innerHTML = "Size Change [OFF]"
                hoverSizeButton2.style.color = "red"
                buttonElement.classList.remove("size")
                buttonElement.classList.remove("size2")
                buttonElement.classList.remove("size3")
                buttonElement.classList.remove("size4")

                sizeBox23.style.backgroundColor = "white"
                sizeBox22.style.backgroundColor = "white"
                sizeBox33.style.backgroundColor = "white"
                sizeBox44.style.backgroundColor = "white"

                sizeBox23.style.backgroundColor = "white"

                setTimeout(() => {
                    hoverSizeButton2.addEventListener("click", toggleHoverSize)
                    hoverSizeButton2.removeEventListener("click", removeHoverSize)
                }, 1);
            }

        }


        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("size")) {
                sizeBox23.style.backgroundColor = "gray"
                sizeBox22.style.backgroundColor = "white"
                sizeBox33.style.backgroundColor = "white"
                sizeBox44.style.backgroundColor = "white"

                hoverSizeButton2.innerHTML = "Size Change [ON]"
                hoverSizeButton2.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton2.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton2.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox23.style.backgroundColor = "white"
            }
            if (buttonElement.classList.contains("size2")) {
                sizeBox22.style.backgroundColor = "gray"
                sizeBox23.style.backgroundColor = "white"
                sizeBox33.style.backgroundColor = "white"
                sizeBox44.style.backgroundColor = "white"

                hoverSizeButton2.innerHTML = "Size Change [ON]"
                hoverSizeButton2.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton2.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton2.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox22.style.backgroundColor = "white"
            }

            if (buttonElement.classList.contains("size3")) {
                sizeBox33.style.backgroundColor = "gray"
                sizeBox22.style.backgroundColor = "white"
                sizeBox23.style.backgroundColor = "white"
                sizeBox44.style.backgroundColor = "white"

                hoverSizeButton2.innerHTML = "Size Change [ON]"
                hoverSizeButton2.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton2.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton2.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox33.style.backgroundColor = "white"
            }
            if (buttonElement.classList.contains("size4")) {
                sizeBox44.style.backgroundColor = "gray"
                sizeBox22.style.backgroundColor = "white"
                sizeBox33.style.backgroundColor = "white"
                sizeBox23.style.backgroundColor = "white"

                hoverSizeButton2.innerHTML = "Size Change [ON]"
                hoverSizeButton2.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton2.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton2.addEventListener("click", removeHoverSize)
                }, 1);
            } else {
                sizeBox44.style.backgroundColor = "white"
            }
        }










        sizeBox23.addEventListener("click", changeHoverSize)


        function changeHoverSize() {
            if (hoverSizeButton2.style.color == "green") {
                if (selectedElement2 == divElement) {
                    buttonElement.classList.add("size")
                    buttonElement.classList.remove("size2")
                    buttonElement.classList.remove("size3")
                    buttonElement.classList.remove("size4")
                    sizeBox23.style.backgroundColor = "gray"
                    sizeBox44.style.backgroundColor = "white"
                    sizeBox22.style.backgroundColor = "white"
                    sizeBox33.style.backgroundColor = "white"
                }
            }


        }





        sizeBox22.addEventListener("click", changeHoverSize2)


        function changeHoverSize2() {
            if (hoverSizeButton2.style.color == "green") {
                if (selectedElement2 == divElement) {
                    buttonElement.classList.add("size2")
                    buttonElement.classList.remove("size1")
                    buttonElement.classList.remove("size3")
                    buttonElement.classList.remove("size4")
                    sizeBox22.style.backgroundColor = "gray"
                    sizeBox23.style.backgroundColor = "white"
                    sizeBox44.style.backgroundColor = "white"
                    sizeBox33.style.backgroundColor = "white"
                }
            }


        }


        sizeBox33.addEventListener("click", changeHoverSize3)


        function changeHoverSize3() {
            if (hoverSizeButton2.style.color == "green") {
                if (selectedElement2 == divElement) {
                    buttonElement.classList.add("size3")
                    buttonElement.classList.remove("size1")
                    buttonElement.classList.remove("size2")
                    buttonElement.classList.remove("size4")
                    sizeBox33.style.backgroundColor = "gray"
                    sizeBox23.style.backgroundColor = "white"
                    sizeBox22.style.backgroundColor = "white"
                    sizeBox44.style.backgroundColor = "white"
                }
            }


        }







        sizeBox44.addEventListener("click", changeHoverSize4)


        function changeHoverSize4() {
            if (hoverSizeButton2.style.color == "green") {
                if (selectedElement2 == divElement) {
                    buttonElement.classList.add("size4")
                    buttonElement.classList.remove("size1")
                    buttonElement.classList.remove("size2")
                    buttonElement.classList.remove("size3")
                    sizeBox44.style.backgroundColor = "gray"
                    sizeBox23.style.backgroundColor = "white"
                    sizeBox22.style.backgroundColor = "white"
                    sizeBox33.style.backgroundColor = "white"
                }
            }


        }


        if (selectedElement2 == divElement) {
            if (buttonElement.classList.contains("clickevent")) {
                clickEventButton2.innerHTML = "Click Event [ON]"
                clickEventButton2.style.color = "green"
                buttonElement.style.cursor = "pointer"
                buttonElement.classList.add("clickevent")

                buttonElement.addEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton2.removeEventListener("click", toggleClickEvent)
                    clickEventButton2.addEventListener("click", removeClickEvent)
                }, 1);
            } else {
                clickEventButton2.innerHTML = "Click Event [OFF]"
                clickEventButton2.style.color = "red"
                buttonElement.style.cursor = ""

                buttonElement.removeEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton2.addEventListener("click", toggleClickEvent)
                    clickEventButton2.removeEventListener("click", removeClickEvent)
                }, 1);
            }

        }



        clickEventButton2.addEventListener("click", toggleClickEvent)

        function toggleClickEvent() {
            if (selectedElement2 == divElement) {
                clickEventButton2.innerHTML = "Click Event [ON]"
                clickEventButton2.style.color = "green"
                buttonElement.style.cursor = "pointer"
                buttonElement.classList.add("clickevent")

                buttonElement.addEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton2.removeEventListener("click", toggleClickEvent)
                    clickEventButton2.addEventListener("click", removeClickEvent)
                }, 1);
            }
        }



        function removeClickEvent() {
            if (selectedElement2 == divElement) {
                clickEventButton2.innerHTML = "Click Event [OFF]"
                clickEventButton2.style.color = "red"
                buttonElement.style.cursor = ""
                buttonElement.classList.remove("clickevent")

                buttonElement.removeEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton2.addEventListener("click", toggleClickEvent)
                    clickEventButton2.removeEventListener("click", removeClickEvent)
                }, 1);
            }
        }




        function addLinkTarget() {
            if (selectedElement2 == divElement) {
                window.open(clickLinkInput2.value)
            }
        }



        clickLinkInput2.addEventListener("input", handleLinkInp)
        clickLinkInput2.value = buttonElement.getAttribute("alt")

        function handleLinkInp() {
            if (selectedElement2 == divElement) {
                buttonElement.setAttribute("alt", clickLinkInput2.value)
            }
        }



        advancedRemove4()
        advancedRemove5()


    }

    return selectButton;

    function removeBorder2() {
        fakeBody.removeEventListener("click", removeBorder2)
        fakeBody.classList.add("noediting2")
        if (selectedElement2 == divElement) {
            selectedElement2 = null;
            divElement.style.border = "0px solid black";
            elementsPosShow()
            thePanel.addEventListener("click", togglePanel)
            removeToPanel2()

            if (thePanel.contains(backBtnAdv2)) {
                advancedRemove2()
            }

        }
        closeFonts2()



        fontStyleButton1.removeEventListener("click", closeFonts2)
        fontStyleButton2.removeEventListener("click", closeFonts2)
        fontStyleButton3.removeEventListener("click", closeFonts2)
        fontStyleButton4.removeEventListener("click", closeFonts2)
        fontStyleButton5.removeEventListener("click", closeFonts2)
        fontStyleButton6.removeEventListener("click", closeFonts2)

        fontChanger2.style.height = "40px"
        fontStyleText22.style.fontSize = "12px"
        fontChanger2.style.cursor = "pointer"
        fontStyleText22.style.cursor = "cursor"

        setTimeout(() => {
            fontChanger2.addEventListener("click", toggleFonts)
        }, 1);

    }

}
