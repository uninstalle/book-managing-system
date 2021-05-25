import React from 'react';
import 'antd/dist/antd.css';
import { Radio } from 'antd';


class RadioGroup extends React.Component {
    render(props) {
        if (this.props.isLoggedin)
            return (
                <Radio.Group onChange={this.props.select}>
                    <Radio value={1}>Book</Radio>
                    <Radio value={2}>Library card</Radio>
                    <Radio value={3}>Record</Radio>
                    <Radio value={4}>User</Radio>
                </Radio.Group>
            );
        else
            return (
                <Radio.Group onChange={this.props.select}>
                    <Radio value={1}>Book</Radio>
                    <Radio value={2} disabled={true}>Library card</Radio>
                    <Radio value={3} disabled={true}>Record</Radio>
                    <Radio value={4} disabled={true}>User</Radio>
                </Radio.Group>
            );
    }
}

export default RadioGroup;