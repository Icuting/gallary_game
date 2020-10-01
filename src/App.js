import React from 'react';
import{ BrowserRouter, Switch, Route} from 'react-router-dom'
import routes from "./routes";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  const renderLayout = ({children, ...props}) =>{
    return(
      <DefaultLayout {...props}>
        {children}
      </DefaultLayout>
      )
  }
  return (
    <div className="App">
      <BrowserRouter>
         <Switch>
           {routes.map((route, index) => {
             console.log(route.component)
             return (
               <Route
                 key={index}
                 path={route.path}
                 exact={route.exact}
                 component={(props) => {
                   return (
                     <route.layout {...props}>
                       <route.component {...props} />
                     </route.layout>
                   );
                 }}
               />
             );
           })}
         </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
