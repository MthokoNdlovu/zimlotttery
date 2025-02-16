// Set the target date/time for the upcoming draw (adjust as needed)
const targetDate = new Date("2025-12-31T23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // If the draw time has passed
  if (timeLeft < 0) {
    document.getElementById("countdown").innerHTML = "Draw in progress";
    clearInterval(countdownInterval);
    return;
  }

  // Calculate time components
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update HTML elements with calculated values
  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

// Refresh the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Redirect to ticket purchase page on button click (link to your purchase page)
document.getElementById("playNowBtn").addEventListener("click", function(){
  window.location.href = "ticket-purchase.html";
});
