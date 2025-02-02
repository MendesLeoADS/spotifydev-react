import './App.css';
import Footer from './Componentes/Footer/Footer';
import Header from './Componentes/Header/Header';
import Main from './Componentes/Main/Main';
import Sidebar from './Componentes/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;