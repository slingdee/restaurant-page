import "./styles.css"
import restaurantImage from "./jirayu-unsplash.jpg"
console.log("welcome to webpack");


const content = document.querySelector("#content");

const headline = document.createElement("h2");
headline.textContent = "Broman Hotel";
content.appendChild(headline);

const hotelDescription = document.createElement("p");
hotelDescription.textContent = "Nestled in the heart of Naivasha, Broman Hotel offers modern luxury, personalized service, and breathtaking views — perfect for both business and leisure travelers."
content.appendChild(hotelDescription);

const restaurantPhoto = document.createElement("img");
restaurantPhoto.src = restaurantImage;
content.appendChild(restaurantPhoto);




//  <h2>Broman hotel</h2>
//     <p></p>
//     <img  alt=""></img>
