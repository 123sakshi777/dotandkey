let limit=30;
let pages=0;

const URL = 'https://dummyjson.com/products?limit=0';
const getProducts = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    pages=Math.ceil(data.products.length/limit);

    const pageContainer=document.querySelector(".st-pagination")
    pageContainer.innerHTML = "";
  for(i=1;i<=pages;i++){
    const pagination=`<li onclick="getpagination(${i})" class="page-item"><a class="page-link" tabindex="0">${i}</a></li>`
pageContainer.innerHTML+=pagination;
  }
  let products=data.products.slice(0,30);


    const productList = document.getElementById("productList");
    productList.innerHTML = ""; 

    products.forEach(product => {
      const card = `
        <div class="st-product-card" id="${product.id}">
          <div class="st-outer-box">
            <div class="st-image-container">
              <div class="st-image-wrapper">
                <img class="st-hero-image" src="${product.thumbnail}" alt="${product.title}">
              </div>
            </div>
            <div class="st-inner-box">
              <div class="st-product-name">
                <span>${product.title}</span>
              </div>
              <div class="extra-field">
                <span class="st-extra-field-value">${product.description}</span>
              </div>
              <div class="st-badge-main">
                <div class="st-badge">
                  ⭐ (${product.rating})
                </div>
              </div>
              <div class="extra-field-offer">
                <span class="extra-field-value">Buy now & save</span>
              </div>
              <div class="st-price-box">
                <div class="single-price-value">
                  <span class="st-currency-symbol">$</span>
                  <span class="st-sale-price">${product.price}</span>
                </div>
              </div>
            </div>
            <div class="add-to-cart">
              <button class="st-atc" onclick="addCart(${product.id})">add to cart</button>
          
            </div>
          </div>
        </div>
      `;

      productList.innerHTML += card;
      let countlabel=document.querySelector(".count");
      let count = data.limit;
      countlabel.innerText = count;



// countlabel.innerText="30";
// console.log(countlabel);
    });

  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

async function getSortedProducts(inputValue) {
  if (inputValue === "Title(A TO Z)") {
    const URL = 'https://dummyjson.com/products?sortBy=title&order=asc';
    const promise = await fetch(URL);
    const datavalue = await promise.json();
    console.log("datavalue", datavalue);
      const productList = document.getElementById("productList");
    productList.innerHTML = ""; // clear existing content if any

    datavalue.products.forEach(product => {
      const card = `
        <div class="st-product-card" id="${product.id}">
          <div class="st-outer-box">
            <div class="st-image-container">
              <div class="st-image-wrapper">
                <img class="st-hero-image" src="${product.thumbnail}" alt="${product.title}">
              </div>
            </div>
            <div class="st-inner-box">
              <div class="st-product-name">
                <span>${product.title}</span>
              </div>
              <div class="extra-field">
                <span class="st-extra-field-value">${product.description}</span>
              </div>
              <div class="st-badge-main">
                <div class="st-badge">
                  ⭐ (${product.rating})
                </div>
              </div>
              <div class="extra-field-offer">
                <span class="extra-field-value">Buy now & save</span>
              </div>
              <div class="st-price-box">
                <div class="single-price-value">
                  <span class="st-currency-symbol">&#x20B9;</span>
                  <span class="st-sale-price">${product.price}</span>
                </div>
              </div>
            </div>
            <div class="add-to-cart">
            <button class="st-atc" onclick="addCart(${product.id})">add to cart</button>

            </div>
          </div>
        </div>
      `;

      productList.innerHTML += card;
      let countlabel=document.querySelector(".count");
      let count = datavalue.limit;
      countlabel.innerText = count;



// countlabel.innerText="30";
// console.log(countlabel);
    });

    

  }


  else if (inputValue === "Title(Z TO A)") {
    const URL='https://dummyjson.com/products?sortBy=title&order=desc';
    const promise = await fetch(URL);
    const datavalue = await promise.json();
    console.log("datavalue", datavalue);
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // clear existing content if any

    datavalue.products.forEach(product => {
      const card = `
        <div class="st-product-card" id="${product.id}">
          <div class="st-outer-box">
            <div class="st-image-container">
              <div class="st-image-wrapper">
                <img class="st-hero-image" src="${product.thumbnail}" alt="${product.title}">
              </div>
            </div>
            <div class="st-inner-box">
              <div class="st-product-name">
                <span>${product.title}</span>
              </div>
              <div class="extra-field">
                <span class="st-extra-field-value">${product.description}</span>
              </div>
              <div class="st-badge-main">
                <div class="st-badge">
                  ⭐ (${product.rating})
                </div>
              </div>
              <div class="extra-field-offer">
                <span class="extra-field-value">Buy now & save</span>
              </div>
              <div class="st-price-box">
                <div class="single-price-value">
                  <span class="st-currency-symbol">&#x20B9;</span>
                  <span class="st-sale-price">${product.price}</span>
                </div>
              </div>
            </div>
            <div class="add-to-cart">
              <button class="st-atc" onclick="addCart(${product.id})">add to cart</button>
            </div>
          </div>
        </div>
      `;

      productList.innerHTML += card;
      let countlabel=document.querySelector(".count");
      let count = datavalue.limit;
      countlabel.innerText = count;

    });

    



    
    
      
  }

  else if (inputValue === "Price(High to Low)") {
    const URL='https://dummyjson.com/products?sortBy=price&order=desc'
      const promise = await fetch(URL);
    const datavalue = await promise.json();
    console.log("datavalue", datavalue);
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // clear existing content if any

    datavalue.products.forEach(product => {
      const card = `
        <div class="st-product-card" id="${product.id}">
          <div class="st-outer-box">
            <div class="st-image-container">
              <div class="st-image-wrapper">
                <img class="st-hero-image" src="${product.thumbnail}" alt="${product.title}">
              </div>
            </div>
            <div class="st-inner-box">
              <div class="st-product-name">
                <span>${product.title}</span>
              </div>
              <div class="extra-field">
                <span class="st-extra-field-value">${product.description}</span>
              </div>
              <div class="st-badge-main">
                <div class="st-badge">
                  ⭐ (${product.rating})
                </div>
              </div>
              <div class="extra-field-offer">
                <span class="extra-field-value">Buy now & save</span>
              </div>
              <div class="st-price-box">
                <div class="single-price-value">
                  <span class="st-currency-symbol">&#x20B9;</span>
                  <span class="st-sale-price">${product.price}</span>
                </div>
              </div>
            </div>
            <div class="add-to-cart">
              <button class="st-atc" onclick="addCart(${product.id})">add to cart</button>
            </div>
          </div>
        </div>
      `;

      productList.innerHTML += card;
      let countlabel=document.querySelector(".count");
      let count = datavalue.limit;
      countlabel.innerText = count;



// countlabel.innerText="30";
// console.log(countlabel);
    });

    

    
  }

  else if (inputValue === "Price(Low to High)") {
    const URL='https://dummyjson.com/products?sortBy=price&order=asc'
      const promise = await fetch(URL);
    const datavalue = await promise.json();
    console.log("datavalue", datavalue);
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // clear existing content if any

    datavalue.products.forEach(product => {
      const card = `
        <div class="st-product-card" id="${product.id}">
          <div class="st-outer-box">
            <div class="st-image-container">
              <div class="st-image-wrapper">
                <img class="st-hero-image" src="${product.thumbnail}" alt="${product.title}">
              </div>
            </div>
            <div class="st-inner-box">
              <div class="st-product-name">
                <span>${product.title}</span>
              </div>
              <div class="extra-field">
                <span class="st-extra-field-value">${product.description}</span>
              </div>
              <div class="st-badge-main">
                <div class="st-badge">
                  ⭐ (${product.rating})
                </div>
              </div>
              <div class="extra-field-offer">
                <span class="extra-field-value">Buy now & save</span>
              </div>
              <div class="st-price-box">
                <div class="single-price-value">
                  <span class="st-currency-symbol">&#x20B9;</span>
                  <span class="st-sale-price">${product.price}</span>
                </div>
              </div>
            </div>
            <div class="add-to-cart">
              <button class="st-atc" onclick="addCart(${product.id})">add to cart</button>
            </div>
          </div>
        </div>
      `;

      productList.innerHTML += card;
      let countlabel=document.querySelector(".count");
      let count = datavalue.limit;
      countlabel.innerText = count;



// countlabel.innerText="30";
// console.log(countlabel);
    });


    
  }

  else {
    console.log("Invalid input value");
  }
}


document.querySelectorAll('input[name="class"]').forEach((radio) => {
  radio.addEventListener('change', () => {
    const checkedRadio = document.querySelector('input[name="class"]:checked');
    console.log(checkedRadio.value);
    getSortedProducts(checkedRadio.value);
  });
});
const inputElement = document.querySelector(".search-tab");
inputElement.addEventListener("input", () => {
  const inputValue = inputElement.value;
  console.log(inputValue); 
  getSearchProducts(inputValue);
});
async function getSearchProducts (searchQuery){
const URL=`https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery)}&limit=0`;
      const promise = await fetch(URL);
    const datavalue = await promise.json();
    console.log("datavalue", datavalue);
    console.log("dataval=",datavalue.products.length);
    pages=Math.ceil(datavalue.products.length/limit);

    const pageContainer=document.querySelector(".st-pagination")
    pageContainer.innerHTML = "";
  for(i=1;i<=pages;i++){
    const pagination=`<li onclick="getpagination(${i})" class="page-item"><a class="page-link" tabindex="0">${i}</a></li>`
pageContainer.innerHTML+=pagination;
  }
  let products=datavalue.products.slice(0,30);
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; 

    products.forEach(product => {
      const card = `
        <div class="st-product-card" id="${product.id}">
          <div class="st-outer-box">
            <div class="st-image-container">
              <div class="st-image-wrapper">
                <img class="st-hero-image" src="${product.thumbnail}" alt="${product.title}">
              </div>
            </div>
            <div class="st-inner-box">
              <div class="st-product-name">
                <span>${product.title}</span>
              </div>
              <div class="extra-field">
                <span class="st-extra-field-value">${product.description}</span>
              </div>
              <div class="st-badge-main">
                <div class="st-badge">
                  ⭐ (${product.rating})
                </div>
              </div>
              <div class="extra-field-offer">
                <span class="extra-field-value">Buy now & save</span>
              </div>
              <div class="st-price-box">
                <div class="single-price-value">
                  <span class="st-currency-symbol">&#x20B9;</span>
                  <span class="st-sale-price">${product.price}</span>
                </div>
              </div>
            </div>
            <div class="add-to-cart">
              <button class="st-atc" onclick="addCart(${product.id})">add to cart</button>
            </div>
          </div>
        </div>
      `;

      productList.innerHTML += card;
      let countlabel=document.querySelector(".count");
      let summaryLabel=document.querySelector(".st-summary-label");
      let count = datavalue.limit;
      countlabel.innerText = count;
      summaryLabel.innerHTML = `Showing <strong><span class="count">${datavalue.total}</span></strong> Result(s) for <strong>"${searchQuery}"</strong>`;


    });
    
  }
 
let item = [];
const priceObject = {
  id: null,
  title: null,
  quantity: null,
  price: null,
};
const newPriceObject = { ...priceObject };
console.log( "new=",newPriceObject);

 let cart=[];
async function atcCall() {
    const cartElement = document.querySelector(".atc-container");
    document.querySelector(".atc-wrapper").style.display="flex";
let bodytag=document.querySelector("body")
  bodytag.classList.toggle("st-atc-open");

    cartElement.innerHTML = ""; 

    console.log('cart in atc call is',cart)

    cart.forEach((productId) => {
      (async () => {
        const URL = `https://dummyjson.com/products/${productId.id}`;
        const promise = await fetch(URL);
        const datavalue = await promise.json();
        console.log("datavalue", datavalue);
        productId.title=datavalue.title;
        productId.price=datavalue.price;
        cartElement.innerHTML += `
          <div class="product-cart">
            <div class="st-product-cart">
              <div class="st-heading">
                <span class="product-atc">1 ${datavalue.title} added to your cart</span>
              </div>
              <div class="product-content">
                <img class="st-image-hero" src="${datavalue.thumbnail}" alt="${datavalue.title}">
                <div class="product-list">
                  <div class="product-name">
                    <span class="product-code">${datavalue.title}</span>
                  </div>
                  <div class="st-quantity">
                    <span>1 piece</span>
                  </div>
                  <div class="st-price">
                    <span>Rs. ${datavalue.price}</span>
                  </div>
                  <div class="view-cart">
                    <span class="st-cart">view cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      })(); 
    });

  setTimeout(()=>{
    let priceCal= document.querySelector(".priceCalculate")
  priceCal.innerHTML = "";
  let totalAmount=0;
  cart.forEach(product=>{
    totalAmount=totalAmount+product.price;

  });
  priceCal.innerHTML=`Price: ${totalAmount}`

  },100)  

  }
  let closeVar=document.querySelector(".st-close");
  closeVar.addEventListener("click",()=>{
    document.querySelector(".atc-wrapper").style.display="none";
    document.querySelector(".atc-wrapper").classList.remove("active");
    let bodytag=document.querySelector("body")
    
 bodytag.classList.remove("st-atc-open");

  })


async function addCart(id) {
  console.log(id, "id");
  const newPriceObject = { ...priceObject };
  newPriceObject.id=id
  newPriceObject.quantity=1
  console.log("newprice=",newPriceObject);
  if (cart.length === 0) {
    cart.push(newPriceObject);
    console.log("Cart was empty, item added:", newPriceObject);
  } else {
  
    const alreadyInCart = cart.some(item => item.id === id);

    if (!alreadyInCart) {
      cart.push(newPriceObject);
      console.log("Item added:", newPriceObject);
    } else {
      console.log("ID already in cart, not added.");
    }
  }

  console.log("Current cart:", cart);



  if (!item.includes(id)) {
    item.push(id);
    console.log("dataval", item);
    atcCall();
  } 
 

let openOption=document.querySelector(".nav-item")
let actContainer=document.querySelector(".atc-wrapper")
let bodytag=document.querySelector("body")
openOption.addEventListener("click",()=>{
  actContainer.classList.toggle("active");
  bodytag.classList.toggle("st-atc-open");
})

window.scrollTo({
  top: 0,
   behavior: 'smooth'
});

}

function openRazorpayCheckout() {
  console.log('cart in openRazorpayCheckout is', cart);

  // ✅ Calculate totalAmount first
  let totalAmount = 0;
  cart.forEach(product => {
    totalAmount += product.price * product.quantity; // also multiply by quantity
  });

  // ✅ Now use totalAmount directly
  const options = {
    key:rzp_live_C7ayx7PaJJkARf, // Replace with your actual test key
    amount: totalAmount * 100, // Razorpay needs amount in paise
    currency: "INR",
    name: "My Shop",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    handler: function (response) {
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "Test User",
      email: "test@example.com",
      contact: "9000090000"
    },
    theme: {
      color: "#3399cc"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}


async function getfilters() {
  const URL = 'https://dummyjson.com/products/categories';
  const promise = await fetch(URL);
  const datavalue = await promise.json();
  console.log("datavalue", datavalue);

  const filterList = document.querySelector(".st-filter-label");
  filterList.innerHTML = "";

  datavalue.forEach((filter,index) => {
    filterList.innerHTML += `
      <div class="filter-label">
      
      <label class="filter-labels">
        <input type="radio" value="${filter.name}"name= "product-category" id="filter-${index}">
        <span class="st-custom-select-box" title=""></span>
        <span class="st-filter-value">${filter.name}</span>
        </label>
        
        
        
      </div>
    `;
  });

  const radiobuttons = document.querySelectorAll(".filter-label input[type='radio']");
  radiobuttons.forEach(radiobutton => {
    radiobutton.addEventListener("change", () => {
      const value = radiobutton.closest(".filter-label").querySelector(".st-filter-value").innerText;


       getproducts(value);
     
      async function getproducts(value) {
  const URL=`https://dummyjson.com/products/category/${value}`

      const promise = await fetch(URL);
  const datavalue = await promise.json();
  console.log(datavalue, "filter response");
  pages=Math.ceil(datavalue.products.length/limit);

    const pageContainer=document.querySelector(".st-pagination")
    pageContainer.innerHTML = "";
  for(i=1;i<=pages;i++){
    const pagination=`<li onclick="getpagination(${i})" class="page-item"><a class="page-link" tabindex="0">${i}</a></li>`
pageContainer.innerHTML+=pagination;
  }
  let products=datavalue.products.slice(0,30);
   const productList = document.getElementById("productList");
    productList.innerHTML = ""; 
    if(datavalue.products.length > 0){
     products.forEach(product => {
      console.log("in for each");
      const card = `
        <div class="st-product-card" id="${product.id}">
          <div class="st-outer-box">
            <div class="st-image-container">
              <div class="st-image-wrapper">
                <img class="st-hero-image" src="${product.thumbnail}" alt="${product.title}">
              </div>
            </div>
            <div class="st-inner-box">
              <div class="st-product-name">
                <span>${product.title}</span>
              </div>
              <div class="extra-field">
                <span class="st-extra-field-value">${product.description}</span>
              </div>
              <div class="st-badge-main">
                <div class="st-badge">
                  ⭐ (${product.rating})
                </div>
              </div>
              <div class="extra-field-offer">
                <span class="extra-field-value">Buy now & save</span>
              </div>
              <div class="st-price-box">
                <div class="single-price-value">
                  <span class="st-currency-symbol">&#x20B9;</span>
                  <span class="st-sale-price">${product.price}</span>
                </div>
              </div>
            </div>
            <div class="add-to-cart">
              <button class="st-atc" onclick="addCart(${product.id})">add to cart</button>
            </div>
          </div>
        </div>
      `;

      productList.innerHTML += card;
      let countlabel=document.querySelector(".count");
      let count = datavalue.limit;
      countlabel.innerText = count;




// countlabel.innerText="30";
// console.log(countlabel);
    });
  }
  else{
   let summaryLabel=document.querySelector(".st-result");  
      summaryLabel.innerHTML = `No Products found for ${value}`;

  }
}
      
    });
  });
  document.getElementById("uncheck-btn").addEventListener("click",function () {
  radiobuttons.forEach((radiobuttons) => {
    radiobuttons.checked = false;
  });
});
}

getfilters();
async function getpagination (page){
  skip=(page-1)*limit;
  console.log("skip-value=",skip);
const URL=`https://dummyjson.com/products?limit=30&skip=${skip}`;
      const promise = await fetch(URL);
    const datavalue = await promise.json();
     const productList = document.getElementById("productList");
    productList.innerHTML = ""; 

    datavalue.products.forEach(product => {
      const card = `
        <div class="st-product-card" id="${product.id}">
          <div class="st-outer-box">
            <div class="st-image-container">
              <div class="st-image-wrapper">
                <img class="st-hero-image" src="${product.thumbnail}" alt="${product.title}">
              </div>
            </div>
            <div class="st-inner-box">
              <div class="st-product-name">
                <span>${product.title}</span>
              </div>
              <div class="extra-field">
                <span class="st-extra-field-value">${product.description}</span>
              </div>
              <div class="st-badge-main">
                <div class="st-badge">
                  ⭐ (${product.rating})
                </div>
              </div>
              <div class="extra-field-offer">
                <span class="extra-field-value">Buy now & save</span>
              </div>
              <div class="st-price-box">
                <div class="single-price-value">
                  <span class="st-currency-symbol">&#x20B9;</span>
                  <span class="st-sale-price">${product.price}</span>
                </div>
              </div>
            </div>
            <div class="add-to-cart">
              <button class="st-atc" onclick="addCart(${product.id})">add to cart</button>
          
            </div>
          </div>
        </div>
      `;

      productList.innerHTML += card;
      
    });

    
    }
