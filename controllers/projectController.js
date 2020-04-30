/* Projects Controller */

module.exports = (req, res, next) => {
    throw new Error("This is an error");
    const args = new Object();
    const id = req.params.id;
    const project = res.locals.projects.find(project => project.id == id);
    if (!project) return res.status(404).render('404.pug');
    const index = res.locals.projects.indexOf(project);
    args.projectIndex = index;
    res.render('project.pug', args);
}