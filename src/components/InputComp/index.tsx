import React, { FC, useEffect, useState } from 'react';
import { Input, Form } from 'antd';

interface IProps {
  onChange: (value: string) => void;
  value: string;
  one?: string;
}

const formatValue = (value: string) => {
  return typeof value === 'string' ? value.toLowerCase() : '';
};

const InputComp: FC<IProps> = props => {
  // const [form] = Form.useForm();
  // const [v, setV] = useState('');
  const { onChange, value, one } = props;
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  // useEffect(() => {
  //   // setV('initialValue');
  //   // form.setFieldsValue({initialValue: 'initialValue'})
  // }, []);
  // console.log(value);
  console.log(one);
  return (
    // <Form form={form}>
    <div style={{ padding: 15 }}>
      <Input onChange={handleChangeValue} value={value} />
      <div>{value}</div>
      <div>转换小写字母：{formatValue(value)}</div>
      {/* <Form.Item label="初始值" name="initialValue" initialValue={value}>
          <Input />
        </Form.Item> */}
      <Input defaultValue={one} />
      {/* {one !== '-' && <Input defaultValue={one} />} */}
      {/* <Input onChange={() => {}} value={one} /> */}
    </div>
    // </Form>
  );
};
export default InputComp;
