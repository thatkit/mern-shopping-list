import { useState } from 'react';
import { 
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

const ShoppingList = (props) => {
    const [items, setItems] = useState([
            { id: uuid(), name: 'Meat' },
            { id: uuid(), name: 'Veggies' },
            { id: uuid(), name: 'Choco' },
            { id: uuid(), name: 'Water' }
    ]);

    const handleAdd = () => {
        const name = prompt('Enter Item');
        if (name) {
            setItems([...items, { id: uuid(), name }]);
        }
    }

    const handleDelete = id => setItems(items.filter(item => item.id !== id));
    
    return (
        <Container>

            <ListGroup>
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

            <Button
                color="dark"
                className="mt-3"
                onClick={handleAdd}
            >Add Item</Button>

        </Container>
    );
}

export default ShoppingList;