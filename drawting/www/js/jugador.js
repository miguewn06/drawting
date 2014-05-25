function aleatorio() {
		var min = 1;
		var max = 2;
        var actua = 'Act&uacute;a';
        var dibuja = 'Dibuja'; 
		
        var res = Math.floor(Math.random() * (max - min + 1)) + min;
    
        if( res == 1 ){
            document.getElementById('resultado').innerHTML = actua.toString();
        } else if ( res == 2) {
            document.getElementById('resultado').innerHTML = dibuja.toString();
        }
    }
	