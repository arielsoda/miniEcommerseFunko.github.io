//Array de productos
/* const products = [
  {
    id: 1,
    collection: "starwars",
    licence: "Star Wars",
    name: "Baby Yoda Blueball",
    description: "Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/baby-yoda-1.webp?v=1670436713777",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/baby-yoda-box.webp?v=1670436714434"
    },
    sku: "STW001001",
    price: 1799.99,
    dues: 3,
    stock: 8,
    sells: 11
  },
  {
    id: 2,
    collection: "starwars",
    licence: "Star Wars",
    name: "Boba Fett Fighter",
    description: "Figura coleccionable de Boba Fett Fighter - The Mandalorian Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/bobbafeth-1.webp?v=1670436714190",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/bobbafeth-box.webp?v=1670436715267"
    },
    sku: "STW001002",
    price: 1799.99,
    dues: 6,
    stock: 8,
    sells: 5
  },
  {
    id: 3,
    collection: "starwars",
    licence: "Star Wars",
    name: "Luke Skylwalker & Grogu",
    description: "Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/luke-1.webp?v=1670436714814",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/luke-box.webp?v=1670436715992"
    },
    sku: "STW001003",
    price: 1799.99,
    dues: 6,
    stock: 8,
    sells: 5
  },
  {
    id: 4,
    collection: "starwars",
    licence: "Star Wars",
    name: "Stormtrooper Lightsaber",
    description: "Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/trooper-1.webp?v=1670436715591",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/trooper-box.webp?v=1670436714022"
    },
    sku: "STW001004",
    price: 1799.99,
    dues: 6,
    stock: 8,
    sells: 17
  },
  {
    id: 5,
    collection: "pokemon",
    licence: "Pokemon",
    name: "Charmander Smiley",
    description: "Figura coleccionable de Charmander - Pokemon Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/charmander-1.webp?v=1670436725205",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/charmander-box.webp?v=1670436727412"
    },
    sku: "PKM001001",
    price: 1799.99,
    dues: 6,
    stock: 8,
    sells: 5
  },
  {
    id: 6,
    collection: "pokemon",
    licence: "Pokemon",
    name: "Dragonite Hi!",
    description: "Figura coleccionable de Dragonite - Pokemon Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/dragonite-1.webp?v=1670436726231",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/dragonite-box.webp?v=1670436727353"
    },
    sku: "PKM001002",
    price: 1799.99,
    dues: 3,
    stock: 8,
    sells: 13
  },
  {
    id: 7,
    collection: "pokemon",
    licence: "Pokemon",
    name: "Pidgeotto Flying",
    description: "Figura coleccionable de Pidgeotto - Pokemon Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/pidgeotto-1.webp?v=1670436726942",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/pidgeotto-box.webp?v=1670436725661"
    },
    sku: "PKM00103",
    price: 1799.99,
    dues: 9,
    stock: 8,
    sells: 17
  },
  {
    id: 8,
    collection: "pokemon",
    licence: "Pokemon",
    name: "Pikachu Smiley",
    description: "Figura coleccionable de Pikachu - Pokemon Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/pikachu-1.webp?v=1670436727769",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/pikachu-box.webp?v=1670436725966"
    },
    sku: "PKM001004",
    price: 1799.99,
    dues: 3,
    stock: 8,
    sells: 5
  },
  {
    id: 9,
    collection: "pokemon",
    licence: "Pokemon",
    name: "Vulpix Fancy",
    description: "Figura coleccionable de Vulpix - Pokemon Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/vulpix-1.webp?v=1670436728193",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/vulpix-box.webp?v=1670436728476"
    },
    sku: "PKM001005",
    price: 1799.99,
    dues: 3,
    stock: 8,
    sells: 5
  },
  {
    id: 10,
    collection: "harrypotter",
    licence: "Harry Potter",
    name: "Harry Potter & Hegwid",
    description: "Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/harry-1.webp?v=1670436737694",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/harry-box.webp?v=1670436738677"
    },
    sku: "HPT001001",
    price: 1799.99,
    dues: 3,
    stock: 8,
    sells: 5
  },
  {
    id: 11,
    collection: "harrypotter",
    licence: "Harry Potter",
    name: "Herminione Ball Dress",
    description: "Figura coleccionable de Herminione - Harry Potter Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/hermione-1.webp?v=1670436738323",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/hermione-box.webp?v=1670436737893"
    },
    sku: "HPT001002",
    price: 1799.99,
    dues: 3,
    stock: 8,
    sells: 5
  },
  {
    id: 12,
    collection: "harrypotter",
    licence: "Harry Potter",
    name: "Luna Lovegood Lion Mask",
    description: "Figura coleccionable de Luna Lovegood - Harry Potter Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/luna-1.webp?v=1670436739061",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/luna-box.webp?v=1670436739435"
    },
    sku: "HPT001003",
    price: 1799.99,
    dues: 3,
    stock: 8,
    sells: 17
  },
  {
    id: 13,
    collection: "harrypotter",
    licence: "Harry Potter",
    name: "Snape Patronus",
    description: "Figura coleccionable de Snape Patronus - Harry Potter Saga.",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/snape-patronus-1.webp?v=1670436739904",
      back: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/snape-patronus-box.webp?v=1670436738123"
    },
    sku: "HPT001004",
    price: 1799.99,
    dues: 3,
    stock: 13,
    sells: 5
  },
  {
    id: 14,
    licence: "Pokemon",
    name: "Vaporeon",
    description: "Figura coleccionable de Vaporeon",
    sku: "PKM001006",
    price: "2199.99",
    discount: "10",
    dues: "6",
    stock: "12",
    img: {
      front: "https://cdn.glitch.global/bf2cbd09-f3a6-4f2b-b6bd-e1a8b4405369/pngaaa.com-4292372.png?v=1670436726097",
      back: ""
    }
  }
] */

//Div Botones
const divButton = document.createElement('div')
document.body.append(divButton)
divButton.setAttribute('class', 'divHeader')

//Boton Productos
const allP = document.createElement("button")
allP.innerText = 'Productos'
allP.setAttribute('class', 'btn')
allP.setAttribute('onclick', 'allProductsBtn()')
divButton.append(allP)

//Boton Carrito
const cartP = document.createElement("button")
cartP.innerText = 'Carrito'
cartP.setAttribute('class', 'btn')
cartP.setAttribute('onclick', 'cartProducts()')
divButton.append(cartP)

//Boton Pokemon
const pokemon = document.createElement("button")
pokemon.innerText = 'Pokemon'
pokemon.setAttribute('class', 'btn')
pokemon.setAttribute('onclick', 'selectLicence("pokemon")')
divButton.append(pokemon)

//Boton Harry Potter
const harrypotter = document.createElement("button")
harrypotter.innerText = 'Harry Potter'
harrypotter.setAttribute('class', 'btn')
harrypotter.setAttribute('onclick', 'selectLicence("harry potter")')
divButton.append(harrypotter)

//Boton Star Wars
const starwars = document.createElement("button")
starwars.innerText = 'starwars'
starwars.setAttribute('class', 'btn')
starwars.setAttribute('onclick', 'selectLicence("star wars")')
divButton.append(starwars)

//Buscador
const label = document.createElement('label')
label.setAttribute('class', 'bLabel')
divButton.append(label)
const entrada = document.createElement('input')
entrada.setAttribute('class', 'search')
entrada.setAttribute('id', 'search')
entrada.setAttribute('name', 'search')
entrada.setAttribute('placeholder', 'Buscar...')
label.append(entrada)
//escucho evento
entrada.addEventListener('input', lChange)


async function lChange() {
  let products = await fetch('https://tan-ritzy-paint.glitch.me/products')
  products = await products.json()
  let prodcytSearch = products.filter(product => product.name.toLowerCase().includes(entrada.value))
  console.log(prodcytSearch);
  allProducts(prodcytSearch)
}


//Carrito
let cart = JSON.parse(window.localStorage.getItem('carrito'))?.length > 0 ? JSON.parse(window.localStorage.getItem('carrito')) : []
//Storage Carrito
JSON.parse(window.localStorage.getItem('carrito'))?.length > 0 ? JSON.parse(window.localStorage.getItem('carrito')) : window.localStorage.setItem('carrito', JSON.stringify(cart))

//Filtrados
let filtrados = JSON.parse(window.localStorage.getItem('filtro'))?.length > 0 ? JSON.parse(window.localStorage.getItem('filtro')) : []
//Storage Filtro
JSON.parse(window.localStorage.getItem('filtro'))?.length > 0 ? JSON.parse(window.localStorage.getItem('filtro')) : window.localStorage.setItem('filtro', JSON.stringify(filtrados))

//Page
let page = window.localStorage.getItem('page')?.length > 0 ? window.localStorage.getItem('page') : 'home'
//Storage Page
window.localStorage.getItem('page')?.length > 0 ? window.localStorage.getItem('page') : window.localStorage.setItem('page', (page))


//Div del body
let divBody = document.createElement('div')
document.body.append(divBody)
divBody.setAttribute('class', 'divBody') // 2 parametros 1- el atributo 2-nombre o valor

//Crear lista
let ul = document.createElement('ul')
divBody.append(ul)

//Agregar elementos a la lista

function allProducts(productos) {
  ul.remove();
  ul = document.createElement('ul')
  divBody.append(ul)
  for (const product of productos) {
    let li = document.createElement('li')
    li.innerHTML =
      `<h3>${product.name}<h3/>
         <img src="${product.img.front}" alt="${product.name}" />
         <p>${product.description}</P>
         <button id=${product.id} class="button" onclick=agregar(${product.id}) >Agregar</button>
         <p>Precio $${product.price}</P>`
    ul.append(li)
    li.setAttribute('id', `${product.id}`)
    li.setAttribute('class', 'class=card')
  }
}

//Funcion de agregar
async function agregar(id) {
  let product = await fetch(`https://tan-ritzy-paint.glitch.me/products/${id}`)
  product = await product.json()
  const existe = cart.some(product => product.id === id)
  if (existe) {
    alert('El producto ya fue agregado al carrito')
  } else {
    cart.push(product)
    window.localStorage.setItem('carrito', JSON.stringify(cart))
    //console.log(productBuy);
  }
}

//Funcion de mostrar el carrito
function cartProducts() {
  ul.remove();
  ul = document.createElement('ul')
  divBody.append(ul)
  for (const product of cart) {
    let li = document.createElement('li')
    li.innerHTML =
      `<h3>${product.name}<h3/>
         <img src="${product.img.front}" alt="${product.name}" />
         <p>${product.description}</P>
         <button id=${product.id} class="button" onclick=quitar(${product.id}) >Quitar</button>
         <p>Precio $${product.price}</P>`
    ul.append(li)
    li.setAttribute('id', `${product.id}`)
    li.setAttribute('class', 'class=card')
  }
  window.localStorage.setItem('page', 'carrito')
}

//Funcion quitar productos
function quitar(id) {
  cart = cart.filter(product => product.id !== id)
  window.localStorage.setItem('carrito', JSON.stringify(cart))
  cartProducts()
}

//Funcion Todos los producto
async function allProductsBtn() {
  let products = await fetch('https://tan-ritzy-paint.glitch.me/products')
  products = await products.json()
  allProducts(products)
  window.localStorage.setItem('page', 'home')
}

//Funcion de Filtrado
async function selectLicence(licence) {
  let filtrados = await fetch(`https://tan-ritzy-paint.glitch.me/category/${licence}`)
  filtrados = await filtrados.json()
  window.localStorage.setItem('filtro', JSON.stringify(filtrados))
  allProducts(filtrados)
  window.localStorage.setItem('page', 'filtrados')
}

async function go() {
  let products = await fetch('https://tan-ritzy-paint.glitch.me/products')
  products = await products.json()
  if (page == 'home') allProducts(products)
  if (page == 'carrito') cartProducts()
  if (page == 'filtrados') allProducts(filtrados)
}

go()
