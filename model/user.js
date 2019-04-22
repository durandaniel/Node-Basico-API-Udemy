const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true }, //lowercase tuso em minúsculo
    password: { type: String, required: true, select: false }, //select false pqe quando fizer uma busca de um usuário ou uma busca de usuários seja selecionado na própria busca
    created: { type: Date, default: Date.now } //eu não seto o valor, deixco no valor padrão
})

UserSchema.pre('save', async function (next){ //aqui NECESSÁRIAMENTWE TEM QUE SER 'FUNCTION' NÃO PODE SER ARROW FUNTION, PQE QUEREMOS USAR A REFERENCIA EXTERNA
    let user = this;
    if (!user.isModified('password')) {
        return next()}; //ou seja, se o campo de password foi modificado (inserido)

    user.password = await bcrypt.hash(user.password, 10);
    return next()
});




module.exports = mongoose.model('User', UserSchema) // exportação com nome de User, e o que é exportado é UserSchema