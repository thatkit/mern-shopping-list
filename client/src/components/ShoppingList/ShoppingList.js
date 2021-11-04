import { 
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from './shoppingListSlice';

const ShoppingList = () => {
    const items = useSelector(state => state.shoppingList.items);
    const dispatch = useDispatch();

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