/* 
404 status handling middleware 
Handles any requests that match no other routes 
Some controllers may also render the 404 page in 
instances where no record matches a url parameter
*/

module.exports = (req, res, next) => {
    res.render('404.pug');
    next();
}