"use client"

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { ReactElement, useEffect } from "react";
import { xmlTranslator } from "./xmlGenerator";

interface SheetRendererProps {
  data: string;
}

const SheetRenderer = ({ data }: SheetRendererProps): ReactElement => {

  const randomBinary = Array.from({ length: 128 }, () => Math.floor(Math.random() * 2)).join('');

  useEffect(() => {
    const osmd = new OpenSheetMusicDisplay("renderer", {
      autoResize: true,
      backend: "canvas",
    });
    osmd.load(xmlTranslator({data: randomBinary})).then(() => {
      osmd.render();
    });
  }, [data]);

  console.log(xmlTranslator({data: randomBinary}))

  return <div id="renderer" />
}

export default SheetRenderer;