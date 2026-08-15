const loginForm = document.getElementById("loginForm");

if (loginForm)
{
    loginForm.addEventListener("submit", function(event) 
    {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";

    if (username === "")
    {
        errorMessage.textContent = "Please enter username.";
        return;
    }

    if (password === "")
    {
        errorMessage.textContent = "Please enter password.";
        return;
    }

    const correctUsername = "Hema";
    const correctPassword = "12345";

    if (username === correctUsername && password === correctPassword)
    {
        localStorage.setItem("isLoggedIn", "true");

        localStorage.setItem("username", username);

        window.location.href = "dashboard.html";

    } 
    else
    {
        errorMessage.textContent ="Invalid username or password.";
    }
});
}

if (window.location.pathname.includes("dashboard.html")) 
{
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true")
    {
        alert("Please login first.");
        window.location.href ="index.html";
    }

    const username = localStorage.getItem("username");
    const welcomeMessage =
    document.getElementById("welcomeMessage");

    if (welcomeMessage && username)
    {
        welcomeMessage.textContent ="Hello, " + username + "!";
    }
}

const logoutButton = document.getElementById("logoutButton");

if (logoutButton) 
    {
        logoutButton.addEventListener("click", function()
        {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("username");
            window.location.href = "index.html";
        });
    }
