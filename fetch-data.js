async function fetchUserData() {
    try {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        const dataContainer = document.getElementById("api-data");
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear dataContainer
        dataContainer.innerHTML = '';

        // Create userList
        const userList = document.createElement("ul");
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });  
        dataContainer.appendChild(userList);

    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = "Failed to load user data.";
    }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
