const baseURL = import.meta.env.VITE_SERVER_URL;

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
  const data = await convertToJson(response);
  return data.Result;
}

export async function findProductById(id) {
  const products = await getProductsByCategory();
  return products.find((item) => item.Id === id);
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
