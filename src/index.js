import "./styles.css"
import restaurantImage from "./jirayu-unsplash.jpg"
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function clearContent(){
  document.getElementById("content").textContent = ""
}

function init(){
  //load default page
  loadHome();

  //event listeners
  document.getElementById("homeBtn").addEventListener("click", ()=>{
    clearContent()
    loadHome()
  });

  document.getElementById("menuBtn").addEventListener("click", ()=>{
    clearContent();
    loadMenu();
  });

  document.getElementById("aboutBtn").addEventListener("click", ()=>{
    clearContent();
    loadAbout();
  });

}
init()




//  <h2>Broman hotel</h2>
//     <p></p>
//     <img  alt=""></img>
