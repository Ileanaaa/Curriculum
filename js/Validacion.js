function ValidarC(e){
                var keynum = window.event ? window.event.keyCode : e.which;
                if ((keynum === 8) || (keynum === 46))
                return true;

                return /\d/.test(String.fromCharCode(keynum));
            }
            function ValidarNC(e){
                var key = window.event ? window.event.keyCode : e.which;
                var tecla = String.fromCharCode(key).toLowerCase();
                var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
                var especiales = "8-37-39-46";

                var tecla_especial = false
                for(var i in especiales){
                    if(key == especiales[i]){
                        tecla_especial = true;
                        break;
                    }
                }
                if(letras.indexOf(tecla)==-1 && !tecla_especial){
                    return false;
                }
             }
            function ValidarS(e,input){
                // Backspace = 8, Enter = 13, '0' = 48, '9' = 57, '.' = 46, '-' = 43
                var key = window.event ? window.event.keyCode : e.which;   
                var chark = String.fromCharCode(key);
                var tempValue = input.value + chark;
                if(key >= 48 && key <= 57){      
                    if(filter(tempValue)=== false){
                        return false;
                    }else{
                        return true;
                    }
                }else{
                      if(key == 8 || key == 13 || key == 0) {     
                          return true;              
                      }else if(key == 46){
                            if(filter(tempValue)=== false){
                                return false;
                            }else{       
                                return true;
                            }
                      }else{
                          return false;
                      }
                }
            }
            function filter(__val__){
                var preg = /^([0-9]+\.?[0-9]{0,2})$/; 
                if(preg.test(__val__) === true){
                    return true;
                }else{
                   return false;
                }
            }
