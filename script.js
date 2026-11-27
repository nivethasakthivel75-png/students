document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let age = Number(document.getElementById("age").value);
    let phone = document.getElementById("phone").value;
    let result = document.getElementById("result");

    if (age <= 0 || age >= 30) {
        result.innerHTML = "Age should be below 30!";
        result.style.color = "red";
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        result.innerHTML = "Phone must contain 10 digits!";
        result.style.color = "red";
        return;
    }

    result.innerHTML = "Registered Successfully!";
    result.style.color = "green";
});