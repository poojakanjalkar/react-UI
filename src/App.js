import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, Table, QRCode,Form, Input} from 'antd';
function App() {

  let data=["pooja","pavan","Priya","arya"]
  function test(){
    alert("button clicked")
  }
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>"its pooja kanjalkar"</p>
       {/* // {data.map(elm=>{
          return <p>{elm}</p>
        })} */} 
        <Form
        name="basic">
         <Form.Item
         label="username"
         name="username"
         rules={[{required:true, message:"Please input your username!"}]}>
          <Input />
         </Form.Item>
         <Form.Item
         label="password"
         name="password"
         rules={[{ required: true, message: 'Please input your password!' }]}
         >
          <Input.Password></Input.Password>
         </Form.Item>
        </Form>
        <QRCode value="https://ant.design/"></QRCode>
        <Button type="primary" onClick={()=>{test()}}>Press Me</Button>
        <Table dataSource={dataSource} columns={columns} />;
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
