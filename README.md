# Projektin nimi ja tekijät
Aapeli Nilasto - MenuManager

## Oma arvio työstä ja oman osaamisen kehittymisestä
Mielestäni onnistuin luomaan toimivan full-stack REST API:n, jossa CRUD-operaatiot (Create, Read, Update, Delete) toimivat MongoDB:n kanssa.  
Parantamista olisi front-endin lisäämisessä ja autentikoinnissa.  
Sovelluksesta jäi puuttumaan käyttäjien hallinta ja käyttöliittymä.  
Koen, että olen oppinut paljon MongoDB:n Node.js:n, Expressin, Mongoose:n ja ympäristömuuttujien käytöstä.  
Epäselväksi jäi uusien kirjastojen ja ympäristöjen syvempi tietämys, kaikki oli uutta minulle.

Antaisin itselleni pisteitä seuraavasti: 9/10

## Sisällysluettelo:

- [Tietoja sovelluksesta](#tietoja-sovelluksesta)
- [Tunnetut virheet/bugit](#tunnetut-virheetbugit)
- [Kuvakaappaukset](#kuvakaappaukset)
- [Teknologiat](#teknologiat)
- [Asennus](#asennus)
- [Lähestymistapa](#lähestymistapa)
- [Kiitokset](#kiitokset)
- [Lisenssi](#lisenssi)

## Tietoja sovelluksesta
MenuManager on REST API, jonka avulla voidaan hallita ravintolan menu-itemeitä.  
Sovellus mahdollistaa **CRUD-operaatiot** MongoDB-tietokannan kanssa ja toimii sekä paikallisesti että julkisesti Renderissä hostattuna.

## Tunnetut virheet/bugit
- Käyttäjäautentikointia ei ole toteutettu, joten kuka tahansa voi tehdä muutoksia tietokantaan.  
- Sovellus toimii vain JSON-pohjaisilla pyynnöillä, ei ole erillistä käyttöliittymää.

## Kuvakaappaukset
![API Testaus Postmanilla](https://unsplash.com/photos/VBPzRgd7gfc)

Kuva: [Kelly Sikkema](https://unsplash.com/@kellysikkema)

## Teknologiat
Käytin seuraavia teknologioita:  
- `Node.js` – palvelinpuolen koodaus  
- `Express` – reittien ja middleware-logiikan hallinta  
- `MongoDB + Mongoose` – tietokanta ja skeemojen hallinta  
- `dotenv` – ympäristömuuttujien hallinta (esim. portti ja tietokantayhteys)  
- `Postman` – API:n testaamiseen

## Asennus
- kloonaa repo:
- asenna puuttuvat kirjastot yms.
- Luo .env tiedosto projektin juureen:
- Käynnistä serveri

Serveri kuuntelee osoitteessa http://localhost:5000.

API toimii myös julkisesti Renderissä:
https://menumanager-cekq.onrender.com/


## Lähestymistapa
Halusin oppia lisää backendistä, ja kyselin ChatGPT:ltä hyviä ideoita alkuprojektiksi.
Projektin toteutus alkoi Node.js:ään ja MongoDB:hen tutustumisella.
Sitten kun olin oppinut tarpeeksi, niin lähdin tekemään REST API -reittien suunnittelua.
Seuraavaksi rakensin Mongoose-skeemat ja testasin paikallisesti Postmanilla.
Lopuksi tein deployn Renderiin ja testasin julkisen URL:n kautta.

## Kiitokset
Hyödynsin monia Youtube-kanavia kuin myös tekoälyä tässä itsenäisessä projektissani. Tässä mielestäni kaikki:
- [Fireship](https://www.youtube.com/@Fireship)
- [NetNinja](https://www.youtube.com/@NetNinja)
- [ChatGPT](https://chatgpt.com/)  

