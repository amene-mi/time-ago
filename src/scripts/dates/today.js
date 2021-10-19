function isToday(selectedDate, today) {
    debugger;
    if (today.getYear() === selectedDate.getYear()) {
        if (today.getMonth() === selectedDate.getMonth()) {
            return today.getDate() === selectedDate.getDate();
        } else {
            return false;
        }
    } else {
        return false;
    }
}

module.exports = isToday;