let alerts = [
  "Você é bem legal",
  "Você é inteligente",
  "Que bom trabalhar contigo",
];

// function showRandomAlert(name) {
//   alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
// }

const showRandomAlert = (name) =>
  console.log(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);

showRandomAlert("Maria");
