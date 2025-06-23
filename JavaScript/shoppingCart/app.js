  let cart = {};

      const products = [
        { id: 1, name: "Product 1", price: 25 },
        { id: 2, name: "Product 2", price: 50 },
        { id: 3, name: "Product 3", price: 75 },
      ];

      const showProducts = () => {
        let str = "<div class='row'>";
        products.forEach((value) => {
          str += `<div>
            <h3>${value.name}</h3>
            <h4>$${value.price}</h4>
            <button onclick='addToCart(${value.id})'>Add to Cart</button>
          </div>`;
        });
        str += "</div>";
        document.getElementById("root").innerHTML = str;
      };

      function addToCart(id) {
        cart = { ...cart, [id]: (cart[id] || 0) + 1 };
        showCart(); // update UI
      }

      function increment(id) {
        cart = { ...cart, [id]: cart[id] + 1 };
        showCart(); // update UI
      }

      function decrement(id) {
        if (cart[id] > 1) {
          cart = { ...cart, [id]: cart[id] - 1 };
        } else {
          delete cart[id]; // remove item if 0
        }
        showCart(); // update UI
      }

      function showCart() {
        let str = "<h2>Your Cart</h2><ul>";
        let total = 0;

        products.forEach((value) => {
          if (cart[value.id] > 0) {
            let qty = cart[value.id];
            let itemTotal = qty * value.price;
            total += itemTotal;

            str += `<li>
            Shpping Items:
            <li>
              Product Name:${value.name}
              </li>
              <li>
              <br> Price: $${value.price}
              </li> 
              <br>
              <li>
              Quantity: 
              <button onclick='decrement(${value.id})'>-</button> 
              ${qty} 
              <button onclick='increment(${value.id})'>+</button> 
              = $${itemTotal}
              </li>
            </li>`;
          }
        });
        
        str += `</ul><h3>Total: $${total}</h3>`;
        document.getElementById("root").innerHTML = str;
      }