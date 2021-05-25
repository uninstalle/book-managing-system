import { axios, ServerLoginURL } from '../config/settings';


class LoginRequestSender {

    static async send(param) {
        let r = await axios.post(ServerLoginURL, param);
        return r;
    }
};

export default LoginRequestSender;