function checkForURL(inputText) {
    console.log("::: Running checkForURL :::", inputText);
    const validURL = require('valid-url');

    if (validURL.isWebUri(inputText)) {
        console.log('Valid URL');
    } else {
        console.log('Invalid URL!');
    }
}

export { checkForURL }