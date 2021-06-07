function t1(){
    let u0= "Cliente";
    let u1= "Funcionário";
    let u2= "Gerente";
    let u3= "Diretor";

    n1=document.getElementById("num1").value;

    res=document.getElementById("label");

    if(n1==u0){
        res.innerHTML="Seja bem vindo, querido cliente";
    }
    else if(n1==u1){
        res.innerHTML="Vai trabalhar vagabundo";
    }
    else if(n1==u2){
        res.innerHTML="Bom serviço !";
    }
    else if(n1==u3){
        res.innerHTML="Seja muito bem vindo senhor ! Bom serviço !";
    }
    else{
        res.innerHTML="Usuário não reconhecido";
    }}
function comparar(){
        n2=parseInt(document.getElementById("num2").value);
        n3=parseInt(document.getElementById("num3").value);

        res1=document.getElementById("label1");

        res2=document.getElementById("label2");

        res1.innerHTML=Math.max(n2,n3);
        if(n2==n3){
            res2.innerHTML="Os valores são iguais";
        }

    }