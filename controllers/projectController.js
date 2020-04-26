/* Projects Controller */

module.exports = (req, res) => {
    const args = new Object();
    const id = req.params.id;
    const project = res.locals.projects.find(project => project.id == id);
    const index = res.locals.projects.indexOf(project);
    args.projectIndex = index;
    res.render('project.pug', args);
}