import React from 'react'
import { useNavigate } from 'react-router-dom'

const Letter = () => {

  const n = useNavigate()


  return (
    <div className='main-container'>
      <div>
        <h1>Ett brev:</h1>
        <div style={{ backgroundColor: "#d63f1e", color: "white", borderRadius: "5px", padding: "1rem", marginTop: "1rem", border: "2px solid pink" }}>
          <h1 style={{ marginBottom: 0, marginTop: 0 }} >{"Till: Emelie"}</h1>
          <h1 style={{
            margin: 0
          }}>{`Från: den som älskar dig mest <3`}</h1>
        </div>

        <p>Mitt hjärtegull, grattis till 22 år på denna jord! Jag älskar dig mer än något annat. Du är den starkaste, snällaste och finaste människan jag någonsin träffat. Ibland är du en dam som pratar mycket, du säger alltid vad du har att säga, och du är aldrig rädd för att förklara hur du känner! Det är bara en av de 100000 saker jag älskar med dig...</p>
        <p>De bästa sakerna med dig, min älskling, är bland annat hur vacker du är, hur snäll du är, hur mycket du stöttar mina val i livet, hur mycket du bryr dig om mig, hur generös du är och en massa mer saker som jag inte ens får plats med på en webbsida som har oändligt med plats!!!</p>
        <p>{`Du betyder allt för mig, och vi ska vara tillsammans förevigt! Jag ser fram emot vårt raduhus av tegel, vår lilla baksida där Rufus kan springa omkring, vårt badrum med vår egen aroma-pool, våra gröna väggar (som jag absolut inte bestämde), alla våra växter på altanen/balkongen (rena djungeln), och en så massa mer saker!`}</p>
        <p></p>
        <p>Jag minns såklart när jag frågade dig vad du ville ha i födelsedagspresent i år. Ditt svar var ett brev! Detta är mitt "brev" från mig till dig. Det är ju faktiskt egentligen inte ett brev, utan din egen webbsida från mig till dig!</p>
        <p style={{
          fontWeight: "bold",
        }}>Kramar och kärlek från din älskade Lucas</p>
      </div>

      <button className='main-button' onClick={() => n("/")} >Tillbaka</button>

    </div>
  )
}

export default Letter