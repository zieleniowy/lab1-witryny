# Laboratorium nr 1 - projektowanie serwisów www

## Proces instalacji i edycji

Pobierz przykład [lub sklonuj repozytorium](https://github.com/zieleniowy/lab1-witryny):
Aby uruchomić w trybie developerskim, należy otworzyć folder w terminalu i zainstalować komponenty. Wymagane jest zainstalowanie środowiska NodeJS i dodanie go (wraz z Node Packet Manager'em - NPM) do ścieżki.

```
npm install
npm run dev
```
Skompilowana aplikacja znajduje się w folderze out. Składa się ona wyłącznie z plików statycznych, zatem jest "out-of-box" dostępna w trybie serverless -> np.: w amazon S3 bucket - wystarczy przekopiować folder out do bucketa. Alternatywnie można ją skompilować do trybu lambda (każda podstrona działa jako osobna lambda). Należy stworzyć plik **next.config.js** i skopiować do niego poniższą zawartość. 

```
module.exports = {
  target: 'serverless'
}
```
## pokaz
[Demo](https://lab1-witryny.vercel.app)

Strona Główna - po lewej widać moją osobę, a po prawej karty z wykorzystanymi technologiami.
![Strona Główna](/public/img/glowna.png)

Strona z listem, mam nadzieję, że nikt nie skopiował takiego samego listu.
![Strona z listem](/public/img/list.png)

Strona z podrecznika - tabela stworzona przy pomocy biblioteki [Chart.js](https://chartjs.org):
![strona z podręcznika](/public/img/podrecznik.png)

Najprostszy formularz w internecie
![GitHub Logo](/public/img/formularz.png)
