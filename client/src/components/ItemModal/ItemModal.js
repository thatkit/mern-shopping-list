import { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    noRefCheck
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../ShoppingList/shoppingListSlice';

const ItemModal = () => {
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

    const handleSubmit = () => {
        
    }

    return (
        <>
            <Button
                color="dark"
                className="mt-3"
                onClick={handleToggle}
            >Add Item</Button>

            <Modal
                isOpen={state.open}
                toggle={handleToggle}
            >
                <ModalHeader>Add to shopping list</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="items">Item</Label>
                            <Input 
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add shopping item"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <Button>
                            Add Item                            
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>    
    )
}

export default ItemModal;