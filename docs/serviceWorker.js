self.addEventListener("install", installEvent => {
  alert("Service worker installed 1");
});

Notification.requestPermission().then(result => {
  if (result) {
    const img = "/olaf.jpg";
    const text = `notification 1`;
    const notification = new Notification("To do list", { body: text, icon: img });
  } else {
    alert("No permission 2");
  }
});