import React from 'react';
import './Logout.css';
import LogoutRequestSender from '../../service/logout';

class Logout extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    LogoutRequestSender.send({}).then((res) => {
      if (res.data.ret_code === 0) {
        alert("Logout succeeded.");
        this.props.history.push('/');
      }
      else {
        console.log(res);
        alert("Logout failed.");
      }
    }).catch(
      (res) => {
        console.log(res);
        alert("Sending logout request failed.")
      }
    );
  }


  render() {
    return (
      <div className="Logout">
        <p>
          Logging out...
        </p>
      </div>
    );
  }
}

export default Logout;
