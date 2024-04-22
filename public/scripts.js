window.onload = function() {
    fetch('/findmonkeys')
        .then(response => response.json())
        .then(monkeys => {
            const listContainer = document.getElementById('monkeyList');
            listContainer.innerHTML = '';
            monkeys.forEach(monkey => {
                const monkeyDiv = document.createElement('div');
                monkeyDiv.innerHTML = `Monkey: ${monkey.race}, Size: ${monkey.size}, Living Area: ${monkey.livingArea}`;
                listContainer.appendChild(monkeyDiv);
            });
        })
        .catch(error => {
            document.getElementById('monkeyList').innerHTML = 'Failed to load monkeys.';
            console.error('Error:', error);
        });
};