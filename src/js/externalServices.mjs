const baseURL = "https://wdd330-backend.onrender.com/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    console.log(res);
    throw new Error("Bad Response");
  }
}

export async function getProductsByCategory(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  console.log(response);
  const data = await convertToJson(response);
  return data.Result;
}

export async function findProductById(id) {
  console.log(id);

  const response = await fetch(baseURL + `product/${id}`);
  console.log(response);
  const product = await convertToJson(response);
  return product.Result;
}

export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  console.log(payload);
  console.log(options);
  const test = await fetch(baseURL + "checkout/", options).then(convertToJson);
  console.log(test);
  return test;
}
