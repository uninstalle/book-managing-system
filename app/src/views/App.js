import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home/Home';
import Login from './login/Login';
import Logout from './logout/Logout';
import Manage from './manage/Manage';
import Notfound from './Notfound';
import CheckAuthRequestSender from '../service/auth';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

class App extends React.Component {

    render() {
        return (
            <Layout className="layout">
                <Navigator />
                <BrowserRouter>
                    <Mainpage />
                </BrowserRouter>
            </Layout>
        );
    }
}

class Navigator extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isLoggedin: false };
    }

    UNSAFE_componentWillMount() {
        CheckAuthRequestSender.send({}).then((res) => {
            if (res.data.ret_code === 0) {
                this.setState({ isLoggedin: true });
            }
            else {
                this.setState({ isLoggedin: false });
            }
        }).catch(
            () => {
                this.setState({ isLoggedin: false });
            }
        );
    }

    render() {
        if (this.state.isLoggedin) {
            return ( // logged in
                <Header>
                    <div className="Navigator-block">Welcome, admin.</div>
                    <Menu theme="dark" mode="horizontal" >
                        <Menu.Item key="1"><a href="/logout">Logout</a></Menu.Item>
                        <Menu.Item key="2"><a href="/">Home</a></Menu.Item>
                        <Menu.Item key="3"><a href="/manage">Manage</a></Menu.Item>
                    </Menu>
                </Header>
            );
        }
        else {
            return (
                <Header>
                    <div className="Navigator-block">Welcome, guest.</div>
                    <Menu theme="dark" mode="horizontal" >
                        <Menu.Item key="1"><a href="/login">Login</a></Menu.Item>
                        <Menu.Item key="2"><a href="/">Home</a></Menu.Item>
                        <Menu.Item key="3"><a href="/manage">Manage</a></Menu.Item>
                    </Menu>
                </Header>
            );
        }
    }
}




class Mainpage extends React.Component {

    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/manage" exact component={Manage} />
                    <Route component={Notfound} />
                </Switch>
            </Content>
        );
    }
}

export default App;