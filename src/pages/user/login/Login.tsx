import { Button, Form, Input, Space } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const Login = () => {
  return (
    <div className="relative header">
      <div className="lex flex-col items-center justify-center w-screen py-10 min-h-[80vh]">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="text-4xl text-center text-white">A Admin</div>
          </div>
          <div className="p-4 transition-all border shadow rounded-xl hover:shadow-2xl w-80 bg-white/80">
            <Form
              name="login"
              labelCol={{ span: 5 }}
              size="large"
              initialValues={{
                email: '316783812@qq.com',
                passwd: '316783812'
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter the Email' },
                  { type: 'email', message: 'Please enter the correct Email' }
                ]}
              >
                <Input placeholder="Username" prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item
                name="passwd"
                rules={[
                  { required: true, message: 'Please enter the password' },
                  {
                    min: 6,
                    message: 'The password must be at least 6 characters'
                  }
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  prefix={<LockOutlined />}
                />
              </Form.Item>
              <Form.Item
                name="captcha"
                rules={[
                  { required: true, message: 'Please enter the captcha' }
                ]}
              >
                <Space>
                  <Input placeholder="Captcha" />
                  <img alt="captcha" />
                </Space>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
