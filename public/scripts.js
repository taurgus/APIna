function deleteMonkey(id) {
    fetch(`/delmonkey/${id}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                alert("Monkey deleted successfully!");
                window.location.reload(); 
            } else {
                alert("Failed to delete monkey.");
            }
        })
        .catch(error => alert("Error deleting monkey."));
}

window.onload = function() {
    fetch('/findmonkeys')
        .then(response => response.json())
        .then(monkeys => {
            const listContainer = document.getElementById('monkeyList');
            listContainer.innerHTML = '';
            monkeys.forEach(monkey => {
                const monkeyDiv = document.createElement('div');
                monkeyDiv.innerHTML = `Monkey: ${monkey.race}, Size: ${monkey.size}, Living Area: ${monkey.livingArea} `;
                
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