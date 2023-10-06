// Get references to the project links
const projeto1Link = document.getElementById("btn-p1");
const projeto2Link = document.getElementById("btn-p2");
const projeto3Link = document.getElementById("btn-p3");
const projeto4Link = document.getElementById("btn-p4");

// Get references to the central content elements
const imagem1 = document.getElementById("imagem1");
const imagem2 = document.getElementById("imagem2");
const imagem3 = document.getElementById("imagem3");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

// Function to change content based on the clicked project
function changeContent(projectName, imageUrl1, imageUrl2, imageUrl3, projectText) {
    titulo.textContent = projectName;	
    imagem1.src = imageUrl1;
	imagem2.src = imageUrl2;
	imagem3.src = imageUrl3;
    texto.textContent = projectText;
}

// Add click event listeners to each project link
projeto1Link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    changeContent("Projeto1", "imagem/Projeto1.1.png", "imagem/Projeto1.2.png", "imagem/Projeto1.3.png", "Texto Projeto 1 - Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professr at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.");
});

projeto2Link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    changeContent("Projeto2", "imagem/Projeto2.1.png", "imagem/Projeto2.2.png", "imagem/Projeto2.3.png", "Texto Projeto 2 - Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professr at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.");
});

projeto3Link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    changeContent("Projeto3", "imagem/Projeto3.1.png", "imagem/Projeto3.2.png", "imagem/Projeto3.3.png", "Texto Projeto 3 - Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professr at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.");
});

projeto4Link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    changeContent("Projeto4", "imagem/Projeto4.1.png", "imagem/Projeto4.2.png", "imagem/Projeto4.3.png", "Texto Projeto 4 - Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professr at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.");
});