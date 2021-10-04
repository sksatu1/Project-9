import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import useCourses from './hooks/useCourses';
import Home from './components/Home/Home'
import About from './components/About/About';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import LogInForm from './components/LogInForm/LogInForm';

function App() {
  const [courses] = useCourses();
  console.log("courses : ", courses);
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/login">
            <LogInForm></LogInForm>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
