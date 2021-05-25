import React from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import { Form, Input, Button } from 'antd';
import { Success, Failed } from '../dialog';
import LoginRequestSender from '../../service/login';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.onFinish = this.onFinish.bind(this);
  }

  onFinish(values) {
    LoginRequestSender.send(values).then((res) => {
      if (res.data.ret_code === 0) {
        Success({ text: "Login succeeded." });
        this.props.history.push('/');
      }
      else {
        console.log(res);
        Failed({ text: "Login failed." });
      }
    }).catch(
      (res) => {
        console.log(res);
        Failed({ text: "Sending login request failed." });
      }
    );
  }

  onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  }

  render() {
    return (
      <div className="Login">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
        </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
