const form = document.getElementById("messageform");
const container = document.getElementById("wrapper1");

function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log({ username: username, message: message });

  // make a request to the server with our form data as the body
  fetch("https://week4-project-poxk.onrender.com", {
    method: "POST",
    body: JSON.stringify({ username: username, message: message }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

form.addEventListener("submit", handleSubmit);

// get the messages from my api
async function getDetail() {
  const response = await fetch("https://week4-project-poxk.onrender.com");
  const detail = await response.json();
  console.log(detail);

  detail.forEach(function (detail) {
    const p = document.createElement("p");
    const p2 = document.createElement("p2");

    p.textContent = detail.username;
    p2.textContent = detail.message;

    wrapper1.appendChild(p);
    wrapper1.appendChild(p2);
  });

  container.innerHTML = detail;
}

getDetail();
