import { 
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

import { useSelector, useDispatch } from 'react-redux';
// import { getItems, addItem, deleteItem } from './shoppingListSlice';
import { addItem, deleteItem } from './shoppingListSlice';

const ShoppingList = () => {
    const items = useSelector(state => state.shoppingList);
    const dispatch = useDispatch();

    // const handleAdd = () => {
    //     const name = prompt('Enter Item');
    //     if (name) {
    //         dispatch(addItem({ id: uuid(), name }));
    //     }
    // }

    const handleDelete = id => {
        dispatch(deleteItem(id));
    }
    
    return (
        <ListGroup className="list-cnt">
            <TransitionGroup className="shopping-list">
                {items.map(({id, name}) => (
                    <CSSTransition key={id} timeout={500}>
                        <ListGroupItem className="list-item">
                            {name}
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(id)}
                            >&times;</Button>
                        </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ListGroup>
    );
}

export default ShoppingList;