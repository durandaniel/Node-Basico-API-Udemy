const env = process.env.NODE_ENV || 'dev' //node env é o ambiente de desenvolvimento do NODE

const config = () => {
    switch (env) {
        case 'dev':
        return {
            bd_string: 'mongodb+srv://usuario_admin:danielavd@clusterapi-tnqa4.mongodb.net/test?retryWrites=true', //obviamente que o bancop de dados de produção é diferente do banco da aplicação real.. mas aqui vamos deixar tudo igual
            jwt_pass: 'batatafrita2019', //token de dev deve ser diferente do token de produção
            jwt_expires_in: '7d', //geralmente uma data mais baixa pra ver se tá expirando ou não
        }
        
        case 'hml': //homologação
        return {
            bd_string: 'mongodb+srv://usuario_admin:danielavd@clusterapi-tnqa4.mongodb.net/test?retryWrites=true', //obviamente que o bancop de dados de produção é diferente do banco da aplicação real.. mas aqui vamos deixar tudo igual
            jwt_pass: 'batatafrita2019', //token de dev deve ser diferente do token de produção
            jwt_expires_in: '7d',
        }
        case 'prod':
        return {
            bd_string: 'mongodb+srv://usuario_admin:danielavd@clusterapi-tnqa4.mongodb.net/test?retryWrites=true', //obviamente que o bancop de dados de produção é diferente do banco da aplicação real.. mas aqui vamos deixar tudo igual
            jwt_pass: 'OAHSBoadboUADH9A78dyoghaOSDB79Asdg', //token de dev deve ser diferente do token de produção
            jwt_expires_in: '7d',
        }

    }
}

console.log(`Iniciando a API em ambiente ${env.toLocaleUpperCase()}`);

module.exports = config()