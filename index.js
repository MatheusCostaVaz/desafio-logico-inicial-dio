const nomeHeroi = "Luffy"
const xpHeroi = "15000"

const nivelHeroi = obterNivel(xpHeroi);

// Função para obter o nível com base na experiência (XP)
function obterNivel(xp) {
  let nivel;

  switch (true) {
    case xp < 1000:
      nivel = "Ferro";
      break;
    case xp <= 2000:
      nivel = "Bronze";
      break;
    case xp <= 5000:
      nivel = "Prata";
      break;
    case xp <= 7000:
      nivel = "Ouro";
      break;
    case xp <= 8000:
      nivel = "Platina";
      break;
    case xp <= 9000:
      nivel = "Ascendente";
      break;
    case xp <= 10000:
      nivel = "Imortal";
      break;
    default:
      nivel = "Radiante";
  }

  return nivel;
}

// Exibe a mensagem
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
