const howLongAgo = require('./longAgo');

describe('How long ago time', () => {
    let today;
    let selectedDate;

    beforeEach(() => {
        today = new Date();
        selectedDate = new Date(today);
    });

    it('Should return just now', () => {
        expect(howLongAgo(selectedDate, today)).toEqual('Just now');
    });

    it('Should return around 10 minutes', () => {
        selectedDate.setMinutes(selectedDate.getMinutes() - 5);
        expect(howLongAgo(selectedDate, today)).toEqual('Around 10 minutes ago');
    });

    it('Should return Today at', () => {
        selectedDate.setMinutes(selectedDate.getMinutes() - 12);
        expect(howLongAgo(selectedDate, today)).toContain('Today at');
    });
})
