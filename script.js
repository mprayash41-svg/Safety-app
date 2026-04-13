document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log("Device Ready ✅");
}

// SAVE CONTACT
function saveContact() {
  let num = document.getElementById("contact").value;

  if (!num) {
    alert("Enter number");
    return;
  }

  localStorage.setItem("contact", num);
  alert("Saved ❤️");
}

// SOS FUNCTION
function sendSOS() {
  let num = localStorage.getItem("contact");

  if (!num) {
    alert("No contact saved");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function (pos) {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;

      let link = `https://maps.google.com/?q=${lat},${lon}`;
      let msg = `🚨 I need help! My location: ${link}`;

      let url = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;

      // OPEN WHATSAPP
      window.location.href = url;

      document.getElementById("status").innerText = "SOS Sent 🚨";
    },
    function (error) {
      alert("Location error: " + error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000
    }
  );
}
