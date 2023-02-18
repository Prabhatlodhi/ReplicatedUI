import logo from './logo.svg';
import './App.css';
import { SideBar } from './components/SideBar';
import { MidSection } from './components/MidSection';
import { RightSection } from './components/RightSection';

function App() {
  return (
    <div className='flex'>
      <SideBar/>
      <MidSection/>
      <RightSection/>
    </div>
  );
}

export default App;
