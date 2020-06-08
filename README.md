# llegir api generalitat casos covid 19

Aquest repositori inclou:
  - script ```standalone.js```
  - interfície web ```index.html```

Els dos llegeixen la base de dades pública de casos covid 19 de la Generalitat
de Catalunya.

web generalitat:
https://analisi.transparenciacatalunya.cat/Salut/Registre-de-casos-de-COVID-19-realitzats-a-Catalun/xuwf-dxjd

api endpoint (és a dir, url que proporciona les dades):
https://analisi.transparenciacatalunya.cat/resource/xuwf-dxjd.json

## Instruccions script standalone.js

obrir un terminal i executar la següent comanda:

```
  node standalone.js
```

En cas de no tenir node instalat: https://nodejs.org

L'arxiu ```standalone.js``` es pot editar per canviar-ne els filtres. Per veure
com es filtren les dades fent servir la notació "SoQL" veure:
https://dev.socrata.com/docs/queries/

## Instruccions interfície web

obrir l'arxiu ```index.html``` amb un explorador web (Chrome, Firefox, Safari...)
