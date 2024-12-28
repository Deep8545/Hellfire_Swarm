const predefinedPassword = "hellfire"; // Replace with your password

document.getElementById("passwordForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === predefinedPassword) {
        // Redirect to the main page
        window.location.href = "index.html";
    } else {
        // Show error message
        const errorElement = document.getElementById("error");
        errorElement.style.display = "block";
    }
});