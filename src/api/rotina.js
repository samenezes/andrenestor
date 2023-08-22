function dificuldade() {
    fetch('https://opentdb.com/api.php?amount=30&category=16')
        .then(response => response.json())
        .then(data => {
            const conteudo = document.querySelector("#conteudo")
            conteudo.innerHTML += `<h1>Pergunta: ${data.question} </h1>
                                        <h2>Dificuldade: ${data.difficulty}</h2>`
        });
}

export { dificuldade }

