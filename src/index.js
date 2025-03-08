import "./styles.css";
import homeImg from "./images/homeImage.jpg";
import { aboutInfo } from "./about";
import { menuInfo } from "./home";


let content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

let homeInfo = `<h1>Welcome to The Coastal Spices Restaurant</h1>
<p>Welcome to The Coastal Spices – where flavor meets tradition! We pride ourselves on crafting unforgettable dining experiences with a menu inspired by coastal cuisine and made from the freshest, locally-sourced ingredients. Whether you're joining us for a cozy dinner, a special celebration, or a quick bite, our warm ambiance and exceptional service will make every visit memorable. Explore our menu, book a table, and let us take you on a culinary journey you won't forget.
</p>
    <img src="${homeImg}" height=500px width=700px>
            <p>
                At The Coastal Spices, every dish tells a story of the sea, blending bold flavors and timeless recipes. From succulent seafood to vibrant, seasonal creations, our passion for quality and creativity shines through in every bite. Join us and savor the taste of the coast, where every meal is a celebration of flavor, community, and hospitality. Your table is ready – come dine with us!

            </p>`
content.innerHTML = homeInfo;
home.addEventListener('click',()=>{
    content.innerHTML = "";
    content.innerHTML = homeInfo;
});

menu.addEventListener('click',()=>{
    content.innerHTML = "";
    content.innerHTML = menuInfo;

});

about.addEventListener('click',()=>{
    content.innerHTML = "";
    content.innerHTML = aboutInfo;
});
