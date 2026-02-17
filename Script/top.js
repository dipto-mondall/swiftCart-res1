const topp = () => {
  const topContainer = document.getElementById("top-container");
  topContainer.innerHTML = "";

  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
     
      const topThree = data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 3);
      topThree.map((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <div class="border-1 md:h-[690px] border-gray-200 p-4 rounded-md">
            <!-- img, bg -->
            <div class="bg-gray-400 p-10 flex justify-center items-center">
              <img class="h-[240px] w-full" src="${element.image}" alt="" />
            </div>
            <!-- review -->
            <div class="flex justify-between items-center mt-4">
              <p class="p-3 bg-gray-100 rounded-2xl">${element.category}</p>
              <div class="flex items-center gap-3 text-lg">
                <i class="fa-solid fa-star text-[#FFD700]"></i>
                <p>${element.rating.rate} (${element.rating.count})</p>
              </div>
            </div>
            <!-- price, name -->
            <h3 class="text-xl font-bold text-gray-600 my-3">${element.title}</h3>
            <p class="text-black text-xl font-semibold">$ ${element.price}</p>
            <!-- btn -->
            <div class="mt-5 flex flex-wrap justify-between items-center text-lg">
              <button onclick="details(${element.id})" class="btn rounded-xl px-4 text-gray-600">
                <i class="fa-regular fa-eye"></i>Details
              </button>
              <button onclick="add()" class="btn rounded-xl px-4 text-white bg-violet-600">
                <i class="fa-solid fa-cart-shopping"></i>Add
              </button>
            </div>
          </div>
        `;
        topContainer.appendChild(div);
      });
    });
};

topp();