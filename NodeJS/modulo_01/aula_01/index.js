function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function(){
            return resolve({
                usuario_id: 1,
                nome: 'Robson',
                dt_nascimento: new Date()
            });
        }, 1000);
    })
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function(){
        return callback(null, {
            tel_id: 1,
            usuario_id: 1,
            tel: '1234-5678'
        });
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua Irapua',
            num: '542',
            usuario_id: 1
        })
    });
}

const usuarioPromise = obterUsuario();

usuarioPromise
    .then(function(res) {
        console.log('resultado: ', res);
    })
    .catch(function(err) {
        console.error('Deu Merda: ', err);
    });

// obterUsuario(function resolverUsuario(err, usuario){
//     if(err){
//         console.error('Deu merda no usuário! ', error);
//         return;
//     }

//     obterTelefone(usuario.usuario_id, function resolverTelefone(err, telefone){
//         if(err){
//             console.error('Deu merda no telefone do cara! ', error);
//             return;
//         }

//         obterEndereco(usuario.usuario_id, function resolverEndereco(err, endereco){
//             if(err){
//                 console.error('Deu merda no endereço do cara! ', error);
//                 return;
//             }

//             console.log(`
//                 Nome: ${usuario.nome},
//                 Telefone: ${telefone.tel},
//                 Endereco: ${endereco.rua}
//             `);
//         });
//     });
// });

