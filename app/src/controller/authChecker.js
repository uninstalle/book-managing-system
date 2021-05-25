import AuthRequestSender from '../service/auth';

class AuthChecker {

    static async check() {
        let r = await AuthRequestSender.send({});
        if (r && r.data.ret_code === 0)
            return true;
        else return false;
    }
};

export default AuthChecker;