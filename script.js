function saveContact() {
  let num = document.getElementById("contact").value;

  if (!num) {
    alert("Enter number");
    return;
  }

  localStorage.setItem("contact", num);
  alert("Saved ❤️");
}

function sendSOS() {
  if (!navigator.geolocation) {
    alert("Location not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;

    let link = `https://maps.google.com/?q=${lat},${lon}`;
    let msg = `🚨 I need help! My location: ${link}`;

    let num = localStorage.getItem("contact");

    if (!num) {
      alert("No contact saved");
      return;
    }

    let url = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    document.getElementById("status").innerText = "SOS Sent 🚨";
  });
}
