import { Route, Switch } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/ => Component A
// our-domain.com/products => Component B
// our-domain.com/products-details/p1 
