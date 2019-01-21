const blog = {
    title: 'Here is how to show data with handlebars!',
    body: 'Using handlebars, data does not have to be hard coded into your template.'
}

module.exports = (app) => {
    app.get('/blog', (req, res) => {
        return res.render('blog', blog);
    })
}