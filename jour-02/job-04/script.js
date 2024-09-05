function myRegisterStudent(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById("form-add-student"));
    
    fetch('request.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}

document.getElementById("form-add-student").addEventListener("submit", myRegisterStudent);
