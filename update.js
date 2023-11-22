const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb+srv://ranyelle2001:Rany2001@cluster0.wsoathm.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'Agenda';
const collectionName = 'contatos';

async function atualizarContato(id, novoNumero) {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Atualizar o documento com base no ID
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { numero: novoNumero } }
    );

    console.log(`Número atualizado para ${novoNumero}. Modificados: ${result.modifiedCount}`);
  } finally {
    await client.close();
  }
}
atualizarContato('655e6b5e359bb7a9b6822238', '82000000000');
