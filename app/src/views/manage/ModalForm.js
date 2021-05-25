import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Modal } from 'antd';

class AddBookModal extends React.Component {

    render(props) {
        return (
            <Modal
                destroyOnClose={true}
                visible={this.props.visible}
                onOk={() => {
                    this.child.submit();
                }}
                onCancel={this.props.onCancel}
            >
                <AddBookForm
                    onRef={(ref) => {
                        this.child = ref;
                    }}
                    onFinish={(value) => {
                        this.props.onOk(value);
                    }}
                    isUpdate={this.props.isUpdate}
                    initVal={this.props.initVal}
                />
            </Modal>
        );
    }
}

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 5,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 12,
        },
    },
};

class AddBookForm extends React.Component {

    formRef = React.createRef();

    submit() {
        this.formRef.current.submit();
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    render(props) {
        return (
            <Form {...formItemLayout} ref={this.formRef} onFinish={this.props.onFinish} initialValues={this.props.initVal}>
                <Form.Item
                    label="Book ID"
                    name="book_id"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            transform: (value) => { if (value) return "" + value },
                            pattern: /^[0-9]+$/
                        }
                    ]}
                >
                    <Input disabled={this.props.isUpdate} />
                </Form.Item>

                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            type: 'string',
                            required: true,
                            max: 20
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Author"
                    name="author"
                    rules={[
                        {
                            type: 'string',
                            max: 20
                        }
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="ISBN"
                    name="ISBN"
                    rules={[
                        {
                            type: 'string',
                            max: 13
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Type"
                    name="type"
                    rules={[
                        {
                            type: 'string',
                            max: 20
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Year"
                    name="year"
                    rules={[
                        {
                            type: 'string',
                            max: 4
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Publisher"
                    name="publisher"
                    rules={[
                        {
                            type: 'string',
                            max: 20
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[
                        {
                            type: 'string',
                            transform: (value) => { if (value) return "" + value },
                            pattern: /^[0-9]+(.[0-9]+)?$/
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Stock"
                    name="stock"
                    rules={[
                        {
                            type: 'string',
                            transform: (value) => { if (value) return "" + value },
                            pattern: /^[0-9]+$/
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Lent"
                    name="lent"
                    rules={[
                        {
                            type: 'string',
                            transform: (value) => { if (value) return "" + value },
                            pattern: /^[0-9]+$/
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

            </Form>
        );
    }
}


export { AddBookModal };