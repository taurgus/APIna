document.getElementById("addMonkeyForm").addEventListener("submit", async function (event) {
  event.preventDefault();
  const form = document.getElementById("addMonkeyForm");
  const race = document.getElementById("race").value;
  const size = document.getElementById("size").value;
  const livingArea = document.getElementById("livingArea").value;
  const newMonkey = { race, size, livingArea };
  const messageDiv = document.getElementById("message");

  try {
    const response = await fetch("/monkeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMonkey),
    });
    const data = await response.json();

    if (response.ok) {
      console.log("Apina added successfully:", data);
      messageDiv.textContent = "Apina added successfully!";
      messageDiv.style.color = "green";
      console.log("Resetting form...");
      form.reset();  //Reset form
    } else {
      console.error("Failed to add apina:", data);
      messageDiv.textContent = "Failed to add apina: " + data.message;
      messageDiv.style.color = "red";
    }
  } catch (error) {
    console.error("Error adding apina:", error);
    messageDiv.textContent = "Error adding apina: " + error.message;
    messageDiv.style.color = "red";
  }
});
