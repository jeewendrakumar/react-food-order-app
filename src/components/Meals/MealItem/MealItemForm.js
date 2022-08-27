import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    }
    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button type="submit">+ Add</button>
        </form>
    );
};

export default MealItemForm;