// Massive menu array with images, tags, and prices:
const menu = [
  // Pizzas
  {id:1,name:"Margherita Pizza",desc:"Classic cheese & tomato",price:249,img:"https://simplyhomecooked.com/wp-content/uploads/2023/04/Margherita-Pizza-3.jpg",tags:"Pizza, Veg"},
  {id:2,name:"Pepperoni Pizza",desc:"Spicy pepperoni with mozzarella",price:329,img:"https://www.allrecipes.com/thmb/iXKYAl17eIEnvhLtb4WxM7wKqTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg",tags:"Pizza, Non-Veg"},
  {id:3,name:"Veggie Supreme",desc:"Mixed peppers, mushrooms, olives",price:279,img:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.4bbddf98eccea9929192db1494ba3678.1.jpg",tags:"Pizza, Veg"},
  {id:4,name:"BBQ Chicken Pizza",desc:"Smoky bbq chicken & onion",price:339,img:"https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg",tags:"Pizza, Chicken"},
  {id:5,name:"Paneer Tikka Pizza",desc:"Spicy paneer, capsicum, cheese",price:299,img:"https://sinfullyspicy.com/wp-content/uploads/2021/02/13-5.jpg",tags:"Pizza, Paneer, Veg"},
  {id:6,name:"Farmhouse Pizza",desc:"Corns, capsicum, onion, cheese",price:279,img:"https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/f9701b4e9e6aae4febe5e52c9f5e36f9",tags:"Pizza, Veg"},
  {id:7,name:"Cheese Burst",desc:"Extra cheese explosion!",price:259,img:"https://i.pinimg.com/736x/eb/ee/e8/ebeee82a42e0428d299f86ab74faf77a.jpg",tags:"Pizza, Veg"},

  // Burgers
  {id:8,name:"Cheese Burger",desc:"Beef patty, melted cheese",price:159,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFExWftHhBK07UkiHZykqbo1RFUZEa2ecFgg&s",tags:"Burger, Cheese, Non-Veg"},
  {id:9,name:"Crispy Veg Burger",desc:"Crunchy patty, fresh lettuce",price:99,img:"https://images.slurrp.com/prod/recipe_images/transcribe/snack/Vegetable-Burger.webp",tags:"Burger, Veg"},
  {id:10,name:"Chicken Burger",desc:"Juicy chicken, mayo",price:139,img:"https://images.immediate.co.uk/production/volatile/sites/30/2025/04/Crispiest-buttermilk-fried-chicken-burgers-90854e5.jpg",tags:"Burger, Chicken"},
  {id:11,name:"Double Trouble Burger",desc:"Double patty and cheese",price:189,img:"https://i.pinimg.com/564x/c4/e0/16/c4e016e086ac4f08baa43575930abc66.jpg",tags:"Burger, Cheese, Non-Veg"},
  {id:12,name:"Paneer Makhani Burger",desc:"Indian twist, creamy paneer",price:149,img:"https://cdn.dotpe.in/longtail/item_thumbnails/6385438/VkOXe19x.webp",tags:"Burger, Paneer, Veg"},
  {id:13,name:"Aloo Tikki Burger",desc:"Indian spiced potato patty",price:89,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRip3yK55pCqgfzskSLERlbcOQdf212McXkCw&s",tags:"Burger, Veg"},
  {id:14,name:"Mexican Bean Burger",desc:"Spicy beans, salsa, veggies",price:109,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcuYC6DhOqO3pG3B6j94Ja2varBGfIlTZDw&s",tags:"Burger, Veg"},
  {id:15,name:"Peri Peri Paneer Burger",desc:"Paneer, spicy peri peri",price:139,img:"https://cdn.uengage.io/uploads/47038/image-615821-1715947097.jpeg",tags:"Burger, Paneer, Veg"},

  // Momos & Starters
  {id:16,name:"Veg Momos",desc:"Steamed Himalayan dumplings",price:80,img:"https://newhongkong.in/wp-content/uploads/2020/12/Easy-Steamed-Vegetable-Dumplings.jpeg",tags:"Momos, Veg"},
  {id:17,name:"Chicken Momos",desc:"Juicy chicken filling",price:110,img:"https://static.toiimg.com/thumb/53281477.cms?width=800&height=800&imgsize=1884587",tags:"Momos, Chicken"},
  {id:18,name:"Fried Momos",desc:"Crispy-fried veg dumplings",price:90,img:"http://salasdaily.com/cdn/shop/products/chicken_fried_momos.webp?v=1667534046",tags:"Momos, Veg"},
  {id:19,name:"Paneer Tikka",desc:"Charred paneer, spices",price:129,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2WY2YmIJtXrpmDToEHwJIOAcyBefjpFwXg&s",tags:"Starter, Paneer"},
  {id:20,name:"French Fries",desc:"Crispy golden fries",price:65,img:"https://sausagemaker.com/wp-content/uploads/Homemade-French-Fries_8.jpg",tags:"Starter, Veg"},

  // Breads
  {id:21,name:"Garlic Bread",desc:"Toasted, herbed bread",price:95,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuh6GS3uRlikeCkjT9t_eLW2v0yy2yGk1rrQ&s",tags:"Bread, Veg"},
  {id:22,name:"Cheesy Garlic Bread",desc:"Ooey-gooey cheese topping",price:115,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYguDalfBpzHzjM_1vYY3Mj8ynDN3jSK8ikQ&s",tags:"Bread, Cheese, Veg"},

  // Salads
  {id:23,name:"Greek Salad",desc:"Fresh veggies, feta, olives",price:119,img:"https://www.schwartz.co.uk/-/media/project/oneweb/schwartz/recipes/recipe_image_update/march_18_2025/greek_salad_800x800.webp?rev=af320a79b57b4c36aefcac5edd04c228&vd=20250325T174436Z&extension=webp&hash=2C60D2D80B3C50B265008836A0858C5E",tags:"Salad, Veg"},
  {id:24,name:"Caesar Salad",desc:"Romaine, parmesan, croutons",price:129,img:"https://www.maggi.co.uk/sites/default/files/srh_recipes/3ee1954a36009dd59be2d362a2a44cf6.jpg",tags:"Salad, Veg"},
  {id:25,name:"Chicken Salad",desc:"Chicken, veggies, olives",price:149,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDdc35pP7gveCy07EQyuWfKc80AiYDb9Gxw&s",tags:"Salad, Chicken"},

  // Rice & Meals
  {id:26,name:"Veg Biryani",desc:"Fragrant spiced rice, veggies",price:179,img:"https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-2.jpg",tags:"Rice, Veg"},
  {id:27,name:"Chicken Biryani",desc:"Aromatic chicken & rice",price:229,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcdlgGqTXb-qtbAK_WgscTy2TimgPjzn9fw&s",tags:"Rice, Chicken"},
  {id:28,name:"Paneer Fried Rice",desc:"Paneer stir-fried rice",price:169,img:"https://www.whiskaffair.com/wp-content/uploads/2025/02/Schezwan-Paneer-Fried-Rice-2-3.jpg",tags:"Rice, Paneer, Veg"},
  {id:29,name:"Egg Fried Rice",desc:"Fluffy eggs, wok-tossed rice",price:159,img:"https://i.ytimg.com/vi/gwk3gM05zsQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAWbLX6_yqMfgJgMoDRFI-piPhmGw",tags:"Rice, Egg"},
  {id:30,name:"Chicken Fried Rice",desc:"Chicken chunks in fried rice",price:179,img:"https://www.whiskaffair.com/wp-content/uploads/2021/11/Teriyaki-Chicken-Fried-Rice-3-3.jpg",tags:"Rice, Chicken"},
  {id:31,name:"Veg Thali",desc:"North Indian platter",price:219,img:"https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-112353618/112353618.jpg",tags:"Combo, Veg"},
  {id:32,name:"Chicken Thali",desc:"Indian meal combo",price:269,img:"https://previews.123rf.com/images/mahiryan/mahiryan2107/mahiryan210701420/173177564-indian-non-veg-thali-food-platter-consists-variety-of-veggies-chicken-meat-lentils-sweet-dish.jpg",tags:"Combo, Chicken"},

  // Pasta
  {id:33,name:"White Sauce Pasta",desc:"Creamy cheese penne",price:159,img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2024/04/white-sauce-pasta.jpg",tags:"Pasta, Cheese, Veg"},
  {id:34,name:"Red Sauce Pasta",desc:"Zesty tomato penne",price:149,img:"https://aartimadan.com/wp-content/uploads/2020/09/red-sauce-pasta-blog-4.jpg",tags:"Pasta, Veg"},
  {id:35,name:"Chicken Penne Pasta",desc:"Juicy chicken strips",price:179,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWIlIflWmB76u08SIYyY-jPNv-OF3DqOMDA&s",tags:"Pasta, Chicken"},

  // Sandwiches & Wraps
  {id:36,name:"Veg Club Sandwich",desc:"Triple layered, fresh veggies",price:109,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWouzLuIBjtVK4DLn5x-LTqa2fmSs84QmTg&s",tags:"Sandwich, Veg"},
  {id:37,name:"Grilled Chicken Sandwich",desc:"Grilled fillet, veggies",price:139,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQCVozsFn2fa2ODSbLpXxzrdsGh9YBMdKKg&s",tags:"Sandwich, Chicken"},
  {id:38,name:"Paneer Wrap",desc:"Paneer, sauces in wrap",price:119,img:"https://www.chefkunalkapur.com/wp-content/uploads/2023/08/DSC04081-scaled.jpg?v=1692276994",tags:"Wrap, Paneer, Veg"},
  {id:39,name:"Chicken Kathi Roll",desc:"Spiced chicken roll",price:139,img:"https://madscookhouse.com/wp-content/uploads/2021/02/Chicken-Kathi-Roll-500x500.jpg",tags:"Wrap, Chicken"},

  // Sides
  {id:40,name:"Onion Rings",desc:"Crunchy, battered onion",price:89,img:"http://preppykitchen.com/wp-content/uploads/2025/04/Onion-Rings-Recipe-Card.jpg",tags:"Starter, Veg"},
  {id:41,name:"Masala Corn",desc:"Spicy buttered corn",price:70,img:"https://static.toiimg.com/thumb/66085139.cms?width=1200&height=900",tags:"Starter, Veg"},
  {id:42,name:"Nachos & Salsa",desc:"Crispy nachos with dip",price:99,img:"https://static.toiimg.com/thumb/84469219.cms?imgsize=322269&width=800&height=800",tags:"Starter, Veg"},
  {id:43,name:"Chilli Potato",desc:"Fried potato, spicy sauce",price:109,img:"http://mydelicious-recipes.com/home/images/217_735_820/mydelicious-recipes-honey-chilli-potato",tags:"Starter, Veg"},
  {id:44,name:"Egg Omelette",desc:"Fluffy omelette",price:69,img:"https://c.ndtvimg.com/2020-07/3cqv032o_omelette_625x300_23_July_20.jpg",tags:"Starter, Egg"},
  {id:45,name:"Chicken Nuggets",desc:"Crunchy crumb-fried chicken",price:109,img:"https://www.allrecipes.com/thmb/Dw_WFOvCds43ksPxkrE60qxcwSk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-8849-HomemadeChickenNuggets-beauty-4x3-ca915ee936054272af1b506181923c7f.jpg",tags:"Starter, Chicken"},
  {id:46,name:"Paneer Fingers",desc:"Crisp fried paneer sticks",price:109,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnChdWgSLp5avKPxdsn2_dE6qrV3EYh4-gFQ&s",tags:"Starter, Paneer, Veg"},

  // Desserts
  {id:47,name:"Chocolate Brownie",desc:"Gooey classic chocolate",price:99,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYMLPCXOeSQwLdcmldOILUS9j-y8-LJFpWg&s",tags:"Dessert"},
  {id:48,name:"Gulab Jamun",desc:"Indian syrup balls",price:59,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aJrkMZfZWaRkqQu36Y9TBzYlCrkKHvy7mw&s",tags:"Dessert"},
  {id:49,name:"Cheesecake",desc:"Rich and creamy slice",price:129,img:"https://static01.nyt.com/images/2021/11/02/dining/dg-Tall-and-Creamy-Cheesecake-copy/dg-Tall-and-Creamy-Cheesecake-jumbo.jpg",tags:"Dessert"},
  {id:50,name:"Ice Cream Sundae",desc:"Three scoops, toppings",price:119,img:"https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11.jpg",tags:"Dessert"},
  {id:51,name:"Fruit Salad",desc:"Seasonal fruits, honey",price:79,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmO4JADXCOtgTEI_3-L-aEiBOHEKgqfWcbw&s",tags:"Dessert, Healthy"},

  // Beverages
  {id:52,name:"Classic Cold Coffee",desc:"Chilled, creamy",price:79,img:"https://ragecoffee.com/cdn/shop/articles/classic-cafe-style-cold-coffee-for-cooler-summers-477231_1200x1200.jpg?v=1660763235",tags:"Beverage, Coffee"},
  {id:53,name:"Mango Shake",desc:"Seasonal, fresh",price:89,img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-milkshake-recipe.jpg",tags:"Beverage, Shake"},
  {id:54,name:"Sweet Lassi",desc:"Rich Punjabi yogurt",price:69,img:"https://www.felicityplus.com/wp-content/uploads/2020/10/sweet-lassi.jpg",tags:"Beverage"},
  {id:55,name:"Masala Chai",desc:"Indian spiced tea",price:49,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jP4Dd4hpBtcN6k02caLWC5Y67-i5Ps6n2w&s",tags:"Beverage, Tea"},
  {id:56,name:"Fresh Lime Soda",desc:"Lemon, mint, soda",price:59,img:"https://rumkisgoldenspoon.com/wp-content/uploads/2023/06/Sweet-lime-soda-recipe.jpg",tags:"Beverage"},
  {id:57,name:"Bottled Water",desc:"Mineral drinking water",price:20,img:"https://thegoodshoppingguide.com/app/uploads/2022/05/Fast-Fashion-and-Ethical-Clothing-The-Good-Shopping-Guide-20.jpg",tags:"Beverage"},

  // Soups & More
  {id:58,name:"Hot & Sour Soup",desc:"Spicy tangy veg soup",price:79,img:"https://littlespoonfarm.com/wp-content/uploads/2021/10/Hot-and-sour-soup-recipe.jpg",tags:"Soup, Veg"},
  {id:59,name:"Sweet Corn Soup",desc:"Creamy corn, veggies",price:75,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxdHZc2mtzSdsj5XzYdAvJsgG_bdyZhVpCw&s",tags:"Soup, Veg"},
  {id:60,name:"Chicken Manchow Soup",desc:"Soup with chicken",price:99,img:"http://i0.wp.com/www.shanazrafiq.com/wp-content/uploads/2021/01/1-Chicken-Manchow-Soup-8.jpg?fit=1200%2C798&ssl=1",tags:"Soup, Chicken"},
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
   