// JavaScript for DOM Manipulation

// Change the text of the product description
function changeText() {
    let description = document.getElementById("product-description");
    description.innerHTML = "This product is now on sale! Don't miss out.";
}

// Change the image source when the button is clicked
document.getElementById("change-image").addEventListener("click", function() {
    let image = document.getElementById("product-image");
    image.src = "camera.jpg";
});

// Add a text node to the product description
document.getElementById("add-text-node").addEventListener("click", function() {
    let newText = document.createTextNode(" Limited offer available!");
    let description = document.getElementById("product-description");
    description.appendChild(newText);
});

// Delete the product description node
document.getElementById("delete-node").addEventListener("click", function() {
    let description = document.getElementById("product-description");
    if (description) {
        description.remove(); // Removes the node directly
    } else {
        alert("Description already deleted.");
    }
});

// Change the position of the product image
document.getElementById("change-position").addEventListener("click", function() {
    let image = document.getElementById("product-image");
    image.style.position = "relative";
    image.style.left = "50px"; // Moves the image 50px to the right
    image.style.top = "20px"; // Moves the image 20px down
});

// jQuery for DOM Manipulation

// Change the button text using jQuery
$("#change-style").click(function() {
    $(this).text("Style Changed!");
    $(".product-container").css("background-color", "#f0f0f0");
    $("#product-image").css({
        "border-radius": "50%",
        "transform": "rotate(10deg)"
    });
});

// Set background-image using jQuery CSS property
$("header").css("background-image", "url('back.jpg')");

// Access HTML form data using jQuery
$("#submit-form").click(function() {
    let productName = $("#product-name").val();
    let productPrice = $("#product-price").val();
    alert("Product Name: " + productName + "\nProduct Price: $" + productPrice);
});

// Add an attribute using jQuery
$("#product-image").attr("alt", "New Product Image");
