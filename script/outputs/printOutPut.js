const outputContainer = document.getElementById('output-container');
const outputPlaceholder = document.getElementById('output-placeholder');

function showOutput(value, container = outputContainer, placeholder = outputPlaceholder) {
    if (container.style.visibility !== 'visible') {
        container.style.visibility !== 'visible';
        placeholder.innerText = value;
    } else {
        placeholder.innerText += '\n' + value;
    }
}

module.exports = showOutput;