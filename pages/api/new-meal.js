import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
	const DB_NAME = 'FoodApp';
	const DB_PASSWORD = 4321;
	console.log(req.body);
	if (req.method === 'POST') {
		const client = await MongoClient.connect(
			`mongodb+srv://bentheking:${DB_PASSWORD}@foodapp.0nyau.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
		);
		const db = client.db();
		console.log(db);

		const mealsCollection = db.collection('meals');
		await mealsCollection.insertOne(req.body);

		client.close();

		res.status(201).send({ Message: 'Meal inserted' });
	}
};

export default handler;
