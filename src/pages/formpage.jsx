import React from "react";

import { Button, Form, Input } from "antd";

function FormPage() {
  const onFinish = (values) => {
    fetch(process.env.REACT_APP_API_URL + `/insert`, {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        population: parseInt(values.population),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //debug
        console.log(data);
      })

      .catch((error) => {
        console.error("Error:", error);
      });
    //End Submit
  };

  return (
    <div>
      <h3>The Form Page</h3>
      <p>From Information Below</p>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name of City:"
          name="name"
          rules={[
            {
              required: false,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Population"
          name="population"
          rules={[
            { required: true, message: "Please provide city population" },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit Form
        </Button>
      </Form>
    </div>
  );
}

export default FormPage;
