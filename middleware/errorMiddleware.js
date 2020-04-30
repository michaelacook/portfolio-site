/* Handle errors */

module.exports = (err, req, res, next) => {
    res.locals.stack = err.stack;
    res.render('error.pug', {
        message: err.message,
        stack: err.stack,
        status: err.status
    });
    next();
}