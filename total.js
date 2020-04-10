// .cart-item-price__price span // lista https://store.playstation.com/pt-br/wishlist
// .price-display__price // carrinho https://store.playstation.com/pt-br/checkout

function total(className = '.price-display__price'){
	const precos = document.querySelectorAll(className)

	let total = 0

	precos.forEach(real => {

	let content = real.innerHTML.replace('R$', '').replace(',', '.')

		if(content !== 'Gratuito'){
			total = total + Number(content)
		}
	    
	})

	console.log(Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(total))	
}

total()