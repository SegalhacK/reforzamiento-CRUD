const { Router } = require('express');
const router = Router();
const { Users } = require('../db'); // IMPORTAMOS LA BASE DE DATOS DESDE EL ARCHIVO JS

router.get('/', (req,res) => {
    res.render('index')
}),


router.post('/user/new', async (req,res) => {
    const newUser = await Users.create(req.body); //req body tiene todos los datos y config que la DB
    res.redirect('/');
});
// 

// Export all this routes to be used outside
module.exports = router;