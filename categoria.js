
    

       // Simulação de uma api de produtos

       let produtos = [
        {   id:"1",
            nome:'Tênis Led',
            tamanho:'G',
            cor:'branco',
            preco:'150,00',
            sexo:'menino',
            src:"fotos/fotosProdutos/1.webp",
            descricao:' O melhor ténis de led femenino ',
            categoria:'calçados',
            maisVendido:true,
            destaqueSemana:false
        },
        {   
            id:"2",
            nome:'Jaqueta Preta',
            tamanho:'G',
            cor:'preto',
            preco:'250,00',
            sexo:'menino',
            src:"fotos/fotosProdutos/jaqueta.JPG",
            descricao:'jaqueta Forrada com gorro',
            categoria:'meninos',
            maisVendido:true,
            destaqueSemana:false
        },
        {   id:"3",
            nome:'Touca Preta',
            tamanho:'G',
            cor:'preta',
            preco:'90,00',
            sexo:'unisex',
            src:"fotos/fotosProdutos/touca.webp",
            descricao:'gorro marrom, ótimo para os dias de inverno',
            categoria:'acessorios',
            maisVendido:true,
            destaqueSemana:false
        },
        {   id:"4",
            nome:'Casaco simples',
            tamanho:'G',
            cor:'cinza',
            preco:'105,00',
            sexo:'meninos',
            src:"fotos/fotosProdutos/bermuda-cinza.jpg",
            descricao:'Casaco com Gorro.',
            categoria:'meninos',
            maisVendido:false,
            destaqueSemana:true
        },
        {   id:"5",
            nome:'Sobre Tudo',
            tamanho:'G',
            cor:'branco',
            preco:'199,00',
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
            preco:'225,00',
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
        descricao:'tênis rosa casual Femenino',
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
    descricao:'tênis jeans azul Femenino.',
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
    preco:'165,00',
    sexo:'meninas',
    src:"fotos/fotosProdutos/sandalia-rosa.jpg",
    descricao:'sandália rosa .',
    categoria:'calçados',
    maisVendido:false,
    destaqueSemana:false,
    },
    {   id:"11",
    nome:'Botina preta',
    tamanho:'G',
    cor:'preta',
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
    descricao:'Blusinha Viscose',
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

    //Buscando parametros de categoria na URL
        const locationURL = window.location
        const search = new URLSearchParams(locationURL.search)
        const categoria = search.get('categoria')

        console.log(categoria)

        const divProdutos = document.getElementById("vitrineCategoria");

  



   //Buscando parametros de cor na URL
   const locationFiltro = window.location
   const searchCor = new URLSearchParams(locationFiltro.searchCor)
   let corURL = search.get('cor')

   console.log(corURL)

  // Inserção de produtos dinamicamente no setor Todas as categorias sem filtros
   if(categoria === 'todas-as-categorias' && corURL == null) (
    divProdutos.innerHTML = produtos.map(produto => (
       `
       <div class="produtoAmostra">
       <a href=produto.html?produtoid=${produto.id}>
           <div class="imagemProduto">
               <img src="${produto.src}">
           </div>
           <h1>${produto.nome}</h1>
               <h2>R$ ${produto.preco}</h2>
               <p>${produto.descricao}</p>
       </a>
   </div>
   ` 
 )).join('')) 
  // Inserção de produtos dinamicamente no setor da categoria especifica sem filtros
 else if(corURL == null) {
     
   divProdutos.innerHTML = produtos.map(produto => (
       produto.categoria == categoria ? (
       `
       <div class="produtoAmostra">
       <a href=produto.html?produtoid=${produto.id}>
           <div class="imagemProduto">
               <img src="${produto.src}">
           </div>
           <h1>${produto.nome}</h1>
               <h2>R$ ${produto.preco}</h2>
               <p>${produto.descricao}</p>
       </a>
   </div>
   `) : null
 )).join('')
 }

 // Filtros 

 let filtro = {
    cor: ''
}

function filtroCor(event) {
  filtro.cor = event.target.value
  window.location = `categoria.html?categoria=${categoria}&cor=${filtro.cor}`
}

if(corURL != null) {
 const selected = document.getElementById(corURL)
 selected.classList.add("selected")

}

 
 // Verificando se os filtros estão ativos 
 if(categoria === 'todas-as-categorias' && corURL != null) (
    divProdutos.innerHTML = produtos.map(produto => (
    produto.cor == corURL ?
       `
       <div class="produtoAmostra">
       <a href=produto.html?produtoid=${produto.id}>
           <div class="imagemProduto">
               <img src="${produto.src}">
           </div>
           <h1>${produto.nome}</h1>
               <h2>R$ ${produto.preco}</h2>
               <p>${produto.descricao}</p>
       </a>
   </div>
   `:null
 )).join('')) 

 

 else if(corURL != null) {
    // Verificando se produtos são encontrados com os filtros selecionados
    if(produtos.filter(produto => produto.cor == corURL && produto.categoria == categoria).length == 0)
    { divProdutos.innerHTML = `<h1>Não foram encontrados produtos com esses filtros.</h1>`}
    // Renderizar produtos encontrados
    else
    divProdutos.innerHTML = produtos.map(produto => (
        corURL == produto.cor && produto.categoria == categoria ? (
        `
        <div class="produtoAmostra">
        <a href=produto.html?produtoid=${produto.id}>
            <div class="imagemProduto">
                <img src="${produto.src}">
            </div>
            <h1>${produto.nome}</h1>
                <h2>R$ ${produto.preco}</h2>
                <p>${produto.descricao}</p>
        </a>
    </div>
    `):null 
  )).join(''); 
  } 
  
     
  // Limpar filtros 

  function limparFiltros () {
    window.location = `categoria.html?categoria=${categoria}`
  }
  

     

    // Menu responsivo 

    function handleclick () {
       const menu = document.getElementById("nav");
       let menuDisplay = menu.style.display;
       menu.style.display = menuDisplay == 'inline-block' ? 'none' : 'inline-block'
       
       
    }

    // Título da pagina     

    if(categoria === 'todas-as-categorias') {
        document.title = `Projeto Estágio BetaLabs - Todas as Categorias`
    }

    else {
        const titulo = produtos.filter(produto => produto.categoria == categoria)[0].categoria
        const tituloCapitalized = titulo[0].toUpperCase() + titulo.substr(1);
        document.title = `Projeto Estágio BetaLabs - ${tituloCapitalized}`
    }

  

    
        

    