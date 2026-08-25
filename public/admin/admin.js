const API =
  'https://aqe-oauth.ishakaryayodonjosue.workers.dev'


// ==================================================
// ÉLÉMENTS PRINCIPAUX
// ==================================================

const loginScreen =
  document.getElementById('login-screen')

const cmsScreen =
  document.getElementById('cms-screen')

const loginForm =
  document.getElementById('login-form')

const passwordInput =
  document.getElementById('password')

const loginMessage =
  document.getElementById('login-message')

const logoutButton =
  document.getElementById('logout-button')


// ==================================================
// NAVIGATION ADMIN
// ==================================================

const showProductsButton =
  document.getElementById('show-products-button')

const showMenuButton =
  document.getElementById('show-menu-button')

const productsSection =
  document.getElementById('products-section')

const menuSection =
  document.getElementById('menu-section')


// ==================================================
// MENU
// ==================================================

const menuEditor =
  document.getElementById('menu-editor')

const menuMessage =
  document.getElementById('menu-message')

const saveMenuButton =
  document.getElementById('save-menu-button')

const menuCategoryButtons =
  document.querySelectorAll('.menu-category-button')


// ==================================================
// VARIABLES MENU
// ==================================================

let menuData = null

let menuSha = null

let currentMenuCategory =
  'platsDuJour'


// ==================================================
// AFFICHER LOGIN
// ==================================================

function showLogin() {

  loginScreen.classList.remove('hidden')

  cmsScreen.classList.add('hidden')

}


// ==================================================
// AFFICHER ADMIN
// ==================================================

function showAdmin() {

  loginScreen.classList.add('hidden')

  cmsScreen.classList.remove('hidden')

}


// ==================================================
// VÉRIFICATION SESSION
// ==================================================

async function checkSession() {

  try {

    const response =
      await fetch(`${API}/check-session`, {

        method: 'GET',

        credentials: 'include'

      })


    if (response.ok) {

      showAdmin()

      await loadMenu()

    } else {

      showLogin()

    }

  } catch (error) {

    console.error(
      'Erreur vérification session :',
      error
    )

    showLogin()

  }

}


// ==================================================
// CONNEXION
// ==================================================

loginForm.addEventListener(
  'submit',
  async (event) => {

    event.preventDefault()

    loginMessage.textContent =
      'Connexion...'


    try {

      const response =
        await fetch(`${API}/login`, {

          method: 'POST',

          credentials: 'include',

          headers: {
            'Content-Type':
              'application/json'
          },

          body: JSON.stringify({

            password:
              passwordInput.value

          })

        })


      const data =
        await response.json()


      if (!response.ok) {

        loginMessage.textContent =
          data.error ||
          'Mot de passe incorrect.'

        return

      }


      passwordInput.value = ''

      loginMessage.textContent = ''

      showAdmin()

      await loadMenu()

    } catch (error) {

      console.error(error)

      loginMessage.textContent =
        'Impossible de contacter le serveur.'

    }

  }
)


// ==================================================
// DÉCONNEXION
// ==================================================

if (logoutButton) {

  logoutButton.addEventListener(
    'click',
    async () => {

      try {

        await fetch(`${API}/logout`, {

          method: 'POST',

          credentials: 'include'

        })

      } catch (error) {

        console.error(
          'Erreur déconnexion :',
          error
        )

      }


      showLogin()

      passwordInput.value = ''

      loginMessage.textContent = ''

    }
  )

}


// ==================================================
// NAVIGATION PRODUITS
// ==================================================

showProductsButton.addEventListener(
  'click',
  () => {

    productsSection.classList.remove(
      'hidden'
    )

    menuSection.classList.add(
      'hidden'
    )

    showProductsButton.classList.add(
      'active'
    )

    showMenuButton.classList.remove(
      'active'
    )

  }
)


// ==================================================
// NAVIGATION MENU
// ==================================================

showMenuButton.addEventListener(
  'click',
  async () => {

    productsSection.classList.add(
      'hidden'
    )

    menuSection.classList.remove(
      'hidden'
    )

    showProductsButton.classList.remove(
      'active'
    )

    showMenuButton.classList.add(
      'active'
    )


    if (!menuData) {

      await loadMenu()

    }

  }
)


// ==================================================
// CHARGER MENU
// ==================================================

async function loadMenu() {

  menuEditor.innerHTML =
    '<p class="loading">Chargement du menu...</p>'


  try {

    const response =
      await fetch(`${API}/api/menu`, {

        method: 'GET',

        credentials: 'include'

      })


    const data =
      await response.json()


    if (!response.ok) {

      menuEditor.innerHTML =
        `<p class="error">
          ${data.error || 'Impossible de charger le menu.'}
        </p>`

      return

    }


    menuSha = data.sha


    const decodedContent =
      decodeBase64UTF8(data.content)


    menuData =
      JSON.parse(decodedContent)


    renderMenuCategory()

  } catch (error) {

    console.error(
      'Erreur chargement menu :',
      error
    )

    menuEditor.innerHTML =
      `<p class="error">
        Impossible de charger le menu.
      </p>`

  }

}


// ==================================================
// DÉCODER BASE64 UTF-8
// ==================================================

function decodeBase64UTF8(base64) {

  const binary =
    atob(base64)

  const bytes =
    Uint8Array.from(
      binary,
      char => char.charCodeAt(0)
    )

  return new TextDecoder(
    'utf-8'
  ).decode(bytes)

}


// ==================================================
// ENCODER UTF-8 EN BASE64
// ==================================================

function encodeBase64UTF8(text) {

  const bytes =
    new TextEncoder().encode(text)

  let binary = ''

  const chunkSize = 0x8000


  for (
    let i = 0;
    i < bytes.length;
    i += chunkSize
  ) {

    binary += String.fromCharCode(
      ...bytes.subarray(
        i,
        i + chunkSize
      )
    )

  }


  return btoa(binary)

}


// ==================================================
// CHANGEMENT CATÉGORIE
// ==================================================

menuCategoryButtons.forEach(
  button => {

    button.addEventListener(
      'click',
      () => {

        currentMenuCategory =
          button.dataset.category


        menuCategoryButtons.forEach(
          item => {

            item.classList.remove(
              'active'
            )

          }
        )


        button.classList.add(
          'active'
        )


        renderMenuCategory()

      }
    )

  }
)


// ==================================================
// RENDRE UNE CATÉGORIE
// ==================================================

function renderMenuCategory() {

  if (!menuData) {

    return

  }


  const category =
    menuData[currentMenuCategory]


  if (!category) {

    menuEditor.innerHTML =
      '<p class="error">Catégorie introuvable.</p>'

    return

  }


  if (
    currentMenuCategory ===
    'platsDuJour'
  ) {

    renderPlatsDuJour(category)

    return

  }


  renderStandardCategory(category)

}


// ==================================================
// PLATS DU JOUR
// ==================================================

function renderPlatsDuJour(category) {

  menuEditor.innerHTML = ''


  const title =
    document.createElement('input')

  title.className =
    'category-title-input'

  title.value =
    category.title || ''


  title.addEventListener(
    'input',
    () => {

      category.title =
        title.value

    }
  )


  const titleLabel =
    document.createElement('label')

  titleLabel.textContent =
    'Titre de la catégorie'


  menuEditor.appendChild(
    titleLabel
  )

  menuEditor.appendChild(
    title
  )


  const columns =
    document.createElement('div')

  columns.className =
    'day-columns'


  columns.appendChild(
    createDayColumn(
      category,
      'column1',
      'Colonne 1'
    )
  )


  columns.appendChild(
    createDayColumn(
      category,
      'column2',
      'Colonne 2'
    )
  )


  menuEditor.appendChild(
    columns
  )

}


// ==================================================
// COLONNE PLATS DU JOUR
// ==================================================

function createDayColumn(
  category,
  columnName,
  title
) {

  const wrapper =
    document.createElement('div')

  wrapper.className =
    'menu-column'


  const heading =
    document.createElement('h3')

  heading.textContent =
    title


  wrapper.appendChild(
    heading
  )


  const list =
    document.createElement('div')

  list.className =
    'menu-items'


  function renderItems() {

    list.innerHTML = ''


    category[columnName].forEach(
      (item, index) => {

        list.appendChild(
          createMenuItem(
            item,
            () => {

              category[columnName]
                .splice(index, 1)

              renderItems()

            },
            true
          )
        )

      }
    )

  }


  renderItems()


  const addButton =
    document.createElement('button')

  addButton.type =
    'button'

  addButton.className =
    'add-button'

  addButton.textContent =
    '+ Ajouter'


  addButton.addEventListener(
    'click',
    () => {

      category[columnName].push({

        type: 'item',

        name: '',

        price: ''

      })


      renderItems()

    }
  )


  wrapper.appendChild(list)

  wrapper.appendChild(
    addButton
  )


  return wrapper

}


// ==================================================
// CATÉGORIES NORMALES
// ==================================================

function renderStandardCategory(category) {

  menuEditor.innerHTML = ''


  const titleLabel =
    document.createElement('label')

  titleLabel.textContent =
    'Titre de la catégorie'


  const titleInput =
    document.createElement('input')

  titleInput.className =
    'category-title-input'

  titleInput.value =
    category.title || ''


  titleInput.addEventListener(
    'input',
    () => {

      category.title =
        titleInput.value

    }
  )


  menuEditor.appendChild(
    titleLabel
  )

  menuEditor.appendChild(
    titleInput
  )


  const list =
    document.createElement('div')

  list.className =
    'standard-menu-items'


  function renderItems() {

    list.innerHTML = ''


    category.items.forEach(
      (item, index) => {

        list.appendChild(
          createMenuItem(
            item,
            () => {

              category.items.splice(
                index,
                1
              )

              renderItems()

            },
            false
          )
        )

      }
    )

  }


  renderItems()


  const addButton =
    document.createElement('button')

  addButton.type =
    'button'

  addButton.className =
    'add-button'

  addButton.textContent =
    '+ Ajouter un élément'


  addButton.addEventListener(
    'click',
    () => {

      const newItem = {

        name: '',

        price: ''

      }


      // Les catégories qui utilisent
      // des descriptions peuvent en recevoir une.

      if (
        currentMenuCategory ===
          'petitDejeuner' ||
        currentMenuCategory ===
          'pizza'
      ) {

        newItem.description = ''

      }


      category.items.push(
        newItem
      )


      renderItems()

    }
  )


  menuEditor.appendChild(list)

  menuEditor.appendChild(
    addButton
  )

}


// ==================================================
// CRÉER UN ÉLÉMENT MENU
// ==================================================

function createMenuItem(
  item,
  deleteCallback,
  allowType
) {

  const card =
    document.createElement('div')

  card.className =
    'menu-item-card'


  // TYPE

  if (allowType) {

    const typeLabel =
      document.createElement('label')

    typeLabel.textContent =
      'Type'


    const typeSelect =
      document.createElement('select')


    const itemOption =
      document.createElement('option')

    itemOption.value =
      'item'

    itemOption.textContent =
      'Élément'


    const priceOption =
      document.createElement('option')

    priceOption.value =
      'price'

    priceOption.textContent =
      'Prix'


    typeSelect.appendChild(
      itemOption
    )

    typeSelect.appendChild(
      priceOption
    )


    typeSelect.value =
      item.type || 'item'


    typeSelect.addEventListener(
      'change',
      () => {

        item.type =
          typeSelect.value

      }
    )


    card.appendChild(
      typeLabel
    )

    card.appendChild(
      typeSelect
    )

  }


  // NOM

  const nameLabel =
    document.createElement('label')

  nameLabel.textContent =
    'Nom'


  const nameInput =
    document.createElement('input')

  nameInput.type =
    'text'

  nameInput.value =
    item.name || ''


  nameInput.addEventListener(
    'input',
    () => {

      item.name =
        nameInput.value

    }
  )


  card.appendChild(
    nameLabel
  )

  card.appendChild(
    nameInput
  )


  // PRIX

  const priceLabel =
    document.createElement('label')

  priceLabel.textContent =
    'Prix'


  const priceInput =
    document.createElement('input')

  priceInput.type =
    'text'

  priceInput.value =
    item.price || ''


  priceInput.addEventListener(
    'input',
    () => {

      item.price =
        priceInput.value

    }
  )


  card.appendChild(
    priceLabel
  )

  card.appendChild(
    priceInput
  )


  // DESCRIPTION

  if (
    Object.prototype.hasOwnProperty.call(
      item,
      'description'
    )
  ) {

    const descriptionLabel =
      document.createElement('label')

    descriptionLabel.textContent =
      'Description'


    const descriptionInput =
      document.createElement('textarea')

    descriptionInput.value =
      item.description || ''


    descriptionInput.addEventListener(
      'input',
      () => {

        item.description =
          descriptionInput.value

      }
    )


    card.appendChild(
      descriptionLabel
    )

    card.appendChild(
      descriptionInput
    )

  }


  // SUPPRIMER

  const deleteButton =
    document.createElement('button')

  deleteButton.type =
    'button'

  deleteButton.className =
    'delete-button'

  deleteButton.textContent =
    'Supprimer'


  deleteButton.addEventListener(
    'click',
    () => {

      if (
        confirm(
          'Supprimer cet élément ?'
        )
      ) {

        deleteCallback()

      }

    }
  )


  card.appendChild(
    deleteButton
  )


  return card

}


// ==================================================
// ENREGISTRER MENU
// ==================================================

saveMenuButton.addEventListener(
  'click',
  async () => {

    if (!menuData) {

      return

    }


    if (!menuSha) {

      menuMessage.textContent =
        'SHA du fichier introuvable.'

      return

    }


    saveMenuButton.disabled =
      true


    menuMessage.textContent =
      'Enregistrement...'


    try {

      const json =
        JSON.stringify(
          menuData,
          null,
          2
        )


      const encoded =
        encodeBase64UTF8(json)


      const response =
        await fetch(`${API}/api/menu`, {

          method: 'PUT',

          credentials: 'include',

          headers: {

            'Content-Type':
              'application/json'

          },

          body: JSON.stringify({

            content: encoded,

            sha: menuSha

          })

        })


      const data =
        await response.json()


      if (!response.ok) {

        menuMessage.textContent =
          data.error ||
          'Erreur lors de l\'enregistrement.'

        return

      }


      // Le SHA change après chaque
      // modification GitHub.

      if (data.sha) {

        menuSha =
          data.sha

      }


      menuMessage.textContent =
        'Menu enregistré avec succès.'

    } catch (error) {

      console.error(
        'Erreur sauvegarde menu :',
        error
      )

      menuMessage.textContent =
        'Impossible d’enregistrer le menu.'

    } finally {

      saveMenuButton.disabled =
        false

    }

  }
)


// ==================================================
// INITIALISATION
// ==================================================

checkSession()