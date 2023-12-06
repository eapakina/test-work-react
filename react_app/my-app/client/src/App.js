import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import TaskOnePage from './components/pages/TaskOnePage';
import TaskTwoPage from './components/pages/TaskTwoPage';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { useEffect } from 'react';
import { getServicesThunk } from './redux/slices/serviceThunks';
import ServicePage from './components/pages/ServicePage';


function App() {

  const services = useAppSelector((store) => store.service);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getServicesThunk());
  }, []);
  console.log(services);

  return (
<Routes>
<Route path="/" element={<MainPage />} />
<Route path="/task1" element={<TaskOnePage />} />
<Route path="/task2" element={<TaskTwoPage />} />
<Route path="/services/:id" element={<ServicePage />} />


</Routes>
    );
}

export default App;
