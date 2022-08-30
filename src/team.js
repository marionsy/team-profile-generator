// Function to return manager card
const createManagerHtml = (manager) => {
    return `
    <div class="col-3 card mx-3 mb-5" style="box-shadow: 10px 10px 5px #aaaaaa;">
                <div class="card-body mx-3">
                    <h3 class="text-light text-center"
                        style="background-color:rgb(187, 150, 150); font-family: 'Montserrat'">${manager.name}</br>
                        <i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.email}"> ${manager.email}</a></li>
                            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
    `;
}

// Function to return engineer cards
const createEngineersHtml = (engineers) => {
    return engineers.map(engineer => {
        return `
        <div class="col-3 card mx-3 mb-5" style="box-shadow: 10px 10px 5px #aaaaaa;">
                <div class="card-body mx-3">
                    <h3 class="text-light text-center"
                        style="background-color:rgb(187, 150, 150); font-family: 'Montserrat'">${engineer.name}</br>
                        <i class="fas fa-glasses mr-2"></i>Engineer</h3>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank">
                            ${engineer.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
}

// Function to return intern card
const createInternsHtml = (interns) => {
    return interns.map(intern => {
        return `
        <div class="col-3 card mx-3 mb-5" style="box-shadow: 10px 10px 5px #aaaaaa;">
                    <div class="card-body mx-3">
                        <h3 class="text-light text-center"
                            style="background-color:rgb(187, 150, 150); font-family: 'Montserrat'">${intern.name}</br>
                            <i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${intern.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                                <li class="list-group-item">School: ${intern.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
        `;
    })
    .join("");
}

// Function to generate team HTML page
const generateHtml = (managerHtml, engineersHtml, internsHtml) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Team Profile Generator</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    
    <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">

    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body style="background-color:rgb(219, 196, 196)">

    <div class="jumbotron jumbotron-fluid" style="background-color:rgb(177, 116, 116)">
        <div class="container pb-3 pt-3" style="background-color:rgb(177, 116, 116)">
            <h1 class="display-4 text-center text-light"
                style="background-color:rgb(177, 116, 116); font-family: 'Merriweather Sans', sans-serif">My Team</h1>
        </div>
    </div>

    <div class="container">
        <div class="row justify-content-center mt-5">
            ${managerHtml} ${engineersHtml} ${internsHtml}
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"></script>
</body>

</html>    
    `;
}

module.exports = {
    generateHtml,
    createManagerHtml,
    createEngineersHtml,
    createInternsHtml
}