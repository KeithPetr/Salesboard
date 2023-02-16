const starBtn = document.getElementById("star");
const fireBtn = document.getElementById("fire");
const salesIcons = document.getElementById("sales-icons");
const achievementIcons = document.getElementById("achievements-icons");
const numberOfSales = document.getElementById("number-sales");
const numberOfAchievements = document.getElementById("number-achievements");
const revenueAmount = document.getElementById("revenue-amount");
const commissionAmount = document.getElementById("commission-amount");
const salesSelectors = document.getElementById("sales-selectors");
const salesNum = document.getElementById("number-sales");
const achievementsNum = document.getElementById("number-achievements");
const lightModeBtn = document.getElementById("light-mode-btn");
const saveDataBtn = document.getElementById("save-data-btn");
const resetDisplayBtn = document.getElementById("reset-display-btn");
const resetStorageBtn = document.getElementById("reset-storage-btn");

// Product A info
let productA = {
  emoji: "⭐",
  revenue: 200,
  commission: 50,
};

// Product B info
let productB = {
  emoji: "🔥",
  revenue: 300,
  commission: 75,
};

let salesIconsArray = [];
let achievementsArray = [];
let sessionArray = [];
let bell = "🔔";
let bag = "💰";
let trophy = "🏆";
let eight = "🎖️";
let totalRev = 0;
let totalCom = 0;
let revenueMet = false;

// the below function updates the users display by taking in either the star or fire 
// product objects as a parameter and then using that information to update the elements
// within the app using dot notation to access each product object
function addProduct(product) {
  if (achievementsArray.length === 0) {
    achievementsArray.push(bell);
    achievementIcons.textContent = achievementsArray.join("");
  }
  salesIconsArray.unshift(product.emoji);
  sessionArray.unshift(product.emoji);
  salesIcons.textContent = salesIconsArray.join("");
  totalRev += product.revenue;
  totalCom += product.commission;
  revenueAmount.textContent = `$${totalRev.toLocaleString()}`;
  commissionAmount.textContent = `$${totalCom.toLocaleString()}`;

  if (salesIconsArray.length === 8) {
    achievementsArray.push(eight);
    achievementIcons.textContent = achievementsArray.join("");
  }

  if (totalRev >= 2500 && !revenueMet) {
    achievementsArray.push(bag);
    achievementIcons.textContent = achievementsArray.join("");
    revenueMet = true;
  }

  if (salesIconsArray.length === 15) {
    achievementsArray.push(trophy);
    achievementIcons.textContent = achievementsArray.join("");
  }
  salesNum.textContent = salesIconsArray.length;
  achievementsNum.textContent = achievementsArray.length;
}

starBtn.addEventListener("click", function () {
  addProduct(productA);
});
fireBtn.addEventListener("click", function () {
  addProduct(productB);
});

// ----- Dark/Light Mode -----

lightModeBtn.addEventListener("click", function () {
  document.getElementById("salesboard").classList.toggle("light-mode");
  revenueAmount.classList.toggle("light-text");
  commissionAmount.classList.toggle("light-text");
  salesIcons.classList.toggle("light-grey");
  achievementIcons.classList.toggle("light-grey");
  starBtn.classList.toggle("light-purple");
  fireBtn.classList.toggle("light-purple");
  saveDataBtn.classList.toggle("light-grey");
  resetDisplayBtn.classList.toggle("light-grey");
  resetStorageBtn.classList.toggle("light-grey");
  console.log("click");
  if (lightModeBtn.textContent == "Light Mode") {
    lightModeBtn.textContent = "Dark Mode";
    lightModeBtn.classList.remove("light-purple");
  } else {
    lightModeBtn.textContent = "Light Mode";
    lightModeBtn.classList.add("light-purple");
  }
});

// ----- Clearing Displays and Local Storage -----
// The below function resets the sales on the users display

function resetData() {
  revenueAmount.textContent = "";
  commissionAmount.textContent = "";
  salesIconsArray = [];
  achievementsArray = [];
  salesIcons.textContent = "";
  achievementIcons.textContent = "";
  salesNum.textContent = "";
  achievementsNum.textContent = "";
}

// the below function clears all the saved data in localStorage

function resetStorage() {
  window.localStorage.clear();
}

// The below function first looks into localStorage to see if there is any data.
// If not, it saves the current sessionArray to localStorage.
// If there is data, the function gets that array for local storage, uses the spread
// operator to push the new items to the existing array in localStorage, then sets a
// new array in localStorage with the newly added data
function saveData() {
  const currentData = JSON.parse(localStorage.getItem("salesIconsArray"));
  if (currentData === null) {
    localStorage.setItem("salesIconsArray", JSON.stringify(salesIconsArray));
    sessionArray = [];
    return;
  }
  console.log("BeforeARR" , sessionArray)
  console.log(currentData)
  sessionArray.push(...currentData);
  console.log("AfterARR", sessionArray);
  localStorage.setItem("salesIconsArray", JSON.stringify(sessionArray));
  sessionArray = [];
}


document
  .getElementById("reset-display-btn")
  .addEventListener("click", resetData);

document
  .getElementById("reset-storage-btn")
  .addEventListener("click", resetStorage);

document.getElementById("save-data-btn").addEventListener("click", saveData);
