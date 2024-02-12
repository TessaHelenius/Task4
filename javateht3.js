//Määritellään ensin henkilö-luokka ja konstruktorissa tiedot oliolle
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}
//Urheilija-luokka perii Henkilö-luokan, super-metodin avulla alempi luokka (aliluokka?) perii ylemmän luokan ominaisuudet
class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkkiKuvaan,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this.linkkiKuvaan = linkkiKuvaan;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  //Määritellään getterit ja setterit
  get linkkiKuvaan() {
    return this._linkkiKuvaan;
  }

  set linkkiKuvaan(value) {
    this._linkkiKuvaan = value;
  }

  get omapaino() {
    return this._omapaino;
  }

  set omapaino(value) {
    this._omapaino = value;
  }

  get laji() {
    return this._laji;
  }

  set laji(value) {
    this._laji = value;
  }

  get saavutukset() {
    return this._saavutukset;
  }

  set saavutukset(value) {
    this._saavutukset = value;
  }
}
//  Luodaan esimerkki olioita
const urheilija1 = new Urheilija(
  "Matti Antero",
  "Meikäläinen",
  "Matti",
  1980,
  "link_to_image.jpg",
  70,
  "Keihäänheitto",
  "SM-Kulta"
);
const urheilija2 = new Urheilija(
  "Marja Liisa",
  "Virtanen",
  "Liisa",
  1990,
  "link_to_image2.jpg",
  65,
  "Ampuma-hiihto",
  "Olympiakulta"
);

//Tulostetaan konsoliin ilmentymät
console.log(urheilija1);
console.log(urheilija2);
