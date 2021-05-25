import React from 'react';
import 'antd/dist/antd.css';
import { Select, Input } from 'antd';
const { Option } = Select;

class SearchGroup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            property: null,
            value: null
        };
        this.onSelectValueChange = this.onSelectValueChange.bind(this);
        this.onSearchValueChange = this.onSearchValueChange.bind(this);
    }

    onSelectValueChange(selectValue) {
        this.setState({ property: selectValue });
    }

    onSearchValueChange(searchValue) {
        this.setState({ value: searchValue }, () => {
            this.props.onSelectRequest(this.state.property, this.state.value);
        });

    }

    render() {
        if (!this.props.val) return null;
        return (
            <Input.Group compact>
                <SelectGroup val={this.props.val} onSelect={this.onSelectValueChange} />
                <Input.Search style={{ width: '50%' }} defaultValue="" onSearch={this.onSearchValueChange} />
            </Input.Group>
        );
    }
}

class SelectGroup extends React.Component {

    render(props) {
        if (!this.props.val) return null;
        switch (this.props.val) {
            case 1: return (<BookSelectGroup onSelect={this.props.onSelect} />);
            case 2: return (<LibcardSelectGroup onSelect={this.props.onSelect} />);
            case 3: return (<RecordSelectGroup onSelect={this.props.onSelect} />);
            case 4: return (<UserSelectGroup onSelect={this.props.onSelect} />);
            default: return null;
        }
    }
}

class BookSelectGroup extends React.Component {
    render(props) {
        return (
            <Select style={{ width: 120 }} onChange={this.props.onSelect}>
                <Option value="book_id">Book ID</Option>
                <Option value="title">Title</Option>
                <Option value="author">Author</Option>
                <Option value="ISBN">ISBN</Option>
                <Option value="type">Type</Option>
                <Option value="year">Year</Option>
                <Option value="publisher">Publisher</Option>
                <Option value="price">Price</Option>
                <Option value="stock">Stock</Option>
                <Option value="lent">Lent</Option>
            </Select>
        );
    }
}

class LibcardSelectGroup extends React.Component {
    render(props) {
        return (
            <Select style={{ width: 120 }} onChange={this.props.onSelect}>
                <Option value="card_id">Card ID</Option>
                <Option value="user_id">User ID</Option>
                <Option value="register_date">Register Date</Option>
            </Select>
        );
    }
}

class RecordSelectGroup extends React.Component {
    render(props) {
        return (
            <Select style={{ width: 120 }} onChange={this.props.onSelect}>
                <Option value="record_id">Record ID</Option>
                <Option value="book_id">Book ID</Option>
                <Option value="card_id">Card ID</Option>
                <Option value="borrow_date">Borrow date</Option>
                <Option value="return_date">Return date</Option>
            </Select>
        );
    }
}

class UserSelectGroup extends React.Component {
    render(props) {
        return (
            <Select style={{ width: 120 }} onChange={this.props.onSelect}>
                <Option value="user_id">User ID</Option>
                <Option value="name">Name</Option>
                <Option value="address">Address</Option>
                <Option value="phone_number">Phone number</Option>
            </Select>
        );
    }
}

export default SearchGroup;