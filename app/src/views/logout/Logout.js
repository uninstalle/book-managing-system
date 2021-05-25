import React from 'react';
import './Logout.css';
import { Success, Failed } from '../dialog';
import LogoutRequestSender from '../../service/logout';

class Logout extends React.Component {

  componentDidMount() {
    LogoutRequestSender.send({}).then((res) => {
      if (res.data.ret_code === 0) {
        Success({ text: 'Logout succeeded.' });
        this.props.history.push('/');
      }
      else {
        console.log(res);
        Failed({ text: 'Logout failed.' });
      }
    }).catch(
      (res) => {
        console.log(res);
        Failed({ text: 'Sending logout request failed.' });
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
