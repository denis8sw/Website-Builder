const xade2 = wa87xjwx
const cxowa = w00xia

cxowa.addEventListener("click", function () {
    xade2.style.display = "none"
    localStorage.setItem("dwai9x9aw", "1")
    check()
})


let qopda = 0

function check() {
    if (localStorage.getItem("dwai9x9aw")) {
        qopda = 1
        setTimeout(() => {
            qopda = 0
        }, 1000000);
    }
}

check()


xade2.style.display = "none"

function poqpx() {
    if (qopda == 0) {
        setTimeout(() => {
            xade2.style.display = ""
        }, 2000);
    }
    console.log(qopda)
}



poqpx()


setInterval(poqpx, 5000)