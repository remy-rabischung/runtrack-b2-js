function mySearchStudent(event) {
    event.preventDefault();

    const email = document.getElementById("email-search-student").value;

    fetch(`request.php?email=${email}`)
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector("#student-info tbody");
        tbody.innerHTML = `
            <tr>
                <td>${data.email}</td>
                <td>${data.fullname}</td>
                <td>${data.gender}</td>
                <td>${data.birthdate}</td>
                <td>${data.grade}</td>
            </tr>
        `;
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}

document.getElementById("form-search-student").addEventListener("submit", mySearchStudent);
