import ShoppingList from './ShoppingList/ShoppingList';
import ItemModal from './ItemModal/ItemModal';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import ErrorMessage from './ErrorMessage/ErrorMessage';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/shoppingListSlice';

const Board = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.shoppingList.isLoading);
    const hasError = useSelector(state => state.shoppingList.hasError);

    const [state, setState] = useState({
        open: false,
        inputValue: ''
    });

    const handleToggle = () => {
        setState(prevState => {return { ...prevState, open: !prevState.open }});
    }

    const handleChange = e => {
        setState(prevState => {
            return {
                ...prevState,
                inputValue: e.target.value
            }
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        state.inputValue && dispatch(addItem({ name: state.inputValue }));
        handleToggle();
        setState(prevState => {
            return {
                ...prevState,
                inputValue: ''
            }
        });
    }

    return (
        <>
            {isLoading && <LoadingSpinner />}
            {hasError && <ErrorMessage />}
            <ShoppingList />
            <ItemModal 
                state={state}
                handleToggle={handleToggle}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default Board;