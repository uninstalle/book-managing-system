import React from 'react';
import 'antd/dist/antd.css';
import './Manage.css';
import AuthChecker from '../../controller/authChecker';
import BookController from '../../controller/bookController';
import LibcardController from '../../controller/libcardController';
import RecordController from '../../controller/recordController';
import UserController from '../../controller/userController';
import RadioGroup from './radioGroup';
import AddButton from './addButton';
import SearchGroup from './searchGroup';
import MainColumn from './mainColumn';
import { Info } from '../dialog';

var Controller = [null, BookController, LibcardController, RecordController, UserController];


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
    this.onGetAddRequest = this.onGetAddRequest.bind(this);
    this.onGetModifyRequest = this.onGetModifyRequest.bind(this);
    this.onGetDeleteRequest = this.onGetDeleteRequest.bind(this);
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
    }, () => {
      this.refetchData();
    });
  }

  refetchData() {
    Controller[this.state.radioSelect].list().then(
      (res) => { this.setState({ data: res }); }
    ).catch(
      (e) => { console.log(e); }
    );
  }

  onGetSelectRequest(property, value) {
    if (value)
      value = '\'' + value + '\'';

    if (property && value)
      Controller[this.state.radioSelect].select(property, value).then(
        (res) => {
          console.log(res);
          this.setState({ data: res });
        }
      ).catch(
        (e) => { console.log(e); }
      );
    else this.refetchData();
  }

  onGetAddRequest(value) {
    for (let p in value) {
      if (value[p])
        value[p] = '\'' + value[p] + '\'';
    }

    console.log(value);

    Controller[this.state.radioSelect].add(value).then(
      (res) => {
        console.log(res);
        Info({ text: res });
        this.refetchData();
      }
    ).catch(
      (e) => { console.log(e); }
    );
  }

  onGetModifyRequest(value) {
    for (let p in value) {
      if (value[p])
        value[p] = '\'' + value[p] + '\'';
    }

    Controller[this.state.radioSelect].update(value).then(
      (res) => {
        Info({ text: res });
        this.refetchData();
      }
    ).catch(
      (e) => { console.log(e); }
    );


  }

  onGetDeleteRequest(value) {
    Controller[this.state.radioSelect].delete(value).then(
      (res) => {
        Info({ text: res });
        this.refetchData();
      }
    ).catch(
      (e) => { console.log(e); }
    );

  }

  render() {
    return (
      <div className="Manage">
        <p>Current modifying:</p>
        <RadioGroup isLoggedin={this.state.isLoggedin} select={this.onRadioSelectChange} />
        <br /><br />
        <SearchGroup val={this.state.radioSelect} onSelectRequest={this.onGetSelectRequest} />
        <AddButton val={this.state.radioSelect} isLoggedin={this.state.isLoggedin} onAdd={this.onGetAddRequest} />
        <MainColumn val={this.state.radioSelect} data={this.state.data} isLoggedin={this.state.isLoggedin} onModify={this.onGetModifyRequest} onDelete={this.onGetDeleteRequest} />
      </div>
    );
  }
}






export default Manage;
