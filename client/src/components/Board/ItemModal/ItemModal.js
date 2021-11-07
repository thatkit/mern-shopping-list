import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form
} from 'reactstrap';
import { useSelector } from 'react-redux';
import InputField from './InputField/InputField';

const ItemModal = (props) => {
    const isLoading = useSelector(state => state.shoppingList.isLoading);

    if (!isLoading) {
        return (
            <>
                <Button
                    color="dark"
                    className="mt-3"
                    onClick={props.handleToggle}
                >Add Item</Button>
    
                <Modal
                    isOpen={props.state.open}
                    toggle={props.handleToggle}
                >
                    <ModalHeader>Add to shopping list</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={props.handleSubmit}>
                            <InputField onChange={props.handleChange} />
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