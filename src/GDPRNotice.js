import React from 'react'

import './GDPRNotice.css'

export default function GDPRNotice({ onAccept }) {
  return (
    <div className="gdpr">
      <div className="gdprText">
        <h1>Ge De Pe Re</h1>
        <p>Dacă ne dai poze, îți asumi faptul că ai dreptul să ni le dai si că nu îți e rușine cu ele.</p>
        <p>Vom folosi pozele doar în timpul spectacolului pentru amuzamentul tău sau ca parte din înregistrări sau poze făcute în timpul spectacolului, pentru promovare.</p>
        <p>Vom șterge pozele tale în maxim o zi după spectacol.</p>
      </div>
      <button className="gdprButton" onClick={onAccept}>Da, da, am înțeles!</button>
    </div>
  )
}