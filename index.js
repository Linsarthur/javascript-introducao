let mes = prompt("Digite o mês do seu nascimento(ex: jan):");
let dia = prompt("Pegue o dia que você nasceu(ex: 1 - 31):");
let escolhaMes = "";
let escolhaDia = "";



switch (mes) {
  case "jan":
    escolhaMes = "Capirotos";
    break;
  case "fev":
    escolhaMes = "Lendários";
    break;
  case "mar":
    escolhaMes = "Soldados";
    break;
  case "abr":
    escolhaMes = "Faroestes";
    break;
  case "maio":
    escolhaMes = "Fodões";
    break;
  case "jun":
    escolhaMes = "Monstros";
    break;
  case "jul":
    escolhaMes = "Fanfarrões";
    break;
  case "ago":
    escolhaMes = "Baderneiros";
    break;
  case "set":
    escolhaMes = "Perturbados";
    break;
  case "out":
    escolhaMes = "Aliens";
    break;
  case "nov":
    escolhaMes = "Revoltados";
    break;
  case "dec":
    escolhaMes = "Gigantes";
    break;
}

switch (dia) {
  case "1":
    escolhaDia = "Do espaço";
    break;
  case "2":
    escolhaDia = "Do inferno";
    break;
  case "3":
    escolhaDia = "Da Galáxia";
    break;
  case "4":
    escolhaDia = "Da Fazenda";
    break;
  case "5":
    escolhaDia = "Do Diabo ";
    break;
  case "6":
    escolhaDia = "Do Japão";
    break;
  case "7":
    escolhaDia = "Das Trevosas";
    break;
  case "8":
    escolhaDia = "Do fundão";
    break;
  case "9":
    escolhaDia = "Dos Illuminatis";
    break;
  case "10":
    escolhaDia = "De copacabana";
    break;
  case "11":
    escolhaDia = "Das Trevas";
    break;
  case "12":
    escolhaDia = "Caboclos";
    break;
  case "13":
    escolhaDia = "Da muralha";
    break;
  case "14":
    escolhaDia = "Voadores";
    break;
  case "15":
    escolhaDia = "Do tempo";
    break;
  case "16":
    escolhaDia = "Da esperança é a ultima que morre";
    break;
  case "17":
    escolhaDia = "Do Morte";
    break;
  case "18":
    escolhaDia = "Abençoados";
    break;
  case "19":
    escolhaDia = "Infernais";
    break;
  case "20":
    escolhaDia = "Maloqueiros";
    break;
  case "21":
    escolhaDia = "Dos 7 pecados capitais";
    break;
  case "22":
    escolhaDia = "Mumificados";
    break;
  case "23":
    escolhaDia = "Amigos do Chimbinha";
    break;
  case "24":
    escolhaDia = "Posers";
    break;
  case "25":
    escolhaDia = "Do Mosh Pit";
    break;
  case "26":
    escolhaDia = "Valentões";
    break;
  case "27":
    escolhaDia = "Da ilha do demônio";
    break;
  case "28":
    escolhaDia = "Do segundo sol";
    break;
  case "29":
    escolhaDia = "Rebeldes sem causa";
    break;
  case "30":
    escolhaDia = "Grotescos";
    break;
  case "31":
    escolhaDia = "Do cemitério maldito";
    break;
}
console.log("---------Nome de roqueiro!----------")
alert(`Mês ecolhido ${mes}, dia escolhido ${dia}`);
setTimeout(3000)
console.log(`Seu nome de roqueiro é: ${escolhaMes} ${escolhaDia}`)
