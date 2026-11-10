const BASE_URL = "https://fakestoreapi.com/products";

export const getAllProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product with id: ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error in getProductById:", error);
    throw error;
  }
};