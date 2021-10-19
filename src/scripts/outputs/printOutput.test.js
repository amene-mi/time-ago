/**
 * @jest-environment jsdom
 */
 let showOutput;

 describe('Print out put', () => {
     let outputContainer;
     let outputPlaceholder;
 
     beforeEach(() => {
        document.body.innerHTML = `
         <div style="visibility: hidden" id="output-container">
             <p id="output-placeholder"></p>
         </div>
        `;
 
        outputContainer = document.getElementById('output-container');
        outputPlaceholder = document.getElementById('output-placeholder');
 
        showOutput = require('./printOutPut');
     });
 
     it('Should be truthy', () => {
         expect(showOutput).toBeTruthy();
 
         expect(outputPlaceholder).toBeTruthy();
         expect(outputContainer).toBeTruthy();
     });
 
     it('Should have hidden container at first', () => {
         expect(outputContainer.style.visibility).toEqual('hidden');
     })
 
     it('Should work show hello message', () => {
         showOutput('hello', outputContainer, outputPlaceholder);
         expect(outputContainer.style.visibility).toEqual('visible');
     })
 });
 