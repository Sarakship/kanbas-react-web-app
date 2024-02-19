import ModuleList from "../Modules/List";
import Rightpane from "./Rightpane";

function Home() {
  return (
    <div className="d-flex flex-fill">
     
      <ModuleList />
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{width: '300px'}}>
        <Rightpane/>
      </div>
    </div>
  );
}
export default Home;