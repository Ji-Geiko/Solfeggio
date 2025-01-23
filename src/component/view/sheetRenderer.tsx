"use client"

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { ReactElement, useEffect } from "react";

interface SheetRendererProps {
  data: string;
}

const SheetRenderer = ({ data }: SheetRendererProps): ReactElement => {
  useEffect(() => {
    const osmd = new OpenSheetMusicDisplay("renderer", {
      autoResize: true,
      backend: "canvas",
    });
    osmd.load(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE score-partwise PUBLIC
    "-//Recordare//DTD MusicXML 4.0 Partwise//EN"
    "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <part-list>
    <score-part id="P1">
      <part-name>Music</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>8</divisions>
        <key>
          <fifths>0</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>percussion</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note>
        <unpitched>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </unpitched>
        <duration>1</duration>
        <type>eighth</type>
        <beam number="1">begin</beam>
      </note>

      <note>
        <unpitched>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </unpitched>
        <duration>1</duration>
        <type>16th</type>
        <beam number="1">continue</beam>
      </note>

      <note>
        <unpitched>
          <display-step>B</display-step>
          <display-octave>4</display-octave>
        </unpitched>
        <duration>1</duration>
        <type>16th</type>
        <beam number="1">end</beam>
      </note>
    </measure>
  </part>
</score-partwise>`).then(() => {
      osmd.render();
    });
  }, [data]);

  return <div id="renderer"> awdawd</div>
}

export default SheetRenderer;