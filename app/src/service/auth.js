import { axios, ServerCheckAuthURL } from '../config/settings';


class AuthRequestSender {

    static async send(param) {
        let r = await axios.get(ServerCheckAuthURL, param);
        return r;
    }
};

export default AuthRequestSender;