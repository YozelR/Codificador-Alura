document.addEventListener('keyup', e => {

    if (e.target.matches('#desen')) {

        let textod = document.getElementById('desen').value;

        let mensajed = textod
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        document.getElementById('encrip').value = mensajed;

        if (textod != 0) {
            document.getElementById('copyencrip').style.display = 'inline';
            document.getElementById('copydesen').style.display = 'inline';  
        }
        else{
            document.getElementById('copyencrip').style.display = 'none';
            document.getElementById('copydesen').style.display = 'none';  
        }
        
    }


});


function copiardesen(){
    let textod = document.getElementById('desen').value;

    navigator.clipboard.writeText(textod);
    document.getElementById('desen').value = "";
    document.getElementById('encrip').value = "";

    document.getElementById('copyencrip').style.display = 'none';
    document.getElementById('copydesen').style.display = 'none';  
}
 


document.addEventListener('keyup', e => {

    if (e.target.matches('#encrip')) {

        let textoe = document.getElementById('encrip').value;

        let mensajee = textoe
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        document.getElementById('desen').value = mensajee;
       
       if (textoe != 0) {
            document.getElementById('copyencrip').style.display = 'inline';
            document.getElementById('copydesen').style.display = 'inline';  
        }
        else{
            document.getElementById('copyencrip').style.display = 'none';
            document.getElementById('copydesen').style.display = 'none';  
        } 
        
    }
  });

  function copiarencrip(){
    let textoe = document.getElementById('encrip').value;

    navigator.clipboard.writeText(textoe);
    document.getElementById('encrip').value = "";
    document.getElementById('desen').value = "";

    document.getElementById('copyencrip').style.display = 'none';
    document.getElementById('copydesen').style.display = 'none';  
  }

  document.addEventListener('DOMContentLoaded', function () {
    var textbox = document.getElementById('desen');

    textbox.addEventListener('input', function (event) {
        var inputText = event.target.value;
        var normalizedText = quitarAcentos(inputText.toLowerCase());
        event.target.value = normalizedText;
    });

    function quitarAcentos(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var textbox = document.getElementById('encrip');

    textbox.addEventListener('input', function (event) {
        var inputText = event.target.value;
        var normalizedText = quitarAcentos(inputText.toLowerCase());
        event.target.value = normalizedText;
    });

    function quitarAcentos(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
});