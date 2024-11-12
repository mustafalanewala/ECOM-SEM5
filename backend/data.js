import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Mbe",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Aba",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Dri-FIT Shirt",
      slug: "nike-dri-fit-shirt",
      category: "Shirts",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/sn5zqdvbshyldudzosvu/AS+M+NSW+TEE+ICON+FUTURA.png", // Actual image URL
      price: 8999, // Price in INR
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 25,
      description: "Nike Dri-FIT high-quality moisture-wicking shirt",
    },
    {
      name: "Adidas Training Shirt",
      slug: "adidas-training-shirt",
      category: "Shirts",
      image: "https://www.nike.qa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw5c673867/nk/ff1/3/e/b/8/e/ff13eb8e_0d7b_41da_825d_b36f87daaee8.jpg?sw=700&sh=700&sm=fit&q=100&strip=false", // Actual image URL
      price: 4999, // Price in INR
      countInStock: 15,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 18,
      description: "Comfortable and stylish Adidas shirt for training",
    },
    {
      name: "Nike Flex Slim Fit Pants",
      slug: "nike-flex-slim-fit-pants",
      category: "Pants",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/a9c746f3-d570-4e00-94b0-ce3202d39807/AS+M+NK+SWOOSH+WVN+PANT.png", // Actual image URL
      price: 2999, // Price in INR
      countInStock: 20,
      brand: "Nike",
      rating: 4.5,
      numReviews: 32,
      description:
        "Flexible, slim-fit pants designed for performance and comfort",
    },
    {
      name: "Adidas Essentials Pants",
      slug: "adidas-essentials-pants",
      category: "Pants",
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d372efe2-8239-442b-be08-3942986a3362/M+J+DF+SPRT+HOOP+FLC+PANT.png", // Actual image URL
      price: 3999, // Price in INR
      countInStock: 10,
      brand: "Adidas",
      rating: 4.7,
      numReviews: 22,
      description:
        "Adidas Essentials pants, perfect for daily wear and casual outings",
    },
  ],
};
export default data;
