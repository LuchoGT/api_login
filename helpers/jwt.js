const jwt = require('jsonwebtoken');

const generarJWT = (uid,name)=>{

    //retornamos una promesa con su resolve y rejeect

    return new Promise((resolve,reject)=>{
        const payload = {uid,name};

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '12h'
        },(err,token)=>{
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            }
            resolve(token);
        })
    })
}

module.exports={generarJWT}