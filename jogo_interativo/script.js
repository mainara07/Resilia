function clicar () {
        var condicao = document.getElementsByName('condicao');
        var resultado = document.querySelector("div#perguntas");
        
        if (condicao[1].checked) {
            fimDeJogo(resultado);
        } else if (condicao[0].checked) {
            resultado.innerHTML = `<p>Você tem participado ativamente das aulas?</p>
                                    <img id= "imagem" src="pergunta.gif"> 
                                 <input type="radio" name="condicao" class="input-radio">
                                    <label class="label-format">Sim</label>
                                 <input type="radio" name="condicao" class="input-radio">
                                    <label class="label-format">Não</label>
                                <button clas="input-submit" onclick="pergunta2()">Responder</button>`
        }
    }

function pergunta2 () {
    var resultado = document.querySelector("div#perguntas");

            resultado.innerHTML = `<p>Se arriscando no Qualified?</p>
                                    <img id= "imagem" src="pergunta.gif"> 
                                 <input type="radio" name="condicao" class="input-radio">
                                    <label class="label-format">Sim</label>
                                 <input type="radio" name="condicao" class="input-radio">
                                    <label class="label-format">Não</label>
                                <button clas="input-submit" onclick="pergunta3()">Responder</button>`

}



function pergunta3 () {
        var condicao = document.getElementsByName('condicao');
        var resultado = document.querySelector("div#perguntas");
        
        if (condicao[1].checked) {
            fimDeJogo(resultado);
        } else if (condicao[0].checked) {
            resultado.innerHTML = `<p>Ajudando ativamente a comunidade?</p>
                                    <img id= "imagem" src="pergunta.gif"> 
                                 <input type="radio" name="condicao" class="input-radio">
                                    <label class="label-format">Sim</label>
                                 <input type="radio" name="condicao" class="input-radio">
                                    <label class="label-format">Não</label>
                                <button clas="input-submit" onclick="resultadoFinal()">Responder</button>`
        }

}

function resultadoFinal () {
    var resultado = document.querySelector("div#perguntas");
    resultado.innerHTML = `<p>Muito bem, resiliente! Você está no caminho!</p>
                            <img id= "imagem" src="final.gif">
                            <button clas="input-submit" onclick="document.location.reload(true)">Jogar de novo!</button>`


}


function fimDeJogo (resultado) {
    resultado.innerHTML = `<p>Nunca é tarde para aprender se resiliente</p>
                            <img id= "imagem" src="choro.gif">
                            <button clas="input-submit" onclick="document.location.reload(true)">Tentar de novo!</button>`
                            
          
}
