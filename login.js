let login = () => {
    let texto = document.getElementById('texto');
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;

    if (email === 'admin@gmail.com' && senha === "12345") {
        texto.style.color = "green";
        texto.innerHTML = `Bem-vindo!`;
        document.body.style.backgroundImage = "url('lockopen.png')";
    } else {
        texto.style.color = "red";
        texto.innerHTML = `Email e/ou senha incorretos.`;
        document.body.style.backgroundImage = "url('lock.png')";
    }
}