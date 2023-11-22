const { MongoClient } = require('mongodb');

// URL de conexão com o banco de dados MongoDB
const url = 'mongodb+srv://ranyelle2001:Rany2001@cluster0.wsoathm.mongodb.net/?retryWrites=true&w=majority';

// Nome do banco de dados
const dbName = 'Agenda';

// Nome da coleção
const collectionName = 'contatos';

// Função para cadastrar um novo contato
async function cadastrarContato(nome, numero) {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Criar um novo documento para o contato
    const contato = {
      nome: nome,
      numero: numero
    };

    // Inserir o documento na coleção 'contatos'
    const result = await collection.insertOne(contato);
    console.log(`Contato cadastrado com sucesso. ID: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

// Função para listar todos os contatos
async function listarContatos() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Obter todos os documentos da coleção 'contatos'
    const contatos = await collection.find().toArray();

    // Exibir os contatos
    console.log('Lista de Contatos:');
    contatos.forEach(contato => {
      console.log(`Nome: ${contato.nome}, Número: ${contato.numero}`);
    });
  } finally {
    await client.close();
  }
}

// Exemplos de cadastro de contatos
cadastrarContato('carla', '81999999999');
cadastrarContato('dinah', '81888888888');
cadastrarContato('tomaz', '81777777777');

// Exemplo de listagem de contatos
listarContatos();
  