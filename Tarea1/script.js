// Función para obtener un nuevo usuario
function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('user-picture').src = user.picture.large;
            document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById('user-email').textContent = user.email;
            document.getElementById('user-location').textContent = `${user.location.city}, ${user.location.country}`;
        })
        .catch(error => console.error('Error fetching the user:', error));
}

// Llamar a la función al cargar la página
window.onload = fetchRandomUser;

// Asignar la función al botón para obtener un nuevo usuario
document.getElementById('refresh-btn').addEventListener('click', fetchRandomUser);