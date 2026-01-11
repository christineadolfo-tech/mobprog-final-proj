function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if (username === "" || password === "" || role === "") {
        errorMsg.textContent = "Please fill in all fields.";
        return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordPattern.test(password)) {
        errorMsg.textContent =
            "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
        return;
    }

    // TEMPORARY account login muna kasi wala pang database
    if (username === "admin" && password === "Admin@123" && role === "admin") {
        alert("Welcome Admin!");

    } 
    else if (username === "staff" && password === "Staff@123" && role === "staff") {
        alert("Welcome Staff!");
    } 
    else if (
    username === "resident" &&
    password === "Resident@123" &&
    role === "resident"
) {
    window.location.href = "resident-dashboard.html";
}

    else {
        errorMsg.textContent = "Invalid login credentials.";
    }
}
