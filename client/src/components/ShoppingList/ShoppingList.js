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
    

    return (
        <Container>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({id, name}) => (
                        <CSSTransition key={id} timeout={500}>
                            <ListGroupItem>
                                {name}
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        setItems(items);
                                    }}
                                >&times;</Button>
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
            <Button
                color="dark"
                className="mt-3"
                onClick={() => {
                    const name = prompt('Enter Item');
                    if (name) {
                        setItems([...items, { id: uuid(), name }]);
                    }
                }}
            >
                Add Item
            </Button>
        </Container>
    );
}

export default ShoppingList;