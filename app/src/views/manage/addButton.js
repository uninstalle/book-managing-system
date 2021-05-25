import React from 'react';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';


class AddButton extends React.Component {

    showAddBookModal() {
        Modal({
            content: (
                <AddBookForm />
            ),
            visible: this.state.visible,
            destroyOnClose: true
        });
    }

    render(props) {
        if (!this.props.val || !this.props.isLoggedin) return null;
        return (
            <Button>Add</Button>
        );
    }
}

class AddBookForm extends React.Component {
    render() {
        return (
            <br />
        );
    }
}

export default AddButton;