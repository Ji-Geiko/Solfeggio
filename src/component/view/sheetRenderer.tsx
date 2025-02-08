"use client"

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { ReactElement, useEffect } from "react";
import { xmlTranslator } from "./xmlGenerator";

interface SheetRendererProps {
  data: string;
}

const SheetRenderer = ({ data }: SheetRendererProps): ReactElement => {

  const binary = data.split('').map(char => parseInt(char, 16).toString(2).padStart(4, '0')).join('');

  console.log(binary)

  useEffect(() => {
    const osmd = new OpenSheetMusicDisplay("renderer2", {
      autoResize: true,
      backend: "canvas",
    });
    osmd.load(xmlTranslator({data: binary, nbOfBeats: 4, isCompound: false})).then(() => {
      osmd.render();
    });
  }, [binary]);

  return <div  className='bg-red-900-100 h-screen' id="renderer2" />
}

export default SheetRenderer;