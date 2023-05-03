//Middlewares de error

function errorLogger (error, req, res, next){ //Los métodos "next()" utilizados en los routers y servicios mandan los errores a este bloque de código
    console.log('Logger')
    console.log(`The error is: ${error.message}`); //Imprime solo el mensaje del error (objeto Error)
    next(error); //Transmite el error al siguiente middleware (manejador [final del recorrido])
}

function errorHandler(error,req,res,next) { //Recibe el error
    console.log('Handler')
    res.status(500).json({
        thisiswrong : error.message //muestra un json con la falla
    });
};

module.exports = {errorLogger, errorHandler};