const boX4 = document.getElementById("box4")
let selectedElement3 = null;

boX4.addEventListener("click", addBox)


function addBox() {
    const boxElement = document.createElement("div")
    const divElement = document.createElement("div")
    boxElement.style.width = "100px"
    boxElement.style.height = "100px"
    boxElement.style.backgroundColor = "aqua"
    boxElement.style.borderRadius = "5px"
    boxElement.style.border = "0px solid"


    divElement.style.left = "50%"
    divElement.style.transform = "translateX(-50%)"
    divElement.style.position = "absolute"
    divElement.style.zIndex = "9"
    divElement.appendChild(boxElement)
    allElements.appendChild(divElement)

    divElement.addEventListener("mousedown", onMouseDown)
    divElement.addEventListener("dblclick", selectBox)

    divElement.classList.add("boxes")


    function selectBox() {
        fakeBody.addEventListener("click", removeBorder3)
        fakeBody.classList.remove("noediting")
        if (selectedElement3) {
            selectedElement3.style.border = "0px solid black";
        }



        thePanel.removeEventListener("click", togglePanel)
        selectedElement3 = divElement;
        if (!(selectedElement3 == null)) {
            divElement.style.border = "2px solid black";
        }

        if (selectedElement3 == divElement) {
            selectedElement = null
            selectedElement2 = null
            selectedElement4 = null
            selectedElement5 = null
            if (thePanel.contains(changeText)) {
                removeToPanel()
            }
            if (thePanel.contains(deleteBtn2)) {
                removeToPanel2()
            }
            if (thePanel.contains(deleteBtn4)) {
                removeToPanel4()
            }
            if (thePanel.contains(deleteBtn5)) {
                removeToPanel5()
            }


            var elements = document.getElementsByClassName("texts");
            var elements2 = document.getElementsByClassName("buttons");
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



        backBtn3.addEventListener("click", removeBorder3)



        deleteBtn3.addEventListener("click", removeBox)
        function removeBox() {
            if (selectedElement3 == divElement) {
                if (allElements.contains(divElement)) {
                    allElements.removeChild(divElement)
                }
                removeToPanel3()
            }
            setTimeout(() => {
                selectedElement3 = null;
                divElement.style.border = "0px solid black";
                elementsPosShow()
                thePanel.addEventListener("click", togglePanel)
            }, 1);

        }

        var color = tinycolor(boxElement.style.backgroundColor);
        colorInput5.value = boxElement.style.backgroundColor = color.toString("hex")
        colorInput5.addEventListener("input", changeBoxColor)
        function changeBoxColor() {
            if (selectedElement3 == divElement) {
                boxElement.style.backgroundColor = colorInput5.value
            }
        }

        copyBoxColor.addEventListener("click", copyTheBoxColor)

        function copyTheBoxColor() {
            if (selectedElement3 == divElement) {
                copyColor = boxElement.style.backgroundColor
            }
        }
        advancedRemove5()
        pasteBoxColor.addEventListener("click", pasteTheBoxColor)

        function pasteTheBoxColor() {
            if (selectedElement3 == divElement) {
                var color2 = tinycolor(copyColor);
                colorInput5.value = copyColor = color2.toString("hex")
                boxElement.style.backgroundColor = copyColor
            }
        }


        divElement.addEventListener("mousemove", updatingCordinates)
        cordinates3.innerHTML = "Cordinates - " + "Left: " + divElement.style.left + " / " + "Top: " + divElement.style.top
        function updatingCordinates() {
            if (selectedElement3 == divElement) {
                cordinates3.innerHTML = "Cordinates - " + "Left: " + divElement.style.left + " / " + "Top: " + divElement.style.top
                leftInput3.value = divElement.style.left ? parseInt(divElement.style.left) : ""
                topInput3.value = divElement.style.top ? parseInt(divElement.style.top) : ""
            }

        }

        leftInput3.addEventListener("keypress", customLeft)
        leftInput3.value = divElement.style.left ? parseInt(divElement.style.left) : ""
        function customLeft(event) {
            if (event.keyCode === 13) {
                if (selectedElement3 == divElement) {
                    divElement.style.left = leftInput3.value + "px"
                    cordinates3.innerHTML = "Cordinates - " + "Left: " + leftInput3.value + "px" + " / " + "Top: " + divElement.style.top

                }

            }
        }


        topInput3.addEventListener("keypress", customTop)
        topInput3.value = divElement.style.top ? parseInt(divElement.style.top) : ""
        function customTop(event) {
            if (event.keyCode === 13) {
                if (selectedElement3 == divElement) {
                    divElement.style.top = topInput3.value + "px"
                    cordinates3.innerHTML = "Cordinates - " + "Left: " + leftInput3.value + "px" + " / " + "Top: " + divElement.style.top
                }

            }
        }



        widthInput2.addEventListener("input", changeWidth)
        widthInput2.value = parseInt(boxElement.style.width.match(/\d+/)[0], 10);
        widthText2.innerHTML = "Width: " + boxElement.style.width

        function changeWidth() {
            if (selectedElement3 == divElement) {
                boxElement.style.width = widthInput2.value + "px"
                widthText2.innerHTML = "Width: " + boxElement.style.width
                customwidthInput2.value = widthInput2.value
            }
        }

        customwidthInput2.addEventListener("keyup", changeWidthCustom)
        customwidthInput2.value = parseInt(boxElement.style.width)
  

        function changeWidthCustom(event) {
            if (event.keyCode === 13) {
                if (selectedElement3 == divElement) {
                    boxElement.style.width = customwidthInput2.value + "px"
                    widthInput2.value = parseInt(customwidthInput2.value)
                    widthText2.innerHTML = "Width: " + boxElement.style.width
                }
            }
        }

        copyBoxWidth.addEventListener("click", copyWidth)

        function copyWidth() {
            if (selectedElement3 == divElement) {
                copyNumber = parseInt(boxElement.style.width)
            }
        }

        pasteBoxWidth.addEventListener("click", pasteWidth)

        function pasteWidth() {
            if (selectedElement3 == divElement) {
                boxElement.style.width = copyNumber + "px"
                widthInput2.value = parseInt(customwidthInput2.value)
                widthText2.innerHTML = "Width: " + boxElement.style.width
                customwidthInput2.value = parseInt(boxElement.style.width)
            }
        }


        heightInput2.addEventListener("input", changeHeight)
        heightInput2.value = parseInt(boxElement.style.height.match(/\d+/)[0], 10);
        heightText2.innerHTML = "Height: " + boxElement.style.height

        function changeHeight() {
            if (selectedElement3 == divElement) {
                boxElement.style.height = heightInput2.value + "px"
                heightText2.innerHTML = "Height: " + boxElement.style.height
                customheightInput2.value = heightInput2.value
            }
        }

        customheightInput2.addEventListener("keyup", changeHeightCustom)
        customheightInput2.value = parseInt(boxElement.style.height)


        function changeHeightCustom(event) {
            if (event.keyCode === 13) {
                if (selectedElement3 == divElement) {
                    boxElement.style.height = customheightInput2.value + "px"
                    heightInput2.value = parseInt(customwidthInput2.value)
                    heightText2.innerHTML = "Height: " + boxElement.style.height
                }
            }
        }

        copyBoxHeight.addEventListener("click", copyHeight)

        function copyHeight() {
            if (selectedElement3 == divElement) {
                copyNumber = parseInt(boxElement.style.height)
            }
        }

        pasteBoxHeight.addEventListener("click", pasteHeight)

        function pasteHeight() {
            if (selectedElement3 == divElement) {
                boxElement.style.height = copyNumber + "px"
                heightInput2.value = parseInt(customwidthInput2.value)
                heightText2.innerHTML = "Height: " + boxElement.style.height
                customheightInput2.value = parseInt(boxElement.style.height)
            }
        }


        borderInput3.addEventListener("input", changeBorderRadius)
        borderText3.innerHTML = "Border Radius: " + boxElement.style.borderRadius
        borderInput3.value = parseInt(boxElement.style.borderRadius)


        function changeBorderRadius() {
            if (selectedElement3 == divElement) {
                boxElement.style.borderRadius = borderInput3.value + "px"
                divElement.style.borderRadius = borderInput3.value + "px"
                borderText3.innerHTML = "Border Radius: " + boxElement.style.borderRadius
                customboxbordertInput2.value = parseInt(boxElement.style.borderRadius)
            }
        }

        customboxbordertInput2.addEventListener("keypress", customBorderRadius)
        customboxbordertInput2.value = parseInt(boxElement.style.borderRadius)

        function customBorderRadius(event) {
            if (selectedElement3 == divElement) {
                if (event.keyCode === 13) {
                    boxElement.style.borderRadius = customboxbordertInput2.value + "px"
                    borderText3.innerHTML = "Border Radius: " + boxElement.style.borderRadius
                    borderInput3.value = parseInt(boxElement.style.borderRadius)
                }
            }
        }

        copyBoxBorderRadius.addEventListener("click", copyBorderRadius)

        function copyBorderRadius() {
            if (selectedElement3 == divElement) {
                copyNumber = parseInt(boxElement.style.borderRadius)
            }
        }

        pasteBoxBorderRadius.addEventListener("click", pasteBorderRadius)

        function pasteBorderRadius() {
            if (selectedElement3 == divElement) {
                boxElement.style.borderRadius = copyNumber + "px"
                borderText3.innerHTML = "Border Radius: " + boxElement.style.borderRadius
                borderInput3.value = parseInt(boxElement.style.borderRadius)
                customboxbordertInput2.value = parseInt(boxElement.style.borderRadius)
            }
        }

        advancedRemove3()
        elementsPosClose()

        advancedRemove()

        addToPanel3()


        advancedRemove2()

        borderInput4.addEventListener("input", changeBorderSize)
        borderText4.innerHTML = "Border Size: " + parseInt(boxElement.style.border)
        borderInput4.value = parseInt(boxElement.style.border)


        function changeBorderSize() {
            if (selectedElement3 == divElement) {
                boxElement.style.border = borderInput4.value + "px solid" + colorInput6.value
                divElement.style.border = borderInput4.value + "px solid" + colorInput6.value
                borderText4.innerHTML = "Border Size: " + parseInt(boxElement.style.border)
                customboxbordersizetInput2.value = parseInt(boxElement.style.border)
            }
        }

        customboxbordersizetInput2.addEventListener("keypress", customBorderSize)
        customboxbordersizetInput2.value = parseInt(boxElement.style.border)

        function customBorderSize(event) {
            if (selectedElement3 == divElement) {
                if (event.keyCode === 13) {
                    boxElement.style.border = customboxbordersizetInput2.value + "px solid" + colorInput6.value
                    divElement.style.border = borderInput4.value + "px solid" + colorInput6.value
                    borderText4.innerHTML = "Border Size: " + parseInt(boxElement.style.border)
                    borderInput4.value = parseInt(boxElement.style.border)
                }
            }
        }

        copyBoxBorderSize.addEventListener("click", copyBorderSize)


        function copyBorderSize() {
            if (selectedElement3 == divElement) {
                copyNumber = parseInt(boxElement.style.border)
            }
        }

        pasteBoxBorderSize.addEventListener("click", pasteBorderSize)

        function pasteBorderSize() {
            if (selectedElement3 == divElement) {
                boxElement.style.border = copyNumber + "px solid" + colorInput6.value
                divElement.style.border = copyNumber + "px solid" + colorInput6.value
                borderText4.innerHTML = "Border Size: " + parseInt(boxElement.style.border)
                borderInput4.value = parseInt(boxElement.style.border)
                customboxbordersizetInput2.value = parseInt(boxElement.style.border)
            }
        }


        colorInput6.addEventListener("input", changeBorderColor)
        let border = boxElement.style.border;
        let colorMatch = border.match(/rgb\(.+?\)/);
        let colorString = colorMatch ? colorMatch[0] : "#000000"; // Default to black if no match found
        let colorc = tinycolor(colorString);
        colorInput6.value = colorc.toHexString();
        divElement.style.border = borderInput4.value + "px solid" + colorInput6.value

        function changeBorderColor() {
            if (selectedElement3 == divElement) {
                boxElement.style.border = borderInput4.value + "px solid" + colorInput6.value
                divElement.style.border = borderInput4.value + "px solid" + colorInput6.value
            }
        }

        copyBoxBorderColor.addEventListener("click", copyBorderColor)


        function copyBorderColor() {
            if (selectedElement3 == divElement) {
                let border2 = boxElement.style.border;
                let colorMatch2 = border2.match(/rgb\(.+?\)/);
                let colorString2 = colorMatch2 ? colorMatch2[0] : "#000000"; // Default to black if no match found
                let colorc2 = tinycolor(colorString2);
                copyColor = colorc2.toHexString();
            }
        }

        pasteBoxBorderColor.addEventListener("click", pasteBorderColor)


        function pasteBorderColor() {
            if (selectedElement3 == divElement) {
                boxElement.style.border = borderInput4.value + "px solid" + copyColor
                divElement.style.border = borderInput4.value + "px solid" + copyColor
                let border3 = boxElement.style.border
                let colorMatch3 = border3.match(/rgb\(.+?\)/);
                let colorString3 = colorMatch3 ? colorMatch3[0] : "#000000"; // Default to black if no match found
                let colorc3 = tinycolor(colorString3);
                colorInput6.value = colorc3.toHexString();
            }
        }



        copyStyleBox.addEventListener("click", copyWholeStyle)

        function copyWholeStyle() {
            if (selectedElement3 == divElement) {
                boxColor = boxElement.style.backgroundColor
                boxWidth = parseInt(boxElement.style.width)
                boxHeight = parseInt(boxElement.style.height)
                boxBorderRadius = parseInt(boxElement.style.borderRadius)
                boxBorderSize = parseInt(boxElement.style.border)

                let border4 = boxElement.style.border
                let colorMatch4 = border4.match(/rgb\(.+?\)/);
                let colorString4 = colorMatch4 ? colorMatch4[0] : "#000000"; // Default to black if no match found
                let colorc4 = tinycolor(colorString4);
                boxBorderColor = colorc4.toHexString();
            }
        }

        pasteStyleBox.addEventListener("click", pasteWholeStyle)

        function pasteWholeStyle() {
            if (selectedElement3 == divElement) {
                boxElement.style.backgroundColor = boxColor
                var color4 = tinycolor(boxColor);
                colorInput5.value = boxColor = color4.toString("hex")

                boxElement.style.width = boxWidth + "px"
                customwidthInput2.value = parseInt(boxElement.style.width)
                widthInput2.value = parseInt(customwidthInput2.value)
                widthText2.innerHTML = "Width: " + boxElement.style.width


                boxElement.style.height = boxHeight + "px"
                customheightInput2.value = parseInt(boxElement.style.height)
                heightInput2.value = parseInt(customwidthInput2.value)
                heightText2.innerHTML = "Height: " + boxElement.style.height


                boxElement.style.borderRadius = boxBorderRadius + "px"
                customboxbordertInput2.value = parseInt(boxElement.style.borderRadius)
                borderText3.innerHTML = "Border Radius: " + boxElement.style.borderRadius
                borderInput3.value = parseInt(boxElement.style.borderRadius)


                boxElement.style.border = boxBorderSize + "px solid" + boxBorderColor
                divElement.style.border = boxBorderSize + "px solid" + boxBorderColor
                customboxbordersizetInput2.value = parseInt(boxElement.style.border)
                borderText4.innerHTML = "Border Size: " + parseInt(boxElement.style.border)
                borderInput4.value = parseInt(boxElement.style.border)
                let border5 = boxElement.style.border
                let colorMatch5 = border5.match(/rgb\(.+?\)/);
                let colorString5 = colorMatch5 ? colorMatch5[0] : "#000000"; // Default to black if no match found
                let colorc5 = tinycolor(colorString5);
                colorInput6.value = colorc5.toHexString();
         
            }

        }





        advancedSettings4.addEventListener("click", openAdvanceMenu)


        function openAdvanceMenu() {
            if (thePanel.contains(backBtn3)) {
                removeToPanel3()
                advancedAdd4()
            }
        }

        backBtnAdv4.addEventListener("click", closeAdvanced)

        advancedRemove4()


        function closeAdvanced() {
            addToPanel3()
            advancedRemove4()
        }

        zIndexInput.addEventListener("keypress", changeZIndex)
        zIndexInput.value = divElement.style.zIndex

        function changeZIndex(event) {
            if (event.keyCode === 13) {
                if (selectedElement3 == divElement) {
                    divElement.style.zIndex = zIndexInput.value
                }
            }
        }

        hoverButton4.addEventListener("click", addHoverEvent)



        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("hoverevent")) {
                hoverButton4.classList.add("check")
                hoverButton4.style.color = "green"
                hoverButton4.innerHTML = "Hover Event [ON]"

                setTimeout(() => {
                    hoverButton4.removeEventListener("click", addHoverEvent)
                    hoverButton4.addEventListener("click", removeHoverEvent)
                }, 1);
            } else {
                hoverButton4.classList.remove("check")
                hoverButton4.style.color = "red"
                hoverButton4.innerHTML = "Hover Event [OFF]"

                hoverColorButton4.style.color = "red"
                hoverColorButton4.innerHTML = "Color Change [OFF]"

                hoverSizeButton4.innerHTML = "Size Change [OFF]"
                hoverSizeButton4.style.color = "red"



                hoverSizeButton4.addEventListener("click", toggleHoverSize)
                hoverSizeButton4.removeEventListener("click", removeHoverSize)

                hoverSizeButton4.removeEventListener("click", toggleHoverSize)
                hoverSizeButton4.removeEventListener("click", removeHoverSize)



                hoverColorButton4.removeEventListener("click", toggleHoverColor)
                hoverColorButton4.removeEventListener("click", removeHoverColor)

                boxElement.classList.remove("size")
                boxElement.classList.remove("size2")
                boxElement.classList.remove("size3")
                boxElement.classList.remove("size4")

                sizeBox01.style.backgroundColor = "white"
                sizeBox02.style.backgroundColor = "white"
                sizeBox03.style.backgroundColor = "white"
                sizeBox04.style.backgroundColor = "white"


                setTimeout(() => {
                    hoverButton4.addEventListener("click", addHoverEvent)
                    hoverButton4.removeEventListener("click", removeHoverEvent)
                }, 1);


            }
        }

        function addHoverEvent() {
            if (selectedElement3 == divElement) {
                boxElement.classList.add("hoverevent")
                hoverButton4.classList.add("check")
                hoverButton4.style.color = "green"
                hoverButton4.innerHTML = "Hover Event [ON]"
                hoverColorButton4.addEventListener("click", toggleHoverColor)
                hoverSizeButton4.addEventListener("click", toggleHoverSize)
                setTimeout(() => {
                    hoverButton4.removeEventListener("click", addHoverEvent)
                    hoverButton4.addEventListener("click", removeHoverEvent)
                }, 1);
            }
        }


        function removeHoverEvent() {
            if (selectedElement3 == divElement) {
                boxElement.classList.remove("hoverevent")
                hoverButton4.classList.remove("check")
                hoverButton4.style.color = "red"
                hoverButton4.innerHTML = "Hover Event [OFF]"


                hoverColorButton4.style.color = "red"
                hoverColorButton4.innerHTML = "Color Change [OFF]"

                hoverSizeButton4.innerHTML = "Size Change [OFF]"
                hoverSizeButton4.style.color = "red"
                boxElement.classList.remove("size")

                hoverColorButton4.removeEventListener("click", toggleHoverColor)

                hoverSizeButton4.addEventListener("click", toggleHoverSize)
                hoverSizeButton4.removeEventListener("click", removeHoverSize)

                boxElement.classList.remove("size")
                boxElement.classList.remove("size2")
                boxElement.classList.remove("size3")
                boxElement.classList.remove("size4")

                sizeBox01.style.backgroundColor = "white"
                sizeBox02.style.backgroundColor = "white"
                sizeBox03.style.backgroundColor = "white"
                sizeBox04.style.backgroundColor = "white"

                colorRed4.style.border = "0px solid"
                boxElement.classList.remove("isred1")

                colorBlue4.style.border = "0px solid"
                boxElement.classList.remove("isblue2")

                colorOrange4.style.border = "0px solid"
                boxElement.classList.remove("isorange3")

                colorGreen4.style.border = "0px solid"
                boxElement.classList.remove("isgreen4")

                colorPurple4.style.border = "0px solid"
                boxElement.classList.remove("ispurple5")


                colorGray4.style.border = "0px solid"
                boxElement.classList.remove("isgray6")

                colorAqua4.style.border = "0px solid"
                boxElement.classList.remove("isaqua7")

                colorBrown4.style.border = "0px solid"
                boxElement.classList.remove("isbrown8")

                colorYellow4.style.border = "0px solid"
                boxElement.classList.remove("isyellow9")

                colorBlack4.style.border = "0px solid"
                boxElement.classList.remove("isblack10")

                hoverColorButton4.removeEventListener("click", toggleHoverColor)
                hoverColorButton4.removeEventListener("click", removeHoverColor)

                hoverSizeButton4.removeEventListener("click", toggleHoverSize)
                hoverSizeButton4.removeEventListener("click", removeHoverSize)

                boxElement.classList.remove("hovercolor")

                smoothAnim4.addEventListener("click", toggleSmooth)
                smoothAnim4.removeEventListener("click", removeSmooth)

                colorRed4.removeEventListener("click", removeRed)
                colorBlue4.removeEventListener("click", removeBlue)
                colorOrange4.removeEventListener("click", removeOrange)
                colorGreen4.removeEventListener("click", removeGreen)
                colorPurple4.removeEventListener("click", removePurple)
                colorGray4.removeEventListener("click", removeGray)
                colorAqua4.removeEventListener("click", removeAqua)
                colorBrown4.removeEventListener("click", removeBrown)
                colorYellow4.removeEventListener("click", removeYellow)
                colorBlack4.removeEventListener("click", removeBlack)

                colorRed4.removeEventListener("click", hoverRed)
                colorBlue4.removeEventListener("click", hoverBlue)
                colorOrange4.removeEventListener("click", hoverOrange)
                colorGreen4.removeEventListener("click", hoverGreen)
                colorPurple4.removeEventListener("click", hoverPurple)
                colorGray4.removeEventListener("click", hoverGray)
                colorAqua4.removeEventListener("click", hoverAqua)
                colorBrown4.removeEventListener("click", hoverBrown)
                colorYellow4.advancedRemoveremoveEventListener("click", hoverYellow)
                colorBlack4.removeEventListener("click", hoverBlack)
            }

            setTimeout(() => {
                hoverButton4.addEventListener("click", addHoverEvent)
                hoverButton4.removeEventListener("click", removeHoverEvent)
            }, 1);
        }

        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("hovercolor")) {
                boxElement.classList.add("hovercolor")
                hoverColorButton4.style.color = "green"
                hoverColorButton4.innerHTML = "Color Change [ON]"


                setTimeout(() => {
                    hoverColorButton4.removeEventListener("click", toggleHoverColor)
                    hoverColorButton4.addEventListener("click", removeHoverColor)
                }, 1);
            } else {
                boxElement.classList.remove("hovercolor")
                hoverColorButton4.style.color = "red"
                hoverColorButton4.innerHTML = "Color Change [OFF]"
                //removing colors
                boxElement.classList.remove("isred1")
                boxElement.classList.remove("isblue2")
                boxElement.classList.remove("isorange3")
                boxElement.classList.remove("isgreen4")
                boxElement.classList.remove("ispurple5")
                boxElement.classList.remove("isgray6")
                boxElement.classList.remove("isaqua7")
                boxElement.classList.remove("isbrown8")
                boxElement.classList.remove("isyellow9")
                boxElement.classList.remove("isblack10")
                colorRed4.style.border = "0px solid"
                colorBlue4.style.border = "0px solid"
                colorOrange4.style.border = "0px solid"
                colorGreen4.style.border = "0px solid"
                colorGray4.style.border = "0px solid"
                colorAqua4.style.border = "0px solid"
                colorBrown4.style.border = "0px solid"
                colorYellow4.style.border = "0px solid"
                colorBlack4.style.border = "0px solid"

                colorRed4.removeEventListener("click", hoverRed)
                colorBlack4.removeEventListener("click", hoverBlue)
                colorOrange4.removeEventListener("click", hoverOrange)
                colorGreen4.removeEventListener("click", hoverGreen)



            }
            setTimeout(() => {
                hoverColorButton4.removeEventListener("click", toggleHoverColor)
                hoverColorButton4.removeEventListener("click", removeHoverColor)
            }, 1);
        }


        function toggleHoverColor() {
            if (selectedElement3 == divElement) {
                boxElement.classList.add("hovercolor")
                hoverColorButton4.style.color = "green"
                hoverColorButton4.innerHTML = "Color Change [ON]"

                colorRed4.addEventListener("click", removeRed)
                colorBlue4.addEventListener("click", removeBlue)
                colorOrange4.addEventListener("click", removeOrange)
                colorGreen4.addEventListener("click", removeGreen)
                colorPurple4.addEventListener("click", removePurple)
                colorGray4.addEventListener("click", removeGray)
                colorAqua4.addEventListener("click", removeAqua)
                colorBrown4.addEventListener("click", removeBrown)
                colorYellow4.addEventListener("click", removeYellow)
                colorBlack4.addEventListener("click", removeBlack)

            }
            setTimeout(() => {
                hoverColorButton4.removeEventListener("click", toggleHoverColor)
                hoverColorButton4.addEventListener("click", removeHoverColor)
            }, 1);
        }



        function removeHoverColor() {
            if (selectedElement3 == divElement) {
                boxElement.classList.remove("hovercolor")
                hoverColorButton4.style.color = "red"
                hoverColorButton4.innerHTML = "Color Change [OFF]"

                //removing colors
                boxElement.classList.remove("isred1")
                boxElement.classList.remove("isblue2")
                boxElement.classList.remove("isorange3")
                boxElement.classList.remove("isgreen4")
                boxElement.classList.remove("ispurple5")
                boxElement.classList.remove("isgray6")
                boxElement.classList.remove("isaqua7")
                boxElement.classList.remove("isbrown8")
                boxElement.classList.remove("isyellow9")
                boxElement.classList.remove("isblack10")
                colorRed4.style.border = "0px solid"
                colorBlue4.style.border = "0px solid"
                colorOrange4.style.border = "0px solid"
                colorGreen4.style.border = "0px solid"
                colorPurple4.style.border = "0px solid"
                colorGray4.style.border = "0px solid"
                colorAqua4.style.border = "0px solid"
                colorBrown4.style.border = "0px solid"
                colorYellow4.style.border = "0px solid"
                colorBlack4.style.border = "0px solid"


                colorRed4.removeEventListener("click", removeRed)
                colorBlue4.removeEventListener("click", removeBlue)
                colorOrange4.removeEventListener("click", removeOrange)
                colorGreen4.removeEventListener("click", removeGreen)
                colorPurple4.removeEventListener("click", removePurple)
                colorGray4.removeEventListener("click", removeGray)
                colorAqua4.removeEventListener("click", removeAqua)
                colorBrown4.removeEventListener("click", removeBrown)
                colorYellow4.removeEventListener("click", removeYellow)
                colorBlack4.removeEventListener("click", removeBlack)

                colorRed4.removeEventListener("click", hoverRed)
                colorBlue4.removeEventListener("click", hoverBlue)
                colorOrange4.removeEventListener("click", hoverOrange)
                colorGreen4.removeEventListener("click", hoverGreen)
                colorPurple4.removeEventListener("click", hoverPurple)
                colorGray4.removeEventListener("click", hoverGray)
                colorAqua4.removeEventListener("click", hoverAqua)
                colorBrown4.removeEventListener("click", hoverBrown)
                colorYellow4.removeEventListener("click", hoverYellow)
                colorBlack4.removeEventListener("click", hoverBlack)





            }
            setTimeout(() => {
                hoverColorButton4.addEventListener("click", toggleHoverColor)
                hoverColorButton4.removeEventListener("click", removeHoverColor)
            }, 1);
        }

        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("isred1")) {
                colorRed4.style.border = "2px solid"
            } else {
                colorRed4.style.border = "0px solid"
            }
        }



        function hoverRed() {
            if (selectedElement3 == divElement) {
                colorRed4.style.border = "2px solid"
                colorBlue4.style.border = "0px solid"
                colorOrange4.style.border = "0px solid"
                colorGreen4.style.border = "0px solid"
                colorPurple4.style.border = "0px solid"
                colorGray4.style.border = "0px solid"
                colorAqua4.style.border = "0px solid"
                colorBrown4.style.border = "0px solid"
                colorYellow4.style.border = "0px solid"
                colorBlack4.style.border = "0px solid"

                boxElement.classList.add("isred1")
                boxElement.classList.remove("isblue2")
                boxElement.classList.remove("isorange3")
                boxElement.classList.remove("isgreen4")
                boxElement.classList.remove("ispurple5")
                boxElement.classList.remove("isgray6")
                boxElement.classList.remove("isaqua7")
                boxElement.classList.remove("isbrown8")
                boxElement.classList.remove("isyellow9")
                boxElement.classList.remove("isblack10")

                colorBlue4.addEventListener("click", hoverBlue)
                colorBlue4.removeEventListener("click", removeBlue)

                colorOrange4.addEventListener("click", hoverOrange)
                colorOrange4.removeEventListener("click", removeOrange)

                colorGreen4.addEventListener("click", hoverGreen)
                colorGreen4.removeEventListener("click", removeGreen)

                colorPurple4.addEventListener("click", hoverPurple)
                colorPurple4.removeEventListener("click", removePurple)

                colorGray4.addEventListener("click", hoverGray)
                colorGray4.removeEventListener("click", removeGray)

                colorAqua4.addEventListener("click", hoverAqua)
                colorAqua4.removeEventListener("click", removeAqua)

                colorBrown4.addEventListener("click", hoverBrown)
                colorBrown4.removeEventListener("click", removeBrown)

                colorYellow4.addEventListener("click", hoverYellow)
                colorYellow4.removeEventListener("click", removeYellow)

                colorBlack4.addEventListener("click", hoverBlack)
                colorBlack4.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorRed4.removeEventListener("click", hoverRed)
                    colorRed4.addEventListener("click", removeRed)
                }, 1);
            }
        }

        function removeRed() {
            if (selectedElement3 == divElement) {
                colorRed4.style.border = "0px solid"
                boxElement.classList.remove("isred1")


                setTimeout(() => {
                    colorRed4.addEventListener("click", hoverRed)
                    colorRed4.removeEventListener("click", removeRed)
                }, 1);
            }
        }



        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("isblue2")) {
                colorBlue4.style.border = "2px solid"
            } else {
                colorBlue4.style.border = "0px solid"
            }
        }


        function hoverBlue() {
            if (selectedElement3 == divElement) {
                colorBlue4.style.border = "2px solid"
                colorRed4.style.border = "0px solid"
                colorOrange4.style.border = "0px solid"
                colorGreen4.style.border = "0px solid"
                colorPurple4.style.border = "0px solid"
                colorGray4.style.border = "0px solid"
                colorAqua4.style.border = "0px solid"
                colorBrown4.style.border = "0px solid"
                colorYellow4.style.border = "0px solid"
                colorBlack4.style.border = "0px solid"

                boxElement.classList.add("isblue2")
                boxElement.classList.remove("isred1")
                boxElement.classList.remove("isorange3")
                boxElement.classList.remove("isgreen4")
                boxElement.classList.remove("ispurple5")
                boxElement.classList.remove("isgray6")
                boxElement.classList.remove("isaqua7")
                boxElement.classList.remove("isbrown8")
                boxElement.classList.remove("isyellow9")
                boxElement.classList.remove("isblack10")

                colorRed4.addEventListener("click", hoverRed)
                colorRed4.removeEventListener("click", removeRed)

                colorOrange4.addEventListener("click", hoverOrange)
                colorOrange4.removeEventListener("click", removeOrange)

                colorGreen4.addEventListener("click", hoverGreen)
                colorGreen4.removeEventListener("click", removeGreen)

                colorPurple4.addEventListener("click", hoverPurple)
                colorPurple4.removeEventListener("click", removePurple)

                colorGray4.addEventListener("click", hoverGray)
                colorGray4.removeEventListener("click", removeGray)

                colorAqua4.addEventListener("click", hoverAqua)
                colorAqua4.removeEventListener("click", removeAqua)

                colorBrown4.addEventListener("click", hoverBrown)
                colorBrown4.removeEventListener("click", removeBrown)

                colorYellow4.addEventListener("click", hoverYellow)
                colorYellow4.removeEventListener("click", removeYellow)

                colorBlack4.addEventListener("click", hoverBlack)
                colorBlack4.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorBlue4.removeEventListener("click", hoverBlue)
                    colorBlue4.addEventListener("click", removeBlue)
                }, 1);
            }
        }

        function removeBlue() {
            if (selectedElement3 == divElement) {
                colorBlue4.style.border = "0px solid"
                boxElement.classList.remove("isblue2")

                setTimeout(() => {
                    colorBlue4.addEventListener("click", hoverBlue)
                    colorBlue4.removeEventListener("click", removeBlue)
                }, 1);
            }
        }




        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("isorange3")) {
                colorOrange4.style.border = "2px solid"
            } else {
                colorOrange4.style.border = "0px solid"
            }
        }



        function hoverOrange() {
            if (selectedElement3 == divElement) {
                colorOrange4.style.border = "2px solid"
                colorBlue4.style.border = "0px solid"
                colorRed4.style.border = "0px solid"
                colorGreen4.style.border = "0px solid"
                colorPurple4.style.border = "0px solid"
                colorGray4.style.border = "0px solid"
                colorAqua4.style.border = "0px solid"
                colorBrown4.style.border = "0px solid"
                colorYellow4.style.border = "0px solid"
                colorBlack4.style.border = "0px solid"

                boxElement.classList.add("isorange3")
                boxElement.classList.remove("isblue2")
                boxElement.classList.remove("isred1")
                boxElement.classList.remove("isgreen4")
                boxElement.classList.remove("ispurple5")
                boxElement.classList.remove("isgray6")
                boxElement.classList.remove("isaqua7")
                boxElement.classList.remove("isbrown8")
                boxElement.classList.remove("isyellow9")
                boxElement.classList.remove("isblack10")

                colorBlue4.addEventListener("click", hoverBlue)
                colorBlue4.removeEventListener("click", removeBlue)

                colorRed4.addEventListener("click", hoverRed)
                colorRed4.removeEventListener("click", removeRed)

                colorGreen4.addEventListener("click", hoverGreen)
                colorGreen4.removeEventListener("click", removeGreen)

                colorPurple4.addEventListener("click", hoverPurple)
                colorPurple4.removeEventListener("click", removePurple)

                colorGray4.addEventListener("click", hoverGray)
                colorGray4.removeEventListener("click", removeGray)

                colorAqua4.addEventListener("click", hoverAqua)
                colorAqua4.removeEventListener("click", removeAqua)

                colorBrown4.addEventListener("click", hoverBrown)
                colorBrown4.removeEventListener("click", removeBrown)

                colorYellow4.addEventListener("click", hoverYellow)
                colorYellow4.removeEventListener("click", removeYellow)

                colorBlack4.addEventListener("click", hoverBlack)
                colorBlack4.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorOrange4.removeEventListener("click", hoverOrange)
                    colorOrange4.addEventListener("click", removeOrange)
                }, 1);
            }
        }

        function removeOrange() {
            if (selectedElement3 == divElement) {
                colorOrange4.style.border = "0px solid"
                boxElement.classList.remove("isorange3")

                setTimeout(() => {
                    colorOrange4.addEventListener("click", hoverOrange)
                    colorOrange4.removeEventListener("click", removeOrange)
                }, 1);
            }
        }




        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("isgreen4")) {
                colorGreen4.style.border = "2px solid"
            } else {
                colorGreen4.style.border = "0px solid"
            }
        }



        function hoverGreen() {
            if (selectedElement3 == divElement) {
                colorGreen4.style.border = "2px solid"
                colorBlue4.style.border = "0px solid"
                colorRed4.style.border = "0px solid"
                colorOrange4.style.border = "0px solid"
                colorPurple4.style.border = "0px solid"
                colorGray4.style.border = "0px solid"
                colorAqua4.style.border = "0px solid"
                colorBrown4.style.border = "0px solid"
                colorYellow4.style.border = "0px solid"
                colorBlack4.style.border = "0px solid"

                boxElement.classList.add("isgreen4")
                boxElement.classList.remove("isblue2")
                boxElement.classList.remove("isred1")
                boxElement.classList.remove("isorange3")
                boxElement.classList.remove("ispurple5")
                boxElement.classList.remove("isgray6")
                boxElement.classList.remove("isaqua7")
                boxElement.classList.remove("isbrown8")
                boxElement.classList.remove("isyellow9")
                boxElement.classList.remove("isblack10")

                colorBlue4.addEventListener("click", hoverBlue)
                colorBlue4.removeEventListener("click", removeBlue)

                colorOrange4.addEventListener("click", hoverOrange)
                colorOrange4.removeEventListener("click", removeOrange)

                colorRed4.addEventListener("click", hoverRed)
                colorRed4.removeEventListener("click", removeRed)

                colorPurple4.addEventListener("click", hoverPurple)
                colorPurple4.removeEventListener("click", removePurple)

                colorGray4.addEventListener("click", hoverGray)
                colorGray4.removeEventListener("click", removeGray)

                colorAqua4.addEventListener("click", hoverAqua)
                colorAqua4.removeEventListener("click", removeAqua)

                colorBrown4.addEventListener("click", hoverBrown)
                colorBrown4.removeEventListener("click", removeBrown)

                colorYellow4.addEventListener("click", hoverYellow)
                colorYellow4.removeEventListener("click", removeYellow)

                colorBlack4.addEventListener("click", hoverBlack)
                colorBlack4.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorGreen4.removeEventListener("click", hoverGreen)
                    colorGreen4.addEventListener("click", removeGreen)
                }, 1);
            }
        }

        function removeGreen() {
            if (selectedElement3 == divElement) {
                colorGreen4.style.border = "0px solid"
                boxElement.classList.remove("isgreen4")

                setTimeout(() => {
                    colorGreen4.addEventListener("click", hoverGreen)
                    colorGreen4.removeEventListener("click", removeGreen)
                }, 1);
            }
        }



        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("ispurple5")) {
                colorPurple4.style.border = "2px solid"
            } else {
                colorPurple4.style.border = "0px solid"
            }
        }



        function hoverPurple() {
            if (selectedElement3 == divElement) {
                colorPurple4.style.border = "2px solid"
                colorBlue4.style.border = "0px solid"
                colorRed4.style.border = "0px solid"
                colorOrange4.style.border = "0px solid"
                colorGreen4.style.border = "0px solid"
                colorGray4.style.border = "0px solid"
                colorAqua4.style.border = "0px solid"
                colorBrown4.style.border = "0px solid"
                colorYellow4.style.border = "0px solid"
                colorBlack4.style.border = "0px solid"

                boxElement.classList.add("ispurple5")
                boxElement.classList.remove("isblue2")
                boxElement.classList.remove("isred1")
                boxElement.classList.remove("isorange3")
                boxElement.classList.remove("isgreen4")
                boxElement.classList.remove("isgray6")
                boxElement.classList.remove("isaqua7")
                boxElement.classList.remove("isbrown8")
                boxElement.classList.remove("isyellow9")
                boxElement.classList.remove("isblack10")

                colorBlue4.addEventListener("click", hoverBlue)
                colorBlue4.removeEventListener("click", removeBlue)

                colorOrange4.addEventListener("click", hoverOrange)
                colorOrange4.removeEventListener("click", removeOrange)

                colorGreen4.addEventListener("click", hoverGreen)
                colorGreen4.removeEventListener("click", removeGreen)

                colorRed4.addEventListener("click", hoverRed)
                colorRed4.removeEventListener("click", removeRed)

                colorGray4.addEventListener("click", hoverGray)
                colorGray4.removeEventListener("click", removeGray)

                colorAqua4.addEventListener("click", hoverAqua)
                colorAqua4.removeEventListener("click", removeAqua)

                colorBrown4.addEventListener("click", hoverBrown)
                colorBrown4.removeEventListener("click", removeBrown)

                colorYellow4.addEventListener("click", hoverYellow)
                colorYellow4.removeEventListener("click", removeYellow)

                colorBlack4.addEventListener("click", hoverBlack)
                colorBlack4.removeEventListener("click", removeBlack)


                setTimeout(() => {
                    colorPurple4.removeEventListener("click", hoverPurple)
                    colorPurple4.addEventListener("click", removePurple)
                }, 1);
            }
        }

        function removePurple() {
            if (selectedElement3 == divElement) {
                colorPurple4.style.border = "0px solid"
                boxElement.classList.remove("ispurple5")

                setTimeout(() => {
                    colorPurple4.addEventListener("click", hoverPurple)
                    colorPurple4.removeEventListener("click", removePurple)
                }, 1);
            }
        }



        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("isgray6")) {
                colorGray4.style.border = "2px solid"
            } else {
                colorGray4.style.border = "0px solid"
            }
        }



        function hoverGray() {
            if (selectedElement3 == divElement) {
                colorGray4.style.border = "2px solid"
                colorBlue4.style.border = "0px solid"
                colorRed4.style.border = "0px solid"
                colorOrange4.style.border = "0px solid"
                colorGreen4.style.border = "0px solid"
                colorPurple4.style.border = "0px solid"
                colorAqua4.style.border = "0px solid"
                colorBrown4.style.border = "0px solid"
                colorYellow4.style.border = "0px solid"
                colorBlack4.style.border = "0px solid"

                boxElement.classList.add("isgray6")
                boxElement.classList.remove("isblue2")
                boxElement.classList.remove("isred1")
                boxElement.classList.remove("isorange3")
                boxElement.classList.remove("isgreen4")
                boxElement.classList.remove("ispurple5")
                boxElement.classList.remove("isaqua7")
                boxElement.classList.remove("isbrown8")
                boxElement.classList.remove("isyellow9")
                boxElement.classList.remove("isblack10")

                colorBlue4.addEventListener("click", hoverBlue)
                colorBlue4.removeEventListener("click", removeBlue)

                colorOrange4.addEventListener("click", hoverOrange)
                colorOrange4.removeEventListener("click", removeOrange)

                colorGreen4.addEventListener("click", hoverGreen)
                colorGreen4.removeEventListener("click", removeGreen)

                colorPurple4.addEventListener("click", hoverPurple)
                colorPurple4.removeEventListener("click", removePurple)

                colorRed4.addEventListener("click", hoverRed)
                colorRed4.removeEventListener("click", removeRed)

                colorAqua4.addEventListener("click", hoverAqua)
                colorAqua4.removeEventListener("click", removeAqua)

                colorBrown4.addEventListener("click", hoverBrown)
                colorBrown4.removeEventListener("click", removeBrown)

                colorYellow4.addEventListener("click", hoverYellow)
                colorYellow4.removeEventListener("click", removeYellow)

                colorBlack4.addEventListener("click", hoverBlack)
                colorBlack4.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorGray4.removeEventListener("click", hoverGray)
                    colorGray4.addEventListener("click", removeGray)
                }, 1);
            }
        }

        function removeGray() {
            if (selectedElement3 == divElement) {
                colorGray4.style.border = "0px solid"
                boxElement.classList.remove("isgray6")

                setTimeout(() => {
                    colorGray4.addEventListener("click", hoverGray)
                    colorGray4.removeEventListener("click", removeGray)
                }, 1);
            }
        }







        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("isaqua7")) {
                colorAqua4.style.border = "2px solid"
            } else {
                colorAqua4.style.border = "0px solid"
            }
        }



        function hoverAqua() {
            if (selectedElement3 == divElement) {
                colorAqua4.style.border = "2px solid"
                colorBlue4.style.border = "0px solid"
                colorRed4.style.border = "0px solid"
                colorOrange4.style.border = "0px solid"
                colorGreen4.style.border = "0px solid"
                colorPurple4.style.border = "0px solid"
                colorGray4.style.border = "0px solid"
                colorBrown4.style.border = "0px solid"
                colorYellow4.style.border = "0px solid"
                colorBlack4.style.border = "0px solid"

                boxElement.classList.add("isaqua7")
                boxElement.classList.remove("isblue2")
                boxElement.classList.remove("isred1")
                boxElement.classList.remove("isorange3")
                boxElement.classList.remove("isgreen4")
                boxElement.classList.remove("ispurple5")
                boxElement.classList.remove("isgray6")
                boxElement.classList.remove("isbrown8")
                boxElement.classList.remove("isyellow9")
                boxElement.classList.remove("isblack10")

                colorBlue4.addEventListener("click", hoverBlue)
                colorBlue4.removeEventListener("click", removeBlue)

                colorOrange4.addEventListener("click", hoverOrange)
                colorOrange4.removeEventListener("click", removeOrange)

                colorGreen4.addEventListener("click", hoverGreen)
                colorGreen4.removeEventListener("click", removeGreen)

                colorPurple4.addEventListener("click", hoverPurple)
                colorPurple4.removeEventListener("click", removePurple)

                colorGray4.addEventListener("click", hoverGray)
                colorGray4.removeEventListener("click", removeGray)

                colorRed4.addEventListener("click", hoverRed)
                colorRed4.removeEventListener("click", removeRed)

                colorBrown4.addEventListener("click", hoverBrown)
                colorBrown4.removeEventListener("click", removeBrown)

                colorYellow4.addEventListener("click", hoverYellow)
                colorYellow4.removeEventListener("click", removeYellow)

                colorBlack4.addEventListener("click", hoverBlack)
                colorBlack4.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorAqua4.removeEventListener("click", hoverAqua)
                    colorAqua4.addEventListener("click", removeAqua)
                }, 1);
            }
        }

        function removeAqua() {
            if (selectedElement3 == divElement) {
                colorAqua4.style.border = "0px solid"
                boxElement.classList.remove("isaqua7")

                setTimeout(() => {
                    colorAqua4.addEventListener("click", hoverAqua)
                    colorAqua4.removeEventListener("click", removeAqua)
                }, 1);
            }
        }


        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("isbrown8")) {
                colorBrown4.style.border = "2px solid"
            } else {
                colorBrown4.style.border = "0px solid"
            }
        }



        function hoverBrown() {
            if (selectedElement3 == divElement) {
                colorBrown4.style.border = "2px solid"
                colorBlue4.style.border = "0px solid"
                colorRed4.style.border = "0px solid"
                colorOrange4.style.border = "0px solid"
                colorGreen4.style.border = "0px solid"
                colorPurple4.style.border = "0px solid"
                colorGray4.style.border = "0px solid"
                colorAqua4.style.border = "0px solid"
                colorYellow4.style.border = "0px solid"
                colorBlack4.style.border = "0px solid"

                boxElement.classList.add("isbrown8")
                boxElement.classList.remove("isblue2")
                boxElement.classList.remove("isred1")
                boxElement.classList.remove("isorange3")
                boxElement.classList.remove("isgreen4")
                boxElement.classList.remove("ispurple5")
                boxElement.classList.remove("isgray6")
                boxElement.classList.remove("isaqua7")
                boxElement.classList.remove("isyellow9")
                boxElement.classList.remove("isblack10")

                colorBlue4.addEventListener("click", hoverBlue)
                colorBlue4.removeEventListener("click", removeBlue)

                colorOrange4.addEventListener("click", hoverOrange)
                colorOrange4.removeEventListener("click", removeOrange)

                colorGreen4.addEventListener("click", hoverGreen)
                colorGreen4.removeEventListener("click", removeGreen)

                colorPurple4.addEventListener("click", hoverPurple)
                colorPurple4.removeEventListener("click", removePurple)

                colorGray4.addEventListener("click", hoverGray)
                colorGray4.removeEventListener("click", removeGray)

                colorAqua4.addEventListener("click", hoverAqua)
                colorAqua4.removeEventListener("click", removeAqua)

                colorRed4.addEventListener("click", hoverRed)
                colorRed4.removeEventListener("click", removeRed)

                colorYellow4.addEventListener("click", hoverYellow)
                colorYellow4.removeEventListener("click", removeYellow)

                colorBlack4.addEventListener("click", hoverBlack)
                colorBlack4.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorBrown4.removeEventListener("click", hoverBrown)
                    colorBrown4.addEventListener("click", removeBrown)
                }, 1);
            }
        }

        function removeBrown() {
            if (selectedElement3 == divElement) {
                colorBrown4.style.border = "0px solid"
                boxElement.classList.remove("isbrown8")

                setTimeout(() => {
                    colorBrown4.addEventListener("click", hoverBrown)
                    colorBrown4.removeEventListener("click", removeBrown)
                }, 1);
            }
        }


        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("isyellow9")) {
                colorYellow4.style.border = "2px solid"
            } else {
                colorYellow4.style.border = "0px solid"
            }
        }



        function hoverYellow() {
            if (selectedElement3 == divElement) {
                colorYellow4.style.border = "2px solid"
                colorBlue4.style.border = "0px solid"
                colorRed4.style.border = "0px solid"
                colorOrange4.style.border = "0px solid"
                colorGreen4.style.border = "0px solid"
                colorPurple4.style.border = "0px solid"
                colorGray4.style.border = "0px solid"
                colorAqua4.style.border = "0px solid"
                colorBrown4.style.border = "0px solid"
                colorBlack4.style.border = "0px solid"

                boxElement.classList.add("isyellow9")
                boxElement.classList.remove("isblue2")
                boxElement.classList.remove("isred1")
                boxElement.classList.remove("isorange3")
                boxElement.classList.remove("isgreen4")
                boxElement.classList.remove("ispurple5")
                boxElement.classList.remove("isgray6")
                boxElement.classList.remove("isaqua7")
                boxElement.classList.remove("isbrown8")
                boxElement.classList.remove("isblack10")

                colorBlue4.addEventListener("click", hoverBlue)
                colorBlue4.removeEventListener("click", removeBlue)

                colorOrange4.addEventListener("click", hoverOrange)
                colorOrange4.removeEventListener("click", removeOrange)

                colorGreen4.addEventListener("click", hoverGreen)
                colorGreen4.removeEventListener("click", removeGreen)

                colorPurple4.addEventListener("click", hoverPurple)
                colorPurple4.removeEventListener("click", removePurple)

                colorGray4.addEventListener("click", hoverGray)
                colorGray4.removeEventListener("click", removeGray)

                colorAqua4.addEventListener("click", hoverAqua)
                colorAqua4.removeEventListener("click", removeAqua)

                colorBrown4.addEventListener("click", hoverBrown)
                colorBrown4.removeEventListener("click", removeBrown)

                colorRed4.addEventListener("click", hoverRed)
                colorRed4.removeEventListener("click", removeRed)

                colorBlack4.addEventListener("click", hoverBlack)
                colorBlack4.removeEventListener("click", removeBlack)

                setTimeout(() => {
                    colorYellow4.removeEventListener("click", hoverYellow)
                    colorYellow4.addEventListener("click", removeYellow)
                }, 1);
            }
        }

        function removeYellow() {
            if (selectedElement3 == divElement) {
                colorYellow4.style.border = "0px solid"
                boxElement.classList.remove("isyellow9")

                setTimeout(() => {
                    colorYellow4.addEventListener("click", hoverYellow)
                    colorYellow4.removeEventListener("click", removeYellow)
                }, 1);
            }
        }








        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("isblack10")) {
                colorBlack4.style.border = "2px solid"
            } else {
                colorBlack4.style.border = "0px solid"
            }
        }



        function hoverBlack() {
            if (selectedElement3 == divElement) {
                colorBlack4.style.border = "2px solid"
                colorBlue4.style.border = "0px solid"
                colorRed4.style.border = "0px solid"
                colorOrange4.style.border = "0px solid"
                colorGreen4.style.border = "0px solid"
                colorPurple4.style.border = "0px solid"
                colorGray4.style.border = "0px solid"
                colorAqua4.style.border = "0px solid"
                colorBrown4.style.border = "0px solid"
                colorYellow4.style.border = "0px solid"

                boxElement.classList.add("isblack10")
                boxElement.classList.remove("isblue2")
                boxElement.classList.remove("isred1")
                boxElement.classList.remove("isorange3")
                boxElement.classList.remove("isgreen4")
                boxElement.classList.remove("ispurple5")
                boxElement.classList.remove("isgray6")
                boxElement.classList.remove("isaqua7")
                boxElement.classList.remove("isbrown8")
                boxElement.classList.remove("isyellow9")

                colorBlue4.addEventListener("click", hoverBlue)
                colorBlue4.removeEventListener("click", removeBlue)

                colorOrange4.addEventListener("click", hoverOrange)
                colorOrange4.removeEventListener("click", removeOrange)

                colorGreen4.addEventListener("click", hoverGreen)
                colorGreen4.removeEventListener("click", removeGreen)

                colorPurple4.addEventListener("click", hoverPurple)
                colorPurple4.removeEventListener("click", removePurple)

                colorGray4.addEventListener("click", hoverGray)
                colorGray4.removeEventListener("click", removeGray)

                colorAqua4.addEventListener("click", hoverAqua)
                colorAqua4.removeEventListener("click", removeAqua)

                colorBrown4.addEventListener("click", hoverBrown)
                colorBrown4.removeEventListener("click", removeBrown)

                colorRed4.addEventListener("click", hoverRed)
                colorRed4.removeEventListener("click", removeRed)

                colorYellow4.addEventListener("click", hoverYellow)
                colorYellow4.removeEventListener("click", removeYellow)

                setTimeout(() => {
                    colorBlack4.removeEventListener("click", hoverBlack)
                    colorBlack4.addEventListener("click", removeBlack)
                }, 1);
            }
        }

        function removeBlack() {
            if (selectedElement3 == divElement) {
                colorBlack4.style.border = "0px solid"
                boxElement.classList.remove("isblack10")

                setTimeout(() => {
                    colorBlack4.addEventListener("click", hoverBlack)
                    colorBlack4.removeEventListener("click", removeBlack)
                }, 1);
            }
        }


        smoothAnim4.addEventListener("click", toggleSmooth)


        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("addsmooth")) {
                smoothAnim4.innerHTML = "Smooth Animations [ON]"
                smoothAnim4.style.color = "green"
                boxElement.classList.add("addsmooth")

                smoothAnim4.removeEventListener("click", toggleSmooth)
                smoothAnim4.addEventListener("click", removeSmooth)
            } else {
                smoothAnim4.innerHTML = "Smooth Animations [OFF]"
                smoothAnim4.style.color = "red"
                boxElement.classList.remove("addsmooth")

                smoothAnim4.addEventListener("click", toggleSmooth)
                smoothAnim4.removeEventListener("click", removeSmooth)
            }
        }



        function toggleSmooth() {
            if (selectedElement3 == divElement) {
                smoothAnim4.innerHTML = "Smooth Animations [ON]"
                smoothAnim4.style.color = "green"
                boxElement.classList.add("addsmooth")


                setTimeout(() => {
                    smoothAnim4.removeEventListener("click", toggleSmooth)
                    smoothAnim4.addEventListener("click", removeSmooth)
                }, 1);
            }
        }

        function removeSmooth() {
            if (selectedElement3 == divElement) {
                smoothAnim4.innerHTML = "Smooth Animations [OFF]"
                smoothAnim4.style.color = "red"
                boxElement.classList.remove("addsmooth")


                setTimeout(() => {
                    smoothAnim4.addEventListener("click", toggleSmooth)
                    smoothAnim4.removeEventListener("click", removeSmooth)
                }, 1);
            }
        }


        function toggleHoverSize() {
            if (selectedElement3 == divElement) {
                hoverSizeButton4.innerHTML = "Size Change [ON]"
                hoverSizeButton4.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton4.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton4.addEventListener("click", removeHoverSize)
                }, 1);
            }

        }

        function removeHoverSize() {
            if (selectedElement3 == divElement) {
                hoverSizeButton4.innerHTML = "Size Change [OFF]"
                hoverSizeButton4.style.color = "red"
                boxElement.classList.remove("size")
                boxElement.classList.remove("size2")
                boxElement.classList.remove("size3")
                boxElement.classList.remove("size4")

                sizeBox01.style.backgroundColor = "white"
                sizeBox02.style.backgroundColor = "white"
                sizeBox03.style.backgroundColor = "white"
                sizeBox04.style.backgroundColor = "white"

                sizeBox03.style.backgroundColor = "white"

                setTimeout(() => {
                    hoverSizeButton4.addEventListener("click", toggleHoverSize)
                    hoverSizeButton4.removeEventListener("click", removeHoverSize)
                }, 1);
            }

        }


        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("size")) {
                sizeBox01.style.backgroundColor = "gray"
                sizeBox02.style.backgroundColor = "white"
                sizeBox03.style.backgroundColor = "white"
                sizeBox04.style.backgroundColor = "white"

                hoverSizeButton4.innerHTML = "Size Change [ON]"
                hoverSizeButton4.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton4.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton4.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox01.style.backgroundColor = "white"
            }
            if (boxElement.classList.contains("size2")) {
                sizeBox02.style.backgroundColor = "gray"
                sizeBox01.style.backgroundColor = "white"
                sizeBox03.style.backgroundColor = "white"
                sizeBox04.style.backgroundColor = "white"

                hoverSizeButton4.innerHTML = "Size Change [ON]"
                hoverSizeButton4.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton4.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton4.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox02.style.backgroundColor = "white"
            }

            if (boxElement.classList.contains("size3")) {
                sizeBox03.style.backgroundColor = "gray"
                sizeBox02.style.backgroundColor = "white"
                sizeBox01.style.backgroundColor = "white"
                sizeBox04.style.backgroundColor = "white"

                hoverSizeButton4.innerHTML = "Size Change [ON]"
                hoverSizeButton4.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton4.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton4.addEventListener("click", removeHoverSize)
                }, 1);

            } else {
                sizeBox03.style.backgroundColor = "white"
            }
            if (boxElement.classList.contains("size4")) {
                sizeBox04.style.backgroundColor = "gray"
                sizeBox02.style.backgroundColor = "white"
                sizeBox01.style.backgroundColor = "white"
                sizeBox03.style.backgroundColor = "white"

                hoverSizeButton4.innerHTML = "Size Change [ON]"
                hoverSizeButton4.style.color = "green"

                setTimeout(() => {
                    hoverSizeButton4.removeEventListener("click", toggleHoverSize)
                    hoverSizeButton4.addEventListener("click", removeHoverSize)
                }, 1);
            } else {
                sizeBox04.style.backgroundColor = "white"
            }
        }


        sizeBox01.addEventListener("click", changeHoverSize)


        function changeHoverSize() {
            if (hoverSizeButton4.style.color == "green") {
                if (selectedElement3 == divElement) {
                    boxElement.classList.add("size")
                    boxElement.classList.remove("size2")
                    boxElement.classList.remove("size3")
                    boxElement.classList.remove("size4")
                    sizeBox01.style.backgroundColor = "gray"
                    sizeBox02.style.backgroundColor = "white"
                    sizeBox03.style.backgroundColor = "white"
                    sizeBox04.style.backgroundColor = "white"
                }
            }


        }





        sizeBox02.addEventListener("click", changeHoverSize2)


        function changeHoverSize2() {
            if (hoverSizeButton4.style.color == "green") {
                if (selectedElement3 == divElement) {
                    boxElement.classList.add("size2")
                    boxElement.classList.remove("size1")
                    boxElement.classList.remove("size3")
                    boxElement.classList.remove("size4")
                    sizeBox02.style.backgroundColor = "gray"
                    sizeBox03.style.backgroundColor = "white"
                    sizeBox04.style.backgroundColor = "white"
                    sizeBox01.style.backgroundColor = "white"
                }
            }


        }


        sizeBox03.addEventListener("click", changeHoverSize3)


        function changeHoverSize3() {
            if (hoverSizeButton4.style.color == "green") {
                if (selectedElement3 == divElement) {
                    boxElement.classList.add("size3")
                    boxElement.classList.remove("size1")
                    boxElement.classList.remove("size2")
                    boxElement.classList.remove("size4")
                    sizeBox03.style.backgroundColor = "gray"
                    sizeBox01.style.backgroundColor = "white"
                    sizeBox02.style.backgroundColor = "white"
                    sizeBox04.style.backgroundColor = "white"
                }
            }


        }







        sizeBox04.addEventListener("click", changeHoverSize4)


        function changeHoverSize4() {
            if (hoverSizeButton4.style.color == "green") {
                if (selectedElement3 == divElement) {
                    boxElement.classList.add("size4")
                    boxElement.classList.remove("size1")
                    boxElement.classList.remove("size2")
                    boxElement.classList.remove("size3")
                    sizeBox04.style.backgroundColor = "gray"
                    sizeBox03.style.backgroundColor = "white"
                    sizeBox02.style.backgroundColor = "white"
                    sizeBox01.style.backgroundColor = "white"
                }
            }


        }


        if (selectedElement3 == divElement) {
            if (boxElement.classList.contains("clickevent")) {
                clickEventButton4.innerHTML = "Click Event [ON]"
                clickEventButton4.style.color = "green"
                boxElement.style.cursor = "pointer"
                boxElement.classList.add("clickevent")

                boxElement.addEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton4.removeEventListener("click", toggleClickEvent)
                    clickEventButton4.addEventListener("click", removeClickEvent)
                }, 1);
            } else {
                clickEventButton4.innerHTML = "Click Event [OFF]"
                clickEventButton4.style.color = "red"
                boxElement.style.cursor = "default"

                boxElement.removeEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton4.addEventListener("click", toggleClickEvent)
                    clickEventButton4.removeEventListener("click", removeClickEvent)
                }, 1);
            }

        }

        clickEventButton4.addEventListener("click", toggleClickEvent)

        function toggleClickEvent() {
            if (selectedElement3 == divElement) {
                clickEventButton4.innerHTML = "Click Event [ON]"
                clickEventButton4.style.color = "green"
                boxElement.style.cursor = "pointer"
                boxElement.classList.add("clickevent")

                boxElement.addEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton4.removeEventListener("click", toggleClickEvent)
                    clickEventButton4.addEventListener("click", removeClickEvent)
                }, 1);
            }
        }


        function removeClickEvent() {
            if (selectedElement3 == divElement) {
                clickEventButton4.innerHTML = "Click Event [OFF]"
                clickEventButton4.style.color = "red"
                boxElement.style.cursor = "default"
                boxElement.classList.remove("clickevent")

                boxElement.removeEventListener("click", addLinkTarget)

                setTimeout(() => {
                    clickEventButton4.addEventListener("click", toggleClickEvent)
                    clickEventButton4.removeEventListener("click", removeClickEvent)
                }, 1);
            }
        }




        function addLinkTarget() {
            if (selectedElement3 == divElement) {
                window.open(clickLinkInput4.value)
            }
        }



        clickLinkInput4.addEventListener("input", handleLinkInp)
        clickLinkInput4.value = boxElement.getAttribute("alt")

        function handleLinkInp() {
            if (selectedElement3 == divElement) {
                boxElement.setAttribute("alt", clickLinkInput4.value)
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
    }



    function removeBorder3() {
        fakeBody.removeEventListener("click", removeBorder3)
        fakeBody.classList.add("noediting3")
        if (selectedElement3 == divElement) {
            selectedElement3 = null;
            divElement.style.border = "0px solid black";
            elementsPosShow()
            thePanel.addEventListener("click", togglePanel)
            removeToPanel3()

            if (thePanel.contains(backBtnAdv4)) {
                advancedRemove4()
            }
        }
    }

}



