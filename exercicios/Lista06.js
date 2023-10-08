/*let A = [1,2,3,4,5,6,7,8,9,10]
console.log(A);

A.forEach(function(value,index){
    console.log(index,value)
});*/


//2-Faça um algoritmo que leia 100 valores e os escreva na ordem contrária à que
//foram digitados



/*let A= [];
for(let i=0; i<100; i++){
 A[i]=i+1
}
for(let i=99; i>=0; i--){
 console.log(A[i])
}
*/

/*.3- Faça um algoritmo que leia 100 valores e conte quantos são pares e quantos são
ímpares



let A= [];
for(let i=0; i<100; i++){
 A[i]=i+1
}
let par=[];
let impar=[];
let ip=0;
let p=0;
for(let i=0; i<100; i++){
 if (A[i]%2==0){
  par[p]=A[i];
  p++
 }else {
  impar[ip]=A[i];
  ip++
 }
}
par.forEach(function(value, index){
 console.log(`Par: ${index} ${value}`)
})

impar.forEach(function(value, index){
 console.log(`Impar: ${index} ${value}`)
})
*/

/*4. Escrever um algoritmo que lê um vetor N(80) e o escreve. Encontre, a seguir, o
menor elemento e a sua posição no vetor N e escreva: "O menor elemento de N é
= ... e a sua posição é ... ".

let N =[];
let local=0;

for (let i=0; i<80; i++){

N[i]=i+1
}
let menor=N[0];

for(let i=0; i<80; i++){
 if(N[i]<menor){
  menor=N[i];
  local=i;
 } 
}

console.log(`O menor elemento é ${menor} com sua posição em ${local}.`)


5. Mesma coisa da questão anterior, mas agora para achar o maior elemento.


let N =[];
let local=0;

for (let i=0; i<80; i++){

N[i]=i+1
}
let maior=N[0];

for(let i=0; i<80; i++){
 if(N[i]>maior){
  maior=N[i];
  local=i;
 } 
}

console.log(`O maior elemento é ${maior} com sua posição em ${local}.`)


*/

/*.6 Escrever um algoritmo que lê um vetor N(20) e o escreve. Troque, a seguir, o 1*
elemento com o último, o 2* com o penúltimo, etc até o 10* com o 11* e escreva o
vetor N assim modificado.

let troca=[];
let N=[];
let jotinha=19;
for(let i=0;i<20;i++){
N[i]=i+1
}

for (let i=0;i<20;i++){
troca[i]=N[jotinha];
jotinha--
}

N=troca;
console.log(N)


7. Faça um algoritmo que some o conteúdo de dois vetores e armazene o resultado
em um terceiro vetor.

let vetu=[];
let vetd=[];
let res=[];
for (let i=0;i<10;i++){
    vetu[i]=i
    vetd[i]=i
}
for(let i=0; i<10;i++){
 res[i] = vetu[i]+vetd[i]
}

console.log(res)

8. Faça um algoritmo com 3 vetores. Cada um com 100 espaços. Chame-os de
original, pares e impares. Após preencher o original teste seus valores, e
dependendo se eles são pares ou ímpares, vá colocando-os nos respectivos
vetores.


let original= [];
for(let i=0; i<100; i++){
 original[i]=i+1
}
let pares=[];
let impares=[];
let ip=0;
let p=0;
for(let i=0; i<100; i++){
 if (A[i]%2==0){
  pares[p]=original[i];
  p++
 }else {
  impares[ip]=original[i];
  ip++
 }
}
pares.forEach(function(value, index){
 console.log(`Par: ${index} ${value}`)
})

impares.forEach(function(value, index){
 console.log(`Impar: ${index} ${value}`)
})
*/
/*
9. Faça um algoritmo que lê um vetor N(10), sendo que cada valor corresponde ao
fatorial do índice do vetor.


let N=[];
 let i;
 let k =1;
 let j;
 for (i=0;i<10;i++){
    if(i!=0){
     k=1;
        for(j=i;j>0;j--){
        k=k*j;
        }
    }else{
        k=1;
    }
    N[i]=k;
 }

console.log(N)

 
10.Escrever um algoritmo que lê um vetor A(15) e o escreve. Ordene a seguir


let a=[10,]

*/



