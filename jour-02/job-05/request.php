<?php

function my_search_student($email) {
    // Simule une recherche dans la base de données
    $students = [
        "student1@example.com" => ["email" => "student1@example.com", "fullname" => "John Doe", "gender" => "male", "birthdate" => "2000-01-01", "grade" => "Bachelor 1"],
        "student2@example.com" => ["email" => "student2@example.com", "fullname" => "Jane Smith", "gender" => "female", "birthdate" => "1998-05-15", "grade" => "Bachelor 2"]
    ];

    return $students[$email] ?? null;
}

if (isset($_GET['email'])) {
    $email = $_GET['email'];
    $student = my_search_student($email);

    if ($student) {
        echo json_encode($student);
    } else {
        echo json_encode(["error" => "Aucun étudiant trouvé"]);
    }
}
?>
