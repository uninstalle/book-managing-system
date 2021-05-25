import React from 'react';
import 'antd/dist/antd.css';
import './Manage.css';
import { Radio, Table, Space, Button, Input, Select } from 'antd';
import AuthChecker from '../../controller/authChecker';
import BookController from '../../controller/bookController';
const { Column } = Table;
const { Option } = Select;

class Manage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { radioSelect: 0, isLoggedin: false };

    this.updateRadioSelect = this.updateRadioSelect.bind(this);
  }

  UNSAFE_componentWillMount() {
    AuthChecker.check().then((res) => {
      this.setState({ isLoggedin: res })
    }).catch(
      () => {
        this.setState({ isLoggedin: false });
      }
    );
  }


  updateRadioSelect(event) {
    let value = event.target.value;
    this.setState({ radioSelect: value });
  }
  render(props) {
    return (
      <div className="Manage">
        <p>Current modifying:</p>
        <RadioGroup isLoggedin={this.props.isLoggedin} select={this.updateRadioSelect} />
        <br /><br />
        <SearchGroup val={this.state.radioSelect} />
        <Button>Add</Button>
        <MainColumn val={this.state.radioSelect} />
      </div>
    );
  }
}

class RadioGroup extends React.Component {
  render(props) {
    if (this.props.isLoggedin)
      return (
        <Radio.Group onChange={this.props.select}>
          <Radio value={1}>Book</Radio>
          <Radio value={2}>Library card</Radio>
          <Radio value={3}>Record</Radio>
          <Radio value={4}>User</Radio>
        </Radio.Group>
      );
    else
      return (
        <Radio.Group onChange={this.props.select}>
          <Radio value={1}>Book</Radio>
          <Radio value={2} disabled={true}>Library card</Radio>
          <Radio value={3} disabled={true}>Record</Radio>
          <Radio value={4} disabled={true}>User</Radio>
        </Radio.Group>
      );
  }
}

class SearchGroup extends React.Component {
  render(props) {
    if (!this.props.val) return null;
    return (
      <Input.Group compact>
        <SelectGroup val={this.props.val} />
        <Input.Search style={{ width: '50%' }} defaultValue="" />
      </Input.Group>
    );
  }
}

class SelectGroup extends React.Component {
  render(props) {
    if (!this.props.val) return null;
    switch (this.props.val) {
      case 1: return (<BookSelectGroup />);
      case 2: return (<LibcardSelectGroup />);
      case 3: return (<RecordSelectGroup />);
      case 4: return (<UserSelectGroup />);
      default: return null;
    }
  }
}

class BookSelectGroup extends React.Component {
  render() {
    return (
      <Select defaultValue="OP1">
        <Option value="OP1">Book ID</Option>
        <Option value="OP2">Title</Option>
        <Option value="OP3">Author</Option>
        <Option value="OP4">ISBN</Option>
        <Option value="OP5">Type</Option>
        <Option value="OP6">Year</Option>
        <Option value="OP7">Publisher</Option>
        <Option value="OP8">Price</Option>
        <Option value="OP9">Stock</Option>
        <Option value="OP10">Lent</Option>
      </Select>
    );
  }
}

class LibcardSelectGroup extends React.Component {
  render() {
    return (
      <Select defaultValue="OP1">
        <Option value="OP1">Card ID</Option>
        <Option value="OP2">User ID</Option>
        <Option value="OP3">Register Date</Option>
      </Select>
    );
  }
}

class RecordSelectGroup extends React.Component {
  render() {
    return (
      <Select defaultValue="OP1">
        <Option value="OP1">Record ID</Option>
        <Option value="OP2">Book ID</Option>
        <Option value="OP3">Card ID</Option>
        <Option value="OP4">Borrow date</Option>
        <Option value="OP5">Return date</Option>
      </Select>
    );
  }
}

class UserSelectGroup extends React.Component {
  render() {
    return (
      <Select defaultValue="OP1">
        <Option value="OP1">User ID</Option>
        <Option value="OP2">Name</Option>
        <Option value="OP3">Address</Option>
        <Option value="OP4">Phone number</Option>
      </Select>
    );
  }
}

class MainColumn extends React.Component {
  render(props) {
    if (!this.props.val) return null;
    switch (this.props.val) {
      case 1: return (<BookColumn />);
      case 2: return (<LibcardColumn />);
      case 3: return (<RecordColumn />);
      case 4: return (<UserColumn />);
      default: return null;
    }
  }
}

class BookColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  listBook() {
    BookController.list().then(
      (res) => { this.setState({ data: res }); }
    ).catch(
      () => { this.setState({ data: [] }); }
    );
  }

  selectBook(property, value) {
    BookController.select(property, value).then(
      (res) => { this.setState({ data: res }); }
    ).catch(
      () => { this.setState({ data: [] }) }
    );
  }

  UNSAFE_componentWillMount() {
    this.listBook();
  }

  render() {
    return (
      <Table dataSource={this.state.data} rowKey="book_id">
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
              <a>Modify</a>
              <a>Delete</a>
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



export default Manage;
