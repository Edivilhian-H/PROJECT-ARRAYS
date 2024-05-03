const buttonShowAll = document.querySelector('.show-all')
const buttonPromotion = document.querySelector('.show-promotion')

const list = document.querySelector('ul')

function showAll(productArray) {
  let mylist = ''
  productArray.forEach(product => {
    mylist += `
    <li>
      <img class="img-product" src=${product.src} />
      <p class="name">${product.name}</p>
      <p class="price">R$${product.price}</p>
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

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonPromotion.addEventListener('click', promotion)
