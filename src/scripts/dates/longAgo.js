function howLongAgo(seletedDate, today) {
    let str;
    debugger;
    if (seletedDate.getHours() === today.getHours()) {
        debugger;
        const diffInMin = today.getMinutes() - seletedDate.getMinutes();
        if (diffInMin < 5) {
            str = 'Just now';
        } else if (diffInMin < 10) {
            str = 'Around 10 minutes ago';
        } else {
            str = 
            'Today at ' + seletedDate.getHours() + ':' + seletedDate.getMinutes();
        }
    } else {
        debugger;
        str = 
        'Today at ' + seletedDate.getHours() + ':' + seletedDate.getMinutes();
    }
    return str;
}

module.exports = howLongAgo;