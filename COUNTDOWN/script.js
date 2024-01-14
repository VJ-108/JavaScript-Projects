const day = document.getElementById("day")
const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")
const give = document.querySelector(".give")
const btn = document.querySelector(".btn")
function format(item) {
    if (item<10)
        return (item = `0${item}`)
    else return item
}
function showtime() {
    let t = 1;
    const currtime = new Date()
    remdate = format(25 - currtime.getDate())
    remhour = format(24 - currtime.getHours())
    remmin = format(60 - currtime.getMinutes())
    remsec = format(60 - currtime.getSeconds())
    if (t==1){
        day.innerHTML = `${remdate}` + '<div>DAYS</div>'
        hour.innerHTML = `${remhour}` + '<div>HOURS</div>'
        min.innerHTML = `${remmin}` + '<div>MINS</div>'
        sec.innerHTML = `${remsec}` + '<div>SECS</div>'
    }
    if (remdate == 0 && remhour == 0 && remmin == 0 && remsec == 0) t=0
    if (t==0){
        give.innerHTML = "Giveaway Ended on 25 November 2023"
    }
    setTimeout(showtime,1000)
}
showtime();