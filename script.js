let tentativas = 0;

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  const box = document.getElementById("loginBox");
  const error = document.getElementById("error");

  // Simulação (substituir por backend real)
  if (email === "teste@gmail.com" && senha === "1234") {
    alert("Login realizado!");
  } else {
    tentativas++;
    error.innerText = "Email ou senha incorretos";

    box.classList.add("shake");
    setTimeout(() => box.classList.remove("shake"), 300);

    if (tentativas >= 3) {
      alert("Recuperação de conta enviada (simulação)");
      tentativas = 0;
    }
  }
}
