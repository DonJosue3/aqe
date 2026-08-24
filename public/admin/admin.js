const API =
  "https://aqe-oauth.ishakaryayodonjosue.workers.dev";

const loginScreen =
  document.getElementById("login-screen");

const cmsScreen =
  document.getElementById("cms-screen");

const loginForm =
  document.getElementById("login-form");

const passwordInput =
  document.getElementById("password");

const loginMessage =
  document.getElementById("login-message");

let cmsLoaded = false;
let sessionCheckInterval = null;


// --------------------------------------------------
// VÉRIFIER LA SESSION
// --------------------------------------------------

async function checkSession() {

  try {

    const response = await fetch(
      `${API}/check-session`,
      {
        method: "GET",
        credentials: "include"
      }
    );

    if (response.ok) {

      loadCMS();

    } else {

      showLogin();

    }

  } catch (error) {

    console.error(error);

    showLogin();

  }
}


// --------------------------------------------------
// AFFICHER LA PAGE DE CONNEXION
// --------------------------------------------------

function showLogin() {

  loginScreen.classList.remove("hidden");

  cmsScreen.classList.add("hidden");

  passwordInput.value = "";

  loginMessage.textContent = "";

}


// --------------------------------------------------
// CHARGER DECAP
// --------------------------------------------------

function loadCMS() {

  if (cmsLoaded) {
    return;
  }

  loginScreen.classList.add("hidden");

  cmsScreen.classList.remove("hidden");

  cmsLoaded = true;

  const script =
    document.createElement("script");

  script.src =
    "https://cdn.jsdelivr.net/npm/decap-cms@3.15.1/dist/decap-cms.js";

  script.onload = () => {

    console.log(
      "Decap CMS chargé."
    );

    startSessionMonitoring();

  };

  script.onerror = () => {

    cmsLoaded = false;

    cmsScreen.classList.add("hidden");

    loginScreen.classList.remove("hidden");

    loginMessage.textContent =
      "Impossible de charger Decap CMS.";

  };

  document.body.appendChild(script);
}


// --------------------------------------------------
// SURVEILLER LA SESSION
// --------------------------------------------------

function startSessionMonitoring() {

  if (sessionCheckInterval) {
    clearInterval(sessionCheckInterval);
  }

  sessionCheckInterval = setInterval(
    async () => {

      try {

        const response = await fetch(
          `${API}/check-session`,
          {
            method: "GET",
            credentials: "include"
          }
        );

        if (!response.ok) {

          await logoutAdmin();

        }

      } catch (error) {

        console.error(
          "Erreur vérification session:",
          error
        );

      }

    },
    30000
  );
}


// --------------------------------------------------
// DÉCONNEXION ADMIN
// --------------------------------------------------

async function logoutAdmin() {

  if (sessionCheckInterval) {

    clearInterval(
      sessionCheckInterval
    );

    sessionCheckInterval = null;

  }

  try {

    await fetch(
      `${API}/logout`,
      {
        method: "POST",
        credentials: "include"
      }
    );

  } catch (error) {

    console.error(
      "Erreur déconnexion:",
      error
    );

  }

  cmsScreen.classList.add("hidden");

  loginScreen.classList.remove("hidden");

  passwordInput.value = "";

  loginMessage.textContent = "";

}


// --------------------------------------------------
// CONNEXION
// --------------------------------------------------

loginForm.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();

    loginMessage.textContent =
      "Connexion...";

    try {

      const response = await fetch(
        `${API}/login`,
        {
          method: "POST",

          credentials: "include",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            password:
              passwordInput.value
          })
        }
      );

      const data =
        await response.json();

      if (!response.ok) {

        loginMessage.textContent =
          data.error ||
          "Mot de passe incorrect.";

        return;

      }

      passwordInput.value = "";

      loginMessage.textContent = "";

      loadCMS();

    } catch (error) {

      console.error(error);

      loginMessage.textContent =
        "Impossible de contacter le serveur.";

    }

  }
);


// --------------------------------------------------
// DÉMARRAGE
// --------------------------------------------------

checkSession();