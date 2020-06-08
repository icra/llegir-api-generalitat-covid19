const https=require('https');

function consulta(filtre){
  filtre = filtre || "";

  let api='https://analisi.transparenciacatalunya.cat/resource/xuwf-dxjd.json';
  let api_amb_filtre = api + filtre;
  console.log(`consultant ${api_amb_filtre}\n`);

  https.get(api_amb_filtre, resp=>{
    let data='';

    //a chunk of data has been recieved.
    resp.on('data',chunk=>{
      data+=chunk;
    });

    //the whole response has been received.
    resp.on('end', function(){
      let parsed = JSON.parse(data);
      if(parsed.length){
        console.log("Resultats: "+parsed.length);
      }
      console.log(parsed);
    });
  }).on("error", err=>{
    console.log("Error: " + err.message);
    throw err.message;
  });
}

/*
  com filtrar:
    1. agrupar per dies
    2. agregar per àrea bàsica de salut (abs)
    3. sumar els casos
    4. excloure "sospitosos"
*/

/*
  ABSid  EDAR_ON_ABOCA  NOM_ABS
  016    Besos          Barcelona1A
  017    Besos          Barcelona1B
  028    Besos          Barcelona2H
  030    Besos          Barcelona2J
  029    Besos          Barcelona2I
  031    Besos          Barcelona2K
  027    Besos          Barcelona2G
  024    Besos          Barcelona2D
  025    Besos          Barcelona2E
  023    Besos          Barcelona2C
  022    Besos          Barcelona2B
  044    Besos          Barcelona5C
  043    Besos          Barcelona5B
  045    Besos          Barcelona5D
  046    Besos          Barcelona5E
  042    Besos          Barcelona5A
  049    Besos          Barcelona6C
  050    Besos          Barcelona6D
  053    Besos          Barcelona7C
  358    Besos          Barcelona6E
  048    Besos          Barcelona6B
  047    Besos          Barcelona6A
  052    Besos          Barcelona7B
  051    Besos          Barcelona7A
  326    Besos          Barcelona7G
  054    Besos          Barcelona7D
  055    Besos          Barcelona7E
  056    Besos          Barcelona7F
  057    Besos          Barcelona8A
  385    Besos          Barcelona8J
  058    Besos          Barcelona8B
  060    Besos          Barcelona8D
  059    Besos          Barcelona8C
  062    Besos          Barcelona8F
  064    Besos          Barcelona8H
  063    Besos          Barcelona8G
  061    Besos          Barcelona8E
  327    Besos          Barcelona8I
  070    Besos          Barcelona9F
  069    Besos          Barcelona9E
  395    Besos          Barcelona9H
  065    Besos          Barcelona9A
  396    Besos          Barcelona9I
  067    Besos          Barcelona9C
  076    Besos          Barcelona10F
  075    Besos          Barcelona10E
  077    Besos          Barcelona10G
  071    Besos          Barcelona10A
  072    Besos          Barcelona10B
  073    Besos          Barcelona10C
  074    Besos          Barcelona10D
  331    Besos          Barcelona10J
  078    Besos          Barcelona10H
  079    Besos          Barcelona10I
  222    Besos          Santa_Coloma_de_Gramanet_1
  223    Besos          Santa_Coloma_de_Gramanet_2
  224    Besos          Santa_Coloma_de_Gramanet_3
  225    Besos          Santa_Coloma_de_Gramanet_4
  226    Besos          Santa_Coloma_de_Gramanet_5
  272    Besos          Badalona1
  273    Besos          Badalona2
  274    Besos          Badalona3
  275    Besos          Badalona4
  276    Besos          Badalona5
  277    Besos          Badalona6
  279    Besos          Badalona8
  280    Besos          Badalona9
  281    Besos          Badalona10
  282    Besos          Badalona11
  283    Besos          Badalona12
  311    Besos          Sant_Adria_de_Besos1
  312    Besos          Sant_Adria_de_Besos2
  319    Besos          Montgat
  341    Besos          Badalona7A
  342    Besos          Badalona7B
  366    Besos          Santa_Coloma_de_Gramenet_6
  124    Girona         Girona1
  125    Girona         Girona2
  126    Girona         Girona3
  127    Girona         Girona4
  199    Girona         Salt
  231    Girona         Sarria_de_Ter
*/

consulta(`?$select=data,sum(numcasos)
  &$group=data
  &$where=resultatcoviddescripcio not like 'Sospit' AND (
    abscodi = '016' OR
    abscodi = '017' OR
    abscodi = '028' OR
    abscodi = '030' OR
    abscodi = '029' OR
    abscodi = '031' OR
    abscodi = '027' OR
    abscodi = '024' OR
    abscodi = '025' OR
    abscodi = '023' OR
    abscodi = '022' OR
    abscodi = '044' OR
    abscodi = '043' OR
    abscodi = '045' OR
    abscodi = '046' OR
    abscodi = '042' OR
    abscodi = '049' OR
    abscodi = '050' OR
    abscodi = '053' OR
    abscodi = '358' OR
    abscodi = '048' OR
    abscodi = '047' OR
    abscodi = '052' OR
    abscodi = '051' OR
    abscodi = '326' OR
    abscodi = '054' OR
    abscodi = '055' OR
    abscodi = '056' OR
    abscodi = '057' OR
    abscodi = '385' OR
    abscodi = '058' OR
    abscodi = '060' OR
    abscodi = '059' OR
    abscodi = '062' OR
    abscodi = '064' OR
    abscodi = '063' OR
    abscodi = '061' OR
    abscodi = '327' OR
    abscodi = '070' OR
    abscodi = '069' OR
    abscodi = '395' OR
    abscodi = '065' OR
    abscodi = '396' OR
    abscodi = '067' OR
    abscodi = '076' OR
    abscodi = '075' OR
    abscodi = '077' OR
    abscodi = '071' OR
    abscodi = '072' OR
    abscodi = '073' OR
    abscodi = '074' OR
    abscodi = '331' OR
    abscodi = '078' OR
    abscodi = '079' OR
    abscodi = '222' OR
    abscodi = '223' OR
    abscodi = '224' OR
    abscodi = '225' OR
    abscodi = '226' OR
    abscodi = '272' OR
    abscodi = '273' OR
    abscodi = '274' OR
    abscodi = '275' OR
    abscodi = '276' OR
    abscodi = '277' OR
    abscodi = '279' OR
    abscodi = '280' OR
    abscodi = '281' OR
    abscodi = '282' OR
    abscodi = '283' OR
    abscodi = '311' OR
    abscodi = '312' OR
    abscodi = '319' OR
    abscodi = '341' OR
    abscodi = '342' OR
    abscodi = '366' OR
    abscodi = '124' OR
    abscodi = '125' OR
    abscodi = '126' OR
    abscodi = '127' OR
    abscodi = '199' OR
    abscodi = '231'
  )
  &$order=data DESC
`);
