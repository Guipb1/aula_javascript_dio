var nome = "guilherme borges";
var idade = 24;
var idade2 = 10;
var frase = "brasil é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
//alert(frase.replace("brasil", "Japao"))
//alert(frase.toUpperCase());

function botao() {
    
    document.getElementById("agradecimento").innerHTML = "Obrigado fulano"
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}

function redirecionar (){
    window.open("https://www.linkedin.com/in/guilhermeborgess/")
    
}

function trocar (){
    document.getElementById("mousemove").innerHTML = "vc passou o mouse"
    //alert("trocar texto")
}

function load (){
    alert("pagina carregada")
}

function funcaoChange (element){
    console.log(element.value)
}