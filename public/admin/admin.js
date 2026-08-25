const API =
  'https://aqe-oauth.ishakaryayodonjosue.workers.dev'


// =========================================
// ELEMENTS
// =========================================

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

const productsList =
  document.getElementById('products-list')

const productsLoading =
  document.getElementById('products-loading')

const cmsMessage =
  document.getElementById('cms-message')

const addProductButton =
  document.getElementById('add-product-button')

const productFormContainer =
  document.getElementById('product-form-container')

const productForm =
  document.getElementById('product-form')

const productFormTitle =
  document.getElementById('product-form-title')

const cancelProductButton =
  document.getElementById('cancel-product-button')

const cancelProductButtonBottom =
  document.getElementById(
    'cancel-product-button-bottom'
  )

const productId =
  document.getElementById('product-id')

const productName =
  document.getElementById('product-name')

const productCategory =
  document.getElementById('product-category')

const productLabel =
  document.getElementById('product-label')

const productPrice =
  document.getElementById('product-price')

const productImage =
  document.getElementById('product-image')

const productSize =
  document.getElementById('product-size')

const productDescription =
  document.getElementById(
    'product-description'
  )


// =========================================
// VARIABLES
// =========================================

let products = []

let productsSha = null


// =========================================
// AFFICHER LOGIN
// =========================================

function showLogin() {

  loginScreen.classList.remove('hidden')

  cmsScreen.classList.add('hidden')

}


// =========================================
// AFFICHER ADMIN
// =========================================

function showAdmin() {

  loginScreen.classList.add('hidden')

  cmsScreen.classList.remove('hidden')

}


// =========================================
// MESSAGE CMS
// =========================================

function showCmsMessage(message) {

  cmsMessage.textContent = message

}


function clearCmsMessage() {

  cmsMessage.textContent = ''

}


// =========================================
// VERIFIER SESSION
// =========================================

async function checkSession() {

  try {

    const response =
      await fetch(
        `${API}/check-session`,
        {
          method: 'GET',
          credentials: 'include',
        }
      )


    const data =
      await response.json()


    if (
      response.ok &&
      data.authenticated === true
    ) {

      showAdmin()

      await loadProducts()

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


// =========================================
// CONNEXION
// =========================================

loginForm.addEventListener(
  'submit',
  async (event) => {

    event.preventDefault()


    loginMessage.textContent =
      'Connexion...'


    try {

      const response =
        await fetch(
          `${API}/login`,
          {
            method: 'POST',

            credentials: 'include',

            headers: {
              'Content-Type':
                'application/json',
            },

            body: JSON.stringify({
              password:
                passwordInput.value,
            }),
          }
        )


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


      await loadProducts()

    } catch (error) {

      console.error(error)

      loginMessage.textContent =
        'Impossible de contacter le serveur.'

    }

  }
)


// =========================================
// DECONNEXION
// =========================================

if (logoutButton) {

  logoutButton.addEventListener(
    'click',
    async () => {

      try {

        await fetch(
          `${API}/logout`,
          {
            method: 'POST',
            credentials: 'include',
          }
        )

      } catch (error) {

        console.error(
          'Erreur déconnexion :',
          error
        )

      }


      showLogin()


      passwordInput.value = ''

      loginMessage.textContent = ''

      products = []

      productsSha = null

      productsList.innerHTML = ''

    }
  )

}


// =========================================
// CHARGER PRODUCTS.JSON
// =========================================

async function loadProducts() {

  productsLoading.classList.remove(
    'hidden'
  )

  productsList.innerHTML = ''

  clearCmsMessage()


  try {

    const response =
      await fetch(
        `${API}/api/products`,
        {
          method: 'GET',
          credentials: 'include',
        }
      )


    const data =
      await response.json()


    if (!response.ok) {

      if (response.status === 401) {

        showLogin()

        return

      }

      throw new Error(
        data.error ||
        'Erreur lors du chargement.'
      )

    }


    productsSha = data.sha


    const decodedContent =
      decodeBase64(data.content)


    const json =
      JSON.parse(decodedContent)


    products =
      Array.isArray(json.products)
        ? json.products
        : []


    renderProducts()

  } catch (error) {

    console.error(error)

    showCmsMessage(
      'Impossible de charger les produits.'
    )

  } finally {

    productsLoading.classList.add(
      'hidden'
    )

  }

}


// =========================================
// BASE64 -> TEXTE
// =========================================

function decodeBase64(base64) {

  const binary =
    atob(
      base64.replace(/\s/g, '')
    )


  const bytes =
    Uint8Array.from(
      binary,
      character => character.charCodeAt(0)
    )


  return new TextDecoder(
    'utf-8'
  ).decode(bytes)

}


// =========================================
// TEXTE -> BASE64
// =========================================

function encodeBase64(text) {

  const bytes =
    new TextEncoder().encode(text)


  let binary = ''


  for (
    let i = 0;
    i < bytes.length;
    i++
  ) {

    binary += String.fromCharCode(
      bytes[i]
    )

  }


  return btoa(binary)

}


// =========================================
// AFFICHER PRODUITS
// =========================================

function renderProducts() {

  productsList.innerHTML = ''


  if (products.length === 0) {

    productsList.innerHTML = `
      <div class="empty-products">
        Aucun produit disponible.
      </div>
    `

    return

  }


  products.forEach(
    product => {

      const card =
        document.createElement('article')


      card.className =
        'product-card'


      const image =
        product.image
          ? `
            <img
              class="product-image"
              src="${escapeAttribute(
                product.image
              )}"
              alt="${escapeAttribute(
                product.name
              )}"
              onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='block';
              "
            >
            <div
              class="product-no-image"
              style="display:none;"
            >
              Image introuvable
            </div>
          `
          : `
            <div class="product-no-image">
              Aucune image
            </div>
          `


      card.innerHTML = `

        <div class="product-image-container">
          ${image}
        </div>

        <div class="product-content">

          <div class="product-category">
            ${escapeHtml(
              product.label ||
              product.category ||
              ''
            )}
          </div>

          <h3 class="product-name">
            ${escapeHtml(
              product.name || ''
            )}
          </h3>

          <div class="product-price">
            ${escapeHtml(
              product.price || ''
            )}
          </div>

          <div class="product-description">
            ${escapeHtml(
              product.description || ''
            )}
          </div>

          <div class="product-actions">

            <button
              class="edit-button"
              data-action="edit"
              data-id="${product.id}"
            >
              Modifier
            </button>

            <button
              class="delete-button"
              data-action="delete"
              data-id="${product.id}"
            >
              Supprimer
            </button>

          </div>

        </div>

      `


      productsList.appendChild(card)

    }
  )

}


// =========================================
// SECURITE HTML
// =========================================

function escapeHtml(value) {

  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

}


function escapeAttribute(value) {

  return escapeHtml(value)

}


// =========================================
// CLICS PRODUITS
// =========================================

productsList.addEventListener(
  'click',
  event => {

    const button =
      event.target.closest('button')


    if (!button) {
      return
    }


    const id =
      Number(button.dataset.id)


    if (
      button.dataset.action === 'edit'
    ) {

      editProduct(id)

    }


    if (
      button.dataset.action === 'delete'
    ) {

      deleteProduct(id)

    }

  }
)


// =========================================
// OUVRIR AJOUT
// =========================================

addProductButton.addEventListener(
  'click',
  () => {

    openProductForm()

  }
)


// =========================================
// OUVRIR FORMULAIRE
// =========================================

function openProductForm(
  product = null
) {

  productForm.reset()


  if (product) {

    productFormTitle.textContent =
      'Modifier le produit'


    productId.value =
      product.id


    productName.value =
      product.name || ''


    productCategory.value =
      product.category || ''


    productLabel.value =
      product.label || ''


    productPrice.value =
      product.price || ''


    productImage.value =
      product.image || ''


    productSize.value =
      product.size || 'short'


    productDescription.value =
      product.description || ''

  } else {

    productFormTitle.textContent =
      'Ajouter un produit'


    productId.value = ''

    productSize.value = 'short'

  }


  productFormContainer.classList.remove(
    'hidden'
  )


  productName.focus()

}


// =========================================
// FERMER FORMULAIRE
// =========================================

function closeProductForm() {

  productFormContainer.classList.add(
    'hidden'
  )

  productForm.reset()

  productId.value = ''

}


cancelProductButton.addEventListener(
  'click',
  closeProductForm
)


cancelProductButtonBottom.addEventListener(
  'click',
  closeProductForm
)


// =========================================
// MODIFIER PRODUIT
// =========================================

function editProduct(id) {

  const product =
    products.find(
      item => Number(item.id) === id
    )


  if (!product) {

    showCmsMessage(
      'Produit introuvable.'
    )

    return

  }


  openProductForm(product)

}


// =========================================
// AJOUT / MODIFICATION
// =========================================

productForm.addEventListener(
  'submit',
  async event => {

    event.preventDefault()


    const idValue =
      productId.value


    const productData = {

      name:
        productName.value.trim(),

      category:
        productCategory.value.trim(),

      label:
        productLabel.value.trim(),

      price:
        productPrice.value.trim(),

      description:
        productDescription.value.trim(),

      image:
        productImage.value.trim(),

      size:
        productSize.value

    }


    if (
      !productData.name ||
      !productData.category ||
      !productData.label ||
      !productData.price ||
      !productData.image
    ) {

      alert(
        'Veuillez remplir tous les champs obligatoires.'
      )

      return

    }


    const saveButton =
      document.getElementById(
        'save-product-button'
      )


    saveButton.disabled = true

    saveButton.textContent =
      'Enregistrement...'


    try {

      if (idValue) {

        const id =
          Number(idValue)


        const index =
          products.findIndex(
            item =>
              Number(item.id) === id
          )


        if (index === -1) {

          throw new Error(
            'Produit introuvable.'
          )

        }


        products[index] = {

          ...products[index],

          ...productData,

          id: id

        }

      } else {

        const newId =
          getNextProductId()


        products.push({

          id: newId,

          ...productData

        })

      }


      await saveProducts()


      closeProductForm()

      renderProducts()


      showCmsMessage(
        'Produit enregistré avec succès.'
      )

    } catch (error) {

      console.error(error)

      showCmsMessage(
        error.message ||
        'Erreur lors de l’enregistrement.'
      )

    } finally {

      saveButton.disabled = false

      saveButton.textContent =
        'Enregistrer'

    }

  }
)


// =========================================
// PROCHAIN ID
// =========================================

function getNextProductId() {

  if (products.length === 0) {
    return 1
  }


  return Math.max(
    ...products.map(
      product =>
        Number(product.id) || 0
    )
  ) + 1

}


// =========================================
// SUPPRIMER PRODUIT
// =========================================

async function deleteProduct(id) {

  const product =
    products.find(
      item => Number(item.id) === id
    )


  if (!product) {
    return
  }


  const confirmed =
    confirm(
      `Voulez-vous vraiment supprimer "${product.name}" ?`
    )


  if (!confirmed) {
    return
  }


  try {

    products =
      products.filter(
        item =>
          Number(item.id) !== id
      )


    await saveProducts()


    renderProducts()


    showCmsMessage(
      'Produit supprimé avec succès.'
    )

  } catch (error) {

    console.error(error)

    showCmsMessage(
      error.message ||
      'Erreur lors de la suppression.'
    )

  }

}


// =========================================
// SAUVEGARDER PRODUCTS.JSON
// =========================================

async function saveProducts() {

  const content =
    JSON.stringify(
      {
        products: products
      },
      null,
      2
    )


  const encodedContent =
    encodeBase64(content)


  const response =
    await fetch(
      `${API}/api/products`,
      {
        method: 'PUT',

        credentials: 'include',

        headers: {
          'Content-Type':
            'application/json'
        },

        body: JSON.stringify({

          content:
            encodedContent,

          sha:
            productsSha

        })

      }
    )


  const data =
    await response.json()


  if (!response.ok) {

    if (
      response.status === 401
    ) {

      showLogin()

    }


    throw new Error(
      data.details ||
      data.error ||
      'Erreur GitHub.'
    )

  }


  if (data.sha) {

    productsSha =
      data.sha

  }

}


// =========================================
// INITIALISATION
// =========================================

checkSession()