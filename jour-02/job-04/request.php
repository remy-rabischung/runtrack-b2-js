<?php

function my_insert_student($email, $fullname, $gender, $grade, $birthdate) {
    // Simule l'insertion dans une base de données
    return true; // Retourne true pour simuler une réussite
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['student-mail'];
    $fullname = $_POST['student-fullname'];
    $gender = $_POST['student-gender'];
    $grade = $_POST['student-grade'];
    $birthdate = $_POST['student-birthdate'];

    if (my_insert_student($email, $fullname, $gender, $grade, $birthdate)) {
        echo "Student registered successfully!";
    } else {
        echo "Failed to register student.";
    }
}
?>
