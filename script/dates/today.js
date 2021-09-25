function isToday(selectedDate, today) {
    if (today.getFullYear() === selectedDate.getFullYear) {
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