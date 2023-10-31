import './App';
import Header from './components/Header/Header';
import SecondarySideBar from './components/SideBar/SecondarySideBar';
import SideBar from './components/SideBar/SideBar';
import Friends from './components/User/Friends/Friends';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <SecondarySideBar />
      <Friends />
    </>
  );
}
export default App;
