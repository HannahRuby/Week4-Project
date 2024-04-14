const form = document.getElementById("messageform");
const container1 = document.getElementById("wrapper1");
const container2 = document.getElementById("comments");

function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const message = event.target.message.value;

  console.log({ name: name, message: message });

  // make a request to the server with our form data as the body
  response = fetch("http://localhost:8080/detail", {
    method: "POST",
    body: JSON.stringify({ name: name, message: message }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  location.reload();
}

form.addEventListener("submit", handleSubmit);

// get the messages from my api
async function getDetail() {
  const response = await fetch("http://localhost:8080/detail");
  const detail = await response.json();
  // console.log(detail);
  // container2.innerHTML = ""'
  detail.forEach(function (detail) {
    const p = document.createElement("p");
    const p2 = document.createElement("p2");

    p.textContent = detail.name;
    p2.textContent = detail.message;

    container2.appendChild(p);
    container2.appendChild(p2);
  });
}

getDetail();

async function deleteparsedPosts(parsedPosts) {
  const response = await fetch("http://127.0.0.1:5173/", {
    method: "DELETE",
  });

  location.reload();
}
