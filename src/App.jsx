import Header from './Components/Header/Header'
import Main from './Pages/Main/Main'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login/Login'
import { Routes, Route, BrowserRouter,Outlet } from 'react-router-dom';
import Movie from './Pages/Movie/Movie';
import Series from './Pages/Series/Series';
import { AuthProvider } from './Components/UserLogin/UserLogin';

const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
function App() {
  const options = { loop: true };
  return (
    <>
    <AuthProvider>
     <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/movie" element={<Movie/>}/>
          <Route path="/series" element={<Series/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
