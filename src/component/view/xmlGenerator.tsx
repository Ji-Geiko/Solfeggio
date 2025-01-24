import { SelectNotesInPatern } from "./Regex";
import { xmlBase, xmlRythmeNote } from "./xmlRessource";

const decypherPatern = (patern: string): string => {

  let noteXML = "";

  const notes = patern.match(SelectNotesInPatern);

  let wasPreviousRest = false;

  notes.forEach((note, idx) => {
    const isRest = note[0] === '0';

    noteXML += `<note>${isRest ? `<rest/>` : xmlRythmeNote}`;


    if (note.length === 1) {
      noteXML +="<type>16th</type><duration>1</duration>"
    } else if (note.length === 2) {
      noteXML +="<type>eighth</type><duration>2</duration>"

    } else if (note.length === 3) {
      noteXML +="<type>eighth</type> <dot /><duration>4</duration>"
    } else {
      noteXML +="<type>quarter</type><duration>8</duration>"
    }

    if (!isRest) {
      // Appliquer "begin" si c'est la première note après un silence
      if (wasPreviousRest && idx !== notes.length - 1 || idx === 0) {
        noteXML += `<beam number="1">begin</beam>`;
      } else if (idx === notes.length - 1) {
        noteXML += `<beam number="1">end</beam>`;
      } else {
        noteXML += `<beam number="1">continue</beam>`;
      }
    }

    wasPreviousRest = isRest;
    
    noteXML += "</note>"
  });

  return noteXML;
}

const splitBinary = (binary: string) => {
  const groups = binary.match(/.{1,4}/g) || [];
  return groups;
}

interface XmlTranslatorProps {
  data: string;
}

export const xmlTranslator = ({ data }: XmlTranslatorProps): string => {
  let xml = xmlBase

  let beat = 0;

  let listOfPaterns = splitBinary(data);

  listOfPaterns.forEach((patern) => {
    if (beat === 4) {
      xml += "</measure><measure>"
      beat = 0;
    } else {
      beat++;
    }
    xml += decypherPatern(patern);
  })


  xml += `</measure></part></score-partwise>`
  return xml;
}