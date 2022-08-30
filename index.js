const minuteTarget = 17; // den skal være 17 minutter over

function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    diff = (minuteTarget - minutes + 60 ) % 60;

    var message;
    if (diff == 0) {
        message = "Nu er det Mad-Mickey tid!";
    }
    else {
        let pluralSuffix = (diff == 1) ? "" : "ter";
        message = `Der er ${diff} minut${pluralSuffix} til Mad Mickey!`;
    }

    function toClockSegment(t) {
        return t.toString().padStart(2, "0");
    }

    var timeString = toClockSegment(hours) + "." + toClockSegment(minutes) + ":" + toClockSegment(seconds);
    document.getElementById("clock").innerHTML = timeString;
    document.getElementById("diff").innerHTML = message;
    }




updateTime()
setInterval(updateTime, 1000)