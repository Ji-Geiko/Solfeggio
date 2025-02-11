import { SelectNotesInPatern } from "./Regex";
import { xmlBase, xmlRythmeNote } from "./xmlRessource";

const decypherPatern = (patern: string): string => {

  let noteXML = "";

  const notes = patern.match(SelectNotesInPatern);

  let wasPreviousRest = false;

  notes?.forEach((note, idx) => {
    const isRest = note[0] === '0';

    noteXML += `<note>${isRest ? `<rest/>` : xmlRythmeNote}`;


    console.log(note, note.length)

    if (note.length === 1) {
      noteXML +="<type>16th</type><duration>1</duration>"
    } else if (note.length === 2) {
      noteXML +="<type>eighth</type><duration>2</duration>"
    } else if (note.length === 3) {
      noteXML +="<type>eighth</type> <dot /><duration>3</duration>"
    } else if (note.length === 4){
      noteXML +="<type>quarter</type><duration>4</duration>"
    } else if (note.length === 5){
      noteXML +='<type>quarter</type> <tie type="start"/><duration>5</duration><notations><tied type="start"/></notations></note>'

      noteXML += `<note>${xmlRythmeNote}<type>16th</type> <tie type="stop"/><duration>5</duration><notations><tied type="stop"/></notations>`

    } else {
      noteXML +="<type>quarter</type> <dot /> <duration>6</duration>"
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
    
    noteXML += '</note>'
  });

  return noteXML;
}

const splitBinary = (binary: string, isCompound: boolean) => {
  if (isCompound) {
    const groups = binary.match(/.{1,6}/g) || [];
    return groups
  }
  const groups = binary.match(/.{1,4}/g) || [];
  return groups;
}

interface XmlTranslatorProps {
  data: string,
  nbOfBeats: number,
  isCompound: boolean
}

export const xmlTranslator = ({ data, nbOfBeats, isCompound }: XmlTranslatorProps): string => {
  let xml = xmlBase(nbOfBeats, isCompound);

  let beat = 0;

  const listOfPaterns = splitBinary(data, isCompound);

  listOfPaterns.forEach((patern) => {
    if (beat === nbOfBeats) {
      xml += '</measure><measure>'
      beat = 1;
    } else {
      beat++;
    }
    xml += decypherPatern(patern);
  })


  xml += `</measure></part></score-partwise>`
  return xml;
}