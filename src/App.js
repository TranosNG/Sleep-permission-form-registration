import PermissionForm from './component/PermissionForm';
import logo from './images/tranos_logo.png'

function App() {
  return (
    <div className="App">
      <>
      <div className='logo_div'>
        <img src={logo} alt="logo" />
        </div>
      <PermissionForm/>
      </>
    </div>
  );
}

export default App;
