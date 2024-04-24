document
  .getElementById("addMonkeyForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const race = document.getElementById("race").value;
    const size = document.getElementById("size").value;
    const livingArea = document.getElementById("livingArea").value;

    const newMonkey = { race, size, livingArea };

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
        console.log("Monkey added successfully:", data);
        // Optionally, redirect to another page or display a success message
      } else {
        console.error("Failed to add monkey:", data);
      }
    } catch (error) {
      console.error("Error adding monkey:", error);
    }
  });
