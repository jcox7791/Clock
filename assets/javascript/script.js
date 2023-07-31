const $ = (selector) => document.querySelector(selector);

const load = () => {
    createDate();
}

const date = new Date();
console.log("first call on date:", date);

const createDate = () => {
    let dateStampOpts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };
    let dateSet = Intl.DateTimeFormat("en-US", dateStampOpts).format(date);
    console.log("im the dateSet: ", dateSet);
    let DateRoot = document.getElementById('date_root');
    DateRoot.innerHTML = dateSet;
}

let timeZoneArr = Intl.supportedValuesOf('timeZone');
// console.log(timeZoneArr);

let clock = setInterval(() => { 
    // Pacific Time Zone.
    let clockStampOpts = { hour: "2-digit", minute: "2-digit", timeZone: timeZoneArr[131] };
    let clockSet = Intl.DateTimeFormat("us-EN", clockStampOpts).format(date);
    let [hours, minutes, ampm] = clockSet.split(/:|\s/);  
    clockDisplay(hours, minutes, ampm)
}, 1000);

const clockDisplay = (hr, min, ampm) => {
    $('#hour_root').textContent = hr;
    $('#minutes_root').textContent = min;
    $('#amPm_root').textContent= ampm
}
window.onload = load();