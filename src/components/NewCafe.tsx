import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Form, Input, Button, Checkbox, Upload } from "antd";

function NewCafe() {
  return (
    <div>

      <Form>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              min: 5,
              max: 10,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="Description"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              max: 256,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="location"
          name="location"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewCafe;
