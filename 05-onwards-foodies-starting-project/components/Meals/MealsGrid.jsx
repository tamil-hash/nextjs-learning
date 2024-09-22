import MealItem from '@/components/Meals/MealItem';
import classes from './MealsGrid.module.css';

const MealsGrid = ({ meals }) => {
	return (
		<ul className={classes.meals}>
			{meals.map((meal) => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	);
};

export default MealsGrid;
