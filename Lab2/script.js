const menuItems = [
    {
        title: "Pollos Chicken Sandwich",
        description: "Juicy Pollos Chicken with spicy mayo and pickles. Comes with a side of fries.",
        image: "https://www.unileverfoodsolutions.us/dam/global-ufs/mcos/NAM/calcmenu/recipes/US-recipes/sandwiches/spicy-mayo-fried-chicken-sandwich/crispychickensandwich_1206x709.jpg",
        price: 7.99
    },
    {
        title: "Pollos Breakfast Waffles",
        description: "Pollos Chicken covered in maple syrup on top of 2 large waffles",
        image: "https://keviniscooking.com/wp-content/uploads/2022/04/Chicken-and-Waffles-Recipe-square.jpg",
        price: 8.99
    },
    {
        title: "Pollos Platter",
        description: "Two pieces of Pollos chicken with spanish rice, carrots and peas ",
        image: "https://mylifecookbook.com/wp-content/uploads/2016/03/chicken-spanish-rice-closeupSQ.jpg",
        price: 10.99
    },
    {
        title: "Pollos Tacos",
        description: "Crunchy tacos with Pollos boneless chicken marinated in signature Pollos sauce",
        image: "https://www.onceuponachef.com/images/2011/02/chicken-tacos-11.jpg",
        price: 7.99
    },
    {
        title: "Methamphetameme",
        description: "1 gram of 99.1% pure methamphetameme. Stocked weekly from the local legend, Heisenberg. Get them before they sell out!",
        image: "https://images.theconversation.com/files/341513/original/file-20200612-153812-1hvh1e4.jpg?ixlib=rb-4.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
        price: 40

    }
];
let currentIndex = 0;

function prevImage() {

    const currentItem = menuItems[currentIndex];
    document.getElementById('menu-title').textContent = currentItem.title;
    document.getElementById('menu-description').textContent = currentItem.description;
    document.getElementById('menu-image-url').src = currentItem.image;
    document.getElementById('menu-price').textContent = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(currentItem.price);
    document.getElementsById('menu-image-url').alt = currentItem.title;
};
function nextImage() {

    const currentItem = menuItems[currentIndex];
    document.getElementById('menu-title').textContent = currentItem.title;
    document.getElementById('menu-description').textContent = currentItem.description;
    document.getElementById('menu-image-url').src = currentItem.image;
    document.getElementById('menu-price').textContent = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(currentItem.price);
    document.getElementsById('menu-image-url').alt = currentItem.title;
};

document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex == 0) ? menuItems.length - 1 : currentIndex-1;
    prevImage();
});

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex == menuItems.length-1) ? 0 : currentIndex + 1;
    nextImage();
});

prevImage(); //initializing the first menu item

document.getElementById('age'),addEventListener('submit', function(event) {
    event.preventDefault();
    const ageInput = document.getElementById("age").value;
    const errorMessage = document.getElementById("error-message");
    const age = Number(ageInput);

    if(isNaN(age) || age < 21 || age > 99) {
        errorMessage.style.display = 'block';
        alert("Age must be at least 21 and less than 99")
    } else {
        errorMessage.style.display = 'none';
    }
});

document.getElementById('phoneNumber').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('inputAge').placeholder = "###-###-####";

});