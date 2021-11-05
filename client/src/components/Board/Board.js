import ShoppingList from './ShoppingList/ShoppingList';
import ItemModal from './ItemModal/ItemModal';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

import { useSelector } from 'react-redux';

const Board = () => {
    const isLoading = useSelector(state => state.shoppingList.isLoading);
    return (
        <>
            {isLoading && <LoadingSpinner />}
            <ShoppingList />
            <ItemModal />
        </>
    )
}

export default Board;