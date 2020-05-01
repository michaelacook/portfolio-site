/* 
404 status handling middleware 
Handles any requests that match no other routes 
Some controllers may also render the 404 page in 
instances where no record matches a url parameter

NOTE: The message logged to the console appears twice probably 
because the site makes a second request for the favicon, according to my research. 
*/

module.exports = (req, res, next) => {
    console.error("Oops! Whatever you're looking for, it doesn't exist.");
    res.render('404.pug');
    next();
}