if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded' , ready)
} else {
    ready()
}

function ready(){
    var removeCardItemButtons = document.getElementsByClassName("remove-item")
    console.log(removeCardItemButtons)
    for(var i=0 ; i < removeCardItemButtons.length; i++){
    var button = removeCardItemButtons[i]
    button.addEventListener('click', removeCartItem)
        
    }

    var quantityInput = document.getElementsByClassName('cart-quantity-input')
    for(var i=0 ; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener('change' ,quantitychanged)
    }
}


function removeCartItem(event) {
    var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
}

function quantitychanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1
    }
    updateCartTotal()
}




function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-content')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-item')
    var total = 0
    for(var i=0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName ('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName ('icart-quantity-input')[0]
        var price = parseFloat(priceElement.innerHTML.replace('$',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('cart-total')[0].innerText = '$' + total
}