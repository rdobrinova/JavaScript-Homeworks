// HOMEWORK PART 1
// Change the page with JavaScript
// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed


let firstDiv = document.getElementById("first");
firstDiv.style.backgroundColor = 'pink';

let firstH1 = document.getElementById("myTitle");
firstH1.innerText = "Wellcome to my Healthy Food Page!";

let firstParagraph = document.getElementsByClassName("paragraph")[0];
firstParagraph.innerText = "5 Foods That Are Super Healthy";

let anotherDiv = document.getElementsByClassName("anotherDiv")[0];
anotherDiv.style.backgroundColor = 'green';

let secondParagraph = document.getElementsByClassName("second")[0];
secondParagraph.innerText = "It's easy to wonder which foods are healthiest. A vast number of foods are both healthy and tasty. By filling your plate with fruits, vegetables, quality protein sources, and other whole foods, you'll have meals that are colorful, versatile, and good for you.Here are 50 incredibly healthy foods.Most of them are surprisingly delicious.";

let img = document.createElement("img");
img.setAttribute("src", "img/health.webp");
img.style.width = "500px";
img.style.display = "block";
anotherDiv.insertBefore(img, anotherDiv.querySelector("text"));

let text = document.getElementsByTagName("text")[0];
text.innerHTML = "Fruits and berries are among the world's most popular health foods.These sweet, nutritious foods are very easy to incorporate into your diet because they require little to no preparation.";

let lastDiv = document.getElementsByTagName("div")[2];
lastDiv.style.backgroundColor = 'red';

let header1Last = lastDiv.getElementsByTagName("h1")[0];
header1Last.innerText = "1-5: Fruits and berries";

let header3Last = header1Last.nextElementSibling;
header3Last.innerHTML = "1. Apples <br> Apples are high in fiber, vitamin C, and numerous antioxidants.They are very filling and make the perfect snack if you find yourself hungry between meals.";




let paragraphsArray = [
    "2. Avocados <br> Avocados are different from most other fruits because they’re loaded with healthy fats instead of carbs.They are not only creamy and tasty but also high in fiber, potassium, and vitamin C.",
    "3. Bananas <br> Bananas are among the world’s best sources of potassium.They’re also high in vitamin B6 and fiber and are convenient and portable.",
    "4. Blueberries <br> Blueberries are not only delicious but also among the most powerful sources of antioxidants in the world.",
    "5. Oranges <br> Oranges are well known for their vitamin C content.What’s more, they’re high in fiber and antioxidants."
]

for (let i = 0; i < paragraphsArray.length; i++) {
    let par = document.createElement("p");
    par.innerHTML = paragraphsArray[i];
    lastDiv.appendChild(par);
}