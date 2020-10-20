# Laboratorium nr 1 - projektowanie serwisów www

## Proces instalacji

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

![GitHub Logo](/public/img/glowna.png)
