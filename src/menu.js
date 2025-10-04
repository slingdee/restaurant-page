export default function loadMenu() {
  const content = document.getElementById("content");

  const menuDiv = document.createElement("div");
  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  const item1 = document.createElement("p");
  item1.textContent = "🍔 Burger Deluxe - $10";
  
  const item2 = document.createElement("p");
  item2.textContent = "🍕 Pepperoni Pizza - $12";
  
  const item3 = document.createElement("p");
  item3.textContent = "🥗 Garden Salad - $8";

  menuDiv.appendChild(headline);
  menuDiv.appendChild(item1);
  menuDiv.appendChild(item2);
  menuDiv.appendChild(item3);

  content.appendChild(menuDiv);
}
