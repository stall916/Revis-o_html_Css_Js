let produtos = [
{
    id:1,
    nome:"Notebook Gamer RTX",
    preco:4999.90,
    categoria:"Notebook",
    imagem:"https://picsum.photos/400/300?random=1"
},
{
    id:2,
    nome:"Mouse RGB Pro",
    preco:149.90,
    categoria:"Periféricos",
    imagem:"https://picsum.photos/400/300?random=2"
},
{
    id:3,
    nome:"Teclado Mecânico",
    preco:299.90,
    categoria:"Periféricos",
    imagem:"https://picsum.photos/400/300?random=3"
},
{
    id:4,
    nome:"Monitor Gamer 24",
    preco:899.90,
    categoria:"Monitor",
    imagem:"https://picsum.photos/400/300?random=4"
},
{
    id:5,
    nome:"Headset Gamer",
    preco:249.90,
    categoria:"Áudio",
    imagem:"https://picsum.photos/400/300?random=5"
},
{
    id:6,
    nome:"Cadeira Gamer",
    preco:1299.90,
    categoria:"Móveis",
    imagem:"https://picsum.photos/400/300?random=6"
}
];

let carrinho = [];

function renderizar(lista){

    const grid = document.getElementById("grid-produtos");

    grid.innerHTML = "";

    lista.forEach(produto => {

        grid.innerHTML += `
        <div class="card">

            <img src="${produto.imagem}">

            <div class="card-body">

                <h3>${produto.nome}</h3>

                <p>${produto.categoria}</p>

                <h2>R$ ${produto.preco.toFixed(2)}</h2>

                <button onclick="adicionar(${produto.id})">
                    Adicionar ao Carrinho
                </button>

            </div>

        </div>
        `;

    });

}

function adicionar(id){

    const produto =
        produtos.find(p => p.id === id);

    carrinho.push(produto);

    atualizarCarrinho();

}

function atualizarCarrinho(){

    document.getElementById("qtd").innerText =
        carrinho.length;

    const lista =
        document.getElementById("listaCarrinho");

    let total = 0;

    lista.innerHTML = "";

    carrinho.forEach((produto,index)=>{

        total += produto.preco;

        lista.innerHTML += `
        <div style="
            display:flex;
            justify-content:space-between;
            margin:10px 0;
        ">

            <span>${produto.nome}</span>

            <span>R$ ${produto.preco.toFixed(2)}</span>

            <button onclick="remover(${index})">
                ❌
            </button>

        </div>
        `;

    });

    document.getElementById("totalCarrinho")
        .innerText = total.toFixed(2);

}

function remover(index){

    carrinho.splice(index,1);

    atualizarCarrinho();

}

function abrirCarrinho(){

    document.getElementById("modalCarrinho")
        .style.display = "block";

}

function fecharCarrinho(){

    document.getElementById("modalCarrinho")
        .style.display = "none";

}

function filtrarProdutos(){

    const termo =
        document.getElementById("busca")
        .value
        .toLowerCase();

    const filtrados = produtos.filter(produto =>

        produto.nome.toLowerCase().includes(termo) ||

        produto.categoria.toLowerCase().includes(termo)

    );

    renderizar(filtrados);

}

function finalizarCompra(){

    if(carrinho.length === 0){

        alert("Carrinho vazio!");

        return;

    }

    alert("Compra realizada com sucesso!");

    carrinho = [];

    atualizarCarrinho();

    fecharCarrinho();

}

window.onclick = function(event){

    const modal =
        document.getElementById("modalCarrinho");

    if(event.target === modal){

        fecharCarrinho();

    }

}

renderizar(produtos);