"use client"

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { ReactElement, useEffect } from "react";
import { SelectNotesInPatern } from "./Regex";

interface SheetRendererProps {
  data: string;
}

const xmlTranslator = (data: string): string => {
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

    notes.forEach(note => {
      if(note.length === 1) {
        xml += 
          `<note>
            <unpitched>
              <display-step>B</display-step>
              <display-octave>4</display-octave>
            </unpitched>
            <duration>1</duration>
            <type>16th</type>
            <beam number="1">begin</beam>
          </note>`
      } else if(note.length === 2) {
        xml += 
          `<note>
            <unpitched>
              <display-step>B</display-step>
              <display-octave>4</display-octave>
            </unpitched>
            <duration>10</duration>
            <type>eighth</type>
            <beam number="1">begin</beam>
          </note>`
      } else if(note.length === 3) {
        xml += 
          `<note>
            <unpitched>
              <display-step>B</display-step>
              <display-octave>4</display-octave>
            </unpitched>
            <duration>10</duration>
            <type>eighth</type>
            <beam number="1">begin</beam>
            <dot />
          </note>`
      } else {
        xml += 
          `<note>
            <unpitched>
              <display-step>B</display-step>
              <display-octave>4</display-octave>
            </unpitched>
            <duration>20</duration>
            <type>quarter</type>
          </note>`
      }
    });

    xml += `    
        </measure>
      </part>
    </score-partwise>`
  return xml;
}

const SheetRenderer = ({ data }: SheetRendererProps): ReactElement => {
  useEffect(() => {
    const osmd = new OpenSheetMusicDisplay("renderer", {
      autoResize: true,
      backend: "canvas",
    });
    osmd.load(xmlTranslator("1110")).then(() => {
      osmd.render();
    });
  }, [data]);

  return <div id="renderer"> awdawd</div>
}

export default SheetRenderer;