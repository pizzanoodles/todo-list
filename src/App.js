import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <nav>
          <ul className='nav-bar-list'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/done'}>Done List</NavLink></li>
            <li><NavLink to={'/help'}>Help</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="todoListApp">
        <Outlet>

        </Outlet>
      </div>
    </div>
  );
}

export default App;
