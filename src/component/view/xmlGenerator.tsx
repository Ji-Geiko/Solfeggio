import { SelectNotesInPatern } from "./Regex";


export const xmlTranslator = (data: string): string => {
  let xml = `
      <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <!DOCTYPE score-partwise PUBLIC
      "-//Recordare//DTD MusicXML 4.0 Partwise//EN"
      "http://www.musicxml.org/dtds/partwise.dtd">
  
      <score-partwise version="4.0">
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
                    <beats>4</beats>
                    <beat-type>4</beat-type>
                  </time>
                  <clef>
                    <sign>percussion</sign>
                  </clef>
                </attributes>`

  const notes = data.match(SelectNotesInPatern);

  notes.forEach((note, idx) => {
    xml += `<note>
              <unpitched>
                <display-step>B</display-step>
                <display-octave>4</display-octave>
              </unpitched>
              <duration>1</duration>`
    if (note.length === 1) {
      xml +="<type>16th</type>"
    } else if (note.length === 2) {
      xml +="<type>eighth</type>"

    } else if (note.length === 3) {
      xml +="<type>eighth</type> <dot />"
    } else {
      xml +="<type>quarter</type>"
    }

    xml += `<beam number="1">${idx === 0 ? 'begin' : idx === notes.length - 1 ? 'end' : 'continue'}</beam>
            </note>`
  });



  xml += `    
          </measure>
        </part>
      </score-partwise>`
  return xml;
}