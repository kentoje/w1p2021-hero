class Personnage {
  constructor() {
    this.nom = "";
    this.citation = ""
    this.classe = ""
    this.win = ""
    this.lose = ""
  }
  set(personnage) {
    this.nom = personnage.nom;
    this.citation = personnage.citation;
    this.classe = personnage.classe;
    this.win = personnage.win;
    this.lose = personnage.lose;
  }
  getNom() {
    return this.nom;
  }
  getCitation() {
    return this.citation;
  }
  getClasse() {
    return this.classe;
  }
  getWin() {
    return this.win;
  }
  getLose() {
    return this.lose;
  }
}

module.exports = new Personnage();