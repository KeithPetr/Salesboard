const starBtn = document.getElementById('star')
const fireBtn = document.getElementById('fire')
const salesIcons = document.getElementById('sales-icons')
const achievementIcons = document.getElementById('achievement-icons')
const numberOfSales = document.getElementById('number-sales')
const numberOfAchievements = document.getElementById('number-achievements')
const revenueAmount = document.getElementById('revenue-amount')
const commissionAmount = document.getElementById('commission-amount')

let star = "⭐"
let fire = "🔥"
let bell = "🔔"
let bag = "💰"
let trophy = "🏆"

function addStar() {
    salesIcons.textContent += star
}

function addFire() {
    salesIcons.textContent += fire
}

starBtn.addEventListener('click', addStar)
fireBtn.addEventListener('click', addFire)