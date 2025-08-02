import { useState } from "react";
import "./../App.css";

const menuData = {
  pastries: [
    {
      name: "Strawberry Tart",
      img: "/pastries/tart.jpg",
      price: "120 Birr",
      ingredients: "Strawberry, Cream, Pastry",
    },
    {
      name: "Chocolate Muffin",
      img: "/pastries/muffin.jpg",
      price: "90 Birr",
      ingredients: "Chocolate, Egg, Flour",
    },
  ],
  bread: [
    {
      name: "Sourdough Bread",
      img: "/pastries/sourdough.jpg",
      price: "80 Birr",
      ingredients: "Wheat, Salt, Yeast",
    },
  ],
  cakes: [
    {
      name: "Red Velvet",
      img: "/pastries/redvelvet.jpg",
      price: "300 Birr",
      ingredients: "Cocoa, Cream, Eggs",
    },
  ],
  drinks: [
    {
      name: "Iced Coffee",
      img: "/pastries/icedcoffee.jpg",
      price: "70 Birr",
      ingredients: "Coffee, Milk, Ice",
    },
  ],
};

function Menu() {
  const [activeTab, setActiveTab] = useState("pastries");

  const renderItems = () => {
    return menuData[activeTab].map((item, index) => (
      <div key={index} className="menu-card">
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <p className="price">{item.price}</p>
        <p className="ingredients">{item.ingredients}</p>
        <div className="menu-actions">
          <button className="add-btn">Add to Cart</button>
          <button className="custom-btn">Customize</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="menu-page">
      <h1 className="menu-title">Explore Our Menu</h1>
      <div className="menu-tabs">
        {Object.keys(menuData).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "pastries" && "🧁 Pastries"}
            {tab === "bread" && "🍞 Bread"}
            {tab === "cakes" && "🎂 Cakes"}
            {tab === "drinks" && "☕ Drinks"}
          </button>
        ))}
      </div>

      <div className="menu-grid">{renderItems()}</div>
    </div>
  );
}

export default Menu;
