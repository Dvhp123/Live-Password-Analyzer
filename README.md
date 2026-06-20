# 🔐 Live Password Strength Analyzer

A responsive and real-time password strength analyzer web application built with HTML, CSS, and JavaScript. The project evaluates user passwords based on length and characters used, visualizing strength with a colored meter bar.

---

## 📂 Project Structure

The project has been separated into clean, dedicated files for improved modularity, maintainability, and clean code principles:

```text
Live Password Analyzer/
│
├── index.html     # HTML structure and UI skeleton
├── style.css      # Vanilla CSS styles and visual styling
├── script.js     # JavaScript logic for real-time validation & analysis
└── README.md      # Project documentation
```

---

## 🚀 How to Run the Project

Since this is a standard frontend application with vanilla HTML, CSS, and JavaScript, you can run it directly:

1. **Double-click `index.html`** to open the app directly in your web browser.
2. Alternatively, you can use a development server extension like **Live Server** in VS Code to run it at a local address (e.g., `http://localhost:5500`).

---

## ✨ Features

- **Live Analysis**: Checks character lengths and types as you type.
- **Visual Strength Indicator**: A dynamic progress bar that changes size and color based on the strength (Red for Weak, Orange for Medium, Green/Dark Green for Strong/Very Strong).
- **Complexity Validation**: Tracks 5 key security criteria:
  - ❌/✅ Minimum of 8 Characters
  - ❌/✅ Uppercase Letters (`A-Z`)
  - ❌/✅ Lowercase Letters (`a-z`)
  - ❌/✅ Numbers (`0-9`)
  - ❌/✅ Special Characters (e.g. `!@#$%^&*`)
- **Password History Ledger**: A table at the bottom allows you to submit and keep a history of evaluated passwords, along with their scores and strength classes.

---

## 🛠 Technical Details

- **HTML5**: Uses clean, semantic layout components and basic tables.
- **CSS3**: Styles include smooth transition animations (`transition: 0.4s`) for the visual analyzer meter, clean styling with dark-blue aesthetic colors (`#0f172a`, `#1e293b`), and dynamic hover effects.
- **Modern Javascript**: Regular expression matching (`/[A-Z]/`, `/[0-9]/`, etc.) is utilized for immediate validation and dynamic updates.
