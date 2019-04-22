const express = require('express')
const router = express.Router();
const auth = require('../middlewares/auth.js')

router.get('/', auth, (req, res) => {
    console.log(res.locals.auth_data);
    return res.send({message: "Essa informação é muito importante apenas usuários autorizados podem têla"})
})

router.post('/', (req, res) => {
    return res.send({message: "Tudo ok com o método POST da raiz"})
})

module.exports = router;


//user 3 = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmUxZWEwNWViY2JkMTgyYzc4YWNmNyIsImlhdCI6MTU1NTk2MzU1MiwiZXhwIjoxNTU2NTY4MzUyfQ.GSP_JZ8-T9m9QmWB9mLC8dIrbguI4CZVYIEO6gSNF6Q

//user 4 = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmUyMTRjZjVlMzgwMzUzNDFkYjQ0NCIsImlhdCI6MTU1NTk2NDIzNiwiZXhwIjoxNTU2NTY5MDM2fQ.-D1DIpYI8_SfbGkRZkMuxjx9vICsOrtO0OqU6oUHxeM

//user 5 = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYmUyMjgyZjUwOGViMzcyY2ZkOGIzMiIsImlhdCI6MTU1NTk2NDU0NiwiZXhwIjoxNTU2NTY5MzQ2fQ.f9IYIpSpwj5dn841346gVKBTznzzUTIEo0pG4m7Iz_E