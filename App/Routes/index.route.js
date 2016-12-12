var match = require('react-router').match;
var RouterContext = require('react-router').RouterContext;
var Provider = require('react-redux').Provider;
var React = require('react');
var reactDOMServer = require('react-dom/server');
var NotFoundPage = require('../../Client/Redux/Components/NotFoundPage.js');
var routes = require('../../Client/routes.js');
var store = require('../../Client/Redux/Store/research.store.js');
var researchController = require('../Controllers/research.controller.js');
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

    app.use('/research', researchController);
}
