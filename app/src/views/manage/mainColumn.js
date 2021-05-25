import React from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Button } from 'antd';

const { Column } = Table;


class MainColumn extends React.Component {
    render(props) {
        if (!this.props.val) return null;
        switch (this.props.val) {
            case 1: return (<BookColumn data={this.props.data} isLoggedin={this.props.isLoggedin} />);
            case 2: return (<LibcardColumn data={this.props.data} isLoggedin={this.props.isLoggedin} />);
            case 3: return (<RecordColumn data={this.props.data} isLoggedin={this.props.isLoggedin} />);
            case 4: return (<UserColumn data={this.props.data} isLoggedin={this.props.isLoggedin} />);
            default: return null;
        }
    }
}

class BookColumn extends React.Component {

    render(props) {
        return (
            <Table dataSource={this.props.data} rowKey="book_id">
                <Column title="Book ID" dataIndex="book_id" key="book_id" />
                <Column title="Title" dataIndex="title" key="title" />
                <Column title="Author" dataIndex="author" key="author" />
                <Column title="ISBN" dataIndex="ISBN" key="ISBN" />
                <Column title="Type" dataIndex="type" key="type" />
                <Column title="Year" dataIndex="year" key="year" />
                <Column title="Publisher" dataIndex="publisher" key="publisher" />
                <Column title="Price" dataIndex="price" key="price" />
                <Column title="Stock" dataIndex="stock" key="stock" />
                <Column title="Lent" dataIndex="lent" key="lent" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <div>
                            <Button type="link" disabled={!this.props.isLoggedin}>Modify</Button>
                            <Button type="link" disabled={!this.props.isLoggedin}>Delete</Button>
                        </div>
                    )}
                />
            </Table>
        );
    }
}

class LibcardColumn extends React.Component {
    render(props) {
        return (
            <Table dataSource={this.props.data} rowKey="card_id">
                <Column title="Card ID" dataIndex="card_id" key="card_id" />
                <Column title="User ID" dataIndex="user_id" key="user_id" />
                <Column title="Register date" dataIndex="register_date" key="register_date" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <Button>Modify</Button>
                            <Button>Delete</Button>
                        </Space>
                    )}
                />
            </Table>
        );
    }
}


class RecordColumn extends React.Component {
    render(props) {
        return (
            <Table dataSource={this.props.data} rowKey="record_id">
                <Column title="Record ID" dataIndex="record_id" key="record_id" />
                <Column title="Book ID" dataIndex="book_id" key="book_id" />
                <Column title="Card ID" dataIndex="card_id" key="card_id" />
                <Column title="Borrow date" dataIndex="borrow_date" key="borrow_date" />
                <Column title="Return date" dataIndex="return_date" key="return_date" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <a>Modify</a>
                            <a>Delete</a>
                        </Space>
                    )}
                />
            </Table>
        );
    }
}

class UserColumn extends React.Component {
    render(props) {
        return (
            <Table dataSource={this.props.data} rowKey="user_id">
                <Column title="User ID" dataIndex="user_id" key="user_id" />
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column title="Phone number" dataIndex="phone_number" key="phone_number" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <a>Modify</a>
                            <a>Delete</a>
                        </Space>
                    )}
                />
            </Table>
        );
    }
}

export default MainColumn;