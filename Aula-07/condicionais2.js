const permissoes = "aluno"; // 'aluno' || 'professor' || 'admin'

switch (permissoes) {
  case "aluno":
    console.log("you can only read the classes.");
    break;
  case "professor":
    console.log("You can modify and add exercices.");
    break;
  case "admin":
    console.log("You can do everything");
    break;
  default:
    console.log("I dont know who you are.");
}
