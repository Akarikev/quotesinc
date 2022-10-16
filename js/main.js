const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "1c332e3685mshcfd0f7d6b14d66ep118331jsnc8dda433e458",
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
    },
};

fetch(
        "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2",
        options
    )
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        document.getElementById("quote").innerHTML = json[0].text;
        document.getElementById("quote-author").innerText = json[0].author;
    })
    .catch((err) => {
        console.error(err);
    });