// Function to add item to cart
const addToCart = async (event) => {

    // Variables for all the the product information on the wishlist page
    if (event.target.hasAttribute('data-id')) {
        const productId = event.target.getAttribute('data-id');

        const userId = document.getElementById("user-id").value

        const response = await fetch(`/api/cart/add/${userId}`, {
            method: 'POST',
            body: JSON.stringify({
                quantity: 1,
                user_id: userId,
                product_id: productId
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            alert('Item added to cart');
            document.location.replace('/');
        } else {
            alert('Failed to add to cart');
        }

    }
}




const addToCartButton = document.querySelectorAll(".btn-styling2");
addToCartButton.forEach(btn => {
    btn.addEventListener('click', addToCart);
});