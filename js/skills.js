const skills = [
    "C#",
    "Javascript",
    "Java",
    "PostgreSQL",
    "MySQL",
    "SQL Server",
    "Mongodb",
    "Redis",
    "Entity Framework",
    "Angular",
    "ReactJS",
    "TDD",
    "Integração Contínua"
]

skills.forEach(function(skill) {
    var chip = document.createElement("div");
    chip.className = "chip";
    var chipText = document.createTextNode(skill);
    chip.appendChild(chipText);
    document.getElementsByClassName("chips")[0].appendChild(chip);
})
