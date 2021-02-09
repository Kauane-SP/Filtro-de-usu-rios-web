// Vetor de dados dos usuários
var vet = ["./img/d.estranho.jpg", "Doctor Stranger", "Dr.estranho@gmail.com", "(55) 22158-5478", "Outra dimensão",
    "./img/gamora.jpg", "Gamora", "gamora@gmail.com", "(45) 99855-5487", "Galáxia",
    "./img/groot.jpg", "Groot Baby", "Babygroot@gmail.com", "(89) 00000-0000", "Planeta X",
    "./img/groot_adulto.jpg", "Groot Adulto", "Adultogroot@gmail.com", "(23) 06500-6500", "Planeta X",
    "./img/homem_aranha.jpg", "Homem Aranha", "miranha@gmail.com", "(57) 45000-0080", "Nova Iorque",
    "./img/piter.jpg", "Piter Parker", "piter@gmail.com", "(57) 45000-0080", "Nova Iorque",
]
var container = document.getElementById("users");

// Função de busca 
//obtendo o valor inserido no campo de pesquisa
function busca() {
    var nome = document.getElementById("busca").value;
    console.log(nome)
        //caso o valor do campo de pesquisa esteja vazio
    if (nome == null || nome == "") {
        container.innerHTML = "";
        return null;
    }
    var size = 0;
    var resultado = [];
    //percorrendo apenas os NOMES de usuários no vetor(índices 1-6-11-etc)
    for (let i = 1; i <= vet.length; i += 5) {

        //se a string inserida na pesquisa for uma substring do nome atualmente sendo verificado
        //independente de maiúsculas ou minúsculas
        if (vet[i].toLowerCase().includes(nome.toLowerCase())) {
            console.log(size)
            resultado[size] = i - 1;
            size++;
            continue;

        }
    }
    console.log(resultado[size])
        //caso nenhum nome seja encontrado pela pesquisa
    if (resultado.length == 0) {
        container.innerHTML = "";
        return null;
    }
    gera_linhas(resultado);
}



//esse laço percorre o vetor vet, cria os elementos necessários para as linhas,
function gera_linhas(linhas) {
    console.log(linhas)
    container.innerHTML = "";
    var j = 0;

    for (let i = 0; i < vet.length; i += 5) {

        if (linhas != null) {
            if (i == linhas[j]) {
                j++;
            } else continue
        }
        //criando elementos
        var linha = document.createElement("div");
        var img = document.createElement("div");
        var foto = document.createElement("img")
        var nome = document.createElement("div");
        var email = document.createElement("div");
        var telefone = document.createElement("div");
        var cidade = document.createElement("div");
        var texto = document.createTextNode(vet[i + 1]);
        var tag_texto = document.createElement("h1");
        var icon = document.createElement("i");
        var icones = document.createElement("div");
        var icone2 = document.createElement("i");
        var icone3 = document.createElement("i");

        //atribuindo classes
        linha.classList.add("row");
        img.classList.add("col-2");
        foto.classList.add("img-fluid")
        nome.classList.add("col-1");
        email.classList.add("col-2");
        telefone.classList.add("col-2");
        cidade.classList.add("col-2");
        icones.classList.add("col-3");
        icon.classList.add("fas", "fa-user");
        icone2.classList.add("fas", "fa-check-double");
        icone3.classList.add("fas", "fa-trash");

        //inserindo elementos e atributos
        foto.src = vet[i];
        img.appendChild(foto);
        tag_texto.appendChild(texto);
        nome.appendChild(tag_texto);
        email.appendChild(document.createElement("p").appendChild(document.createTextNode(vet[i + 2])));
        telefone.appendChild(document.createElement("p").appendChild(document.createTextNode(vet[i + 3])));
        cidade.appendChild(document.createElement("p").appendChild(document.createTextNode(vet[i + 4])));
        linha.appendChild(img);
        linha.appendChild(nome);
        linha.appendChild(email);
        linha.appendChild(telefone);
        linha.appendChild(cidade);
        icones.appendChild(icon);
        icones.appendChild(icone2);
        icones.appendChild(icone3);
        linha.appendChild(icones);
        users.appendChild(linha);

    }
}
//Gerando as linhas com todos os usuários, ao abrir a página
gera_linhas(null)