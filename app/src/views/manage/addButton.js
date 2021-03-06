import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import AddModal from './ModalForm';


class AddButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false
        };

        this.add = this.add.bind(this);
    }

    add(value) {
        this.props.onAdd(value);
        this.setState({ isModalVisible: false });
    }

    render(props) {
        if (!this.props.val || !this.props.isLoggedin) return null;
        return (
            <div>
                <Button
                    type="primary"
                    onClick={() => {
                        this.setState({ isModalVisible: true });
                    }}  >
                    Add New Item
                    </Button>

                <AddModal
                    val={this.props.val}
                    visible={this.state.isModalVisible}
                    onOk={this.add}
                    onCancel={() => {
                        this.setState({ isModalVisible: false });
                    }}
                />
            </div>
        );
    }
}

export default AddButton;