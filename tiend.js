function verificar(){
    var departamento = document.getElementById('departamento').value;
    var cant = document.getElementById('cant').value;
    var iva = 0.16;
    var total = '';
    var total_iva = '';
    var prom = '';
    var desc_tarjeta = '';
    var tarjeta = '';
    var desc_aplicados = '';
    var total_final = '';

    if (document.getElementById('si').checked){
        tarjeta = 'Si'
    }else{
        tarjeta = 'No'
    }

    if(departamento=='Electrónica'){
        if(cant==3){
            if(document.getElementById('si').checked){
                
                total = 2200
                total_iva = total+(iva*total)
                prom = (3*850-(2200))
                desc_tarjeta = (0.05*total_iva)
                desc_aplicados = (desc_tarjeta+prom)
                total_final = (total_iva-desc_aplicados)
            }else{
                total = 2200
                total_iva = total+(iva*total)
                prom = (3*850-(2200))
                desc_tarjeta = (0)
                desc_aplicados = (desc_tarjeta+prom)
                total_final = (total_iva-desc_aplicados)
            }
        }else{
            if(cant>3){
                if(document.getElementById('si').checked){
                    cant1 = Math.floor(cant/3)
                    cantN = cant-(cant1*3)

                    total = (cant1*2200)+(cantN*850)
                    total_iva = (total+(iva*total))
                    prom = (350*cant1)
                    desc_tarjeta = (0.05*total_iva)
                    desc_aplicados = (desc_tarjeta+prom)
                    total_final = (total_iva-desc_aplicados)
                }else{
                    cant1 = Math.floor(cant/3)
                    cantN = cant-(cant1*3)

                    total = (cant1*2200)+(cantN*850)
                    total_iva = (total+(iva*total))
                    prom = (350*cant1)
                    desc_tarjeta = 0
                    desc_aplicados = (desc_tarjeta+prom)
                    total_final = (total_iva-desc_aplicados)
                }
            }else{
                if (cant<3){
                    if (document.getElementById('si').checked){
                        total = (cant*850)
                        total_iva = (total+(iva*total))
                        prom = 0
                        desc_tarjeta = (0.05*total_iva)
                        desc_aplicados = (desc_tarjeta+prom)
                        total_final = (total_iva-desc_aplicados)
                    }else{
                        total = (cant*850)
                        total_iva = (total+(iva*total))
                        prom = 0
                        desc_tarjeta = (0)
                        desc_aplicados = (desc_tarjeta+prom)
                        total_final = (total_iva-desc_aplicados)
                    }
                }else{}
            }
        }
    }else{
    if(departamento=='Juguetería'){
        if(cant>4){
            if(document.getElementById('si').checked){
                total = (650*cant)-((0.10)*650*cant)
                total_iva = total+(iva*total)
                prom = (650*cant-(total))
                desc_tarjeta = (0.05*total_iva)
                desc_aplicados = (desc_tarjeta+prom)
                total_final = (total_iva-desc_aplicados)

            }else{
                total = (650*cant)-((0.10)*650*cant)
                total_iva = total+(iva*total)
                prom = (650*cant-(total))
                desc_tarjeta = (0)
                desc_aplicados = (desc_tarjeta+prom)
                total_final = (total_iva-desc_aplicados)
            }
        }else{
            if(cant<=4){
                if(document.getElementById('si').checked){
                total = (cant*650)
                total_iva = total+(iva*total)
                prom = 0
                desc_tarjeta = (0.05*total_iva)
                desc_aplicados = (desc_tarjeta+prom)
                total_final = (total_iva-desc_aplicados)

                }else{
                total = (cant*650)
                total_iva = total+(iva*total)
                prom = 0
                desc_tarjeta = (0)
                desc_aplicados = (desc_tarjeta+prom)
                total_final = (total_iva-desc_aplicados)
                }
            }else{}
        }
    }else{}
    }
    
    alert (
        'TICKET DE COMPRA '+'\n'+
        'Departamento seleccionado: '+departamento+'\n'+
        'Artículos comprados: '+cant+'\n'+
        'Total sin IVA: $'+total+'\n'+
        'Total con IVA: $'+total_iva+'\n'+
        'Descuento por compra de artículos: $'+prom+'\n'+
        'Tarjeta de puntos: '+tarjeta+' -  Descuento de: $'+desc_tarjeta+'\n'+
        'Descuentos aplicados: $'+desc_aplicados+'\n'+
        'Total con descuentos aplicados: $'+total_final+'\n'
    );
}