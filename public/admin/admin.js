const API = 'https://aqe-oauth.ishakaryayodonjosue.workers.dev'

const loginScreen = document.getElementById('login-screen')

const cmsScreen = document.getElementById('cms-screen')

const loginForm = document.getElementById('login-form')

const passwordInput = document.getElementById('password')

const loginMessage = document.getElementById('login-message')

// --------------------------------------------------
// AFFICHER LA PAGE DE CONNEXION
// --------------------------------------------------

function showLogin() {
  loginScreen.classList.remove('hidden')

  cmsScreen.classList.add('hidden')
}

// --------------------------------------------------
// AFFICHER L'ADMINISTRATION
// --------------------------------------------------

function showAdmin() {
  loginScreen.classList.add('hidden')

  cmsScreen.classList.remove('hidden')
}

// --------------------------------------------------
// VÉRIFIER LA SESSION
// --------------------------------------------------

async function checkSession() {
  try {
    const response = await fetch(`${API}/check-session`, {
      method: 'GET',
      credentials: 'include',
    })

    if (response.ok) {
      showAdmin()
    } else {
      showLogin()
    }
  } catch (error) {
    console.error('Erreur vérification session :', error)

    showLogin()
  }
}

// --------------------------------------------------
// CONNEXION
// --------------------------------------------------

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  loginMessage.textContent = 'Connexion...'

  try {
    const response = await fetch(`${API}/login`, {
      method: 'POST',

      credentials: 'include',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        password: passwordInput.value,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      loginMessage.textContent = data.error || 'Mot de passe incorrect.'

      return
    }

    passwordInput.value = ''

    loginMessage.textContent = ''

    showAdmin()
  } catch (error) {
    console.error(error)

    loginMessage.textContent = 'Impossible de contacter le serveur.'
  }
})

// --------------------------------------------------
// DÉCONNEXION
// --------------------------------------------------

const logoutButton = document.getElementById('logout-button')

if (logoutButton) {
  logoutButton.addEventListener('click', async () => {
    try {
      await fetch(`${API}/logout`, {
        method: 'POST',
        credentials: 'include',
      })
    } catch (error) {
      console.error('Erreur déconnexion :', error)
    }

    // Toujours revenir à la page mot de passe
    showLogin()

    // Vider le champ
    passwordInput.value = ''

    // Effacer le message
    loginMessage.textContent = ''
  })
}
// --------------------------------------------------
// INITIALISATION
// --------------------------------------------------

checkSession()
