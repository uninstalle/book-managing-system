import 'antd/dist/antd.css';
import { Modal } from 'antd';

function Info(props) {
    Modal.info({
        content: props.text
    });
};

function Success(props) {
    Modal.success({
        content: props.text
    });
};

function Failed(props) {
    Modal.error({
        content: props.text
    });
};

export { Info, Success, Failed };