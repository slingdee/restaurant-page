 export default function loadAbout() {
  const content = document.getElementById("content");

  const contactDiv = document.createElement("div");
  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "📞 +254 700 123 456";

  const email = document.createElement("p");
  email.textContent = "✉️ info@daviesrestaurant.com";

  contactDiv.appendChild(headline);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);

  content.appendChild(contactDiv);
}
