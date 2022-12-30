function adduser() {
  username = document.getElementById("input_box").value;
  localStorage.setItem("username", username)
  window.location = "page2.html"
}