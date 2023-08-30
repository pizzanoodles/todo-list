import { Outlet, useNavigate } from 'react-router-dom';
import { HomeOutlined, FileDoneOutlined, QuestionOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import "./css/navbar/navbar.css";
import { useState } from 'react';
const App = () => {
  const navBarItems = [
    {
      label: "Home",
      key: "",
      icon: <HomeOutlined />
    },
    {
      label: "Done Items",
      key: "done",
      icon: <FileDoneOutlined />
    },
    {
      label: "Help",
      key: "help",
      icon: <QuestionOutlined />
    }
  ]
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  const onClick = (navBarItem) => {
    navigate(`/${navBarItem.key}`);
    setCurrent(navBarItem.key);
  }
  return (
    <div className="app-whole">
      <Menu className="nav-bar" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={navBarItems} theme='dark' />
      <Outlet />
    </div>
  );
}

export default App;
