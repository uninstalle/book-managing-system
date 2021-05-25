import React from 'react';
import 'antd/dist/antd.css';
import './Manage.css';
import AuthChecker from '../../controller/authChecker';
import RadioGroup from './radioGroup';
import AddButton from './addButton';
import SearchGroup from './searchGroup';
import MainColumn from './mainColumn';
import BookController from '../../controller/bookController';

var Controller = [BookController];


class Manage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false,
      radioSelect: 0,
      data: []
    };

    this.onRadioSelectChange = this.onRadioSelectChange.bind(this);
    this.onGetSelectRequest = this.onGetSelectRequest.bind(this);
  }

  UNSAFE_componentWillMount() {
    AuthChecker.check().then((res) => {
      this.setState({ isLoggedin: res })
    }).catch(
      (e) => {
        console.log(e);
        this.setState({ isLoggedin: false });
      }
    );
  }


  onRadioSelectChange(event) {
    let value = event.target.value;
    this.setState({
      radioSelect: value,
      data: []
    });
    this.refetchData();
  }

  refetchData() {
    BookController.list().then(
      (res) => { this.setState({ data: res }); }
    ).catch(
      (e) => { console.log(e); }
    );
  }

  onGetSelectRequest(property, value) {
    if (property && value)
      BookController.select(property, value).then(
        (res) => { this.setState({ data: res }); }
      ).catch(
        (e) => { console.log(e); }
      );
    else this.refetchData();
  }

  render() {
    return (
      <div className="Manage">
        <p>Current modifying:</p>
        <RadioGroup isLoggedin={this.state.isLoggedin} select={this.onRadioSelectChange} />
        <br /><br />
        <SearchGroup val={this.state.radioSelect} onSelectRequest={this.onGetSelectRequest} />
        <AddButton val={this.state.radioSelect} isLoggedin={this.state.isLoggedin} />
        <MainColumn val={this.state.radioSelect} data={this.state.data} isLoggedin={this.state.isLoggedin} />
      </div>
    );
  }
}






export default Manage;
