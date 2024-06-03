// Simulação de uma api de produtos

let produtos = [
    {   id:"1",
        nome:'Tênis Led',
        tamanho:'G',
        cor:'azul',
        preco:'150.00',
        sexo:'menino',
        src:"fotos/fotosProdutos/1.webp",
        descricao:'tênis led femininos',
        categoria:'calçados',
        maisVendido:true,
        destaqueSemana:false
    },
    {   
        id:"2",
        nome:'jaqueta preta',
        tamanho:'G',
        cor:'preto',
        preco:'250.00',
        sexo:'menino',
        src:"fotos/fotosProdutos/jaqueta.jpg",
        descricao:'jaqueta Forrada com gorro',
        categoria:'meninos',
        maisVendido:true,
        destaqueSemana:false
    },
    {   id:"3",
        nome:'Touca Preta',
        tamanho:'G',
        cor:'marrom',
        preco:'90.00',
        sexo:'unisex',
        src:"fotos/fotosProdutos/touca.webp",
        descricao:'touca, ótimo para os dias de inverno',
        categoria:'acessorios',
        maisVendido:true,
        destaqueSemana:false
    },
    {   id:"4",
        nome:'Casaco com Gorro',
        tamanho:'G',
        cor:'cinza',
        preco:'110.00',
        sexo:'meninos',
        src:"fotos/fotosProdutos/bermuda-cinza.jpg",
        descricao:'casaco com gorro',
        categoria:'meninos',
        maisVendido:false,
        destaqueSemana:true
    },
    {   id:"5",
        nome:'Sobre tudo',
        tamanho:'G',
        cor:'branco',
        preco:'199.00',
        sexo:'meninos',
        src:"fotos/fotosProdutos/macacao.jpg",
        descricao:'Sobre tudo casual.',
        categoria:'meninos',
        maisVendido:false,
        destaqueSemana:true
    },
    {   id:"6",
        nome:'Casaco Forrado pelucia',
        tamanho:'G',
        cor:'azul',
        preco:'225.00',
        sexo:'meninos',
        src:"fotos/fotosProdutos/short-azul.jpg",
        descricao:'Casaco com pele de ovelha.',
        categoria:'meninos',
        maisVendido:false,
        destaqueSemana:true
    },
    {   id:"7",
    nome:'tênis rosa',
    tamanho:'G',
    cor:'rosa',
    preco:'135.00',
    sexo:'meninas',
    src:"fotos/fotosProdutos/tenis-rosa.jpg",
    descricao:'tênis rosa casual',
    categoria:'calçados',
    maisVendido:false,
    destaqueSemana:false,
},
{   id:"8",
nome:'tênis jeans azul',
tamanho:'G',
cor:'azul',
preco:'150.00',
sexo:'meninos',
src:"fotos/fotosProdutos/tenis-jeans-azul.jpg",
descricao:'tênis jeans azul.',
categoria:'calçados',
maisVendido:false,
destaqueSemana:false,
},
{   id:"9",
nome:'tênis vermelho',
tamanho:'G',
cor:'vermelho',
preco:'250.00',
sexo:'meninas',
src:"fotos/fotosProdutos/tenis-vermelho-xadrez.jpg",
descricao:'tênis vermelho premium Femenino.',
categoria:'calçados',
maisVendido:false,
destaqueSemana:false,
},
{   id:"10",
nome:'sandália rosa',
tamanho:'G',
cor:'rosa',
preco:'165.00',
sexo:'meninas',
src:"fotos/fotosProdutos/sandalia-rosa.jpg",
descricao:'sandália rosa.',
categoria:'calçados',
maisVendido:false,
destaqueSemana:false,
},
{   id:"11",
nome:'Botina preta',
tamanho:'G',
cor:'azul',
preco:'250.00',
sexo:'meninos',
src:"fotos/fotosProdutos/tenis-azul-dinossauro.jpg",
descricao:'Botina preta com coração.',
categoria:'calçados',
maisVendido:false,
destaqueSemana:false,
},
{   id:"12",
nome:'kit bodys meninas ',
tamanho:'G',
cor:'azul',
preco:'250.00',
sexo:'meninos',
src:"fotos/fotosProdutos/kit-camisetas.jpg",
descricao:'kit de bodys para meninas diversas cores.',
categoria:'meninos',
maisVendido:false,
destaqueSemana:false,
},
{   id:"13",
nome:'blusa moletom azul urso polar',
tamanho:'G',
cor:'azul',
preco:'120.00',
sexo:'meninos',
src:"fotos/fotosProdutos/jaqueta-urso.jpg",
descricao:'blusa moletom com desenho de urso polar',
categoria:'meninos',
maisVendido:false,
destaqueSemana:false,
},
{   id:"15",
nome:'Blusa Rosa',
tamanho:'G',
cor:'rosa',
preco:'59,00',
sexo:'meninas',
src:"fotos/fotosProdutos/colete-bebe.jpg",
descricao:'blusa para meninas, rosa-salmão.',
categoria:'meninas',
maisVendido:false,
destaqueSemana:false,
},
{   id:"16",
nome:'Blusa Viscose',
tamanho:'G',
cor:'azul',
preco:'45,00',
sexo:'meninas',
src:"fotos/fotosProdutos/macaquinho-florido.jpg",
descricao:'Blusinha Viscose.',
categoria:'meninas',
maisVendido:false,
destaqueSemana:false,
},
{   id:"17",
nome:'macacão cinza meninas',
tamanho:'G',
cor:'cinza',
preco:'100.00',
sexo:'meninas',
src:"fotos/fotosProdutos/macacao-menina-cinza.jpg",
descricao:'macacão para meninas, cor cinza',
categoria:'meninas',
maisVendido:false,
destaqueSemana:false,
},
{   id:"18",
nome:'vestido branco',
tamanho:'G',
cor:'branco',
preco:'120.00',
sexo:'meninas',
src:"fotos/fotosProdutos/vestido-branco.jpg",
descricao:'Vestido branco com violeta e salmão.',
categoria:'meninas',
maisVendido:false,
destaqueSemana:false,
},
{   id:"19",
nome:'kit moletom rosa',
tamanho:'G',
cor:'rosa',
preco:'250.00',
sexo:'meninas',
src:"fotos/fotosProdutos/kit-moletom-rosa.jpg",
descricao:'Kit 2 peças de moletom, blusa e calça, rosa',
categoria:'meninas',
maisVendido:false,
destaqueSemana:false,
},
{   id:"20",
nome:'Blusa Manga Cumprida',
tamanho:'G',
cor:'azul',
preco:'90.00',
sexo:'meninas',
src:"fotos/fotosProdutos/mijao-meninas.jpg",
descricao:'Blusa com perolas.',
categoria:'meninas',
maisVendido:false,
destaqueSemana:false,
},
{   id:"21",
nome:'kit touca, luva, meia de ovelha',
tamanho:'G',
cor:'branco',
preco:'150.00',
sexo:'unisex',
src:"fotos/fotosProdutos/kit-touca-luva-meia.jpg",
descricao:'kit com touca, luva, e meia de ovelhinha, de algodão',
categoria:'acessorios',
maisVendido:false,
destaqueSemana:false,
},
{   id:"22",
nome:'babador de malha',
tamanho:'G',
cor:'branco',
preco:'80.00',
sexo:'unisex',
src:"fotos/fotosProdutos/babador-malha.jpg",
descricao:'babador com tecido de malha, estampado.',
categoria:'acessorios',
maisVendido:false,
destaqueSemana:false,
},
{   id:"23",
nome:'kit com touca, luva e meia, estampa de ratinho',
tamanho:'G',
cor:'rosa',
preco:'150.00',
sexo:'meninas',
src:"fotos/fotosProdutos/kit-toca-luva-meia-rosa.jpg",
descricao:'kit com touca, luva e meia, de tecido de algodão, estampa de ratinho',
categoria:'acessorios',
maisVendido:false,
destaqueSemana:false,
},
{   id:"24",
nome:'kit com touca, luva e meia, estampa joaninha',
tamanho:'G',
cor:'vermelho',
preco:'150.00',
sexo:'meninas',
src:"fotos/fotosProdutos/kit-touca-luva-meia-vermelho.jpg",
descricao:'kit com touca, luva e meia, de tecido de algodão, estampa de joaninha',
categoria:'acessorios',
maisVendido:false,
destaqueSemana:false,
},
{   id:"25",
nome:'kit com touca, luva e meia, estampa de urso panda',
tamanho:'G',
cor:'preto',
preco:'150.00',
sexo:'meninas',
src:"fotos/fotosProdutos/kit-touca-luva-meia-panda.jpg",
descricao:'kit com touca, luva e meia, de tecido de algodão, estampa de urso panda',
categoria:'acessorios',
maisVendido:false,
destaqueSemana:false,
},
    
]


    const url = window.location;
    const search = new URLSearchParams(url.search)
    const idProdutoURL = search.get("produtoid")
    
    let produtoDetalhado = produtos.filter((produto) => produto.id === idProdutoURL)


   

    const divProduto = document.getElementById('sectionProdutoFinal')

    divProduto.innerHTML =
  ` <div id="produtoDetalhado">
        <div id="imagemDetalhada">
            <img src=${produtoDetalhado[0].src}>
        </div>
            <select>
               <option selected disabled>Selecione o tamanho:</option>
               <option value="pp"><p>PP</p></option>
               <option value="p">P</option>
               <option value="m">M</option>
               <option value="g">G</option>
            </select>
            <h1>${produtoDetalhado[0].nome}</h1>
                    <h2>Preço: ${produtoDetalhado[0].preco}</h2>
                    <h3>Descrição:</h3>
                    <p>${produtoDetalhado[0].descricao}</p>
                    <button type="button" id="addCarrinho">ADICIONAR AO CARRINHO</button>         
    </div>`


    function addToCart(productId) {
        // You can implement adding the product to the cart here
        // For example, you can use localStorage to store the cart items
        // Retrieve existing cart items from localStorage
        let cartItems = localStorage.getItem('cartItems');
        cartItems = cartItems ? JSON.parse(cartItems) : [];
        
        // Add the selected product to the cart
        cartItems.push(productId);
        
        // Save the updated cart items back to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        // Optionally, you can provide feedback to the user that the product has been added to the cart
        alert('Product added to cart!');
    }
    

    

    


    // Menu responsivo 

    function handleclick () {
       const menu = document.getElementById("nav");
       let menuDisplay = menu.style.display;
       menu.style.display = menuDisplay == 'inline-block' ? 'none' : 'inline-block'
       
      
     
       
    }


    const titulo = produtos.filter(produto => produto.id == idProdutoURL)[0].nome
    const tituloCapitalized = titulo[0].toUpperCase() + titulo.substr(1);

    document.title = `Projeto Estágio BetaLabs ${tituloCapitalized}`
        

    