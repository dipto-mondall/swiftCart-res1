console.log("connected");
// show all products
const allProduct = () =>{
    const url = "https://fakestoreapi.com/products";
    fetch(url)
    .then((res) => res.json())
    .then((data) => showAllProducts(data))
}

const showAllProducts =(data)=>{
  console.log(data)
  const cardsContainer = document.getElementById("cards-container");
  console.log(cardsContainer)

  data.forEach(element => {
    console.log(element)
    
  });
}

allProduct();


