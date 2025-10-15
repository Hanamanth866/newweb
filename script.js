document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  alert(`✅ Thank you, ${email}! You’ve been subscribed to job alerts.`);
  e.target.reset();
});
document.querySelector("footer a").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.newjobalert.com/privacy-policy", "_blank");
});