import { Routes, Route } from 'react-router-dom';
//Components
import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import SignIn from './routes/authentication/authentication.component';

const Shop = () => {
  return(
    <div><h1>I am thes shopping page</h1></div>
  )
}
const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<SignIn />} />
    </Route>
    </Routes>
  );
};

export default App;
