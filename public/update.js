document
  .getElementById("updateMonkeyForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const monkeyId = document.getElementById("monkeyId").value;
    const race = document.getElementById("race").value;
    const size = document.getElementById("size").value;
    const livingArea = document.getElementById("livingArea").value;

    const updateData = { race, size, livingArea };
    
    // USE PUT METHOD TO UPDATE MONKEY
    // USE Content-Type: application/json for headers
    try {
      const response = await fetch(`/monkeys/${monkeyId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Apina updated successfully:", data);
        alert("Apina päivitetty");
        displayUpdatedMonkey(data.monkey); // Call function to display updated monkey
      } else {
        console.error("Epäonnistui, apina on hyvin vihainen", data);
      }
    } catch (error) {
      console.error("apina error", error);
    }
  });

function displayUpdatedMonkey(monkey) {
  const monkeyDetailsElement = document.getElementById("monkeyDetails");
  monkeyDetailsElement.innerHTML = `
        <strong>ID:</strong> ${monkey._id}<br>
        <strong>Race:</strong> ${monkey.race}<br>
        <strong>Size:</strong> ${monkey.size}<br>
        <strong>Living Area:</strong> ${monkey.livingArea}<br>
    `;
}