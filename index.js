const minuteTarget = 17 // den skal være 17 minutter over

function updateTime() {
    var now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()

    diff = (minuteTarget - minutes + 60 ) % 60

    var timeString = hours.toString() + "." + minutes.toString()
    document.getElementById("clock").innerHTML = timeString
    document.getElementById("diff").innerHTML = diff
    }




updateTime()
setInterval(updateTime, 1000)