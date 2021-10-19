const form = document.getElementById('form');
const printHowLongAgo = require('../outputs/printLongAgo');

function onBtn(value=form){
    debugger;
    if(value.elements[0].value && value.elements[1].value){
        printHowLongAgo(value.elements[0].value,form.elements[1].value);
    }
}

module.exports = onBtn;