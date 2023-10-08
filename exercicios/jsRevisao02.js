//function
/*function somar(num1, num2){
    return num1 + num2
}

let res = somar(5, 7)
console.log(res)*/

/*function calculadora(num1, num2, operador){
    //eval função nativa do JS
    return eval(`${num1} ${operador} ${num2}`)
}
let res = calculadora(9, 7, '+')
console.log(res)*/

//função anônima

/*(function(num1, num2, operador){
    console.log(eval(`${num1} ${operador} ${num2}`))
})(7, 7, '*')*/

//Arrow Function
//Novo recurdo para função em JS
/*let calculadora = (num1, num2, operador) => {
    return eval(`${num1} ${operador} ${num2}`)
}
let res = calculadora(13, 7, '+')
console.log(res)*/

//DOM e Eventos
/*window.addEventListener('mousemove', event => {
    console.log('Movimentou o mouse!')
})

window.addEventListener('click', event => {
    console.log('Clicou!')
})

window.addEventListener('dbclick', event => {
    console.log('Clique duplo!')
})*/

//Object Date
//TimeStamp - tempo em milisegundos desde 01/01/1970
/*let agora = Date.now()
console.log(agora)

let agora1 = new Date()
console.log(agora1)
console.log(agora1.toLocaleDateString('pt-BR'))*/

//Array
//posição indexada dentro de uma variavel
/*let itens = ['Java', 'PHP', 'JavaScript', true, new Date()]
    console.log(itens)//imprimir
    console.log(itens.lenght)//contar
    console.log(itens[2])//verificar valor atraves do indice
    console.log(itens[4].toLocaleDateString('pt-BR'))*/
    //monipular dados dentro do array

    //Pecorrer elementos dentro do array com ForEach
    /*let itens = ['Java', 'PHP', 'JavaScript', true, new Date()]
    itens.forEach(function(value, index){
        console.log(index, value)
})*/

//JS orientado a objetos
/*class celular{
    //atributo
    constructor(){
        this.cor = 'prata'
    }
    //método
    ligar(){
        console.log('Uma ligação')
        return 'Ligando.....'
    }
}
let objeto = new celular()
console.log(objeto)
console.log(objeto.ligar())*/