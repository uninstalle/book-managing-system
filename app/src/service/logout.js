import { axios, ServerLogoutURL } from '../config/settings';


class LogoutRequestSender {

    static async send(param) {
        let r = await axios.get(ServerLogoutURL, param);
        return r;
    }
};

export default LogoutRequestSender;