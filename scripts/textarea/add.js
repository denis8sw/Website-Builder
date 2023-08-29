var boX3 = document.getElementById("box3")

let selectedElement4 = null;

boX3.addEventListener("click", addTextArea)

function addTextArea() {
    const textArea = document.createElement("textarea")
    const divElement = document.createElement("div")
    textArea.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    textArea.style.resize = "none"
    textArea.innerHTML = "Text Area"
    textArea.style.fontSize = "16px"
    textArea.style.fontWeight = "400"
    textArea.style.border = "none"
    textArea.style.backgroundColor = "#ffffff00"
    textArea.style.width = "320px"
    textArea.style.height = "150px"
    textArea.style.cursor = "default"

    divElement.style.left = "50%"
    divElement.style.transform = "translateX(-50%)"
    divElement.style.position = "absolute"
    divElement.style.zIndex = "9"
    divElement.appendChild(textArea)
    allElements.appendChild(divElement)



    divElement.addEventListener("mousedown", onMouseDown)
    divElement.addEventListener("dblclick", selectTextArea)

    divElement.classList.add("textareas")


    function selectTextArea() {
        fakeBody.addEventListener("click", removeBorder)
        fakeBody.classList.remove("noediting")
        if (selectedElement4) {
            selectedElement4.style.border = "0px solid black";
        }
        thePanel.removeEventListener("click", togglePanel)
        selectedElement4 = divElement;

        if (!(selectedElement4 == null)) {
            divElement.style.border = "2px solid black";
        }


        if (selectedElement4 == divElement) {
            selectedElement = null
            selectedElement2 = null
            selectedElement3 = null
            selectedElement5 = null

            if (thePanel.contains(changeText)) {
                removeToPanel()
            }
            if (thePanel.contains(deleteBtn2)) {
                removeToPanel2()
            }
            if (thePanel.contains(backBtn3)) {
                removeToPanel3()
            }
            if (thePanel.contains(deleteBtn5)) {
                removeToPanel5()
            }
            var elements = document.getElementsByClassName("buttons");
            var elements2 = document.getElementsByClassName("boxes");
            var elements3 = document.getElementsByClassName("texts");
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

        backBtn4.addEventListener("click", removeBorder)

        advancedRemove5()

        deleteBtn4.addEventListener("click", removeTextArea)
        function removeTextArea() {
            if (selectedElement4 == divElement) {
                if (allElements.contains(divElement)) {
                    allElements.removeChild(divElement)
                }

                removeToPanel4()
            }
            setTimeout(() => {
                selectedElement4 = null;
                divElement.style.border = "0px solid black";
                elementsPosShow()
                thePanel.addEventListener("click", togglePanel)
            }, 1);

        }

        changeText4.addEventListener("keyup", changeTextArea)


        changeText4.value = textArea.value

        function changeTextArea() {
            if (selectedElement4 == divElement) {
                textArea.value = changeText4.value
                textArea.innerHTML = changeText4.value

                if (changeText4.value == "") {
                    textArea.value = "Text Area"
                    textArea.innerHTML = "Text Area"
                }
            }
        }





        divElement.addEventListener("mousemove", updatingCordinates)
        cordinates4.innerHTML = "Cordinates - " + "Left: " + divElement.style.left + " / " + "Top: " + divElement.style.top
        function updatingCordinates() {
            if (selectedElement4 == divElement) {
                cordinates4.innerHTML = "Cordinates - " + "Left: " + divElement.style.left + " / " + "Top: " + divElement.style.top
                leftInput4.value = divElement.style.left ? parseInt(divElement.style.left) : ""
                topInput4.value = divElement.style.top ? parseInt(divElement.style.top) : ""
            }

        }



        leftInput4.addEventListener("keypress", customLeft)
        leftInput4.value = divElement.style.left ? parseInt(divElement.style.left) : ""
        function customLeft(event) {
            if (event.keyCode === 13) {
                if (selectedElement4 == divElement) {
                    divElement.style.left = leftInput4.value + "px"
                    cordinates4.innerHTML = "Cordinates - " + "Left: " + leftInput4.value + "px" + " / " + "Top: " + divElement.style.top
                }

            }
        }

        topInput4.addEventListener("keypress", customTop)
        topInput4.value = divElement.style.top ? parseInt(divElement.style.top) : ""
        function customTop(event) {
            if (event.keyCode === 13) {
                if (selectedElement4 == divElement) {
                    divElement.style.top = topInput4.value + "px"
                    cordinates4.innerHTML = "Cordinates - " + "Left: " + leftInput4.value + "px" + " / " + "Top: " + divElement.style.top
                }

            }
        }




        widthText4.innerHTML = "Width " + textArea.style.width
        widthInput4.value = parseInt(textArea.style.width)
        widthInput4.addEventListener("input", changeWidth)
        function changeWidth() {
            if (selectedElement4 == divElement) {
                textArea.style.width = widthInput4.value + "px"
                widthText4.innerHTML = "Width " + textArea.style.width
                customTextAreaWidth.value = parseInt(textArea.style.width)
            }
        }

        customTextAreaWidth.addEventListener("keypress", customWidthChange)
        customTextAreaWidth.value = parseInt(textArea.style.width)

        function customWidthChange(event) {
            if (selectedElement4 == divElement) {
                if (event.keyCode === 13) {
                    textArea.style.width = customTextAreaWidth.value + "px"
                    widthText4.innerHTML = "Width " + textArea.style.width
                    widthInput4.value = parseInt(textArea.style.width)
                }
            }
        }

        copyTextAreaWidth.addEventListener("click", copyWidth)

        function copyWidth() {
            if (selectedElement4 == divElement) {
                copyNumber = parseInt(textArea.style.width)
            }
        }

        pasteTextAreaWidth.addEventListener("click", pasteWidth)

        function pasteWidth() {
            if (selectedElement4 == divElement) {
                textArea.style.width = copyNumber + "px"
                widthText4.innerHTML = "Width " + textArea.style.width
                widthInput4.value = parseInt(textArea.style.width)
                customTextAreaWidth.value = parseInt(textArea.style.width)
            }
        }



        heightText4.innerHTML = "Height " + textArea.style.height
        heightInput4.value = parseInt(textArea.style.height)
        heightInput4.addEventListener("input", changeHeight)
        function changeHeight() {
            if (selectedElement4 == divElement) {
                textArea.style.height = heightInput4.value + "px"
                heightText4.innerHTML = "Height " + textArea.style.height
                customTextAreaHeight.value = parseInt(textArea.style.height)
            }
        }

        customTextAreaHeight.addEventListener("keypress", customHeightChange)
        customTextAreaHeight.value = parseInt(textArea.style.height)

        function customHeightChange(event) {
            if (selectedElement4 == divElement) {
                if (event.keyCode === 13) {
                    textArea.style.height = customTextAreaHeight.value + "px"
                    heightText4.innerHTML = "Height " + textArea.style.height
                    heightInput4.value = parseInt(textArea.style.height)
                }
            }
        }

        copyTextAreaHeight.addEventListener("click", copyHeight)


        function copyHeight() {
            if (selectedElement4 == divElement) {
                copyNumber = parseInt(textArea.style.height)
            }
        }

        pasteTextAreaHeight.addEventListener("click", pasteHeight)

        function pasteHeight() {
            if (selectedElement4 == divElement) {
                textArea.style.height = copyNumber + "px"
                heightText4.innerHTML = "Height " + textArea.style.height
                heightInput4.value = parseInt(textArea.style.height)
                customTextAreaHeight.value = parseInt(textArea.style.height)
            }
        }


        fontInput4.addEventListener("input", changeFont)
        fontInput4.value = parseInt(textArea.style.fontSize)
        fontText4.innerHTML = "Font Size: " + textArea.style.fontSize
        function changeFont() {
            if (selectedElement4 == divElement) {
                textArea.style.fontSize = fontInput4.value + "px"
                fontInput4.value = parseInt(textArea.style.fontSize)
                fontText4.innerHTML = "Font Size: " + textArea.style.fontSize
                customTextAreaFont.value = parseInt(textArea.style.fontSize)
            }
        }

        customTextAreaFont.addEventListener("keypress", customFontSize)
        customTextAreaFont.value = parseInt(textArea.style.fontSize)

        function customFontSize(event) {
            if (selectedElement4 == divElement) {
                if (event.keyCode === 13) {
                    textArea.style.fontSize = customTextAreaFont.value + "px"
                    fontInput4.value = parseInt(textArea.style.fontSize)
                    fontText4.innerHTML = "Font Size: " + textArea.style.fontSize
                }
            }
        }

        copyTextAreaFont.addEventListener("click", copyFont)

        function copyFont() {
            if (selectedElement4 == divElement) {
                copyNumber = parseInt(textArea.style.fontSize)
            }
        }

        pasteTextAreaFont.addEventListener("click", pasteFont)

        function pasteFont() {
            if (selectedElement4 == divElement) {
                textArea.style.fontSize = copyNumber + "px"
                fontInput4.value = parseInt(textArea.style.fontSize)
                fontText4.innerHTML = "Font Size: " + textArea.style.fontSize
                customTextAreaFont.value = parseInt(textArea.style.fontSize)
            }
        }

        weightInput4.addEventListener("input", changeWeight)
        weightInput4.value = textArea.style.fontWeight
        weightText4.innerHTML = "Font Weight: " + weightInput4.value + "px"

        function changeWeight() {
            if (selectedElement4 == divElement) {
                textArea.style.fontWeight = weightInput4.value
                weightText4.innerHTML = "Font Weight: " + weightInput4.value + "px"
                customTextAreaWeight.value = textArea.style.fontWeight
            }
        }

        customTextAreaWeight.addEventListener("keypress", customFontWeight)
        customTextAreaWeight.value = textArea.style.fontWeight

        function customFontWeight(event) {
            if (selectedElement4 == divElement) {
                if (event.keyCode === 13) {
                    textArea.style.fontWeight = customTextAreaWeight.value
                    weightInput4.value = textArea.style.fontWeight
                    weightText4.innerHTML = "Font Weight: " + weightInput4.value + "px"

                }
            }
        }

        copyTextAreaWeight.addEventListener("click", copyFontWeight)

        function copyFontWeight() {
            if (selectedElement4 == divElement) {
                copyNumber = textArea.style.fontWeight
            }
        }

        pasteTextAreaWeight.addEventListener("click", pasteFontWeight)

        function pasteFontWeight() {
            if (selectedElement4 == divElement) {
                textArea.style.fontWeight = copyNumber
                weightInput4.value = textArea.style.fontWeight
                weightText4.innerHTML = "Font Weight: " + weightInput4.value + "px"
                customTextAreaWeight.value = textArea.style.fontWeight
            }
        }


        fontStyleText32.innerHTML = textArea.style.fontFamily
        fontStyleText32.style.fontFamily = textArea.style.fontFamily

        fontStyleButton11.addEventListener("click", changeFontStyle1)
        function changeFontStyle1() {
            if (selectedElement4 == divElement) {
                textArea.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
                fontStyleText32.innerHTML = textArea.style.fontFamily
                fontStyleText32.style.fontFamily = textArea.style.fontFamily
            }
        }

        fontStyleButton22.addEventListener("click", changeFontStyle2)
        function changeFontStyle2() {
            if (selectedElement4 == divElement) {
                textArea.style.fontFamily = "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif"
                fontStyleText32.innerHTML =  textArea.style.fontFamily
                fontStyleText32.style.fontFamily =  textArea.style.fontFamily
            }
        }

        fontStyleButton33.addEventListener("click", changeFontStyle3)
        function changeFontStyle3() {
            if (selectedElement4 == divElement) {
                textArea.style.fontFamily = "Arial, Helvetica, sans-serif"
                fontStyleText32.innerHTML =  textArea.style.fontFamily
                fontStyleText32.style.fontFamily =  textArea.style.fontFamily
            }
        }

        fontStyleButton44.addEventListener("click", changeFontStyle4)
        function changeFontStyle4() {
            if (selectedElement4 == divElement) {
                textArea.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
                fontStyleText32.innerHTML =  textArea.style.fontFamily
                fontStyleText32.style.fontFamily = textArea.style.fontFamily
            }
        }

        fontStyleButton55.addEventListener("click", changeFontStyle5)
        function changeFontStyle5() {
            if (selectedElement4 == divElement) {
                textArea.style.fontFamily= "Times New Roman, Times, serif"
                fontStyleText32.innerHTML =  textArea.style.fontFamily
                fontStyleText32.style.fontFamily = textArea.style.fontFamily
            }
        }

        fontStyleButton66.addEventListener("click", changeFontStyle6)
        function changeFontStyle6() {
            if (selectedElement4 == divElement) {
                textArea.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
                fontStyleText32.innerHTML = textArea.style.fontFamily
                fontStyleText32.style.fontFamily =  textArea.style.fontFamily
            }
        }


        var color = tinycolor(textArea.style.color);
        colorInput8.value = textArea.style.color = color.toString("hex")
        colorInput8.addEventListener("input", changeTextColor)
        function changeTextColor() {
            if (selectedElement4 == divElement) {
                textArea.style.color = colorInput8.value
            }
        }

        copyTextAreaColor.addEventListener("click", copyTheColor)

        function copyTheColor() {
            if (selectedElement4 == divElement) {
                copyColor = textArea.style.color
            }
        }

        pasteTextAreaColor.addEventListener("click", pasteTheColor)

        function pasteTheColor() {
            if (selectedElement4 == divElement) {
                textArea.style.color = copyColor
                var color3 = tinycolor(copyColor);
                colorInput8.value = copyColor = color3.toString("hex")

            }
        }

        copyStyleTextArea.addEventListener("click", copyWholeStyle)

        function copyWholeStyle() {
            if (selectedElement4 == divElement) {
                textAreaWidth = parseInt(textArea.style.width)
                textAreaHeight = parseInt(textArea.style.height)
                textAreaFontSize = parseInt(textArea.style.fontSize)
                textAreaFontWeight = textArea.style.fontWeight
                textAreaColor = textArea.style.color
                textAreaFontFamily = textArea.style.fontFamily
            }
        }

        pasteStyleTextArea.addEventListener("click", pasteWholeStyle)

        function pasteWholeStyle() {
            if (selectedElement4 == divElement) {

                textArea.style.width = textAreaWidth + "px"
                customTextAreaWidth.value = parseInt(textArea.style.width)
                widthText4.innerHTML = "Width " + textArea.style.width
                widthInput4.value = parseInt(textArea.style.width)

                textArea.style.height = textAreaHeight + "px"
                customTextAreaHeight.value = parseInt(textArea.style.height)
                heightText4.innerHTML = "Height " + textArea.style.height
                heightInput4.value = parseInt(textArea.style.height)


                textArea.style.fontSize = textAreaFontSize + "px"
                customTextAreaFont.value = parseInt(textArea.style.fontSize)
                fontInput4.value = parseInt(textArea.style.fontSize)
                fontText4.innerHTML = "Font Size: " + textArea.style.fontSize


                textArea.style.fontWeight = textAreaFontWeight
                customTextAreaWeight.value = textArea.style.fontWeight
                weightInput4.value = textArea.style.fontWeight
                weightText4.innerHTML = "Font Weight: " + weightInput4.value + "px"


                textArea.style.color = textAreaColor
                var color3 = tinycolor(textAreaColor);
                colorInput8.value = textAreaColor = color3.toString("hex")

                textArea.style.fontFamily = textAreaFontFamily
                fontStyleText32.innerHTML = textAreaFontFamily
                fontStyleText32.style.fontFamily = textAreaFontFamily
            }
        }




        elementsPosClose()

        advancedRemove()

        addToPanel4()

        advancedRemove2()

        advancedRemove3()



        advancedSettings3.addEventListener("click", openAdvanceMenu)


        function openAdvanceMenu() {
            if (thePanel.contains(backBtn4)) {
                removeToPanel4()
                advancedAdd3()
            }
        }

        backBtnAdv3.addEventListener("click", closeAdvanced)

        function closeAdvanced() {
            addToPanel4()
            advancedRemove3()
        }


        zIndexInput.addEventListener("keypress", changeZIndex)
        zIndexInput.value = divElement.style.zIndex

        function changeZIndex(event) {
            if (event.keyCode === 13) {
                if (selectedElement4 == divElement) {
                    divElement.style.zIndex = zIndexInput.value
                }
            }
        }

        advancedRemove4()
        hoverButton3.addEventListener("click", addHoverEvent)



        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("hoverevent")) {
                hoverButton3.classList.add("check")
                hoverButton3.style.color = "green"
                hoverButton3.innerHTML = "Hover Event [ON]"

                setTimeout(() => {
                    hoverButton3.removeEventListener("click", addHoverEvent)
                    hoverButton3.addEventListener("click", removeHoverEvent)
                }, 1);
            } else {
                hoverButton3.classList.remove("check")
                hoverButton3.style.color = "red"
                hoverButton3.innerHTML = "Hover Event [OFF]"

                hoverColorButton3.style.color = "red"
                hoverColorButton3.innerHTML = "Color Change [OFF]"

                hoverSizeButton3.innerHTML = "Size Change [OFF]"
                hoverSizeButton3.style.color = "red"



                hoverSizeButton3.addEventListener("click", toggleHoverSize)
                hoverSizeButton3.removeEventListener("click", removeHoverSize)

                hoverSizeButton3.removeEventListener("click", toggleHoverSize)
                hoverSizeButton3.removeEventListener("click", removeHoverSize)



                hoverColorButton3.removeEventListener("click", toggleHoverColor)
                hoverColorButton3.removeEventListener("click", removeHoverColor)

                textArea.classList.remove("size")
                textArea.classList.remove("size2")
                textArea.classList.remove("size3")
                textArea.classList.remove("size4")

                sizeBox43.style.backgroundColor = "white"
                sizeBox42.style.backgroundColor = "white"
                sizeBox53.style.backgroundColor = "white"
                sizeBox64.style.backgroundColor = "white"


                setTimeout(() => {
                    hoverButton3.addEventListener("click", addHoverEvent)
                    hoverButton3.removeEventListener("click", removeHoverEvent)
                }, 1);


            }
        }

        function addHoverEvent() {
            if (selectedElement4 == divElement) {
                textArea.classList.add("hoverevent")
                hoverButton3.classList.add("check")
                hoverButton3.style.color = "green"
                hoverButton3.innerHTML = "Hover Event [ON]"
                hoverColorButton3.addEventListener("click", toggleHoverColor)
                hoverSizeButton3.addEventListener("click", toggleHoverSize)
                setTimeout(() => {
                    hoverButton3.removeEventListener("click", addHoverEvent)
                    hoverButton3.addEventListener("click", removeHoverEvent)
                }, 1);
            }
        }


        function removeHoverEvent() {
            if (selectedElement4 == divElement) {
                textArea.classList.remove("hoverevent")
                hoverButton3.classList.remove("check")
                hoverButton3.style.color = "red"
                hoverButton3.innerHTML = "Hover Event [OFF]"


                hoverColorButton3.style.color = "red"
                hoverColorButton3.innerHTML = "Color Change [OFF]"

                hoverSizeButton3.innerHTML = "Size Change [OFF]"
                hoverSizeButton3.style.color = "red"
                textArea.classList.remove("size")

                hoverColorButton3.removeEventListener("click", toggleHoverColor)

                hoverSizeButton3.addEventListener("click", toggleHoverSize)
                hoverSizeButton3.removeEventListener("click", removeHoverSize)

                textArea.classList.remove("size")
                textArea.classList.remove("size2")
                textArea.classList.remove("size3")
                textArea.classList.remove("size4")

                sizeBox43.style.backgroundColor = "white"
                sizeBox42.style.backgroundColor = "white"
                sizeBox53.style.backgroundColor = "white"
                sizeBox64.style.backgroundColor = "white"

                colorRed3.style.border = "0px solid"
                textArea.classList.remove("isred")

                colorBlue3.style.border = "0px solid"
                textArea.classList.remove("isblue")

                colorOrange3.style.border = "0px solid"
                textArea.classList.remove("isorange")

                colorGreen3.style.border = "0px solid"
                textArea.classList.remove("isgreen")

                colorPurple3.style.border = "0px solid"
                textArea.classList.remove("ispurple")


                colorGray3.style.border = "0px solid"
                textArea.classList.remove("isgray")

                colorAqua3.style.border = "0px solid"
                textArea.classList.remove("isaqua")

                colorBrown3.style.border = "0px solid"
                textArea.classList.remove("isbrown")

                colorYellow3.style.border = "0px solid"
                textArea.classList.remove("isyellow")

                colorBlack3.style.border = "0px solid"
                textArea.classList.remove("isblack")

                hoverColorButton3.removeEventListener("click", toggleHoverColor)
                hoverColorButton3.removeEventListener("click", removeHoverColor)

                hoverSizeButton3.removeEventListener("click", toggleHoverSize)
                hoverSizeButton3.removeEventListener("click", removeHoverSize)

                textArea.classList.remove("hovercolor")

                smoothAnim3.addEventListener("click", toggleSmooth)
                smoothAnim3.removeEventListener("click", removeSmooth)

                colorRed3.removeEventListener("click", removeRed)
                colorBlue3.removeEventListener("click", removeBlue)
                colorOrange3.removeEventListener("click", removeOrange)
                colorGreen3.removeEventListener("click", removeGreen)
                colorPurple3.removeEventListener("click", removePurple)
                colorGray3.removeEventListener("click", removeGray)
                colorAqua3.removeEventListener("click", removeAqua)
                colorBrown3.removeEventListener("click", removeBrown)
                colorYellow3.removeEventListener("click", removeYellow)
                colorBlack3.removeEventListener("click", removeBlack)

                colorRed3.removeEventListener("click", hoverRed)
                colorBlue3.removeEventListener("click", hoverBlue)
                colorOrange3.removeEventListener("click", hoverOrange)
                colorGreen3.removeEventListener("click", hoverGreen)
                colorPurple3.removeEventListener("click", hoverPurple)
                colorGray3.removeEventListener("click", hoverGray)
                colorAqua3.removeEventListener("click", hoverAqua)
                colorBrown3.removeEventListener("click", hoverBrown)
                colorYellow3.removeEventListener("click", hoverYellow)
                colorBlack3.removeEventListener("click", hoverBlack)
            }

            setTimeout(() => {
                hoverButton3.addEventListener("click", addHoverEvent)
                hoverButton3.removeEventListener("click", removeHoverEvent)
            }, 1);
        }


        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("hovercolor")) {
                textArea.classList.add("hovercolor")
                hoverColorButton3.style.color = "green"
                hoverColorButton3.innerHTML = "Color Change [ON]"


                setTimeout(() => {
                    hoverColorButton3.removeEventListener("click", toggleHoverColor)
                    hoverColorButton3.addEventListener("click", removeHoverColor)
                }, 1);
            } else {
                textArea.classList.remove("hovercolor")
                hoverColorButton3.style.color = "red"
                hoverColorButton3.innerHTML = "Color Change [OFF]"
                //removing colors
                textArea.classList.remove("isred")
                textArea.classList.remove("isblue")
                textArea.classList.remove("isorange")
                textArea.classList.remove("isgreen")
                textArea.classList.remove("isgray")
                textArea.classList.remove("isaqua")
                textArea.classList.remove("isbrown")
                textArea.classList.remove("isyellow")
                textArea.classList.remove("isblack")
                colorRed3.style.border = "0px solid"
                colorBlue3.style.border = "0px solid"
                colorOrange3.style.border = "0px solid"
                colorGreen3.style.border = "0px solid"
                colorGray3.style.border = "0px solid"
                colorAqua3.style.border = "0px solid"
                colorBrown3.style.border = "0px solid"
                colorYellow3.style.border = "0px solid"
                colorBlack3.style.border = "0px solid"

                colorRed3.removeEventListener("click", hoverRed)
                colorBlack3.removeEventListener("click", hoverBlue)
                colorOrange3.removeEventListener("click", hoverOrange)
                colorGreen3.removeEventListener("click", hoverGreen)



            }
            setTimeout(() => {
                hoverColorButton3.removeEventListener("click", toggleHoverColor)
                hoverColorButton3.removeEventListener("click", removeHoverColor)
            }, 1);
        }


        function toggleHoverColor() {
            if (selectedElement4 == divElement) {
                textArea.classList.add("hovercolor")
                hoverColorButton3.style.color = "green"
                hoverColorButton3.innerHTML = "Color Change [ON]"

                colorRed3.addEventListener("click", removeRed)
                colorBlue3.addEventListener("click", removeBlue)
                colorOrange3.addEventListener("click", removeOrange)
                colorGreen3.addEventListener("click", removeGreen)
                colorPurple3.addEventListener("click", removePurple)
                colorGray3.addEventListener("click", removeGray)
                colorAqua3.addEventListener("click", removeAqua)
                colorBrown3.addEventListener("click", removeBrown)
                colorYellow3.addEventListener("click", removeYellow)
                colorBlack3.addEventListener("click", removeBlack)

            }
            setTimeout(() => {
                hoverColorButton3.removeEventListener("click", toggleHoverColor)
                hoverColorButton3.addEventListener("click", removeHoverColor)
            }, 1);
        }



        function removeHoverColor() {
            if (selectedElement4 == divElement) {
                textArea.classList.remove("hovercolor")
                hoverColorButton3.style.color = "red"
                hoverColorButton3.innerHTML = "Color Change [OFF]"

                //removing colors
                textArea.classList.remove("isred")
                textArea.classList.remove("isblue")
                textArea.classList.remove("isorange")
                textArea.classList.remove("isgreen")
                textArea.classList.remove("ispurple")
                textArea.classList.remove("isgray")
                textArea.classList.remove("isaqua")
                textArea.classList.remove("isbrown")
                textArea.classList.remove("isyellow")
                textArea.classList.remove("isblack")
                colorRed3.style.border = "0px solid"
                colorBlue3.style.border = "0px solid"
                colorOrange3.style.border = "0px solid"
                colorGreen3.style.border = "0px solid"
                colorPurple3.style.border = "0px solid"
                colorGray3.style.border = "0px solid"
                colorAqua3.style.border = "0px solid"
                colorBrown3.style.border = "0px solid"
                colorYellow3.style.border = "0px solid"
                colorBlack3.style.border = "0px solid"


                colorRed3.removeEventListener("click", removeRed)
                colorBlue3.removeEventListener("click", removeBlue)
                colorOrange3.removeEventListener("click", removeOrange)
                colorGreen3.removeEventListener("click", removeGreen)
                colorPurple3.removeEventListener("click", removePurple)
                colorGray3.removeEventListener("click", removeGray)
                colorAqua3.removeEventListener("click", removeAqua)
                colorBrown3.removeEventListener("click", removeBrown)
                colorYellow3.removeEventListener("click", removeYellow)
                colorBlack3.removeEventListener("click", removeBlack)

                colorRed3.removeEventListener("click", hoverRed)
                colorBlue3.removeEventListener("click", hoverBlue)
                colorOrange3.removeEventListener("click", hoverOrange)
                colorGreen3.removeEventListener("click", hoverGreen)
                colorPurple3.removeEventListener("click", hoverPurple)
                colorGray3.removeEventListener("click", hoverGray)
                colorAqua3.removeEventListener("click", hoverAqua)
                colorBrown3.removeEventListener("click", hoverBrown)
                colorYellow3.removeEventListener("click", hoverYellow)
                colorBlack3.removeEventListener("click", hoverBlack)





            }
            setTimeout(() => {
                hoverColorButton3.addEventListener("click", toggleHoverColor)
                hoverColorButton3.removeEventListener("click", removeHoverColor)
            }, 1);
        }




        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("isred")) {
                colorRed3.style.border = "2px solid"
            } else {
                colorRed3.style.border = "0px solid"
            }
        }



        function hoverRed() {
            if (selectedElement4 == divElement) {
                colorRed3.style.border = "2px solid"
                colorBlue3.style.border = "0px solid"
                colorOrange3.style.border = "0px solid"
                colorGreen3.style.border = "0px solid"
                colorPurple3.style.border = "0px solid"
                colorGray3.style.border = "0px solid"
                colorAqua3.style.border = "0px solid"
                colorBrown3.style.border = "0px solid"
                colorYellow3.style.border = "0px solid"
                colorBlack3.style.border = "0px solid"

                textArea.classList.add("isred")
                textArea.classList.remove("isblue")
                textArea.classList.remove("isorange")
                textArea.classList.remove("isgreen")
                textArea.classList.remove("ispurple")
                textArea.classList.remove("isgray")
                textArea.classList.remove("isaqua")
                textArea.classList.remove("isbrown")
                textArea.classList.remove("isyellow")
                textArea.classList.remove("isblack")

                colorBlue3.addEventListener("click", hoverBlue)
                colorBlue3.removeEventListener("click", removeBlue)

                colorOrange3.addEventListener("click", hoverOrange)
                colorOrange3.removeEventListener("click", removeOrange)

                colorGreen3.addEventListener("click", hoverGreen)
                colorGreen3.removeEventListener("click", removeGreen)

                colorPurple3.addEventListener("click", hoverPurple)
                colorPurple3.removeEventListener("click", removePurple)

                colorGray3.addEventListener("click", hoverGray)
                colorGray3.removeEventListener("click", removeGray)

                colorAqua3.addEventListener("click", hoverAqua)
                colorAqua3.removeEventListener("click", removeAqua)

                colorBrown3.addEventListener("click", hoverBrown)
                colorBrown3.removeEventListener("click", removeBrown)

                colorYellow3.addEventListener("click", hoverYellow)
                colorYellow3.removeEventListener("click", removeYellow)

                colorBlack3.addEventListener("click", hoverBlack)
                colorBlack3.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorRed3.removeEventListener("click", hoverRed)
                    colorRed3.addEventListener("click", removeRed)
                }, 1);
            }
        }

        function removeRed() {
            if (selectedElement4 == divElement) {
                colorRed3.style.border = "0px solid"
                textArea.classList.remove("isred")


                setTimeout(() => {
                    colorRed3.addEventListener("click", hoverRed)
                    colorRed3.removeEventListener("click", removeRed)
                }, 1);
            }
        }



        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("isblue")) {
                colorBlue3.style.border = "2px solid"
            } else {
                colorBlue3.style.border = "0px solid"
            }
        }


        function hoverBlue() {
            if (selectedElement4 == divElement) {
                colorBlue3.style.border = "2px solid"
                colorRed3.style.border = "0px solid"
                colorOrange3.style.border = "0px solid"
                colorGreen3.style.border = "0px solid"
                colorPurple3.style.border = "0px solid"
                colorGray3.style.border = "0px solid"
                colorAqua3.style.border = "0px solid"
                colorBrown3.style.border = "0px solid"
                colorYellow3.style.border = "0px solid"
                colorBlack3.style.border = "0px solid"

                textArea.classList.add("isblue")
                textArea.classList.remove("isred")
                textArea.classList.remove("isorange")
                textArea.classList.remove("isgreen")
                textArea.classList.remove("ispurple")
                textArea.classList.remove("isgray")
                textArea.classList.remove("isaqua")
                textArea.classList.remove("isbrown")
                textArea.classList.remove("isyellow")
                textArea.classList.remove("isblack")

                colorRed3.addEventListener("click", hoverRed)
                colorRed3.removeEventListener("click", removeRed)

                colorOrange3.addEventListener("click", hoverOrange)
                colorOrange3.removeEventListener("click", removeOrange)

                colorGreen3.addEventListener("click", hoverGreen)
                colorGreen3.removeEventListener("click", removeGreen)

                colorPurple3.addEventListener("click", hoverPurple)
                colorPurple3.removeEventListener("click", removePurple)

                colorGray3.addEventListener("click", hoverGray)
                colorGray3.removeEventListener("click", removeGray)

                colorAqua3.addEventListener("click", hoverAqua)
                colorAqua3.removeEventListener("click", removeAqua)

                colorBrown3.addEventListener("click", hoverBrown)
                colorBrown3.removeEventListener("click", removeBrown)

                colorYellow3.addEventListener("click", hoverYellow)
                colorYellow3.removeEventListener("click", removeYellow)

                colorBlack3.addEventListener("click", hoverBlack)
                colorBlack3.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorBlue3.removeEventListener("click", hoverBlue)
                    colorBlue3.addEventListener("click", removeBlue)
                }, 1);
            }
        }

        function removeBlue() {
            if (selectedElement4 == divElement) {
                colorBlue3.style.border = "0px solid"
                textArea.classList.remove("isblue")

                setTimeout(() => {
                    colorBlue3.addEventListener("click", hoverBlue)
                    colorBlue3.removeEventListener("click", removeBlue)
                }, 1);
            }
        }




        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("isorange")) {
                colorOrange3.style.border = "2px solid"
            } else {
                colorOrange3.style.border = "0px solid"
            }
        }



        function hoverOrange() {
            if (selectedElement4 == divElement) {
                colorOrange3.style.border = "2px solid"
                colorBlue3.style.border = "0px solid"
                colorRed3.style.border = "0px solid"
                colorGreen3.style.border = "0px solid"
                colorPurple3.style.border = "0px solid"
                colorGray3.style.border = "0px solid"
                colorAqua3.style.border = "0px solid"
                colorBrown3.style.border = "0px solid"
                colorYellow3.style.border = "0px solid"
                colorBlack3.style.border = "0px solid"

                textArea.classList.add("isorange")
                textArea.classList.remove("isblue")
                textArea.classList.remove("isred")
                textArea.classList.remove("isgreen")
                textArea.classList.remove("ispurple")
                textArea.classList.remove("isgray")
                textArea.classList.remove("isaqua")
                textArea.classList.remove("isbrown")
                textArea.classList.remove("isyellow")
                textArea.classList.remove("isblack")

                colorBlue3.addEventListener("click", hoverBlue)
                colorBlue3.removeEventListener("click", removeBlue)

                colorRed3.addEventListener("click", hoverRed)
                colorRed3.removeEventListener("click", removeRed)

                colorGreen3.addEventListener("click", hoverGreen)
                colorGreen3.removeEventListener("click", removeGreen)

                colorPurple3.addEventListener("click", hoverPurple)
                colorPurple3.removeEventListener("click", removePurple)

                colorGray3.addEventListener("click", hoverGray)
                colorGray3.removeEventListener("click", removeGray)

                colorAqua3.addEventListener("click", hoverAqua)
                colorAqua3.removeEventListener("click", removeAqua)

                colorBrown3.addEventListener("click", hoverBrown)
                colorBrown3.removeEventListener("click", removeBrown)

                colorYellow3.addEventListener("click", hoverYellow)
                colorYellow3.removeEventListener("click", removeYellow)

                colorBlack3.addEventListener("click", hoverBlack)
                colorBlack3.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorOrange3.removeEventListener("click", hoverOrange)
                    colorOrange3.addEventListener("click", removeOrange)
                }, 1);
            }
        }

        function removeOrange() {
            if (selectedElement4 == divElement) {
                colorOrange3.style.border = "0px solid"
                textArea.classList.remove("isorange")

                setTimeout(() => {
                    colorOrange3.addEventListener("click", hoverOrange)
                    colorOrange3.removeEventListener("click", removeOrange)
                }, 1);
            }
        }




        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("isgreen")) {
                colorGreen3.style.border = "2px solid"
            } else {
                colorGreen3.style.border = "0px solid"
            }
        }



        function hoverGreen() {
            if (selectedElement4 == divElement) {
                colorGreen3.style.border = "2px solid"
                colorBlue3.style.border = "0px solid"
                colorRed3.style.border = "0px solid"
                colorOrange3.style.border = "0px solid"
                colorPurple3.style.border = "0px solid"
                colorGray3.style.border = "0px solid"
                colorAqua3.style.border = "0px solid"
                colorBrown3.style.border = "0px solid"
                colorYellow3.style.border = "0px solid"
                colorBlack3.style.border = "0px solid"

                textArea.classList.add("isgreen")
                textArea.classList.remove("isblue")
                textArea.classList.remove("isred")
                textArea.classList.remove("isorange")
                textArea.classList.remove("ispurple")
                textArea.classList.remove("isgray")
                textArea.classList.remove("isaqua")
                textArea.classList.remove("isbrown")
                textArea.classList.remove("isyellow")
                textArea.classList.remove("isblack")

                colorBlue3.addEventListener("click", hoverBlue)
                colorBlue3.removeEventListener("click", removeBlue)

                colorOrange3.addEventListener("click", hoverOrange)
                colorOrange3.removeEventListener("click", removeOrange)

                colorRed3.addEventListener("click", hoverRed)
                colorRed3.removeEventListener("click", removeRed)

                colorPurple3.addEventListener("click", hoverPurple)
                colorPurple3.removeEventListener("click", removePurple)

                colorGray3.addEventListener("click", hoverGray)
                colorGray3.removeEventListener("click", removeGray)

                colorAqua3.addEventListener("click", hoverAqua)
                colorAqua3.removeEventListener("click", removeAqua)

                colorBrown3.addEventListener("click", hoverBrown)
                colorBrown3.removeEventListener("click", removeBrown)

                colorYellow3.addEventListener("click", hoverYellow)
                colorYellow3.removeEventListener("click", removeYellow)

                colorBlack3.addEventListener("click", hoverBlack)
                colorBlack3.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorGreen3.removeEventListener("click", hoverGreen)
                    colorGreen3.addEventListener("click", removeGreen)
                }, 1);
            }
        }

        function removeGreen() {
            if (selectedElement4 == divElement) {
                colorGreen3.style.border = "0px solid"
                textArea.classList.remove("isgreen")

                setTimeout(() => {
                    colorGreen3.addEventListener("click", hoverGreen)
                    colorGreen3.removeEventListener("click", removeGreen)
                }, 1);
            }
        }



        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("ispurple")) {
                colorPurple3.style.border = "2px solid"
            } else {
                colorPurple3.style.border = "0px solid"
            }
        }



        function hoverPurple() {
            if (selectedElement4 == divElement) {
                colorPurple3.style.border = "2px solid"
                colorBlue3.style.border = "0px solid"
                colorRed3.style.border = "0px solid"
                colorOrange3.style.border = "0px solid"
                colorGreen3.style.border = "0px solid"
                colorGray3.style.border = "0px solid"
                colorAqua3.style.border = "0px solid"
                colorBrown3.style.border = "0px solid"
                colorYellow3.style.border = "0px solid"
                colorBlack3.style.border = "0px solid"

                textArea.classList.add("ispurple")
                textArea.classList.remove("isblue")
                textArea.classList.remove("isred")
                textArea.classList.remove("isorange")
                textArea.classList.remove("isgreen")
                textArea.classList.remove("isgray")
                textArea.classList.remove("isaqua")
                textArea.classList.remove("isbrown")
                textArea.classList.remove("isyellow")
                textArea.classList.remove("isblack")

                colorBlue3.addEventListener("click", hoverBlue)
                colorBlue3.removeEventListener("click", removeBlue)

                colorOrange3.addEventListener("click", hoverOrange)
                colorOrange3.removeEventListener("click", removeOrange)

                colorGreen3.addEventListener("click", hoverGreen)
                colorGreen3.removeEventListener("click", removeGreen)

                colorRed3.addEventListener("click", hoverRed)
                colorRed3.removeEventListener("click", removeRed)

                colorGray3.addEventListener("click", hoverGray)
                colorGray3.removeEventListener("click", removeGray)

                colorAqua3.addEventListener("click", hoverAqua)
                colorAqua3.removeEventListener("click", removeAqua)

                colorBrown3.addEventListener("click", hoverBrown)
                colorBrown3.removeEventListener("click", removeBrown)

                colorYellow3.addEventListener("click", hoverYellow)
                colorYellow3.removeEventListener("click", removeYellow)

                colorBlack3.addEventListener("click", hoverBlack)
                colorBlack3.removeEventListener("click", removeBlack)


                setTimeout(() => {
                    colorPurple3.removeEventListener("click", hoverPurple)
                    colorPurple3.addEventListener("click", removePurple)
                }, 1);
            }
        }

        function removePurple() {
            if (selectedElement4 == divElement) {
                colorPurple3.style.border = "0px solid"
                textArea.classList.remove("ispurple")

                setTimeout(() => {
                    colorPurple3.addEventListener("click", hoverPurple)
                    colorPurple3.removeEventListener("click", removePurple)
                }, 1);
            }
        }



        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("isgray")) {
                colorGray3.style.border = "2px solid"
            } else {
                colorGray3.style.border = "0px solid"
            }
        }



        function hoverGray() {
            if (selectedElement4 == divElement) {
                colorGray3.style.border = "2px solid"
                colorBlue3.style.border = "0px solid"
                colorRed3.style.border = "0px solid"
                colorOrange3.style.border = "0px solid"
                colorGreen3.style.border = "0px solid"
                colorPurple3.style.border = "0px solid"
                colorAqua3.style.border = "0px solid"
                colorBrown3.style.border = "0px solid"
                colorYellow3.style.border = "0px solid"
                colorBlack3.style.border = "0px solid"

                textArea.classList.add("isgray")
                textArea.classList.remove("isblue")
                textArea.classList.remove("isred")
                textArea.classList.remove("isorange")
                textArea.classList.remove("isgreen")
                textArea.classList.remove("ispurple")
                textArea.classList.remove("isaqua")
                textArea.classList.remove("isbrown")
                textArea.classList.remove("isyellow")
                textArea.classList.remove("isblack")

                colorBlue3.addEventListener("click", hoverBlue)
                colorBlue3.removeEventListener("click", removeBlue)

                colorOrange3.addEventListener("click", hoverOrange)
                colorOrange3.removeEventListener("click", removeOrange)

                colorGreen3.addEventListener("click", hoverGreen)
                colorGreen3.removeEventListener("click", removeGreen)

                colorPurple3.addEventListener("click", hoverPurple)
                colorPurple3.removeEventListener("click", removePurple)

                colorRed3.addEventListener("click", hoverRed)
                colorRed3.removeEventListener("click", removeRed)

                colorAqua3.addEventListener("click", hoverAqua)
                colorAqua3.removeEventListener("click", removeAqua)

                colorBrown3.addEventListener("click", hoverBrown)
                colorBrown3.removeEventListener("click", removeBrown)

                colorYellow3.addEventListener("click", hoverYellow)
                colorYellow3.removeEventListener("click", removeYellow)

                colorBlack3.addEventListener("click", hoverBlack)
                colorBlack3.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorGray3.removeEventListener("click", hoverGray)
                    colorGray3.addEventListener("click", removeGray)
                }, 1);
            }
        }

        function removeGray() {
            if (selectedElement4 == divElement) {
                colorGray3.style.border = "0px solid"
                textArea.classList.remove("isgray")

                setTimeout(() => {
                    colorGray3.addEventListener("click", hoverGray)
                    colorGray3.removeEventListener("click", removeGray)
                }, 1);
            }
        }







        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("isaqua")) {
                colorAqua3.style.border = "2px solid"
            } else {
                colorAqua3.style.border = "0px solid"
            }
        }



        function hoverAqua() {
            if (selectedElement4 == divElement) {
                colorAqua3.style.border = "2px solid"
                colorBlue3.style.border = "0px solid"
                colorRed3.style.border = "0px solid"
                colorOrange3.style.border = "0px solid"
                colorGreen3.style.border = "0px solid"
                colorPurple3.style.border = "0px solid"
                colorGray3.style.border = "0px solid"
                colorBrown3.style.border = "0px solid"
                colorYellow3.style.border = "0px solid"
                colorBlack3.style.border = "0px solid"

                textArea.classList.add("isaqua")
                textArea.classList.remove("isblue")
                textArea.classList.remove("isred")
                textArea.classList.remove("isorange")
                textArea.classList.remove("isgreen")
                textArea.classList.remove("ispurple")
                textArea.classList.remove("isgray")
                textArea.classList.remove("isbrown")
                textArea.classList.remove("isyellow")
                textArea.classList.remove("isblack")

                colorBlue3.addEventListener("click", hoverBlue)
                colorBlue3.removeEventListener("click", removeBlue)

                colorOrange3.addEventListener("click", hoverOrange)
                colorOrange3.removeEventListener("click", removeOrange)

                colorGreen3.addEventListener("click", hoverGreen)
                colorGreen3.removeEventListener("click", removeGreen)

                colorPurple3.addEventListener("click", hoverPurple)
                colorPurple3.removeEventListener("click", removePurple)

                colorGray3.addEventListener("click", hoverGray)
                colorGray3.removeEventListener("click", removeGray)

                colorRed3.addEventListener("click", hoverRed)
                colorRed3.removeEventListener("click", removeRed)

                colorBrown3.addEventListener("click", hoverBrown)
                colorBrown3.removeEventListener("click", removeBrown)

                colorYellow3.addEventListener("click", hoverYellow)
                colorYellow3.removeEventListener("click", removeYellow)

                colorBlack3.addEventListener("click", hoverBlack)
                colorBlack3.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorAqua3.removeEventListener("click", hoverAqua)
                    colorAqua3.addEventListener("click", removeAqua)
                }, 1);
            }
        }

        function removeAqua() {
            if (selectedElement4 == divElement) {
                colorAqua3.style.border = "0px solid"
                textArea.classList.remove("isaqua")

                setTimeout(() => {
                    colorAqua3.addEventListener("click", hoverAqua)
                    colorAqua3.removeEventListener("click", removeAqua)
                }, 1);
            }
        }


        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("isbrown")) {
                colorBrown3.style.border = "2px solid"
            } else {
                colorBrown3.style.border = "0px solid"
            }
        }



        function hoverBrown() {
            if (selectedElement4 == divElement) {
                colorBrown3.style.border = "2px solid"
                colorBlue3.style.border = "0px solid"
                colorRed3.style.border = "0px solid"
                colorOrange3.style.border = "0px solid"
                colorGreen3.style.border = "0px solid"
                colorPurple3.style.border = "0px solid"
                colorGray3.style.border = "0px solid"
                colorAqua3.style.border = "0px solid"
                colorYellow3.style.border = "0px solid"
                colorBlack3.style.border = "0px solid"

                textArea.classList.add("isbrown")
                textArea.classList.remove("isblue")
                textArea.classList.remove("isred")
                textArea.classList.remove("isorange")
                textArea.classList.remove("isgreen")
                textArea.classList.remove("ispurple")
                textArea.classList.remove("isgray")
                textArea.classList.remove("isaqua")
                textArea.classList.remove("isyellow")
                textArea.classList.remove("isblack")

                colorBlue3.addEventListener("click", hoverBlue)
                colorBlue3.removeEventListener("click", removeBlue)

                colorOrange3.addEventListener("click", hoverOrange)
                colorOrange3.removeEventListener("click", removeOrange)

                colorGreen3.addEventListener("click", hoverGreen)
                colorGreen3.removeEventListener("click", removeGreen)

                colorPurple3.addEventListener("click", hoverPurple)
                colorPurple3.removeEventListener("click", removePurple)

                colorGray3.addEventListener("click", hoverGray)
                colorGray3.removeEventListener("click", removeGray)

                colorAqua3.addEventListener("click", hoverAqua)
                colorAqua3.removeEventListener("click", removeAqua)

                colorRed3.addEventListener("click", hoverRed)
                colorRed3.removeEventListener("click", removeRed)

                colorYellow3.addEventListener("click", hoverYellow)
                colorYellow3.removeEventListener("click", removeYellow)

                colorBlack3.addEventListener("click", hoverBlack)
                colorBlack3.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorBrown3.removeEventListener("click", hoverBrown)
                    colorBrown3.addEventListener("click", removeBrown)
                }, 1);
            }
        }

        function removeBrown() {
            if (selectedElement4 == divElement) {
                colorBrown3.style.border = "0px solid"
                textArea.classList.remove("isbrown")

                setTimeout(() => {
                    colorBrown3.addEventListener("click", hoverBrown)
                    colorBrown3.removeEventListener("click", removeBrown)
                }, 1);
            }
        }


        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("isyellow")) {
                colorYellow3.style.border = "2px solid"
            } else {
                colorYellow3.style.border = "0px solid"
            }
        }



        function hoverYellow() {
            if (selectedElement4 == divElement) {
                colorYellow3.style.border = "2px solid"
                colorBlue3.style.border = "0px solid"
                colorRed3.style.border = "0px solid"
                colorOrange3.style.border = "0px solid"
                colorGreen3.style.border = "0px solid"
                colorPurple3.style.border = "0px solid"
                colorGray3.style.border = "0px solid"
                colorAqua3.style.border = "0px solid"
                colorBrown3.style.border = "0px solid"
                colorBlack3.style.border = "0px solid"

                textArea.classList.add("isyellow")
                textArea.classList.remove("isblue")
                textArea.classList.remove("isred")
                textArea.classList.remove("isorange")
                textArea.classList.remove("isgreen")
                textArea.classList.remove("ispurple")
                textArea.classList.remove("isgray")
                textArea.classList.remove("isaqua")
                textArea.classList.remove("isbrown")
                textArea.classList.remove("isblack")

                colorBlue3.addEventListener("click", hoverBlue)
                colorBlue3.removeEventListener("click", removeBlue)

                colorOrange3.addEventListener("click", hoverOrange)
                colorOrange3.removeEventListener("click", removeOrange)

                colorGreen3.addEventListener("click", hoverGreen)
                colorGreen3.removeEventListener("click", removeGreen)

                colorPurple3.addEventListener("click", hoverPurple)
                colorPurple3.removeEventListener("click", removePurple)

                colorGray3.addEventListener("click", hoverGray)
                colorGray3.removeEventListener("click", removeGray)

                colorAqua3.addEventListener("click", hoverAqua)
                colorAqua3.removeEventListener("click", removeAqua)

                colorBrown3.addEventListener("click", hoverBrown)
                colorBrown3.removeEventListener("click", removeBrown)

                colorRed3.addEventListener("click", hoverRed)
                colorRed3.removeEventListener("click", removeRed)

                colorBlack3.addEventListener("click", hoverBlack)
                colorBlack3.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorYellow3.removeEventListener("click", hoverYellow)
                    colorYellow3.addEventListener("click", removeYellow)
                }, 1);
            }
        }

        function removeYellow() {
            if (selectedElement4 == divElement) {
                colorYellow3.style.border = "0px solid"
                textArea.classList.remove("isyellow")

                setTimeout(() => {
                    colorYellow3.addEventListener("click", hoverYellow)
                    colorYellow3.removeEventListener("click", removeYellow)
                }, 1);
            }
        }








        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("isblack")) {
                colorBlack3.style.border = "2px solid"
            } else {
                colorBlack3.style.border = "0px solid"
            }
        }



        function hoverBlack() {
            if (selectedElement4 == divElement) {
                colorBlack3.style.border = "2px solid"
                colorBlue3.style.border = "0px solid"
                colorRed3.style.border = "0px solid"
                colorOrange3.style.border = "0px solid"
                colorGreen3.style.border = "0px solid"
                colorPurple3.style.border = "0px solid"
                colorGray3.style.border = "0px solid"
                colorAqua3.style.border = "0px solid"
                colorBrown3.style.border = "0px solid"
                colorYellow3.style.border = "0px solid"

                textArea.classList.add("isblack")
                textArea.classList.remove("isblue")
                textArea.classList.remove("isred")
                textArea.classList.remove("isorange")
                textArea.classList.remove("isgreen")
                textArea.classList.remove("ispurple")
                textArea.classList.remove("isgray")
                textArea.classList.remove("isaqua")
                textArea.classList.remove("isbrown")
                textArea.classList.remove("isyellow")

                colorBlue3.addEventListener("click", hoverBlue)
                colorBlue3.removeEventListener("click", removeBlue)

                colorOrange3.addEventListener("click", hoverOrange)
                colorOrange3.removeEventListener("click", removeOrange)

                colorGreen3.addEventListener("click", hoverGreen)
                colorGreen3.removeEventListener("click", removeGreen)

                colorPurple3.addEventListener("click", hoverPurple)
                colorPurple3.removeEventListener("click", removePurple)

                colorGray3.addEventListener("click", hoverGray)
                colorGray3.removeEventListener("click", removeGray)

                colorAqua3.addEventListener("click", hoverAqua)
                colorAqua3.removeEventListener("click", removeAqua)

                colorBrown3.addEventListener("click", hoverBrown)
                colorBrown3.removeEventListener("click", removeBrown)

                colorRed3.addEventListener("click", hoverRed)
                colorRed3.removeEventListener("click", removeRed)

                colorYellow3.addEventListener("click", hoverYellow)
                colorYellow3.removeEventListener("click", removeYellow)

                setTimeout(() => {
                    colorBlack3.removeEventListener("click", hoverBlack)
                    colorBlack3.addEventListener("click", removeBlack)
                }, 1);
            }
        }

        function removeBlack() {
            if (selectedElement4 == divElement) {
                colorBlack3.style.border = "0px solid"
                textArea.classList.remove("isblack")

                setTimeout(() => {
                    colorBlack3.addEventListener("click", hoverBlack)
                    colorBlack3.removeEventListener("click", removeBlack)
                }, 1);
            }
        }



        smoothAnim3.addEventListener("click", toggleSmooth)


        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("addsmooth")) {
                smoothAnim3.innerHTML = "Smooth Animations [ON]"
                smoothAnim3.style.color = "green"
                textArea.classList.add("addsmooth")

                smoothAnim3.removeEventListener("click", toggleSmooth)
                smoothAnim3.addEventListener("click", removeSmooth)
            } else {
                smoothAnim3.innerHTML = "Smooth Animations [OFF]"
                smoothAnim3.style.color = "red"
                textArea.classList.remove("addsmooth")

                smoothAnim3.addEventListener("click", toggleSmooth)
                smoothAnim3.removeEventListener("click", removeSmooth)
            }
        }



        function toggleSmooth() {
            if (selectedElement4 == divElement) {
                smoothAnim3.innerHTML = "Smooth Animations [ON]"
                smoothAnim3.style.color = "green"
                textArea.classList.add("addsmooth")


                setTimeout(() => {
                    smoothAnim3.removeEventListener("click", toggleSmooth)
                    smoothAnim3.addEventListener("click", removeSmooth)
                }, 1);
            }
        }

        function removeSmooth() {
            if (selectedElement4 == divElement) {
                smoothAnim3.innerHTML = "Smooth Animations [OFF]"
                smoothAnim3.style.color = "red"
                textArea.classList.remove("addsmooth")


                setTimeout(() => {
                    smoothAnim3.addEventListener("click", toggleSmooth)
                    smoothAnim3.removeEventListener("click", removeSmooth)
                }, 1);
            }
        }

        function toggleHoverSize() {
            if (selectedElement4 == divElement) {
                hoverSizeButton3.innerHTML = "Size Change [ON]"
                hoverSizeButton3.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton3.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton3.addEventListener("click", removeHoverSize)
                }, 1);
            }

        }

        function removeHoverSize() {
            if (selectedElement4 == divElement) {
                hoverSizeButton3.innerHTML = "Size Change [OFF]"
                hoverSizeButton3.style.color = "red"
                textArea.classList.remove("size")
                textArea.classList.remove("size2")
                textArea.classList.remove("size3")
                textArea.classList.remove("size4")

                sizeBox43.style.backgroundColor = "white"
                sizeBox42.style.backgroundColor = "white"
                sizeBox53.style.backgroundColor = "white"
                sizeBox64.style.backgroundColor = "white"

                sizeBox43.style.backgroundColor = "white"

                setTimeout(() => {
                    hoverSizeButton3.addEventListener("click", toggleHoverSize)
                    hoverSizeButton3.removeEventListener("click", removeHoverSize)
                }, 1);
            }

        }


        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("size")) {
                sizeBox43.style.backgroundColor = "gray"
                sizeBox42.style.backgroundColor = "white"
                sizeBox53.style.backgroundColor = "white"
                sizeBox64.style.backgroundColor = "white"

                hoverSizeButton3.innerHTML = "Size Change [ON]"
                hoverSizeButton3.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton3.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton3.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox43.style.backgroundColor = "white"
            }
            if (textArea.classList.contains("size2")) {
                sizeBox42.style.backgroundColor = "gray"
                sizeBox43.style.backgroundColor = "white"
                sizeBox53.style.backgroundColor = "white"
                sizeBox64.style.backgroundColor = "white"

                hoverSizeButton3.innerHTML = "Size Change [ON]"
                hoverSizeButton3.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton3.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton3.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox42.style.backgroundColor = "white"
            }

            if (textArea.classList.contains("size3")) {
                sizeBox43.style.backgroundColor = "gray"
                sizeBox42.style.backgroundColor = "white"
                sizeBox53.style.backgroundColor = "white"
                sizeBox64.style.backgroundColor = "white"

                hoverSizeButton3.innerHTML = "Size Change [ON]"
                hoverSizeButton3.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton3.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton3.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox43.style.backgroundColor = "white"
            }
            if (textArea.classList.contains("size4")) {
                sizeBox64.style.backgroundColor = "gray"
                sizeBox42.style.backgroundColor = "white"
                sizeBox43.style.backgroundColor = "white"
                sizeBox53.style.backgroundColor = "white"

                hoverSizeButton3.innerHTML = "Size Change [ON]"
                hoverSizeButton3.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton3.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton3.addEventListener("click", removeHoverSize)
                }, 1);
            } else {
                sizeBox64.style.backgroundColor = "white"
            }
        }


        sizeBox43.addEventListener("click", changeHoverSize)


        function changeHoverSize() {
            if (hoverSizeButton3.style.color == "green") {
                if (selectedElement4 == divElement) {
                    textArea.classList.add("size")
                    textArea.classList.remove("size2")
                    textArea.classList.remove("size3")
                    textArea.classList.remove("size4")
                    sizeBox43.style.backgroundColor = "gray"
                    sizeBox64.style.backgroundColor = "white"
                    sizeBox42.style.backgroundColor = "white"
                    sizeBox53.style.backgroundColor = "white"
                }
            }


        }





        sizeBox42.addEventListener("click", changeHoverSize2)


        function changeHoverSize2() {
            if (hoverSizeButton3.style.color == "green") {
                if (selectedElement4 == divElement) {
                    textArea.classList.add("size2")
                    textArea.classList.remove("size1")
                    textArea.classList.remove("size3")
                    textArea.classList.remove("size4")
                    sizeBox42.style.backgroundColor = "gray"
                    sizeBox43.style.backgroundColor = "white"
                    sizeBox64.style.backgroundColor = "white"
                    sizeBox53.style.backgroundColor = "white"
                }
            }


        }


        sizeBox53.addEventListener("click", changeHoverSize3)


        function changeHoverSize3() {
            if (hoverSizeButton3.style.color == "green") {
                if (selectedElement4 == divElement) {
                    textArea.classList.add("size3")
                    textArea.classList.remove("size1")
                    textArea.classList.remove("size2")
                    textArea.classList.remove("size4")
                    sizeBox53.style.backgroundColor = "gray"
                    sizeBox43.style.backgroundColor = "white"
                    sizeBox42.style.backgroundColor = "white"
                    sizeBox64.style.backgroundColor = "white"
                }
            }


        }







        sizeBox64.addEventListener("click", changeHoverSize4)


        function changeHoverSize4() {
            if (hoverSizeButton3.style.color == "green") {
                if (selectedElement4 == divElement) {
                    textArea.classList.add("size4")
                    textArea.classList.remove("size1")
                    textArea.classList.remove("size2")
                    textArea.classList.remove("size3")
                    sizeBox64.style.backgroundColor = "gray"
                    sizeBox43.style.backgroundColor = "white"
                    sizeBox42.style.backgroundColor = "white"
                    sizeBox53.style.backgroundColor = "white"
                }
            }


        }



        if (selectedElement4 == divElement) {
            if (textArea.classList.contains("clickevent")) {
                clickEventButton3.innerHTML = "Click Event [ON]"
                clickEventButton3.style.color = "green"
                textArea.style.cursor = "pointer"
                textArea.classList.add("clickevent")

                textArea.addEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton3.removeEventListener("click", toggleClickEvent)
                    clickEventButton3.addEventListener("click", removeClickEvent)
                }, 1);
            } else {
                clickEventButton3.innerHTML = "Click Event [OFF]"
                clickEventButton3.style.color = "red"
                textArea.style.cursor = "default"

                textArea.removeEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton3.addEventListener("click", toggleClickEvent)
                    clickEventButton3.removeEventListener("click", removeClickEvent)
                }, 1);
            }

        }

        clickEventButton3.addEventListener("click", toggleClickEvent)

        function toggleClickEvent() {
            if (selectedElement4 == divElement) {
                clickEventButton3.innerHTML = "Click Event [ON]"
                clickEventButton3.style.color = "green"
                textArea.style.cursor = "pointer"
                textArea.classList.add("clickevent")

                textArea.addEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton3.removeEventListener("click", toggleClickEvent)
                    clickEventButton3.addEventListener("click", removeClickEvent)
                }, 1);
            }
        }



        function removeClickEvent() {
            if (selectedElement4 == divElement) {
                clickEventButton3.innerHTML = "Click Event [OFF]"
                clickEventButton3.style.color = "red"
                textArea.style.cursor = "default"
                textArea.classList.remove("clickevent")

                textArea.removeEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton3.addEventListener("click", toggleClickEvent)
                    clickEventButton3.removeEventListener("click", removeClickEvent)
                }, 1);
            }
        }




        function addLinkTarget() {
            if (selectedElement4 == divElement) {
                window.open(clickLinkInput3.value)
            }
        }



        clickLinkInput3.addEventListener("input", handleLinkInp)
        clickLinkInput3.value = textArea.getAttribute("alt")

        function handleLinkInp() {
            if (selectedElement4 == divElement) {
                textArea.setAttribute("alt", clickLinkInput3.value)
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
            if (selectedElement4 == divElement) {
                selectedElement4 = null;
                divElement.style.border = "0px solid black";
                elementsPosShow()
                thePanel.addEventListener("click", togglePanel)
                removeToPanel4()

                if (thePanel.contains(backBtnAdv3)) {
                    advancedRemove3()
                }

            }
        }




    }

}

