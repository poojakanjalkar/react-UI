import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Button, Table, QRCode, Form, Input, DatePicker } from 'antd';
function App() {

  const [inputValue, setInputValue] = useState("ssssss")
  const [author,setAuthor]=useState("Enter authors")
  const [pages,setPages]=useState("")
  const [publishedDate,setDate]=useState("")

  let data = ["pooja", "pavan", "Priya", "arya"]
  function test() {
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
const handleInputChange=(e, tag)=>{
  switch (tag) {
    case "title":
      setInputValue(e.target.value)
      
      break;
      case "author":
        setAuthor(e.target.value)
        break;
        case "pages":
        setPages(e.target.value)
        break;
        case "date":
        setDate(e.target.value)
  
    default:
      break;
  }
  console.log("entered input is",e.target.value)
  setInputValue(e.target.value);
}
const handleSubmit=()=>{
  let data={
    title:inputValue,
    author:author,
    pages:pages,
    date:publishedDate
  }
  console.log("user has entered the following data",data)
}
const handleDateChange=(date,dateString) => {
  console.log("date",date,dateString)
  setDate(dateString);
};



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>"its pooja kanjalkar"</p>
        {/* // {data.map(elm=>{
          return <p>{elm}</p>
        })} */}
        <Form
          name="book">
          <Form.Item
            label="title"
            name="title"
          >
            <Input value={inputValue} onChange={(e)=>{handleInputChange(e, "title")}}/>
          </Form.Item>
          <Form.Item
            label="author"
            name="author"
          >
          <Input value={author} onChange={(e)=>{handleInputChange(e, "author")}}/>
          </Form.Item>
          <Form.Item
            label="pages"
            name="pages"

          >
             <Input value={pages} onChange={(e)=>{handleInputChange(e, "pages")}}/>
          </Form.Item>
      <Form.Item
          label="publishedDate"
          name="publishedDate"

        >
          
         <DatePicker onChange={handleDateChange} />
        </Form.Item>
      <Button type="primary" htmlType='submit' onClick={()=>{handleSubmit()}}>
        Submit
      </Button>

        </Form >
        <Table dataSource={dataSource} columns={columns} />;

      </header >
    </div >
  );
}

export default App;
