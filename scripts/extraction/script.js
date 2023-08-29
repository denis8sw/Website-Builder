const textArea = document.getElementById("textarea")
const copyCode = document.getElementById("copycode")
var code = localStorage.getItem("Website Code");

// Split the code into an array of divs
var divs = code.split("<div");

// Add a space character between each div
for (var i = 1; i < divs.length; i++) {
  divs[i] = "<div" + divs[i];
  if (i < divs.length - 1) {
    divs[i] += "\n" + "\n";
  }
}

//defaults
const htmlDefault = '<html lang = "en">'
const theHead = '<head>'
const meta1 = '<meta charset="UTF-8">'
const meta2 = ' <meta name="viewport" content="width=device-width, initial-scale=1.0">'
const meta3 = ' <meta http-equiv="X-UA-Compatible" content="ie=edge">'
const theTitle = ' <title>My Website</title>'
const addStyle = '<style>'
const endHead = ' </head>'

const theHoversRed = '.isred:hover{' + '\n' + 'color: red !important;' + '\n' + '}'
const theHoversBlue = '.isblue:hover{' + '\n' + 'color: blue !important;' + '\n' + '}'
const theHoversOrange = '.isorange:hover{' + '\n' + 'color: orange !important;' + '\n' + '}'
const theHoversGreen = '.isgreen:hover{' + '\n' + 'color: green !important;' + '\n' + '}'
const theHoversPurple = '.ispurple:hover{' + '\n' + 'color: purple !important;' + '\n' + '}'
const theHoversGray = '.isgray:hover{' + '\n' + 'color: gray !important;' + '\n' + '}'
const theHoversAqua = '.isaqua:hover{' + '\n' + 'color: aqua !important;' + '\n' + '}'
const theHoversBrown = '.isbrown:hover{' + '\n' + 'color: brown !important;' + '\n' + '}'
const theHoversYellow = '.isyellow:hover{' + '\n' + 'color: yellow !important;' + '\n' + '}'
const theHoversBlack = '.isblack:hover{' + '\n' + 'color: black !important;' + '\n' + '}'

const theHoversRed1 = '.isred1:hover{' + '\n' + 'background-color: red !important;' + '\n' + '}'
const theHoversBlue1 = '.isblue1:hover{' + '\n' + 'background-color: blue !important;' + '\n' + '}'
const theHoversOrange1 = '.isorange1:hover{' + '\n' + 'background-color: orange !important;' + '\n' + '}'
const theHoversGreen1 = '.isgreen1:hover{' + '\n' + 'background-color: green !important;' + '\n' + '}'
const theHoversPurple1 = '.ispurple1:hover{' + '\n' + 'background-color: purple !important;' + '\n' + '}'
const theHoversGray1 = '.isgray1:hover{' + '\n' + 'background-color: gray !important;' + '\n' + '}'
const theHoversAqua1 = '.isaqua1:hover{' + '\n' + 'background-color: aqua !important;' + '\n' + '}'
const theHoversBrown1 = '.isbrown1:hover{' + '\n' + 'background-color: brown !important;' + '\n' + '}'
const theHoversYellow1 = '.isyellow1:hover{' + '\n' + 'background-color: yellow !important;' + '\n' + '}'
const theHoversBlack1 = '.isblack1:hover{' + '\n' + 'background-color: black !important;' + '\n' + '}'

const smoothAnim = '.addsmooth{' + "\n" + 'transition: all .3s !important;' + '\n' + '}'


const sizeAdd1 = '.size:hover{' + "\n" + ' transform: scale(1.1) !important;' + '\n' + '}'
const sizeAdd2 = '.size2:hover{' + "\n" + 'transform: scale(1.2) !important;' + '\n' + '}'
const sizeAdd3 = '.size3:hover{' + "\n" + 'transform: scale(1.3) !important;' + '\n' + '}'
const sizeAdd4 = '.size4:hover{' + "\n" + 'transform: scale(1.4) !important;' + '\n' + '}'

const copySmth1 = '.copyhover:hover{' + "\n" + 'background-color: rgb(95, 99, 160) !important;' + '\n' + '}'
const copySmth2 = '.wholecopy:hover{' + "\n" + 'background-color: rgb(95, 99, 160) !important;' + '\n' + '}'

const closeStyle = '</style>'
const addBody = '<body>'
const closeBody = '</body>'
const closeHtml = '</html>'


textArea.value = htmlDefault + "\n"
  + theHead + "\n"
  + meta1 + "\n"
  + meta2 + "\n"
  + meta3 + "\n"
  + theTitle + "\n"
  + addStyle + "\n"
  + theHoversRed + "\n"
  + theHoversBlue + "\n"
  + theHoversOrange + "\n"
  + theHoversGreen + "\n"
  + theHoversPurple + "\n"
  + theHoversGray + "\n"
  + theHoversAqua + "\n"
  + theHoversBrown + "\n"
  + theHoversYellow + "\n"
  + theHoversBlack + "\n"
  + theHoversRed1 + "\n"
  + theHoversBlue1 + "\n"
  + theHoversOrange1 + "\n"
  + theHoversGreen1 + "\n"
  + theHoversPurple1 + "\n"
  + theHoversGray1 + "\n"
  + theHoversAqua1 + "\n"
  + theHoversBrown1 + "\n"
  + theHoversYellow1 + "\n"
  + theHoversBlack1 + "\n"
  + smoothAnim + "\n"
  + sizeAdd1 + "\n"
  + sizeAdd2 + "\n"
  + sizeAdd3 + "\n"
  + sizeAdd4 + "\n"
  + copySmth1 + "\n"
  + copySmth2 + "\n"
  + closeStyle + "\n"
  + endHead + "\n"
  + addBody + "\n" + "\n"
  + divs.join("") + "\n" + "\n"
  + closeBody + "\n"
  + closeHtml + "\n"




copyCode.addEventListener("click", copyValue)

function copyValue() {
  navigator.clipboard.writeText(textArea.value);
  alert("Code Copied")
}
