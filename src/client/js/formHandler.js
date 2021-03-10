import fetch from "node-fetch";
import { url } from "node:inspector";

function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value
    Client.checkForURL(formText)
    console.log("Form Submitted");
    postData('http://localhost:8081/article', {ft: formText})
    .then( () => updateUI())

}

export { handleSubmit }

const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

const updateUI = async () => {
    const request = await fetch('http://localhost:8081/article');
    try {
        const res = await request.json();
        console.log(res)
        document.getElementById('score_tag').innerHTML = res.data.score_tag;
        document.getElementById('agreement').innerHTML = res.data.agreement;
        document.getElementById('subjectivity').innerHTML = res.data.subjectivity;
        document.getElementById('confidence').innerHTML = res.data.confidence;
        document.getElementById('irony').innerHTML = res.data.irony;
    } catch(error) {
        console.log("error", error);
    }
}
