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
const lightModeBtn = document.getElementById("light-mode-btn")

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
let bell = "🔔";
let bag = "💰";
let trophy = "🏆";
let eight = "🎖️"
let totalRev = 0;
let totalCom = 0;
let revenueMet = false;

function addProduct(product) {
    if (achievementsArray.length === 0) {
      achievementsArray.push(bell);
      achievementIcons.textContent = achievementsArray.join("");
    }
    salesIconsArray.unshift(product.emoji);
    salesIcons.textContent = salesIconsArray.join("");
    totalRev += product.revenue;
    totalCom += product.commission;
    revenueAmount.textContent = `$${totalRev.toLocaleString()}`;
    commissionAmount.textContent = `$${totalCom.toLocaleString()}`;
  
    if (salesIconsArray.length === 8) {
      achievementsArray.push(eight)
      achievementIcons.textContent = achievementsArray.join("")
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

starBtn.addEventListener("click", function() {
    addProduct(productA)
});
fireBtn.addEventListener("click", function() {
    addProduct(productB)
});

lightModeBtn.addEventListener("click", function() {
  document.getElementById('salesboard').classList.toggle('light-mode')
  revenueAmount.classList.toggle('light-text')
  commissionAmount.classList.toggle('light-text')
  salesIcons.classList.toggle('light-grey')
  achievementIcons.classList.toggle('light-grey')
  starBtn.classList.toggle('light-purple')
  fireBtn.classList.toggle('light-purple')
  console.log('click')
  if (lightModeBtn.textContent === 'Light Mode') {
    lightModeBtn.textContent = 'Dark Mode'
    lightModeBtn.classList.add('light-purple')
  } else {
    lightModeBtn.textContent = 'Light Mode'
    lightModeBtn.classList.remove('light-purple')
  }
})