function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if(Client.checkUrl(formText))
    console.log("::: Form Submitted :::")

    
    fetch('http://localhost:8081/article', {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-cache',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({url: formText}),
    })
    .then(res => {
        return res.json()
    })
    .then(function(res) {
        document.getElementById("Positive").innerHTML = `Positive: ${res.score_tag}`;
        document.getElementById("Neutral").innerHTML = `Neutral: ${res.confidence}`;
        document.getElementById("Negative").innerHTML = `Negative: ${res.agreement}`;
    })
}


    
export { handleSubmit }