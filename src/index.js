const express = require('express');
const morgan = require('morgan');
const app= express();
let numeroCorrecto="";
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/try/:intento',function (req, res){
    let resultado="";
    let numero=req.params.intento;
    for(let i=0;i<4;i++) {
        let caraterNC= numeroCorrecto.charAt(i);
        let caraterN= numero.charAt(i);
        if(numeroCorrecto.includes(caraterN)){
            if(caraterNC===caraterN){
                resultado=resultado+"X";
            }
            else{
                resultado=resultado+"-";
            }
        }
        else{
            resultado=resultado+"_";
        }
        
    }

    return res.json({
        success: true,
        resultado: resultado
    });
});
app.get('/config/:numero',function(req,res){
    numeroCorrecto=req.params.numero;
    let message=numeroCorrecto;
    return res.json({
        success: true,
        secreto: message
    });
});
app.get('/',function(req,res){
    
    res.send("Se ha conectado a la Api")
    

});

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});