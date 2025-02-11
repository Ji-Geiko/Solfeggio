"use client"

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { ReactElement, useEffect } from "react";
import { xmlTranslator } from "./xmlGenerator";

interface SheetRendererProps {
  data: string;
}

const SheetRenderer = ({ data }: SheetRendererProps): ReactElement => {

  const hex = data.split('%2B')[0]
  const isCompound = data.split('%2B')[1] == "1" ? true : false

  const binary = hex.split('').map(char => parseInt(char, 16).toString(2).padStart(4, '0')).join('');

  console.log(isCompound)

  useEffect(() => {
    const osmd = new OpenSheetMusicDisplay("renderer2", {
      autoResize: true,
      backend: "canvas",
    });
    osmd.load(xmlTranslator({data: binary, nbOfBeats: 4, isCompound: isCompound})).then(() => {
      osmd.render();
    });
  }, [binary]);

  return <div  className='bg-red-900-100 h-screen' id="renderer2" />
}

export default SheetRenderer;