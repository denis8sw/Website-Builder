const boX5 = document.getElementById("box5")
let selectedElement5 = null;

boX5.addEventListener("click", addImage)

function addImage() {
    const imageElement = document.createElement("img")
    const divElement = document.createElement("div")
    imageElement.setAttribute("src", "https://wallpapercave.com/uwp/uwp3221039.jpeg")
    imageElement.style.width = "150px"
    imageElement.style.height = "150px"
    imageElement.style.borderRadius = "0px"



    divElement.style.left = "50%"
    divElement.style.transform = "translateX(-50%)"
    divElement.style.position = "absolute"
    divElement.style.zIndex = "9"
    divElement.appendChild(imageElement)
    allElements.appendChild(divElement)

    divElement.addEventListener("mousedown", onMouseDown)
    divElement.addEventListener("dblclick", selectBox)

    divElement.classList.add("images")


    function selectBox() {
        fakeBody.addEventListener("click", removeBorder5)
        fakeBody.classList.remove("noediting")
        if (selectedElement5) {
            selectedElement5.style.border = "0px solid black";
        }



        thePanel.removeEventListener("click", togglePanel)
        selectedElement5 = divElement;
        if (!(selectedElement5 == null)) {
            divElement.style.border = "2px solid black";
        }

        if (selectedElement5 == divElement) {
            selectedElement = null
            selectedElement2 = null
            selectedElement3 = null
            selectedElement4 = null

            if (thePanel.contains(changeText)) {
                removeToPanel()
            }
            if (thePanel.contains(deleteBtn2)) {
                removeToPanel2()
            }
            if (thePanel.contains(backBtn3)) {
                removeToPanel3()
            }
            if (thePanel.contains(deleteBtn4)) {
                removeToPanel4()
            }
            var elements = document.getElementsByClassName("buttons");
            var elements2 = document.getElementsByClassName("boxes");
            var elements3 = document.getElementsByClassName("texts");
            var elements4 = document.getElementsByClassName("textareas");

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

        deleteBtn5.addEventListener("click", removeImage)
        function removeImage() {
            if (selectedElement5 == divElement) {
                if (allElements.contains(divElement)) {
                    allElements.removeChild(divElement)
                }

                removeToPanel5()
            }
            setTimeout(() => {
                selectedElement5 = null;
                divElement.style.border = "0px solid black";
                elementsPosShow()
                thePanel.addEventListener("click", togglePanel)
            }, 1);

        }

        changeImage.addEventListener("input", changeImageFun)

        changeImage.value = imageElement.src

        if (imageElement.src == "https://wallpapercave.com/uwp/uwp3221039.jpeg") {
            changeImage.value = ""
        }



        function changeImageFun() {
            if (selectedElement5 == divElement) {
                imageElement.src = changeImage.value
                if (changeImage.value == "") {
                    imageElement.src = "https://wallpapercave.com/uwp/uwp3221039.jpeg"
                }
            }
        }




        fileUpload.addEventListener("change", customImageChange, false)

        function customImageChange() {
            if (selectedElement5 == divElement) {
                const fileList = this.files;

                for (let i = 0; i < fileList.length; i++) {
                    const file = fileList[i];
                    const fileName = file.name.toLowerCase();

                    if (fileName.endsWith(".png") || fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) {
                        const reader = new FileReader();
                        reader.onload = function () {
                            imageElement.src = reader.result;
                            changeImage.value = imageElement.src
                        };
                        reader.readAsDataURL(file);
                    } else {
                        // The file does not have a valid image file extension
                        console.log(`${fileName} is not an image file`);
                    }
                }
            }

        }

        divElement.addEventListener("mousemove", updatingCordinates)
        cordinates6.innerHTML = "Cordinates - " + "Left: " + divElement.style.left + " / " + "Top: " + divElement.style.top
        function updatingCordinates() {
            if (selectedElement5 == divElement) {
                cordinates6.innerHTML = "Cordinates - " + "Left: " + divElement.style.left + " / " + "Top: " + divElement.style.top
                leftInput6.value = divElement.style.left ? parseInt(divElement.style.left) : ""
                topInput6.value = divElement.style.top ? parseInt(divElement.style.top) : ""
            }

        }

        leftInput6.addEventListener("keypress", customLeft)
        leftInput6.value = divElement.style.left ? parseInt(divElement.style.left) : ""
        function customLeft(event) {
            if (event.keyCode === 13) {
                if (selectedElement5 == divElement) {
                    divElement.style.left = leftInput6.value + "px"
                    cordinates6.innerHTML = "Cordinates - " + "Left: " + leftInput6.value + "px" + " / " + "Top: " + divElement.style.top

                }

            }
        }


        topInput6.addEventListener("keypress", customTop)
        topInput6.value = divElement.style.top ? parseInt(divElement.style.top) : ""
        function customTop(event) {
            if (event.keyCode === 13) {
                if (selectedElement5 == divElement) {
                    divElement.style.top = topInput6.value + "px"
                    cordinates6.innerHTML = "Cordinates - " + "Left: " + leftInput6.value + "px" + " / " + "Top: " + divElement.style.top
                }

            }
        }





        widthInput6.addEventListener("input", changeWidth)
        widthText6.innerHTML = "Width: " + imageElement.style.width
        widthInput6.value = parseInt(imageElement.style.width)

        function changeWidth() {
            if (selectedElement5 == divElement) {
                imageElement.style.width = widthInput6.value + "px"
                widthText6.innerHTML = "Width: " + imageElement.style.width
                customWidthInput6.value = parseInt(imageElement.style.width)
            }
        }


        customWidthInput6.addEventListener("keypress", customWidthChange)
        customWidthInput6.value = parseInt(imageElement.style.width)

        function customWidthChange(event) {
            if (event.keyCode === 13) {
                if (selectedElement5 == divElement) {
                    imageElement.style.width = customWidthInput6.value + "px"
                    widthInput6.value = parseInt(imageElement.style.width)
                    widthText6.innerHTML = "Width: " + imageElement.style.width
                }
            }
        }

        copyImageWidth.addEventListener("click", copyWidth)

        function copyWidth() {
            if (selectedElement5 == divElement) {
                copyNumber = parseInt(imageElement.style.width)
            }
        }

        pasteImageWidth.addEventListener("click", pasteWidth)

        function pasteWidth() {
            if (selectedElement5 == divElement) {
                imageElement.style.width = copyNumber + "px"
                widthInput6.value = parseInt(imageElement.style.width)
                widthText6.innerHTML = "Width: " + imageElement.style.width
                customWidthInput6.value = parseInt(imageElement.style.width)
            }
        }


        heightInput6.addEventListener("input", changeHeight)
        heightText6.innerHTML = "Height: " + imageElement.style.height
        heightInput6.value = parseInt(imageElement.style.height)

        function changeHeight() {
            if (selectedElement5 == divElement) {
                imageElement.style.height = heightInput6.value + "px"
                heightText6.innerHTML = "Height: " + imageElement.style.height
                customHeightInput6.value = parseInt(imageElement.style.height)
            }
        }

        customHeightInput6.addEventListener("keypress", customHeightChange)
        customHeightInput6.value = parseInt(imageElement.style.height)

        function customHeightChange(event) {
            if (event.keyCode === 13) {
                if (selectedElement5 == divElement) {
                    imageElement.style.height = customHeightInput6.value + "px"
                    heightInput6.value = parseInt(imageElement.style.height)
                    heightText6.innerHTML = "Height: " + imageElement.style.height
                }
            }
        }

        copyImageHeight.addEventListener("click", copyHeight)

        function copyHeight() {
            if (selectedElement5 == divElement) {
                copyNumber = parseInt(imageElement.style.height)
            }
        }

        pasteImageHeight.addEventListener("click", pasteHeight)

        function pasteHeight() {
            if (selectedElement5 == divElement) {
                imageElement.style.height = copyNumber + "px"
                heightInput6.value = parseInt(imageElement.style.height)
                heightText6.innerHTML = "Height: " + imageElement.style.height
                customHeightInput6.value = parseInt(imageElement.style.height)
            }
        }


        borderInput6.addEventListener("input", changeRadius)
        borderText6.innerHTML = "Boder Radius " + imageElement.style.borderRadius
        borderInput6.value = parseInt(imageElement.style.borderRadius)

        function changeRadius() {
            if (selectedElement5 == divElement) {
                imageElement.style.borderRadius = borderInput6.value + "px"
                borderText6.innerHTML = "Boder Radius " + imageElement.style.borderRadius
                customborderInput6.value = parseInt(imageElement.style.borderRadius)
            }
        }


        customborderInput6.addEventListener("keypress", changeCustomRadius)
        customborderInput6.value = parseInt(imageElement.style.borderRadius)

        function changeCustomRadius(event) {
            if (event.keyCode === 13) {
                if (selectedElement5 == divElement) {
                    imageElement.style.borderRadius = customborderInput6.value + "px"
                    borderText6.innerHTML = "Boder Radius " + imageElement.style.borderRadius
                    borderInput6.value = parseInt(imageElement.style.borderRadius)
                }
            }
        }

        copyImageBorder.addEventListener("click", copyBorderRadius)

        function copyBorderRadius() {
            if (selectedElement5 == divElement) {
                copyNumber = parseInt(imageElement.style.borderRadius)
            }
        }

        pasteImageBorder.addEventListener("click", pasteBorderRadius)

        function pasteBorderRadius() {
            if (selectedElement5 == divElement) {
                imageElement.style.borderRadius = copyNumber + "px"
                borderText6.innerHTML = "Boder Radius " + imageElement.style.borderRadius
                borderInput6.value = parseInt(imageElement.style.borderRadius)
                customborderInput6.value = parseInt(imageElement.style.borderRadius)
            }
        }

        copyStyleImage.addEventListener("click", copyWholeStyle)

        function copyWholeStyle() {
            if (selectedElement5 == divElement) {
                imageWidth = imageElement.style.width
                imageHeight = imageElement.style.height
                imageBorderRadius = imageElement.style.borderRadius

            }
        }

        pasteStyleImage.addEventListener("click", pasteWholeStyle)

        function pasteWholeStyle() {
            if (selectedElement5 == divElement) {

                imageElement.style.width = imageWidth
                widthInput6.value = parseInt(imageElement.style.width)
                widthText6.innerHTML = "Width: " + imageElement.style.width
                customWidthInput6.value = parseInt(imageElement.style.width)

                

                imageElement.style.height = imageHeight
                heightInput6.value = parseInt(imageElement.style.height)
                heightText6.innerHTML = "Height: " + imageElement.style.height
                customHeightInput6.value = parseInt(imageElement.style.height)


                imageElement.style.borderRadius = imageBorderRadius
                borderText6.innerHTML = "Boder Radius " + imageElement.style.borderRadius
                borderInput6.value = parseInt(imageElement.style.borderRadius)
                customborderInput6.value = parseInt(imageElement.style.borderRadius)

                
            }
        }





        backBtn5.addEventListener("click", removeBorder5)



        advancedRemove3()
        elementsPosClose()

        addToPanel5()

        advancedRemove()

        advancedRemove2()

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


        advancedRemove5()
        advancedSettings5.addEventListener("click", openAdvanceMenu)


        function openAdvanceMenu() {
            if (thePanel.contains(deleteBtn5)) {
                removeToPanel5()
                advancedAdd5()
            }
        }


        backBtnAdv5.addEventListener("click", closeAdvanced)

        function closeAdvanced() {
            addToPanel5()
            advancedRemove5()
        }

        zIndexInput.addEventListener("keypress", changeZIndex)
        zIndexInput.value = divElement.style.zIndex

        function changeZIndex(event) {
            if (event.keyCode === 13) {
                if (selectedElement5 == divElement) {
                    divElement.style.zIndex = zIndexInput.value
                }
            }
        }


    }






    function removeBorder5() {
        fakeBody.removeEventListener("click", removeBorder5)
        fakeBody.classList.add("noediting3")
        if (selectedElement5 == divElement) {
            selectedElement5 = null;
            divElement.style.border = "0px solid black";
            elementsPosShow()

            thePanel.addEventListener("click", togglePanel)

            if (thePanel.contains(backBtn5)) {
                removeToPanel5()
            }

            if (thePanel.contains(backBtnAdv5)) {
                advancedRemove5()
            }

        }
    }
}