var theBody = document.getElementById("thebody")
var thePanel = document.getElementById("thepanel")
var theInput = document.getElementById("theinput")

//elements lines
var elementS1 = document.getElementById("elements1")
var elementS2 = document.getElementById("elements2")
var elementS3 = document.getElementById("elements3")

//panelbuttons
var hideBtn = document.getElementById("hidebtn")
var posBtn = document.getElementById("posbtn")
var extractBtn = document.getElementById("extractbtn")


thePanel.addEventListener("click", togglePanel)
hideBtn.addEventListener("click", closePanel)
posBtn.addEventListener("click", changePanelpos)

//default styling
hideBtn.style.right = "3000px"
posBtn.style.right = "3000px"
extractBtn.style.right = "3000px"
theInput.style.right = "3000px"


elementS1.style.right = "3000px"
elementS2.style.right = "3000px"
elementS3.style.right = "3000px"

var isRight = false;


thePanel.addEventListener("scroll", () => {
      deleteBtn2.style.top = `${thePanel.scrollY + 755}px`; // update button position
    });



function togglePanel() {

      thePanel.classList.remove("closed")

      if (isRight == false) {


            thePanel.classList.remove("panel")
            thePanel.classList.add("panel2")

            setTimeout(() => {
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
            }, 100);
      }


      if (isRight == true) {


            thePanel.classList.remove("panel4")
            thePanel.classList.add("panel3")

            setTimeout(() => {
                  hideBtn.style.right = "5px"
                  posBtn.style.right = "90px"
                  extractBtn.style.right = "170px"
                  theInput.style.right = "0px"
                  elementS1.style.right = "0px"
                  elementS2.style.right = "0px"
                  elementS3.style.right = "0px"

                  hideBtn.style.left = ''
                  posBtn.style.left = ''
                  extractBtn.style.left= ""
                  theInput.style.left = ''
                  elementS1.style.left = ''
                  elementS2.style.left = ''
                  elementS3.style.left = ''

            }, 100);
      }
}

function closePanel() {

      thePanel.classList.add("closed")

      if (isRight == false) {
            thePanel.removeEventListener("click", togglePanel)
            thePanel.classList.add("panel")
            thePanel.classList.remove("panel2")
            hideBtn.style.right = "3000px"
            posBtn.style.right = "3000px"
            extractBtn.style.right = "3000px"
            theInput.style.right = "3000px"
            elementS1.style.right = "3000px"
            elementS2.style.right = "3000px"
            elementS3.style.right = "3000px"

            hideBtn.style.left = ''
            posBtn.style.left = ''
            extractBtn.style.left = ""
            theInput.style.left = ''
            elementS1.style.left = ''



            theInput.style.transition = "0.0s ease-out"
            elementS1.style.transition = "0.0s ease-out"
            elementS2.style.transition = "0.0s ease-out"
            elementS3.style.transition = "0.0s ease-out"
            


            setTimeout(() => {
                  thePanel.addEventListener("click", togglePanel)

                  thePanel.style.transition = "0.2s ease-out"


            }, 1);
      }


      if (isRight == true) {
            thePanel.removeEventListener("click", togglePanel)

            thePanel.classList.add("panel4")
            thePanel.classList.remove("panel3")

            hideBtn.style.left = "3000px"
            posBtn.style.left = "3000px"
            extractBtn.style.right = "3000px"
            theInput.style.left = "3000px"
            elementS1.style.left = "3000px"
            elementS2.style.left = "3000px"
            elementS3.style.left = "3000px"

            theInput.style.transition = "0.0s ease-out"
            elementS1.style.transition = "0.0s ease-out"
            elementS2.style.transition = "0.0s ease-out"
            elementS3.style.transition = "0.0s ease-out"

            setTimeout(() => {
                  thePanel.addEventListener("click", togglePanel)

                  thePanel.style.transition = "0.2s ease-out"


            }, 1);
      }

      
}


function changePanelpos() {

      posBtn.classList.toggle("right")
    


      if (posBtn.classList.contains("right")) {
            thePanel.removeEventListener("click", togglePanel)
            theBody.classList.add("hidescroll")
            thePanel.classList.remove("panel2")
            thePanel.classList.add("panel3")

            posBtn.innerHTML = "Left"

            isRight = true;
            console.log(isRight)
            removeOverflow()
      } else {
            thePanel.removeEventListener("click", togglePanel)
            thePanel.classList.add("panel2")
            thePanel.classList.remove("panel3")
            theBody.classList.remove("hidescroll")

            posBtn.innerHTML = "Right"

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
            
            isRight = false;
            removeOverflow()
            console.log(isRight)

      }

 
}

const theHtml = document.querySelector("html")

function removeOverflow() {
      if(isRight == true) {
            
            theHtml.style.overflowY = "hidden"
            theBody.style.overflowY = "hidden"
      } else {
            theHtml.style.overflowY = "visible"
            theBody.style.overflowY = "visible"
      }
}



