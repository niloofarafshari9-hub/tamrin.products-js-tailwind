const products = document.querySelector(".products");

const productsmanage = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const res = await data.json();

products.innerHTML = res.map((product) => {
  return `
    <div class="w-48 border rounded-lg p-3 shadow-sm ">
      <img
        src="${product.image}"
        alt="${product.title}"
        class="w-full h-28 object-contain"
      />

      <h2 class="text-sm font-bold mt-2 line-clamp-2">
        ${product.title}
      </h2>

      <p class="text-sm text-green-600 font-bold mt-2">
        $${product.price}
      </p>

      <button class="bg-blue-500 text-white text-xs px-3 py-1 rounded mt-2">
        Add to cart
      </button>
    </div>
  `;
}).join("");


  } catch (error) {
    console.log(error.message);
  }
};

productsmanage();