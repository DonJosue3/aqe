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


function showLogin() {

  loginScreen.classList.remove("hidden");

  cmsScreen.classList.add("hidden");

}


function loadCMS() {

  loginScreen.classList.add("hidden");

  cmsScreen.classList.remove("hidden");

  /*
   * Charger Decap seulement après
   * authentification réussie.
   */

  const script =
    document.createElement("script");

  script.src =
    "https://cdn.jsdelivr.net/npm/decap-cms@3.15.1/dist/decap-cms.js";

  script.onload = () => {

    console.log(
      "Decap CMS chargé."
    );

  };

  script.onerror = () => {

    loginMessage.textContent =
      "Impossible de charger Decap CMS.";

  };

  document.body.appendChild(script);
}


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


// Vérifier automatiquement la session
checkSession();