let sec = 0
let min = 0
let hr = 0

let watch = document.getElementById('timer')

function twoDigit(digit) {
    if(digit<10) {
        return ('0' + digit )
    }else {
        return(digit)
    }
}


function start() {
    
    interval = setInterval(timer, 1000)
    
}

function pause() {

    clearInterval(interval)

}

function stop() {

    clearInterval(interval)
    sec = 0
    min = 0
    hr = 0
    window.alert("You've stopped at: "+ watch.innerText)
    watch.innerText='00:00:00'
}

function timer() {
    sec++

    if(sec == 60) {
        min++
        sec = 0
        if(min == 60) {
            hr++
            min = 0
        }
    }

    watch.innerText = twoDigit(hr) + ':' + twoDigit(min) + ':' + twoDigit(sec)

}