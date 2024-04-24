function deleteMonkey(id) {
    fetch(`/delmonkey/${id}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                alert("Apina poistettu");
                window.location.reload(); 
            } else {
                alert("Apina karkas.");
            }
        })
        .catch(error => alert("Apinan poisto epäonnistui."));
}

window.onload = function() {
    fetch('/findmonkeys')
        .then(response => response.json())
        .then(monkeys => {
            const listContainer = document.getElementById('monkeyList');
            listContainer.innerHTML = '';
            monkeys.forEach(monkey => {
                const monkeyDiv = document.createElement('div'); // Monkeydiv information
                monkeyDiv.innerHTML = `
                    <p>ID: ${monkey._id}</p>
                    <p>Race: ${monkey.race}</p>
                    <p>Size: ${monkey.size}</p>
                    <p>Living Area: ${monkey.livingArea}</p>
                `;
                // Create a delete button for each monkey
                const deleteButton = document.createElement('button');
                deleteButton.innerText = 'Delete';
                deleteButton.onclick = function() { deleteMonkey(monkey._id); };

                monkeyDiv.appendChild(deleteButton);
                listContainer.appendChild(monkeyDiv);
            });
        })
        .catch(error => {
            document.getElementById('monkeyList').innerHTML = 'Failed to load monkeys.';
            console.error('Error:', error);
        });
};