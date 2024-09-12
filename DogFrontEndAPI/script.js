// alert("I am inside html")
// prompt("I am inside HTML")

//User clicks button
//Consume an api
//send back random image to html

//accessing button element and all its metehods/properties
let button = document.getElementsByTagName("button");
let image = document.getElementsByTagName("img");
image[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB";
image[0].style.width = '300px';
image[0].style.height = '300px';
image[0].style.border = "3px dotted black";
//Assigning a listener on the button for a click. Button[0] because getElements returns an array
button[0].addEventListener("click", () => {
  //consume API
  //1. endpoint - https://dog.ceo/api/breeds/image/random Fetch!
  //2. JSON or xml? - JSON
  //3. How much data - 1 object
  //4. What the data looks like - Two elements: meesage= Potential image, status: success or fail.

  //HTTP Request

  // 1) Utilize the endpoint with correct method(verb)
  const baseURL = "https://dog.ceo/api/breeds";
  let route = "image/random";
  let endpoint = `${baseURL}/${route}`;
  fetch(endpoint)
    .then((response) => {
      console.log(response);
      // 2) Get a response: if okay, parse the data. Else, error
      if (response.ok) {
        //sent down to next then
        return response.json();
      } else {
        throw Error("It's broken");
      }
    })
    // 3) Do something with the parse data
    .then(data => {
        image[0].setAttribute("src", data.message);
        console.log("Data: ", data)
    })
    .catch((err) => {
       // 4) Handle the error
      console.log(err);
    });
});


