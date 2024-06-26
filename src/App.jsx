import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import StepOneVerification from './components/StepOneVerification';
import StepTwoVerification from './components/StepTwoVerification';
import StepThreeVerification from './components/StepThreeVerification';
import HomesTwo from './pages/HomesTwo.jsx';
import HomesTwoThree from './pages/HomesTwoThree.jsx';
import Homes from './pages/Homes.jsx';
import Stepfour from './pages/Stepfour.jsx';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homes />}/>
      <Route element={<StepOneVerification />}>
        <Route path='/steptwo' element={<HomesTwo/>}/>
      </Route>
      <Route element={<StepTwoVerification />}>
        <Route path='/stepthree' element={<HomesTwoThree/>}/>
      </Route>
      <Route element={<StepThreeVerification />}>
        <Route path='/stepfour' element={<Stepfour />}/>
      </Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App
