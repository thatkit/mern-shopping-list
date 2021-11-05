import ShoppingList from './ShoppingList/ShoppingList';
import ItemModal from './ItemModal/ItemModal';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import ErrorMessage from './ErrorMessage/ErrorMessage';

import { useSelector } from 'react-redux';

const Board = () => {
    const isLoading = useSelector(state => state.shoppingList.isLoading);
    const hasError = useSelector(state => state.shoppingList.hasError);
    return (
        <>
            {isLoading && <LoadingSpinner />}
            {hasError && <ErrorMessage />}
            <ShoppingList />
            <ItemModal />
        </>
    )
}

export default Board;