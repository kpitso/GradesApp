function recommendProgram() {
    // Get the values entered in the input fields
    let mathsGrade = document.getElementById("mathsGrade").value;
    let businessGrade = document.getElementById("businessGrade").value;
    let englishGrade = document.getElementById("englishGrade").value;

    // Initialize variables to store recommendation, image, and details
    let recommendation = "";
    let image = "";
    let details = "";

    if (mathsGrade <= 'A') {
        recommendation = "Information Technology";
        image = "IT.jpg";
        details = "Some examples of IT jobs are Network Systems Administrator, Computer systems Analyst, Database administrator, and Software developer.";
    } else if (businessGrade <= 'B' && englishGrade <= 'B') {
        recommendation = "Business Management";
        image = "BM.jpg";
        details = "A program that covers Business principles and concepts, such as Organizational Management, Strategic planning, and Human resource.";
    } else if (englishGrade <= 'B') {
        recommendation = "Communication Studies";
        image = "COMM.jpg";
        details = "Management of Interpersonal relationships, Oral and Written communication, Teamwork, and Collaboration.";
    } else {
        recommendation = "No Programs Available.";
    }

    // Display the recommendation
    document.getElementById("program-recommendation").innerHTML = `
        <h4>Recommended Program: ${recommendation}</h4>
        <img src="${image}" alt="${recommendation} Image">
        <p>${details}</p>
    `;

    // Reset the input fields
    document.getElementById("mathsGrade").value = '';
    document.getElementById("businessGrade").value = '';
    document.getElementById("englishGrade").value = '';
}
