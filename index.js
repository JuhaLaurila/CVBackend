const express = require('express')
const app = express()

app.use(express.json())

const cors = require('cors')

app.use(cors())

app.use(express.static('dist'))

let osaamiset = [
  {
    id: "1",
    nimi: "Markkinointiviestintä",
    sisalto: "Esitteet, kuvastot, pakkaukset, messut ym. painettu materiaali",
    important: true
  },
  {
    id: "2",
    nimi: "",
    sisalto: "Kuvankäsittely, valo- ja videokuvaus",
    important: true
  },
   { id: "3",
      nimi: "",
      sisalto: "Sähköinen viestintä (netti, some, sisäinen viestintä)",
      important: true
    },
    {
      id: "4",
      nimi: "3D ja visualisointi",
      sisalto: "3dsMAX",
      important: true
      },
    {
      id: "5",
      nimi: "",
      sisalto: "Solidworks",
      important: true
      },
    {
      id: "6",
      nimi: "Käden taidot",
      sisalto: "Muotoilu ja tuotesuunnittelu",
      important: true
      },
    {
      id: "7",
      nimi: "",
      sisalto: "Rakentaminen ja remontointi",
      important: true
      },
    {
      id: "8",
      nimi: "",
      sisalto: "Tekniset työt, korjaukset",
      important: true
      },
    {
      id: "9",
      nimi: "",
      sisalto: "Taiteet",
      important: true
      }
      ,
    {
      id: "10",
      nimi: "Tietotekniikka",
      sisalto: "Ohjelmointi (C/C++, C#, Javascript, Python, Java), netti/sulautetut/mobiili",
      important: true
      },
    {
      id: "11",
      nimi: "",
      sisalto: "Älykkäät järjestelmät, suunnittelu ja prototyypit",
      important: true
      },

      
    {
      id: "12",
      nimi: "",
      sisalto: "Tekoäly",
      important: true
      },
    {
      id: "13",
      nimi: "Valo- ja videokuvaus",
      sisalto: "Tuotekuvaus, muotokuvaus, dokumentointikuvaus",
      important: true
      }
]


let tyot = [
  {
      id: "14",
      nimi: "Ideasampo Oy 1995-2003",
      sisalto: "AD-assistentti",
      important: true
    },
    {
      id: "15",
      nimi: "",
      sisalto: "Graafinen suunnittelu, taitto ja kuvankäsittely",
      important: true
    },
    {
      id: "16",
      nimi: "",
      sisalto: "Nettisivujen suunnittelu ja toteutus",
      important: true
    },
      {
      id: "17",
      nimi: "Ouman Oy 2003-2008",
      sisalto: "Markkinointiviestintä",
      important: true
    },
    
      {
      id: "18",
      nimi: "",
      sisalto: "Graafinen suunnittelu",
      important: true
    },
    
      {
      id: "19",
      nimi: "",
      sisalto: "Tuote- ja UI-suunnittelu",
      important: true
    },
    {
      id: "20",
      nimi: "Suomen Kiintokaluste Oy 2008-2014",
      sisalto: "Markkinointiviestintä",
      important: true
    },
   
    {
      id: "21",
      nimi: "",
      sisalto: "Myynnin tuki",
      important: true
    },
    {
      id: "22",
      nimi: "",
      sisalto: "Asiakaspalvelu",
      important: true
    },
    {
      id: "23",
      nimi: "Jukkatalo Oy 2016-2020",
      sisalto: "Tuoteasiantuntija",
      important: true
    },
    {
      id: "24",
      nimi: "",
      sisalto: "Markkinointiviestintä",
      important: true
    }
    ,
    {
      id: "25",
      nimi: "",
      sisalto: "Tarjouslaskenta",
      important: true
    },
    {
      id: "26",
      nimi: "",
      sisalto: "Asiakasvastaava",
      important: true
    },
    {
      id: "27",
      nimi: "Omatalo Oy 2022-",
      sisalto: "Markkinointipäällikkö",
      important: true
    },

    ,
    {
      id: "271",
      nimi: "",
      sisalto: "Markkinointi, printti ja sähköiset mediat",
      important: true
    },

    {
      id: "28",
      nimi: "",
      sisalto: "Myynnin tuki",
      important: true
    }
    ,
    {
      id: "29",
      nimi: "",
      sisalto: "Tarjouslaskenta",
      important: true
    },
    {
      id: "29",
      nimi: "",
      sisalto: "Kehitysprojektit",
      important: true
    }
]

let opinnot = [
  {
      id: "30",
      nimi: "Ylioppilas 1989",
      sisalto: "Pateniemen lukio",
      important: true
    },
    {
      id: "31",
      nimi: "Artenomi, muotoilu 1994",
      sisalto: "Rovaniemen taide- ja käsiteollisuusoppilaitos",
      important: true
    },
    {
      id: "32",
      nimi: "Graafinen suunnittelija 1996",
      sisalto: "Ideasampo Oy",
      important: true
    },
    {
       id: "33",
      nimi: "Insinööri, tieto- ja viestintätekniikka 2026",
      sisalto: "Kajaanin ammattikorkeakoulu",
      important: true
    }
    ,
    {
       id: "34",
      nimi: "Atk-jatkokurssi 1995",
      sisalto: "Rovaniemen taide- ja käsiteollisuusoppilaitos",
      important: true
    }
     ,
    {
       id: "35",
      nimi: "Solidworks- ja Autocad-kurssi 2014",
      sisalto: "Teuvan aikuiskoulutuskeeskus",
      important: true
    },
    {
       id: "36",
      nimi: "Venäjää aakkosista asiakaspalveluun 2014",
      sisalto: "Kaukametsän opisto",
      important: true
    }
    ,
    {
       id: "37",
      nimi: "3dsMAX-kurssi 2018",
      sisalto: "Arksystems Oy",
      important: true
    }
]



app.get('/api/osaamiset/:id', (request, response) => {
  const id = request.params.id
    const osaaminen= osaamiset.find(osaaminen=> osaaminen.id === id)

    if (osaaminen) {
    response.json(osaaminen)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/osaamiset/:id', (request, response) => {
  const id = request.params.id
  osaamiset = osaamiset.filter(osaaminen => osaaminen.id !== id)

  response.status(204).end()
})

app.post('/api/osaamiset', (request, response) => {

      if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  const osaaminen= request.body
  console.log(osaaminen)
  response.json(osaaminen)
})


app.get('/api/tyot/:id', (request, response) => {
  const id = request.params.id
    const tyo= tyot.find(tyo=> tyo.id === id)

    if (tyo) {
    response.json(tyo)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/tyot/:id', (request, response) => {
  const id = request.params.id
  tyot = tyot.filter(tyo => tyo.id !== id)

  response.status(204).end()
})

app.post('/api/tyot', (request, response) => {

      if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  const tyo= request.body
  console.log(tyo)
  response.json(tyo)
})

app.get('/api/opinnot/:id', (request, response) => {
  const id = request.params.id
    const opinto= opinnot.find(opinto=> opinto.id === id)

    if (opinto) {
    response.json(opinto)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/opinnot/:id', (request, response) => {
  const id = request.params.id
  opinnot = opinnot.filter(opinto => opinto.id !== id)

  response.status(204).end()
})

app.post('/api/opinnot', (request, response) => {

      if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  const tyo= request.body
  console.log(tyo)
  response.json(tyo)
})



app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/osaamiset', (request, response) => {
  response.json(osaamiset)
})

app.get('/api/tyot', (request, response) => {
  response.json(tyot)
})

app.get('/api/opinnot', (request, response) => {
  response.json(opinnot)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})