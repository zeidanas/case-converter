const toUpperCase = () => {
    document.querySelector('textarea').value = document.querySelector('textarea').value.toUpperCase();
}

const toLowerCase = () => {
    document.querySelector('textarea').value = document.querySelector('textarea').value.toLowerCase();
}

const toProperCase = () => {
    let words = document.querySelector('textarea').value.split(' ');
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    document.querySelector('textarea').value = words.join(' ');
}


const toSentenceCase = () => {
    let words = document.querySelector('textarea').value.split('. ');
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    document.querySelector('textarea').value = words.join('. ');
}

const saveFile = () => {
    let text = document.querySelector('textarea').value;
    let file = document.createElement('a');
    let fileName = document.querySelector('input').value;
    let url = URL.createObjectURL(new Blob([text], {
        type: 'text/plain'
    }));
    file.setAttribute('href', url);
    file.setAttribute('download', fileName);
    file.click();
    URL.revokeObjectURL(url);
}

const upperCaseButton = document.getElementById('upper-case');
const lowerCaseButton = document.getElementById('lower-case');
const properCaseButton = document.getElementById('proper-case');
const sentenceCaseButton = document.getElementById('sentence-case');
const saveTextFileButton = document.getElementById('save-text-file');

upperCaseButton.addEventListener('click', toUpperCase);
lowerCaseButton.addEventListener('click', toLowerCase);
properCaseButton.addEventListener('click', toProperCase);
sentenceCaseButton.addEventListener('click', toSentenceCase);
saveTextFileButton.addEventListener('click', saveFile);
