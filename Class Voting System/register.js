const nameInput = document.getElementById("name");
const matricInput = document.getElementById("matric");
const passwordInput = document.getElementById("password");

function register() {

    // 1. Check empty fields
    if (!nameInput.value || !matricInput.value || !passwordInput.value) {
        alert("All fields are required");
        return;
    }

    // 2. Get users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 3. Check if matric already exists
    if (users.find(u => u.matric === matricInput.value)) {
        alert("Matric already registered");
        return;
    }

    

    // 4. Save new user
    users.push({
        name: nameInput.value,
        matric: matricInput.value,
        password: passwordInput.value,
        voted: false
    });

    // 5. Store back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");

    // 6. Redirect to login
    location.href = "login.html";
}
