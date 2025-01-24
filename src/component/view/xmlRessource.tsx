export const xmlBase = (nbOfBeats: number, isCompound: boolean) => { 

  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <!DOCTYPE score-partwise PUBLIC
      "-//Recordare//DTD MusicXML 4.0 Partwise//EN"
      "http://www.musicxml.org/dtds/partwise.dtd">
  
      <score-partwise version="4.0">
        <movement-title>random Rythme</movement-title>
        <part-list>
          <score-part id="P1">
            <part-name>Rythme</part-name>
          </score-part>
          </part-list>
            <part id="P1">
              <measure number="1">
                <attributes>
                  <divisions>8</divisions>
                  <time>
                    <beats>${isCompound ? nbOfBeats*3 : nbOfBeats}</beats>
                    <beat-type>${isCompound ? '8' : '4'}</beat-type>
                  </time>
                  <clef>
                    <sign>percussion</sign>
                  </clef>
                </attributes>`
}

export const xmlRythmeNote = '<unpitched><display-step>B</display-step><display-octave>4</display-octave></unpitched>'
