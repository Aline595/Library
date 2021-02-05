import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Search from './Pages/Search';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Search}/>
        </BrowserRouter>
    );
}

export default Routes;