// Array de objetos com as informações dos produtos

const produtos = [
    {
        id: 1,
        nome: "Camiseta Só Mais Um Exemplo",
        descricao: "Aquela camiseta para os dias de aula intermináveis! Ideal para quem entende a dor de 'só mais um exemplo'.",
        imagem: "img.jpg",
        precos: {
            p: 49.90,
            m: 54.90,
            g: 59.90,
            gg: 64.90,
            xg: 69.90
        },
        cores: ["Preto"],
        tecido: "Algodão 100%"
        
    },
    {
        id: 2,
        nome: "Camiseta Quem Disse Que Só Faço Bagunça?",
        descricao: "Mostre seu lado organizado com essa camiseta hilária! Perfeita para descontrair e rir de si mesmo.",
        imagem: "img1.jpg",
        precos: {
            p: 49.90,
            m: 54.90,
            g: 59.90,
            gg: 64.90,
            xg: 69.90
        },
        cores: ["Branco"],
        tecido: "Poliéster com toque de algodão"
    },
    {
        id: 3,
        nome: "Camiseta Primeiro Dia de Aula", // Mantenha ou atualize para um novo meme se tiver
        descricao: "Seja a lenda que você sempre quis ser no primeiro dia de aula com essa estampa épica!",
        imagem: "img2.jpg", // <--- SE TIVER UMA TERCEIRA IMAGEM, SUBSTITUA AQUI
        precos: {
            p: 49.90,
            m: 54.90,
            g: 59.90,
            gg: 64.90,
            xg: 69.90
        },
        cores: ["Preto"],
        tecido: "Algodão 100%"
        
    }
    // Você pode adicionar mais objetos de produto aqui seguindo o mesmo padrão
];


// Função para exibir os produtos na página
function exibirProdutos() {
    const container = document.getElementById('product-container');

    // Verifica se o container existe na página (para não dar erro na página inicial)
    if (!container) return;

    // Limpa qualquer conteúdo existente antes de adicionar novos
    container.innerHTML = ''; 

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Cria o HTML para cada produto
        card.innerHTML = `
             <img src="${produto.imagem}" alt="Camiseta ${produto.nome}" class="imagem">
             <div class="product-info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p><strong>Tamanhos:</strong> P, M, G, GG, XG</p>
                <p><strong>Cores:</strong> ${produto.cores.join(', ')}</p>
                <p><strong>Tecido:</strong> ${produto.tecido}</p>
                <p class="price">R$ ${produto.precos.m.toFixed(2)}</p>
                <p class="payment-options">
                    <strong>Formas de Pagamento:</strong> Cartão, Pix ou Boleto
                </p>
            </div>
            <p>
            <button class="comprar-btn">Comprar</button>
            </p>
        `;

        container.appendChild(card);
    });

    // Seleciona todos os botões de compra e adiciona o evento de clique
    const botoesComprar = container.querySelectorAll('.comprar-btn');
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', function() {
            alert('Produto adicionado ao carrinho!');
        });
    });
}


// Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', exibirProdutos);