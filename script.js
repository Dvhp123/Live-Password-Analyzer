let currentStrength = "";
let currentScore = 0;

document.getElementById("password").addEventListener("input", analyzePassword);

function analyzePassword() {
    const password = document.getElementById("password").value;
    let score = 0;

    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLength) score++;
    if (hasUpper) score++;
    if (hasLower) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    currentScore = score;

    document.getElementById("length").innerHTML =
        (hasLength ? "✅" : "❌") + " Minimum 8 Characters";

    document.getElementById("upper").innerHTML =
        (hasUpper ? "✅" : "❌") + " Uppercase Letter";

    document.getElementById("lower").innerHTML =
        (hasLower ? "✅" : "❌") + " Lowercase Letter";

    document.getElementById("number").innerHTML =
        (hasNumber ? "✅" : "❌") + " Number";

    document.getElementById("special").innerHTML =
        (hasSpecial ? "✅" : "❌") + " Special Character";

    document.getElementById("score").innerHTML =
        "Score : " + score + "/5";

    const strength = document.getElementById("strength");
    const bar = document.getElementById("bar");

    if (password.length === 0) {
        strength.innerHTML = "Start Typing...";
        bar.style.width = "0%";
        currentStrength = "";
        return;
    }

    if (score <= 1) {
        currentStrength = "Weak";
        strength.innerHTML = "🔴 Weak";
        strength.className = "weak";
        bar.style.width = "20%";
        bar.style.background = "red";
    } else if (score <= 3) {
        currentStrength = "Medium";
        strength.innerHTML = "🟠 Medium";
        strength.className = "medium";
        bar.style.width = "60%";
        bar.style.background = "orange";
    } else if (score === 4) {
        currentStrength = "Strong";
        strength.innerHTML = "🟢 Strong";
        strength.className = "strong";
        bar.style.width = "80%";
        bar.style.background = "#22c55e";
    } else {
        currentStrength = "Very Strong";
        strength.innerHTML = "🟢 Very Strong";
        strength.className = "verystrong";
        bar.style.width = "100%";
        bar.style.background = "#16a34a";
    }
}

function savePassword() {
    const password = document.getElementById("password").value;

    if (password === "") {
        alert("Enter a password first");
        return;
    }

    const row = `
        <tr>
            <td>${password}</td>
            <td>${currentStrength}</td>
            <td>${currentScore}/5</td>
        </tr>
    `;

    document.getElementById("savedData").innerHTML += row;
    document.getElementById("password").value = "";
}
