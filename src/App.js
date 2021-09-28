import "./App.css";
// import 'antd/dist/antd.css';
import { useState } from "react";
import { Input, Checkbox, Divider, Button, Form } from "antd";
import { MinusSquareOutlined } from "@ant-design/icons";

function App() {
  const tasks = [];
  const [inputtask, setInput] = useState("");
  const [taskArray, setTaskArray] = useState(tasks);

  const onFinish = (value) => {
    const arr = [...taskArray];
    arr.push(value.task);
    setTaskArray(arr);
    setInput("");
  };
  const onFinishFailed = (err) => {
    throw new Error(`Error in submitting the form ${err}`);
  };

  const deleteHandle = ({target}) => {
    console.log(target.clientTop);
    const arr=taskArray.filter((ele, index) => target.clientTop !== index);
    setTaskArray(arr)
  };

  return (
    <div className="body">
      <div className="todoList">
        <Form
          name="todo"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="task"
            rules={[
              {
                required: true,
                message: "Please input your task!",
              },
            ]}
          >
            <Input placeholder="Add task" value={inputtask} />
          </Form.Item>
        </Form>
        {taskArray.map((task, index) => (
          <div key={index}>
            <div className="taskRow">
              <Checkbox> {task} </Checkbox>
              <Button onClick={(e) => deleteHandle(e)}>
                <MinusSquareOutlined style={{ color: "#cb2b83" }} />
              </Button>
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
