/* About Controller */

module.exports = (req, res) => {
    const args = new Object();
    const data = require('../data.json');
    skills = data.skills;
    args.skills = skills;
    res.render('about.pug', args);
    res.end()
}