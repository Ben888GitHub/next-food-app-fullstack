import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import MealList from '../components/MealList';
import { MongoClient } from 'mongodb';

export default function Home(props) {
	return <MealList meals={props.mealList} />;
}

export const getStaticProps = async () => {
	const DB_NAME = 'FoodApp';
	const DB_PASSWORD = 4321;
	const client = await MongoClient.connect(
		`mongodb+srv://bentheking:${DB_PASSWORD}@foodapp.0nyau.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
	);

	const db = client.db();
	const mealsCollection = db.collection('meals');
	const meals = await mealsCollection.find().toArray();

	client.close();

	return {
		props: {
			mealList: meals.map((meal) => ({
				id: meal._id.toString(),
				name: meal.name,
				image: meal.image_path,
				dish: meal.dished,
				chef: meal.chef
			}))
		}
	};
};
