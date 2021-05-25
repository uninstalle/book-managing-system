import AuthRequestSender from '../service/auth';

class AuthChecker {

    static async check() {
        let r = await AuthRequestSender.send({});
        return r;
    }
};

export default AuthChecker;