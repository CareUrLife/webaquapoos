import {match, RouterContext} from 'react-router';
import {Provider} from 'react-redux';
import React from 'react';
import reactDOMServer from 'react-dom/server';
import NotFoundPage from '../../Client/Redux/Components/NotFoundPage.js';
import routes from '../../Client/routes.js';
import store from '../../Client/Redux/Store/research.store.js';
module.exports = function(app) {
    app.get('*', (req, res) => {
        match({ routes, location : req.url}, (error, redirectLocation, renderProps) => {
            let markup;

            if(error) {
                res.status(500).send(error.message);
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {
                markup = reactDOMServer.renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps}/>
                    </Provider>
                ); 
            } else {
                markup = reactDOMServer.renderToString(React.createElement(NotFoundPage));
                res.status(404);
            }

            return res.render('index', {markup});
        }) 
    });
}
