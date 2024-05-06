const buttonShowAll = document.querySelector('.show-all')
const buttonPromotion = document.querySelector('.show-promotion')
const buttonAmount = document.querySelector('.amount')
const buttonVeganFlavors = document.querySelector('.vegan-flavors')

const list = document.querySelector('ul')

function formatValue(value) {
  const newValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  return newValue
}

function showAll(productArray) {
  let mylist = ''
  productArray.forEach(product => {
    mylist += `
    <li>
      <img class="img-product" src=${product.src} />
      <p class="name">${product.name}</p>
      <p class="price">${formatValue(product.price)}</p>
    </li>
  `

    list.innerHTML = mylist
  })
}

function promotion() {
  const promotionProduct = menuOptions.map(product => ({
    ...product,
    price: product.price * 0.9
  }))

  showAll(promotionProduct)
}

function calcAll() {
  const valueAllProducts = menuOptions.reduce(
    (acc, product) => acc + product.price,
    0
  )
  list.innerHTML = `
  <li>
    <p>A soma de todos os itens do menu <br>é: ${formatValue(
      valueAllProducts
    )} </p>
  </li>`
}

function allVegans() {
  const AllProductsVegans = menuOptions.filter(
    product => product.vegan === true
  )

  showAll(AllProductsVegans)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonPromotion.addEventListener('click', promotion)
buttonAmount.addEventListener('click', calcAll)
buttonVeganFlavors.addEventListener('click', allVegans)

// console.log(buttonVeganFlavors)
