// details by modal
const details = (id) =>{
  const url = `https://fakestoreapi.com/products/${id}`;
  fetch(url)
  .then((res) => res.json())
  .then((data) => showDetails(data))

};

const showDetails = (d) =>{
 const modal = document.getElementById("modal-container");
  modal.innerHTML = "";
   const div = document.createElement('div');
   div.innerHTML=`
   
            <h3 class="text-lg font-bold text-center">${d.title}</h3>
        <p class="py-4">${d.description}</p>
        
        <div class="flex gap-4  items-center my-4">
         <p class="my-4">$${d.price}</p>
         <p class=""><i class="fa-solid fa-star text-orange-500 mr-1"></i>${d.rating.rate}</p>
        </div>
         <button class="btn p-5 text-blue-700">Add to Cart</button>
  
  `;
  modal.appendChild(div)
  my_modal_2.showModal();
  
};

// all products
const allProduct = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAllProducts(data));

  document.getElementById("all").classList.add("bg-blue-500", "text-white");
 
};

// show all products
const showAllProducts = (data) => {
    document.getElementById("category-2").classList.remove("bg-blue-500", "text-white");
  document.getElementById("category-3").classList.remove("bg-blue-500", "text-white");
  document.getElementById("category-4").classList.remove("bg-blue-500", "text-white");
  document.getElementById("category-5").classList.remove("bg-blue-500", "text-white");
  //console.log(data);
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";

  data.forEach((element) => {
    //console.log(element);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="border-1 md:h-[690px] border-gray-200 p-4 rounded-md ">
        <!-- img, bg -->
        <div class="bg-gray-400 p-10 flex justify-center items-center">
          <img class="h-[240px] w-full" src="${element.image}" alt="" />
        </div>
        <!-- review -->
        <div class="flex justify-between items-center mt-4">
          <p class="p-3 bg-gray-100 rounded-2xl">${element.category}</p>
          <div class="flex items-center gap-3 text-lg">
            <i class="fa-solid fa-star text-[#FFD700]"></i>
            <p>${element.rating.rate}  (${element.rating.count}) </p>
          </div>
        </div>
        <!-- price, name -->
        <h3 class="text-xl font-bold text-gray-600 my-3">${element.title}</h3>
        <p class="text-black text-xl font-semibold">$ ${element.price}</p>
        <!-- btn -->
        <div class="mt-5 flex flex-wrap justify-between items-center text-lg">
            <button onclick="details(${element.id})" class="btn rounded-xl px-4 text-gray-600 "><i class="fa-regular fa-eye"></i>Details</button>
            <button onclick="add()" class="btn rounded-xl px-4 text-white bg-violet-600"><i class="fa-solid fa-cart-shopping"></i>Add</button>
        </div>
      </div> 
    `;
    cardsContainer.appendChild(div);
  });
};

// load category's
const category = async () => {
  const url = "https://fakestoreapi.com/products/categories";
  const res = await fetch(url);
  const data = await res.json();
  showCategory(data);
  //console.log(data);
};

const showCategory = (data) => {
  //console.log(data);
  const categoryContainer = document.getElementById("category-container");
  //categoryContainer.innerHTML="";
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    li.classList.add("btn", "p-4", "rounded-lg");
    li.id = `category-${i + 2}`;
    li.setAttribute("onclick", `category${i + 2}("${data[i]}")`);

    li.innerText = data[i];

    categoryContainer.appendChild(li);
  }
};

// electronics
const category2 = (c) => {
  document.getElementById("all").classList.remove("bg-blue-500", "text-white");
  document.getElementById("category-3").classList.remove("bg-blue-500", "text-white");
  document.getElementById("category-4").classList.remove("bg-blue-500", "text-white");
  document.getElementById("category-5").classList.remove("bg-blue-500", "text-white");

  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";

  const url = `https://fakestoreapi.com/products/category/${c}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(c);
       data.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="border-1 md:h-[690px] border-gray-200 p-4 rounded-md ">
        <!-- img, bg -->
        <div class="bg-gray-400 p-10 flex justify-center items-center">
          <img class="h-[240px] w-full" src="${element.image}" alt="" />
        </div>
        <!-- review -->
        <div class="flex justify-between items-center mt-4">
          <p class="p-3 bg-gray-100 rounded-2xl">${element.category}</p>
          <div class="flex items-center gap-3 text-lg">
            <i class="fa-solid fa-star text-[#FFD700]"></i>
            <p>${element.rating.rate}  (${element.rating.count}) </p>
          </div>
        </div>
        <!-- price, name -->
        <h3 class="text-xl font-bold text-gray-600 my-3">${element.title}</h3>
        <p class="text-black text-xl font-semibold">$ ${element.price}</p>
        <!-- btn -->
        <div class="mt-5 flex flex-wrap justify-between items-center text-lg">
            <button onclick="details(${element.id})" class="btn rounded-xl px-4 text-gray-600 "><i class="fa-regular fa-eye"></i>Details</button>
            <button onclick="add()" class="btn rounded-xl px-4 text-white bg-violet-600"><i class="fa-solid fa-cart-shopping"></i>Add</button>
        </div>
      </div> 
    `;
    cardsContainer.appendChild(div);
  });

    });

   document.getElementById("category-2").classList.add("bg-blue-500", "text-white");
};


// jewelery
const category3 = (c) => {
   document.getElementById("all").classList.remove("bg-blue-500", "text-white");
   document.getElementById("category-2").classList.remove("bg-blue-500", "text-white");
   document.getElementById("category-4").classList.remove("bg-blue-500", "text-white");
   document.getElementById("category-5").classList.remove("bg-blue-500", "text-white");

  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";

  const url = `https://fakestoreapi.com/products/category/${c}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(c);
       data.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="border-1 md:h-[690px] border-gray-200 p-4 rounded-md ">
        <!-- img, bg -->
        <div class="bg-gray-400 p-10 flex justify-center items-center">
          <img class="h-[240px] w-full" src="${element.image}" alt="" />
        </div>
        <!-- review -->
        <div class="flex justify-between items-center mt-4">
          <p class="p-3 bg-gray-100 rounded-2xl">${element.category}</p>
          <div class="flex items-center gap-3 text-lg">
            <i class="fa-solid fa-star text-[#FFD700]"></i>
            <p>${element.rating.rate}  (${element.rating.count}) </p>
          </div>
        </div>
        <!-- price, name -->
        <h3 class="text-xl font-bold text-gray-600 my-3">${element.title}</h3>
        <p class="text-black text-xl font-semibold">$ ${element.price}</p>
        <!-- btn -->
        <div class="mt-5 flex flex-wrap justify-between items-center text-lg">
            <button onclick="details(${element.id})" class="btn rounded-xl px-4 text-gray-600 "><i class="fa-regular fa-eye"></i>Details</button>
            <button onclick="add()" class="btn rounded-xl px-4 text-white bg-violet-600"><i class="fa-solid fa-cart-shopping"></i>Add</button>
        </div>
      </div> 
    `;
    cardsContainer.appendChild(div);
  });

    });

    document.getElementById("category-3").classList.add("bg-blue-500", "text-white");
};

// mens
const category4 = (c) => {
   document.getElementById("all").classList.remove("bg-blue-500", "text-white");
   document.getElementById("category-2").classList.remove("bg-blue-500", "text-white");
   document.getElementById("category-3").classList.remove("bg-blue-500", "text-white");
   document.getElementById("category-5").classList.remove("bg-blue-500", "text-white");

  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";

  const url = `https://fakestoreapi.com/products/category/${c}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(c);
       data.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="border-1 md:h-[690px] border-gray-200 p-4 rounded-md ">
        <!-- img, bg -->
        <div class="bg-gray-400 p-10 flex justify-center items-center">
          <img class="h-[240px] w-full" src="${element.image}" alt="" />
        </div>
        <!-- review -->
        <div class="flex justify-between items-center mt-4">
          <p class="p-3 bg-gray-100 rounded-2xl">${element.category}</p>
          <div class="flex items-center gap-3 text-lg">
            <i class="fa-solid fa-star text-[#FFD700]"></i>
            <p>${element.rating.rate}  (${element.rating.count}) </p>
          </div>
        </div>
        <!-- price, name -->
        <h3 class="text-xl font-bold text-gray-600 my-3">${element.title}</h3>
        <p class="text-black text-xl font-semibold">$ ${element.price}</p>
        <!-- btn -->
        <div class="mt-5 flex flex-wrap justify-between items-center text-lg">
            <button onclick="details(${element.id})" class="btn rounded-xl px-4 text-gray-600 "><i class="fa-regular fa-eye"></i>Details</button>
            <button onclick="add()" class="btn rounded-xl px-4 text-white bg-violet-600"><i class="fa-solid fa-cart-shopping"></i>Add</button>
        </div>
      </div> 
    `;
    cardsContainer.appendChild(div);
  });

    });

    document.getElementById("category-4").classList.add("bg-blue-500", "text-white");
};
// women
const category5 = (c) => {
   document.getElementById("all").classList.remove("bg-blue-500", "text-white");
   document.getElementById("category-2").classList.remove("bg-blue-500", "text-white");
   document.getElementById("category-3").classList.remove("bg-blue-500", "text-white");
   document.getElementById("category-4").classList.remove("bg-blue-500", "text-white");

  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";

  const url = `https://fakestoreapi.com/products/category/${c}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(c);
       data.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="border-1 md:h-[690px] border-gray-200 p-4 rounded-md ">
        <!-- img, bg -->
        <div class="bg-gray-400 p-10 flex justify-center items-center">
          <img class="h-[240px] w-full" src="${element.image}" alt="" />
        </div>
        <!-- review -->
        <div class="flex justify-between items-center mt-4">
          <p class="p-3 bg-gray-100 rounded-2xl">${element.category}</p>
          <div class="flex items-center gap-3 text-lg">
            <i class="fa-solid fa-star text-[#FFD700]"></i>
            <p>${element.rating.rate}  (${element.rating.count}) </p>
          </div>
        </div>
        <!-- price, name -->
        <h3 class="text-xl font-bold text-gray-600 my-3">${element.title}</h3>
        <p class="text-black text-xl font-semibold">$ ${element.price}</p>
        <!-- btn -->
        <div class="mt-5 flex flex-wrap justify-between items-center text-lg">
            <button onclick="details(${element.id})" class="btn rounded-xl px-4 text-gray-600 "><i class="fa-regular fa-eye"></i>Details</button>
            <button onclick="add()" class="btn rounded-xl px-4 text-white bg-violet-600"><i class="fa-solid fa-cart-shopping"></i>Add</button>
        </div>
      </div> 
    `;
    cardsContainer.appendChild(div);
  });

    });

    document.getElementById("category-5").classList.add("bg-blue-500", "text-white");
};

allProduct();

category();
