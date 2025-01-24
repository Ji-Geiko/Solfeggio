"use client"

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { ReactElement, useEffect } from "react";
import { xmlTranslator } from "./xmlGenerator";

interface SheetRendererProps {
  data: string;
}

const SheetRenderer = ({ data }: SheetRendererProps): ReactElement => {

  const randomBinary = Array.from({ length: 144 }, () => Math.floor(Math.random() * 2)).join('');

  useEffect(() => {
    const osmd = new OpenSheetMusicDisplay("renderer", {
      autoResize: true,
      backend: "canvas",
    });
    osmd.load(xmlTranslator({data: randomBinary, nbOfBeats: 4, isCompound: false})).then(() => {
      osmd.render();
    });
  }, [data]);

  console.log(randomBinary)

  return <div id="renderer" />
}

export default SheetRenderer;