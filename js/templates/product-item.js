

export const item = (product) => {
  return `
    <li class="item" data-aos="fade-up">
    <div class="product__block js_product glass glass-m" id="${product.id}">
    <img src="./img/bg3.png" alt="" class="img-1">
    <img src="./img/bg4.png" alt="" class="img-2">
    <img src="./img/bg5.png" alt="" class="img-3">
    <img src="./img/bg6.png" alt="" class="img-4">
    <div class="product__img-box">
     <img src="${product.image}" alt="" class="img">
    </div>
    <div class="product__text-box">
    <p class="product__name js_product-name">${product.name}</p>
      <span class="product__price">$${(product.price).toFixed(2)}</span>
    </div>
    <a href="product-page.html?id=${product.id}" class="btn btn--first" style="margin: ${product.type == "ring" || product.type == "clothing" ? 'auto' : ''}">details</a>
    ${
      product.type == "ring" || product.type == "clothing" ? '' : '<button class="btn js_add-to-cart">buy</button>'
    }
    </div>
    </li>
    `
  }