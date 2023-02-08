//Задача №1. Будильник-колыбельная
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('error text');
        }
        if (this.alarmCollection.some(alarm => alarm.id === id) ) {
            console.error("Звонок с таким id уже существует!");
            return;
        }
        this.alarmCollection.push({time,callback,id});
    }
    removeClock(id) {
        if (this.alarmCollection.some((alarm) => alarm.id === id)) {
            this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.id !== id);
            return true;
        }
        return false;
    }
    getCurrentFormattedTime() {
        let currentTime = ("0" + new Date().getHours()).slice(-2) + ":" 
            + ("0" + new Date().getMinutes()).slice(-2);
        return currentTime;
    }
    start() {
        let checkClock = (alarm) => {
            let time = this.getCurrentFormattedTime();
            console.log(time);
            if (alarm.time === time) {
                alarm.callback();
                return;
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 1000);
            console.log(this.timerId);
        }   
        return; 
    }
    stop() {
        if (this.timerId !== null) {
            this.timerId = null;
            clearInterval(this.timerId);
        }
    }
    printAlarms() {
        console.log(`Печать будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(alarm => {
            console.log(`Будильник № ${alarm.id} заведен на ${alarm.time}`);           
        });
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

