import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form
} from 'reactstrap';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../../store/shoppingListSlice';

import InputField from './InputField/InputField';

const ItemModal = () => {
    const isLoading = useSelector(state => state.shoppingList.isLoading);
    const dispatch = useDispatch();
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
        dispatch(addItem({ name: state.inputValue }));
        handleToggle();
    }

    if (!isLoading) {
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
                            <InputField onChange={handleChange} />
                            <Button color="dark" className="mt-3" >
                                Add Item                            
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>    
        )
    }
    return null;
}

export default ItemModal;