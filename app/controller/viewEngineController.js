class viewEngineController {
  static renderWelcomePage(req, res) {
    res.render('index', { title: 'SISTEM PENJADWALAN RUANGAN API' });
  }

  static renderNotFoundPage(req, res) {
    res.render('notFound', { title: 'SISTEM PENJADWALAN RUANGAN API' });
  }
}

module.exports = viewEngineController;
