console.log("Deu bom cla blz")
import express, { request } from 'express';

//criação do app api servidor
const app = express();

app.use(express.json());
app.listen(8080, () => console.log("Servidor iniciado"));

app.get('/', (request, response) => {
    return response.status(200).send('<h1>API Teste</h1><p>Descrição da API</p>')
});

//rota exemplo
const listaProdutos = [];
app.post('/teste',(request,response) =>{

    listaProdutos.push(request.body)
    console.log(request.body)

    return response.json("OK")
})

// CADASTRO - CREATE - post
app.post('/growdevers', (request, response) => {
    const dados = request.body

    if (!dados.id) {
        return response.status(400).json("O campo id é obrigatório")
    }

    if (!dados.nome) {
        return response.status(400).json("O campo nome é obrigatório")
    }

    if (!dados.matricula) {
        
    }

    return response.json('OK')

})

//USUARIOS

// - listar todos
// - listar por id
// - cadastrar

// - id
// - email
// - password
// - transactions - [{ id: 1, type: 'income', value: 200.00, description: 'Salário' }]


// TRANSACTION

// - cadastrar
// - listar por tipo
// - listar por id
// - atualizar
// - deletar

// - id
// - type
// - value
// - description
