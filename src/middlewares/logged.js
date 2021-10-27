const islogged = (req, res, next)=>{
    let logged = true
    if(logged){
        next()
        console.log('estas loggeado')
    } else {
        res.send('No puede acceder, debe estar loggeado')
    }
}

exports.islogged = islogged