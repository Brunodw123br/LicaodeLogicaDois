
        // exercicio 1
        // Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

        function exercicioUm(){
            var numeroUm = prompt("adicione o 1° número: ");
            var numeroDois = prompt("adicione o 2° número: ");
            if(!isNaN(numeroUm) && !isNaN(numeroDois))
                alert("o maior número é: " + Math.max(numeroUm, numeroDois));
            else
                alert("os valores precisam ser números!");
        }

        // exercicio 2 
        // Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

        function exercicioDois(){
            var valor = parseFloat(prompt("adicione um numero: "));
            if(!isNaN(valor)){
                if(valor > 0)
                    alert("o número é positivo");
                else if(valor < 0)
                    alert("o número é negativo");
                else
                    alert("o número é igual a zero");
            }
            else
                alert("o valor informado precisa ser um número!");
        }

        // // exercicio 3
        // // Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

        function exercicioTres(){

            var numeroUm = prompt("insira o numero um: ");
            var numeroDois = prompt("insira o numero Dois: ");
            var numeroTres = prompt("insira o numero Tres: ");
            if(!isNaN(numeroUm) && !isNaN(numeroDois) && !isNaN(numeroTres)){
                if(numeroUm != numeroDois && numeroUm != numeroTres && numeroDois != numeroTres){
                    var maiorValor = Math.max(numeroUm, numeroDois, numeroTres);
                    alert("o maior valor colocado foi: " + maiorValor);
                }else
                    alert("os numeros precisam ser diferentes");
            }else 
                alert("os valores precisam ser numeros!");
        }

        // // exercicio 4
        // // Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

        function exercicioQuatro(){
            var numeroUm = parseFloat(prompt("insira o numero um: "));
            var numeroDois = parseFloat(prompt("insira o numero Dois: "));
            var numeroTres = parseFloat(prompt("insira o numero Tres: "));
            var soma = 0;
            if(!isNaN(numeroUm) && !isNaN(numeroDois) && !isNaN(numeroTres)){
                if(numeroUm != numeroDois && numeroUm != numeroTres && numeroDois != numeroTres){
                    if(numeroUm > numeroTres && numeroDois > numeroTres){
                        soma = numeroUm + numeroDois;
                        alert(" Seus maiores numeros são: " + numeroUm +" "+ numeroDois + ". A soma dos maiores numeros é: " + soma);
                    }else if(numeroTres > numeroUm && numeroDois > numeroUm){
                        soma = numeroTres + numeroDois;
                        alert(" Seus maiores numeros são: " + numeroTres +" "+ numeroDois + ". A soma dos maiores numeros é: " + soma);
                    }else{
                        soma = numeroTres + numeroUm;
                        alert(" Seus maiores numeros são: " + numeroTres +" "+ numeroUm + ". A soma dos maiores numeros é: " + soma);
                    }
                }else
                    alert("os números não podem ser iguas");
            }else
                alert("os valores precisam ser números! ");
        }

        // exercicio 5
        // Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

        function exercicioCinco(){
            var soma = 0;
            var numeros = [];
            for(i = 0; i <= 5; i++){
                i++
                var numero = prompt("informe o " + i + "° numero: ");
                i--
                if(!isNaN(numero)){
                    numeros[i] = numero;
                    soma = soma + parseInt(numero);
                }
                else{
                    alert("o valor informado deve ser um numero!");
                    i--;
                }
            }
            var media = soma / 6;
            alert("os numeros utilizados foram: " + numeros + "\nE a média é: " + media);
        }

        //exercicio 6
        //Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

        function exercicioSeis(){
            var numeros = [];
            var numero = 0;
            var maior = 0;
            for(var i = 0 ; i < 4; i++){
                numero = parseFloat(prompt("adicione o " + (1 + i) + "° numero"));
                if(!isNaN(numero)){
                    if (!numeros.includes(numero))
                        numeros.push(numero);
                    else {
                        alert("Não são permitidos números iguais!");
                        i--;
                    }
                        
                }else{
                    i--;
                    alert("o valor informado deve ser um numero");
                }
                if(maior < numeros[i])
                    maior = numeros[i];
            }
            alert("os numeros utilizados foram os: " + numeros + "\no primeiro numero digitado foi: " + numeros[0] + "\no ultimo numero digitado foi: " + numeros[3] + "\ne o maior numero digitado foi: " + maior);
        }

        // exercicio 7
        //Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  

        function exercicioSete(){   
            var numeros = [];
            var numero = 0;
            var soma = 0;
            for(i = 0; i < 6; i++){
                numero = parseFloat(prompt('adicione o ' + (1+i) + "° numero da somatória"));
                if(!isNaN(numero)){
                    if(numero < 72)
                        soma += numero;
                    numeros[i] = numero
                }else{
                    alert("o valor informado deve ser um número");
                    i--;
                }
            }
            alert("a soma final ficou: " + soma + "\ne os numeros utilizados foram: " + numeros);
        }
        
        // exercicio 8
        //Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

        function exercicioOito(){
            var nota = 0;
            var media = 0;
            for(var i = 0; i < 4; i++){
                nota = parseFloat(prompt("adicione sua "+ (i + 1) + "° nota"));
                if(!isNaN(nota)){
                    if(nota >= 0 && nota <= 10){
                        media += nota;
                    }else{
                        alert("nota informada é invalida!");
                        i--;
                    }
                }else
                    alert("as notas precisam ser números");
            }
            media /= 4;
            if(nota >= 5){
                alert("parabéns, você passou no teste com uma nota de: " + media);
            }else{
                alert("tente novamente, você foi reprovado com a nota de: " + media);
            }
        }

        // exercicio 9
        //Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

        function exercicioNove(){
            data = new Date();
            anoPc = data.getFullYear();
            ano = parseInt(prompt("adicione a seu ano de nascimento: "));
            votar = 0;
            if(!isNaN(ano)){
                votar = anoPc - ano;
                if(votar >= 16)
                    alert("voce pode votar com " + votar + " anos");
                else
                    alert("você ainda não pode votar com " + votar + " anos")
            }else
                alert("a data precisa ser numero");
        }

        // exercicio 10
        //Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

        function exercicioDez(){
            var escolha = prompt("esolha seu sexo \n 1-feminino \n 2-masculino");
            switch(escolha){
                case '1':
                    var altura = prompt("adicione sua altura:(caso tenha casa decimal coloque . ao invés de ,)");
                    if(!isNaN(altura)){
                        sexo = 'feminino';
                        pesoIdeal = 62.1 * parseFloat(altura) - 44.7;
                        alert("você com o sexo " + sexo + ", para ter o peso ideal é preciso ter: " + pesoIdeal);
                    }else
                        alert("por favor coloque numeros como altura");
                    break;
                case '2':
                    var altura = prompt("adicione sua altura:(caso tenha casa decimal coloque . ao invés de ,)");
                    if(!isNaN(altura)){
                        sexo = 'masculino';
                        pesoIdeal = 72.7 * parseFloat(altura) - 58;
                        alert("você com o sexo " + sexo + ", para ter o peso ideal é preciso ter: " + pesoIdeal);
                    }else
                        alert("por favor coloque numeros como altura");
                    break;
                default:
                    alert("escolha somente as opções disponiveis");
                    break;
            }
        }

        // exercicio 11
        //Uma micro calculadoraEscreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 

        function exercicioOnze(){
            var escolha = prompt("Escolha a operação \n 1 - adição \n 2 - subtração \n 3 - divisão \n 4 - multiplicação");
            var valorUm = 0;
            var valorDois = 0;
            var resultado = 0;      
            switch(escolha){
                case "1":
                    do{
                        valorUm = parseFloat(prompt("adicione o primeiro valor: "));
                        if(isNaN(valorUm))
                            alert("só permitido numero");
                    }while(isNaN(valorUm));
                    do{
                        valorDois = parseFloat(prompt("adicione o segundo valor: "));
                        if(isNaN(valorDois))
                            alert("só permitido numero");
                        
                    }while(isNaN(valorDois));
                    resultado = (valorUm + valorDois);
                    alert("o resultado deu: " + resultado);
                    break;
                case '2':
                    do{
                        valorUm = parseFloat(prompt("adicione o primeiro valor"));
                        if(isNaN(valorUm))
                            alert("só permitido numero");
                    }while(isNaN(valorUm));
                    do{
                        valorDois = parseFloat(prompt("adicione o segundo valor"));
                        if(isNaN(valorDois))
                            alert("só permitido numero");
                    }while(isNaN(valorDois));
                    resultado = (valorUm + valorDois);
                    resultado = valorUm - valorDois;
                    alert("o resultado deu: " + resultado);
                    break;
                case '3':
                    var tipo = prompt("escolha o tipo de divisão \n 1 - div \n 2 - mod \n 3 - divisão");
                    do{
                        do{
                            valorUm = parseFloat(prompt("adicione o primeiro valor"));
                            if(isNaN(valorUm))
                                alert("só permitido numero");
                        }while(isNaN(valorUm));
                        do{
                            valorDois = parseFloat(prompt("adicione o segundo valor"));
                            if(isNaN(valorDois))
                                alert("só permitido numero");
                        }while(isNaN(valorDois));
                        if(valorUm != 0 && valorDois != 0){
                            switch(tipo){
                                case '1':
                                    valorUm = parseInt(valorUm);
                                    valorDois = parseInt(valorDois);
                                    resultado = valorUm % valorDois;
                                    alert("o resultado deu: " + resultado);
                                    break;
                                case '2':
                                    resultado = parseInt(valorUm / valorDois);
                                    alert("o resultado deu: " + resultado);
                                    break;
                                case '3':
                                    resultado = valorUm / valorDois;
                                    alert("o resultado deu: " + resultado);
                                    break;                                
                                default:
                                    alert("escolha somente uma das opções dadas");
                                    break;
                            }
                        }else
                            alert("não existe divisão por 0");
                    }while(valorUm == 0 || valorDois == 0)
                    break;
                case '4':
                    do{
                        valorUm = parseFloat(prompt("adicione o primeiro valor"));
                        if(isNaN(valorUm))
                            alert("só permitido numero");
                    }while(isNaN(valorUm));
                    do{
                        valorDois = parseFloat(prompt("adicione o segundo valor"));
                        if(isNaN(valorDois))
                            alert("só permitido numero");
                    }while(isNaN(valorDois));
                    resultado = valorUm * valorDois;
                    alert("o resultado deu: " + resultado);
                    break;    
                default:
                    alert("escolha somente uma das opções disponiveis");
            }
        }
