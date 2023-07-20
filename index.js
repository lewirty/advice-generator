const botaoDado = document.querySelector('#circuloDado');
const numeroConselho = document.querySelector('#idConselho');
const fraseConselho = document.querySelector('#textoConselho');
const cooldownConselho = document.querySelector('#cooldown');

async function gerarConselho() {
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const conteudoConselho = await resposta.json();
    const idConselho = `ADVICE #${conteudoConselho.slip.id}`;
    const textoConselho = `"${conteudoConselho.slip.advice}"`;

    numeroConselho.innerHTML = idConselho;
    fraseConselho.innerHTML = textoConselho;
}

botaoDado.addEventListener('click', gerarConselho);

gerarConselho();