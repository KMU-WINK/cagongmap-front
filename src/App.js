import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SplashPage } from "./page/SplashPage";
import { MainPage } from "./page/MainPage";
import { DetailPage } from "./page/DetailPage";

const App = () => {

  return <>
      <Router>
          <Route exact path={'/'} component={SplashPage}/>
          <Route path={'/main'} component={MainPage}/>
          <Route path={'/detail'} component={DetailPage}/>
      </Router>
  </>
}

export default App;
