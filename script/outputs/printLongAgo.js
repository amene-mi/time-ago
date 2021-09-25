const isToday = require('../dates/today');
const howLongAgo = require('../dates/longAgo');
const showOutput = require('./printOutPut');

function printHowLongAgo(date,time){
    const seletedDate = new Date(`${date} ${time}`);
    const today = new Date();

    if (isToday(seletedDate,today)){
        showOutput(howLongAgo(seletedDate, today));
    }
}

module.exports = printHowLongAgo;