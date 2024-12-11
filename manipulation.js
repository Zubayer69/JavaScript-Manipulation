const addButton = document.getElementById("add");
const cancelButton = document.getElementById("cancel");
const employeeList = document.querySelector(".employee_list .em_item .card");
const nameInput = document.querySelector(".form_items input[placeholder='Name']");
const emailInput = document.querySelector(".form_items input[placeholder='Email']");
const roleInput = document.querySelector(".form_items input[placeholder='Role']");


function createEmployeeCard(name, role, email) {
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "details";

    detailsDiv.innerHTML = `
        <div class="inner_details">
            <p>Name: <span class="emp-name">${name}</span></p>
            <p>Role: <span class="emp-role">${role}</span></p>
            <p>Email: <span class="emp-email">${email}</span></p>
        </div>
        <div class="edit">
            <button class="btn btn-edit">Edit</button>
            <button class="btn btn-delete">Delete</button>
            <button class="btn btn-view">View</button>
        </div>
    `;

    detailsDiv.querySelector(".btn-delete").addEventListener("click", () => deleteEmployee(detailsDiv));
    detailsDiv.querySelector(".btn-view").addEventListener("click", () => viewEmployee(detailsDiv));
    detailsDiv.querySelector(".btn-edit").addEventListener("click", () => editEmployee(detailsDiv));

    return detailsDiv;
}

addButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const role = roleInput.value.trim();

    if (name && email && role) {
        const newEmployee = createEmployeeCard(name, role, email);
        employeeList.appendChild(newEmployee);
        
        nameInput.value = "";
        emailInput.value = "";
        roleInput.value = "";
    } else {
        alert("Please fill in all fields!");
    }
});

function deleteEmployee(employeeDiv) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employeeDiv.remove();
    }
}

function viewEmployee(employeeDiv) {
    const name = employeeDiv.querySelector(".emp-name").textContent;
    const role = employeeDiv.querySelector(".emp-role").textContent;
    const email = employeeDiv.querySelector(".emp-email").textContent;

    alert(`Employee Details:\n\nName: ${name}\nRole: ${role}\nEmail: ${email}`);
}

function editEmployee(employeeDiv) {
    const nameSpan = employeeDiv.querySelector(".emp-name");
    const roleSpan = employeeDiv.querySelector(".emp-role");
    const emailSpan = employeeDiv.querySelector(".emp-email");

    const newName = prompt("Edit Name:", nameSpan.textContent);
    const newRole = prompt("Edit Role:", roleSpan.textContent);
    const newEmail = prompt("Edit Email:", emailSpan.textContent);

    if (newName) nameSpan.textContent = newName;
    if (newRole) roleSpan.textContent = newRole;
    if (newEmail) emailSpan.textContent = newEmail;
}

cancelButton.addEventListener("click", () => {
    nameInput.value = "";
    emailInput.value = "";
    roleInput.value = "";
});
