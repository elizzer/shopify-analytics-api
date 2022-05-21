import TopBar from './topBar/TopBar';
import SideBar from './sideBar/SideBar';

function WorkSpace() {
  return (
    <div className="App">
      <div>
        <TopBar profile={'B'}/>
      </div>
      <div>
        <SideBar/>
      </div>
    </div>
  );
}

export default WorkSpace;