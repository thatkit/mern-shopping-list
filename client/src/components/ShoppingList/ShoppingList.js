import { useEffect } from 'react';
import { 
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';
import { loadItems, deleteItem } from './shoppingListSlice';

const ShoppingList = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.shoppingList.items);

    // loads items from server on first render
    useEffect(() => {
        const promise = dispatch(loadItems());
        return () => promise.abort();
    }, [dispatch]);

    const handleDelete = id => {
        console.log(id)
        dispatch(deleteItem(id));
    }
    
    return (
        <ListGroup className="list-cnt">
            <TransitionGroup className="shopping-list">
                {items.map(({_id, name}) => (
                    <CSSTransition key={_id} timeout={500}>
                        <ListGroupItem className="list-item">
                            {name}
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(_id)}
                            >&times;</Button>
                        </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ListGroup>
    );
}

export default ShoppingList;