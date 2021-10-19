/**
 * @jest-environment jsdom
 */
 const printHowLongAgo = require('./printLongAgo');

 describe('Print Long Ago', () => {
     it('Should be truthy', () => {
         expect(printHowLongAgo).toBeTruthy();
     });
 });
 