import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//Dritte Seite
const DritteSeite = () => (
  <Layout>
    <Seo title="Prozessorenanalyse" />
    <h1>Finden sie ihren optimalen Prozessor</h1>
    <p>AMD Ryzen 7 3700X

Technische Daten:

CPU Kerne: 8
Threads: 16 (single Threads)
Leistungstaktrate: 3.6 Ghz bis max. 4.4 Ghz
L2 Cache: 2 MB
L3 Cache: 32 MB
Standartleistung: 65W
Sockel: AM4
Speichertyp: DDR4 
Speicherkanäle: 2
integrierte Grafikkarte: keine
Betriebssystemunterstützung: Windows 10; RHELx86, Ubuntu x86 


Allgemeine Review:

Der Prozessor eignet sich am meisten für den Alltag,im Office oder für Multimedia, im Thema gaming ist er ebenfalls nicht schlecht. Der AMD Ryzen 7 3700X
bietet exzellente Ergebnisse in den Benchmark Tests. Das Preisleistungsverhältnis ist ebenfalls nicht außer acht zu lassen,
 da man den Prozessor schon für günstige 130€ erwerben kann, damit sticht die 
CPU viele Intel Prozessoren Preistechnisch aus.</p>



<p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
