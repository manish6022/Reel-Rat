import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="mb-20">
        <Header />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:imdbID" component={MovieDetails} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
