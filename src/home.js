
export default function loadHome(){
  const content = document.querySelector("#content");

  const homeDiv = document.createElement("div");

  const headline = document.createElement("h2");
  headline.textContent = "Broman Hotel";

  const hotelDescription = document.createElement("p");
  hotelDescription.textContent = "Nestled in the heart of Naivasha, Broman Hotel offers modern luxury, personalized service, and breathtaking views — perfect for both business and leisure travelers."
  homeDiv.appendChild(headline);
  homeDiv.appendChild(hotelDescription);

  content.appendChild(homeDiv);


}