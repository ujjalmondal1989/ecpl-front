
  import React from 'react';
import { Card, Col, Row } from 'antd';
import { Button, Upload, Form, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const UploadPlayers = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Success:', values);
        const data = new FormData();        
        values.photos.map((ph) => data.append('photos',ph.originFileObj));
        data.append('name', values.name);
        data.append('age', values.age);
        data.append('height', values.height);
        data.append('weight', values.weight);
        data.append('position', values.position);
        data.append('achievements', values.achievements);
        data.append('address', values.address);
        try{
            axios.post('http://localhost:3001/api/addPlayer',data, {
            headers: {
                'Content-Type': 'multipart-formdata'
            }
        }).then(res =>{
            window.alert('player added successfully');
            form.resetFields();
        })
        }
        catch(err){
            window.alert('server error');
        }        
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
       
      const onReset = () => {
        form.resetFields();
      };
      const normFile = (e) => {
        console.log('Upload event:', e);
        if (e.fileList) {
          return e?.fileList;
        }
        return e?.file;
      };

      const dummyRequest = (a1,a2) =>{
        return true;
      }
    return (
      <Card title="Card title" bordered={false}>
        <Form
         form={form}
          name="basic"        
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={24}>
          <Col span={8}>
          <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input player name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: 'Please input player age!',
            },
          ]}
        >
          <Input />
        </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item
          label="Height"
          name="height"
          rules={[
            {
              required: true,
              message: 'Please input player height!',
            },
          ]}
        >
          <Input />
        </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item
          label="Weight"
          name="weight"
          rules={[
            {
              required: true,
              message: 'Please input player weight!',
            },
          ]}
        >
          <Input />
        </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item
          label="Position"
          name="position"
          rules={[
            {
              required: true,
              message: 'Please input plyer position!',
            },
          ]}
        >
          <Input />
        </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item
          label="Achievements"
          name="achievements"
          rules={[
            {
              required: true,
              message: 'Please input player achievements!',
            },
          ]}
        >
          <Input />
        </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input player address!',
            },
          ]}
        >
          <Input />
        </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item
            name="photos"
            label="Photos"
            valuePropName="photos"
            getValueFromEvent={normFile}
            rules={[
                {
                required: true,
                message: 'Please select player photos!',
                },
            ]}
            >
        <Upload name="photos" customRequest={dummyRequest}  listType="picture" multiple={true}>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
        </Form.Item>
    </Col>
          </Row>
        


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      <Button htmlType="button"  style={{ margin: '0 8px' }} onClick={onReset}>
          Reset
        </Button>
    </Form.Item>
  </Form>
      </Card>
    )
  };
  
  export default UploadPlayers;