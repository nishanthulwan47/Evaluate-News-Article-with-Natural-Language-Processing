 function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/article', {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url: formText}),
    })
    .then(res => {
        return res.json()
    })
    .then(function(res) {
        document.getElementById("bored").innerHTML = `Bored: ${res.bored}`;
        document.getElementById("relaxed").innerHTML = `Relaxed: ${res.relaxed}`
        document.getElementById("enthusiastic").innerHTML = `Enthusiastic: ${res.enthusiastic}`
        document.getElementById("refreshed").innerHTML = `Refereshed: ${res.refereshed}`
    })
}

export { handleSubmit }
