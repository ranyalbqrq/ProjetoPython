const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb+srv://ranyelle2001:Rany2001@cluster0.wsoathm.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'Agenda';
const collectionName = 'contatos';

async function excluirContato(id) {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Excluir o documento com base no ID
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    console.log(`Contato excluído. Excluídos: ${result.deletedCount}`);
  } finally {
    await client.close();
  }
}

// Exemplo de exclusão de contato com ID específico
// Substitua 'ID_DO_CONTATO' pelo ID real do contato que você deseja excluir
excluirContato('655e6b5e359bb7a9b6822238');
