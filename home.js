/* jshint esversion: 6 */

class Clock {
    constructor() {
        this.alarmList = [];
        this.alarmIncrement = 1;
        this.sleepyImage = "https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260https://t3.ftcdn.net/jpg/00/26/89/80/360_F_26898039_mly0Q4GjpW9mAlNPGKQN7jgQWwceWPl8.jpg";
        this.wakeUpImage = "https://images.pexels.com/photos/437716/pexels-photo-437716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
        this.backgroundColor = "#73c4ee";
        this.t,
            this.newAlarm = {
                title: "",
                time: ""
            },
            this.beep = new Audio("../assets/archangelIntro.mp3");
    }

    timeLoop() {
        setInterval(function () {
            this.t = new Date();
            document.getElementById('time').innerHTML = t;
        }, 1000);
    }

    //Dynamic Content
    loadDynamicContent() {
        var image = new Image(); // image
        image.src = this.sleepyImage;
        var h1Tag = document.querySelector("h1");
        h1Tag.parentNode.insertBefore(image, h1Tag.nextSibling);
        document.body.style.backgroundColor = this.backgroundColor; // background color
    }

    loadAlarmDropdowns() {
        var formDropdown = document.getElementById("timeDropdown");
        var tt = 0, ap = ['AM', 'PM'];
        for (var i = 0; tt < 24 * 60; i++) {
            var hh = Math.floor(tt / 60);
            var mm = (tt % 60);
            var newTime = ("" + ((hh == 12) ? 12 : hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)];
            var option = document.createElement("option");
            option.text = newTime;
            formDropdown.add(option)
            tt += this.alarmIncrement;
        }
    }

    setAlarm() {
        var formAlarmTime = document.getElementById("timeDropdown");

    }

    listenForAlarms() {
        // TODO
        // you can use a loop or setInterval,
        // but this function should call checkForAlarm() if the time is the first second in a minute.
        var m2 = 0;
        setInterval(function () {
            let m = t.getMinutes();
            if (m == m2) {
                let m = t.getMinutes();
                checkForAlarm();
            }
            m2 = m + 1;
            //console.log(m, m2, t.getSeconds());
        }, 1000);

    }

    checkForAlarm() {
        // use the debugger to get a good feel for everything going on here.
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        //console.log("WOHOO!");
        if (m < 10) {
            m = "0" + m;
        }
        var pmBool = false;
        if (h > 12) {
            pmBool = true;
            h -= 12;
        }
        var timeString = h + ":" + m;
        if (pmBool) {
            timeString += "PM";
        } else {
            timeString += "AM";
        }
        // TODO
        // check to see if the time string created above, matches the time that any given alarm is set to.
        // if there is a match, call the soundAlarm() function

        if (this.newAlarm.time && timeString == this.newAlarm.time) {
            toggleAlarm();
        }
    }

    toggleAlarm() {
        // TODO
        // play the audio from the html file
        // mute it if the alarm is already going
        // unmute it if the alarm is going off now
        // show/hide the div alarmSounding div
        this.beep.loop = true;
        let beep = this.beep;
        function isPlaying(beep) {
            return;
        }
        this.beep.play();
    }

    turnOff() {
        this.beep.pause();
    }

    createAlarm() {
        this.newAlarm = {
            title: alarmForm.alarmTitle.value,
            time: alarmForm.alarmTime.value
        }
        this.alarmList.push(this.newAlarm);
        this.newAlarm.displayString = this.newAlarm.title + ": " + this.newAlarm.time;

        // TODO 
        // make sure newAlarm.title is unique
        // if it is not, display an error for the user
        // if it is unique, add it to alarmList and display that in the html

        var alarms = document.getElementById('setAlarms');
        var idx = 0, a = "";
        this.alarmList.forEach(function () {
            var alarmString = `<li>${alarmList[idx].displayString}</li>`;
            a += String(alarmString);
            alarms.innerHTML = a;
            idx++;
        });
    }
} // Clock


const clock = new Clock();

window.onload = function () {
    clock.timeLoop();
    clock.loadDynamicContent();
    //loadAlarmDropdowns();
    clock.listenForAlarms();
    var btn = document.getElementById('OffBtn');
    btn.addEventListener("onclick", clock.turnOff());

}