// Massive menu array with images, tags, and prices:
const menu = [
  // Pizzas
  {id:1,name:"Margherita Pizza",desc:"Classic cheese & tomato",price:249,img:"images/MargheritaPizza.jpg",tags:"Pizza, Veg"},
  {id:2,name:"Pepperoni Pizza",desc:"Spicy pepperoni with mozzarella",price:329,img:"images/pepperonipizza.jpg",tags:"Pizza, Non-Veg"},
  {id:3,name:"Veggie Supreme",desc:"Mixed peppers, mushrooms, olives",price:279,img:"images/veggiesupreme.jpg",tags:"Pizza, Veg"},
  {id:4,name:"BBQ Chicken Pizza",desc:"Smoky bbq chicken & onion",price:339,img:"images/BBQ Chicken Pizza.jpg",tags:"Pizza, Chicken"},
  {id:5,name:"Paneer Tikka Pizza",desc:"Spicy paneer, capsicum, cheese",price:299,img:"images/Paneer Tikka Pizza.jpg",tags:"Pizza, Paneer, Veg"},
  {id:6,name:"Farmhouse Pizza",desc:"Corns, capsicum, onion, cheese",price:279,img:"images/Farmhouse Pizza.jpg",tags:"Pizza, Veg"},
  {id:7,name:"Cheese Burst",desc:"Extra cheese explosion!",price:259,img:"images/Cheese Burst.jpg",tags:"Pizza, Veg"},

  // Burgers
  {id:8,name:"Cheese Burger",desc:"Beef patty, melted cheese",price:159,img:"images/Cheese Burger.jpg",tags:"Burger, Cheese, Non-Veg"},
  {id:9,name:"Crispy Veg Burger",desc:"Crunchy patty, fresh lettuce",price:99,img:"images/Crispy Veg Burger.jpg",tags:"Burger, Veg"},
  {id:10,name:"Chicken Burger",desc:"Juicy chicken, mayo",price:139,img:"images/Chicken Burger.jpg",tags:"Burger, Chicken"},
  {id:11,name:"Double Trouble Burger",desc:"Double patty and cheese",price:189,img:"images/Double Trouble Burger.jpg",tags:"Burger, Cheese, Non-Veg"},
  {id:12,name:"Paneer Makhani Burger",desc:"Indian twist, creamy paneer",price:149,img:"images/Paneer Makhani Burger.jpg",tags:"Burger, Paneer, Veg"},
  {id:13,name:"Aloo Tikki Burger",desc:"Indian spiced potato patty",price:89,img:"images/Aloo Tikki Burger.jpg",tags:"Burger, Veg"},
  {id:14,name:"Mexican Bean Burger",desc:"Spicy beans, salsa, veggies",price:109,img:"images/Mexican Bean Burger.jpg",tags:"Burger, Veg"},
  {id:15,name:"Peri Peri Paneer Burger",desc:"Paneer, spicy peri peri",price:139,img:"images/Peri Peri Paneer Burger.jpg",tags:"Burger, Paneer, Veg"},

  // Momos & Starters
  {id:16,name:"Veg Momos",desc:"Steamed Himalayan dumplings",price:80,img:"images/Veg Momos.jpg",tags:"Momos, Veg"},
  {id:17,name:"Chicken Momos",desc:"Juicy chicken filling",price:110,img:"images/Chicken Momos.jpg",tags:"Momos, Chicken"},
  {id:18,name:"Fried Momos",desc:"Crispy-fried veg dumplings",price:90,img:"images/Fried Momos.jpg",tags:"Momos, Veg"},
  {id:19,name:"Paneer Tikka",desc:"Charred paneer, spices",price:129,img:"images/Paneer Tikka.jpg",tags:"Starter, Paneer"},
  {id:20,name:"French Fries",desc:"Crispy golden fries",price:65,img:"images/French Fries.jpg",tags:"Starter, Veg"},

  // Breads
  {id:21,name:"Garlic Bread",desc:"Toasted, herbed bread",price:95,img:"images/Garlic Bread.jpg",tags:"Bread, Veg"},
  {id:22,name:"Cheesy Garlic Bread",desc:"Ooey-gooey cheese topping",price:115,img:"images/Cheesy Garlic Bread.jpg",tags:"Bread, Cheese, Veg"},

  // Salads
  {id:23,name:"Greek Salad",desc:"Fresh veggies, feta, olives",price:119,img:"images/Greek Salad.jpg",tags:"Salad, Veg"},
  {id:24,name:"Caesar Salad",desc:"Romaine, parmesan, croutons",price:129,img:"images/Caesar Salad.jpg",tags:"Salad, Veg"},
  {id:25,name:"Chicken Salad",desc:"Chicken, veggies, olives",price:149,img:"images/Chicken Salad.jpg",tags:"Salad, Chicken"},

  // Rice & Meals
  {id:26,name:"Veg Biryani",desc:"Fragrant spiced rice, veggies",price:179,img:"images/Veg Biryani.jpg",tags:"Rice, Veg"},
  {id:27,name:"Chicken Biryani",desc:"Aromatic chicken & rice",price:229,img:"images/Chicken Biryani.jpg",tags:"Rice, Chicken"},
  {id:28,name:"Paneer Fried Rice",desc:"Paneer stir-fried rice",price:169,img:"images/Paneer Fried Rice.jpg",tags:"Rice, Paneer, Veg"},
  {id:29,name:"Egg Fried Rice",desc:"Fluffy eggs, wok-tossed rice",price:159,img:"images/Egg Fried Rice.jpg",tags:"Rice, Egg"},
  {id:30,name:"Chicken Fried Rice",desc:"Chicken chunks in fried rice",price:179,img:"images/Chicken Fried Rice.jpg",tags:"Rice, Chicken"},
  {id:31,name:"Veg Thali",desc:"North Indian platter",price:219,img:"images/Veg Thali.jpg",tags:"Combo, Veg"},
  {id:32,name:"Chicken Thali",desc:"Indian meal combo",price:269,img:"images/Chicken Thali.jpg",tags:"Combo, Chicken"},

  // Pasta
  {id:33,name:"White Sauce Pasta",desc:"Creamy cheese penne",price:159,img:"images/White Sauce Pasta.jpg",tags:"Pasta, Cheese, Veg"},
  {id:34,name:"Red Sauce Pasta",desc:"Zesty tomato penne",price:149,img:"images/Red Sauce Pasta.jpg",tags:"Pasta, Veg"},
  {id:35,name:"Chicken Penne Pasta",desc:"Juicy chicken strips",price:179,img:"images/Chicken Penne Pasta.jpg",tags:"Pasta, Chicken"},

  // Sandwiches & Wraps
  {id:36,name:"Veg Club Sandwich",desc:"Triple layered, fresh veggies",price:109,img:"images/Veg Club Sandwich.jpg",tags:"Sandwich, Veg"},
  {id:37,name:"Grilled Chicken Sandwich",desc:"Grilled fillet, veggies",price:139,img:"images/Grilled Chicken Sandwich.jpg",tags:"Sandwich, Chicken"},
  {id:38,name:"Paneer Wrap",desc:"Paneer, sauces in wrap",price:119,img:"images/Paneer Wrap.jpg",tags:"Wrap, Paneer, Veg"},
  {id:39,name:"Chicken Kathi Roll",desc:"Spiced chicken roll",price:139,img:"images/Chicken Kathi Roll.jpg",tags:"Wrap, Chicken"},

  // Sides
  {id:40,name:"Onion Rings",desc:"Crunchy, battered onion",price:89,img:"images/Onion Rings.jpg",tags:"Starter, Veg"},
  {id:41,name:"Masala Corn",desc:"Spicy buttered corn",price:70,img:"images/Masala Corn.jpg",tags:"Starter, Veg"},
  {id:42,name:"Nachos & Salsa",desc:"Crispy nachos with dip",price:99,img:"images/Nachos & Salsa.jpg",tags:"Starter, Veg"},
  {id:43,name:"Chilli Potato",desc:"Fried potato, spicy sauce",price:109,img:"images/Chilli Potato.jpg",tags:"Starter, Veg"},
  {id:44,name:"Egg Omelette",desc:"Fluffy omelette",price:69,img:"images/Egg Omelette.jpg",tags:"Starter, Egg"},
  {id:45,name:"Chicken Nuggets",desc:"Crunchy crumb-fried chicken",price:109,img:"images/Chicken Nuggets.jpg",tags:"Starter, Chicken"},
  {id:46,name:"Paneer Fingers",desc:"Crisp fried paneer sticks",price:109,img:"images/Paneer Fingers.jpg",tags:"Starter, Paneer, Veg"},

  // Desserts
  {id:47,name:"Chocolate Brownie",desc:"Gooey classic chocolate",price:99,img:"images/Chocolate Brownie.jpg",tags:"Dessert"},
  {id:48,name:"Gulab Jamun",desc:"Indian syrup balls",price:59,img:"images/Gulab Jamun.jpg",tags:"Dessert"},
  {id:49,name:"Cheesecake",desc:"Rich and creamy slice",price:129,img:"images/Cheesecake.jpg",tags:"Dessert"},
  {id:50,name:"Ice Cream Sundae",desc:"Three scoops, toppings",price:119,img:"images/Ice Cream Sundae.jpg",tags:"Dessert"},
  {id:51,name:"Fruit Salad",desc:"Seasonal fruits, honey",price:79,img:"images/Fruit Salad.jpg",tags:"Dessert, Healthy"},

  // Beverages
  {id:52,name:"Classic Cold Coffee",desc:"Chilled, creamy",price:79,img:"images/Classic Cold Coffee.jpg",tags:"Beverage, Coffee"},
  {id:53,name:"Mango Shake",desc:"Seasonal, fresh",price:89,img:"images/Mango Shake.jpg",tags:"Beverage, Shake"},
  {id:54,name:"Sweet Lassi",desc:"Rich Punjabi yogurt",price:69,img:"images/Sweet Lassi.jpg",tags:"Beverage"},
  {id:55,name:"Masala Chai",desc:"Indian spiced tea",price:49,img:"images/Masala Chai.jpg",tags:"Beverage, Tea"},
  {id:56,name:"Fresh Lime Soda",desc:"Lemon, mint, soda",price:59,img:"images/Fresh Lime Soda.jpg",tags:"Beverage"},
  {id:57,name:"Bottled Water",desc:"Mineral drinking water",price:20,img:"images/Bottled Water.jpg",tags:"Beverage"},

  // Soups & More
  {id:58,name:"Hot & Sour Soup",desc:"Spicy tangy veg soup",price:79,img:"images/Hot & Sour Soup.jpg",tags:"Soup, Veg"},
  {id:59,name:"Sweet Corn Soup",desc:"Creamy corn, veggies",price:75,img:"images/Sweet Corn Soup.jpg",tags:"Soup, Veg"},
  {id:60,name:"Chicken Manchow Soup",desc:"Soup with chicken",price:99,img:"images/Chicken Manchow Soup.jpg",tags:"Soup, Chicken"},
];
let cart = [];

let layoutMode = 'horizontal';

function updateCartCount() {
  document.getElementById('cart-count').innerText = `(${cart.reduce((t, i) => t+i.qty, 0)})`;
}
function setLayout(mode) {
  layoutMode = mode;
  document.getElementById('menu-list').className = 'menu-list ' + mode;
   renderMenu();
}

function renderMenu() {
  const search = document.getElementById('search-bar').value.toLowerCase();
  let filtered = menu.filter(
    x => x.name.toLowerCase().includes(search)
      || x.desc.toLowerCase().includes(search)
      || x.tags.toLowerCase().includes(search)
  );

  document.getElementById('menu-list').innerHTML = filtered.length
    ? filtered.map(item =>
      `<div class="menu-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="info">
          <h2>${item.name}</h2>
          <div class="tags">${item.tags}</div>
          <p>${item.desc}</p>
          <div class="bottom">
            <span class="price">₹${item.price}</span>
            <button onclick="addToCart(${item.id})">Add</button>
          </div>
        </div>
      </div>`
    ).join('')
    : `<p style="font-size:1.2rem;padding:2.5rem;text-align:center;">No items found for "${search}"</p>`;
  updateCartCount();
}
document.getElementById('search-bar').addEventListener('input', renderMenu);

function addToCart(id) {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      let item = cart.find(i => i.id === id);
      if (item) item.qty++;
      else cart.push({id, qty: 1});
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert('Added to cart!');
    }

    function updateCartCount() {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      document.getElementById('cart-count').textContent = cart.reduce((t, i) => t + i.qty, 0);
    }
    //Initial setup
setLayout('horizontal');
    renderMenu();
   