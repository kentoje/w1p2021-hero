class Personnage {
  constructor() {
    this.nom = "";
    this.citation = ""
    this.classe = ""
  }
  set(personnage) {
    this.nom = personnage.nom;
    this.citation = personnage.citation;
    this.classe = personnage.classe;
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
}

module.exports = new Personnage();