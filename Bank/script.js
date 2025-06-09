// ✅ Sample user credentials
const validEmail = "Meadows236";
const validPassword = "Jesse1234";

// ✅ Account data (including Net Worth)
const accounts = [
  { label: "Net Worth", amount: 10549753, color: "blue" },
  { label: "Checkings", amount: 0, color: "blue" },
  { label: "Credit Cards", amount: 0, color: "red" },
  { label: "Investments", amount: 10549753, color: "blue" },
  { label: "Savings", amount: 0, color: "blue" },
  { label: "IRA", amount: 0, color: "blue" }
];

// ✅ Login logic
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === validEmail && password === validPassword) {
    document.getElementById("login-screen").style.display = "none";
    document.querySelector(".dashboard-topbar").style.display = "flex";
    document.querySelector(".mobile-dashboard").style.display = "block";
    buildDashboard();
  } else {
    alert("Invalid login. Use:\nMeadowsjesse236@gmail.com / Jesse1234");
  }
}

// ✅ Logout logic
function logout() {
  document.getElementById("login-screen").style.display = "flex";
  document.querySelector(".dashboard-topbar").style.display = "none";
  document.querySelector(".mobile-dashboard").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

// ✅ Format number to $X,XXX.XX
function formatCurrency(amount) {
  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

// ✅ Build the dynamic cards with top color tab
function buildDashboard() {
  const container = document.querySelector(".mobile-dashboard");

  // Remove existing cards on rebuild
  const oldCards = container.querySelectorAll(".account-card");
  oldCards.forEach(card => card.remove());

  accounts.forEach(account => {
    const card = document.createElement("div");
    card.className = "account-card";

    card.innerHTML = `
      <div class="card-top-tab ${account.color}-tab"></div>
      <div class="card-text">
        <p class="card-label">${account.label}</p>
        <p class="card-amount">${formatCurrency(account.amount)}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

// ✅ Inject tab styles (blue/red) for top edge
const style = document.createElement("style");
style.innerHTML = `
  .card-top-tab {
    height: 6px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin: -1rem -1rem 1rem;
    background-color: transparent;
  }
  .blue-tab {
    background-color: #005eb8;
  }
  .red-tab {
    background-color: #d00000;
  }
  .card-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
document.head.appendChild(style);
