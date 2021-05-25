import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Modal } from 'antd';

class AddBookModal extends React.Component {
    render(props) {
        return (
            <Modal destroyOnClose={true} visible={this.props.visible} onOk={this.props.onOk} onCancel={this.props.onCancel}>
                <AddBookForm />
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
    render() {
        return (
            <Form {...formItemLayout} ref={this.formRef}>
                <Form.Item
                    label="Book ID"
                    name="book_id"
                    rules={[
                        {
                            type: 'number',
                            required: true
                        }
                    ]}
                >
                    <Input />
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
                            type: 'number'
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
                            type: 'number'
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
                            type: 'number'
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