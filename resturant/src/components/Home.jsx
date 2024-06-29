import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dishes = [
  {
    name: "Paneer Butter Masala",
    price: "$10",
    cookingTime: "20 minutes",
    deliveryTime: "30 minutes",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg",
  },
  {
    name: "Veg Biryani",
    price: "$12",
    cookingTime: "25 minutes",
    deliveryTime: "35 minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDiMiok2ektyhL9ZFNhPX3psPNJKIaVY3Ng&s",
  },
  {
    name: "Aloo Gobi",
    price: "$8",
    cookingTime: "15 minutes",
    deliveryTime: "25 minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2teG3QnS-pIf_ghAXnbOsKEw4VGxiIK5P_A&s",
  },
  {
    name: "Chana Masala",
    price: "$9",
    cookingTime: "20 minutes",
    deliveryTime: "30 minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkmyQOTf6aPV_F1tjFbybJDKa8AIFGTLdnA&s",
  },
  {
    name: "Vegetable Korma",
    price: "$11",
    cookingTime: "22 minutes",
    deliveryTime: "32 minutes",
    image: "https://static01.nyt.com/images/2023/04/12/multimedia/ZS-vegetable-korma-hblf/ZS-vegetable-korma-hblf-superJumbo.jpg",
  },
  {
    name: "Dal Tadka",
    price: "$7",
    cookingTime: "18 minutes",
    deliveryTime: "28 minutes",
    image: "https://rainbowplantlife.com/wp-content/uploads/2020/11/1_daltadkamacro281of129.jpg",
  },
  {
    name: "Mixed Vegetable Curry",
    price: "$10",
    cookingTime: "20 minutes",
    deliveryTime: "30 minutes",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2023/01/Mixed-Veg-Sabzi-500x500.jpg",
  },
  {
    name: "Bhindi Masala",
    price: "$9",
    cookingTime: "17 minutes",
    deliveryTime: "27 minutes",
    image: "https://i.pinimg.com/736x/bf/cf/83/bfcf839e173219df28dcdbf06b5057b7.jpg",
  },
  {
    name: "Palak Paneer",
    price: "$11",
    cookingTime: "19 minutes",
    deliveryTime: "29 minutes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmYGdK7UW-_dmQ25ShlDJya2qowm68iXU2g&s",
  },
  {
    name: "Matar Paneer",
    price: "$10",
    cookingTime: "21 minutes",
    deliveryTime: "31 minutes",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2023/06/Easy-Matar-Paneer.jpg",
  },
];

function Home() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    setCart([...cart, dish]);
    toast.success(`${dish.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    toast.error("Item removed from cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleCheckout = () => {
    // Implement your checkout logic here (e.g., navigate to checkout page)
    console.log("Checkout clicked. Implement your checkout logic here.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="flex justify-between p-4 bg-white shadow-md">
        <span className="text-lg font-bold text-gray-700">{name}</span>
        <span className="text-lg font-bold text-gray-700">Cart: {cart.length} items</span>
      </div>
      <div className="flex flex-col items-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to The Restaurant</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{dish.name}</h2>
              <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="absolute inset-0 object-cover rounded-full"
                  style={{ maxHeight: "240px" }}
                />
              </div>
              <p className="text-gray-600 mt-4">Price: {dish.price}</p>
              <p className="text-gray-600">Cooking Time: {dish.cookingTime}</p>
              <p className="text-gray-600">Delivery Time: {dish.deliveryTime}</p>
              <button
                onClick={() => addToCart(dish)}
                className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="mt-8 w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
            <div className="flex flex-col gap-4">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 object-cover rounded-full"
                    />
                    <div>
                      <p className="text-lg font-bold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">Price: {item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={handleCheckout}
                className="mt-4 w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 text-lg"
                disabled={cart.length === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
