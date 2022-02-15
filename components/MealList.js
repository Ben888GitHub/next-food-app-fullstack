import React from 'react';
import MealItem from './MealItem';

function MealList({ meals }) {
	return (
		<div className="flex flex-wrap">
			{meals && meals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
		</div>
	);
}

export default MealList;
