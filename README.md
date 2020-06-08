# llegir api generalitat casos covid 19

interfície web per llegir la base de dades pública de casos covid 19 de la Generalitat de Catalunya

web generalitat:
https://analisi.transparenciacatalunya.cat/Salut/Registre-de-casos-de-COVID-19-realitzats-a-Catalun/xuwf-dxjd

api endpoint (url amb les dades que volem):
https://analisi.transparenciacatalunya.cat/resource/xuwf-dxjd.json

## Instruccions interfície web

obrir l'arxiu ```index.html``` amb un explorador web (Chrome, Firefox, Safari...)

## Instruccions script standalone.js

obrir un terminal i executar la següent comanda:

```
  node standalone.js
```

En cas de no tenir node instalat => https://nodejs.org

L'arxiu ```standalone.js``` es pot editar per canviar-ne els filtres. Per veure com
es filtren les dades fent servir la notació "SoQL" veure: => https://dev.socrata.com/docs/queries/

