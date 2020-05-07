/* Make project data globally available */

module.exports = () => {
    return function(req, res, next) {
        const projects = require('../data.json');
        res.locals.projects = projects.projects;
        next();
    }
}