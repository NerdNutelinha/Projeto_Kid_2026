// CONFIG DO FIREBASE (a sua que você mandou)
const firebaseConfig = {
  apiKey: "AIzaSyAkE0DEk4M2cRuGV3KUft0uChblI5OEaZY",
  authDomain: "projetokid2026.firebaseapp.com",
  projectId: "projetokid2026",
  storageBucket: "projetokid2026.firebasestorage.app",
  messagingSenderId: "27516941647",
  appId: "1:27516941647:web:faae9ea01b4aabfe84813a",
  measurementId: "G-KDS85KX6TG"
};

// INICIAR FIREBASE
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

let tentativas = 0;

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const box = document.getElementById("loginBox");

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login realizado!");
    })
    .catch((error) => {
      tentativas++;

      box.classList.add("shake");
      setTimeout(() => box.classList.remove("shake"), 300);

      if (tentativas >= 3) {
        alert("Use recuperação de senha!");
      }
    });
}

// CRIAR CONTA
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Conta criada!");
    })
    .catch((error) => {
      alert(error.message);
    });
}

// RECUPERAR SENHA
function recover() {
  const email = document.getElementById("email").value;

  auth.sendPasswordResetEmail(email)
    .then(() => {
      alert("Email de recuperação enviado!");
    })
    .catch((error) => {
      alert(error.message);
    });
}
