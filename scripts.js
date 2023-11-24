const form = document.querySelector("#form");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const messageTextarea = document.querySelector("textarea[name='message']");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica campo nome
    if (nameInput.value === '') {
        alert("Por favor, preencha o seu nome!\n");
        return;
    }

    // Verifica se o e-mail está preenchido e se é válido para envio
    if (emailInput.value === '' || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email corretamente!\n");
        return;
    }

    // Campos corretos, libera envio form
    form.submit();
});

// Função para validação do formato do email
function isEmailValid(email) {
    // Regex para validar o email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
// função muda cor background utilizando laço de reptção e o js para alterar o css
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    document.body.style.backgroundColor = getRandomColor();
}

setInterval(changeColor, 50);