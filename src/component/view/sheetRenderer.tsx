"use client"

import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import { ReactElement, useEffect } from "react";
import { xmlTranslator } from "./xmlGenerator";

interface SheetRendererProps {
  data: string;
}

const SheetRenderer = ({ data }: SheetRendererProps): ReactElement => {
  useEffect(() => {
    const osmd = new OpenSheetMusicDisplay("renderer", {
      autoResize: true,
      backend: "canvas",
    });
    osmd.load(xmlTranslator("1101")).then(() => {
      osmd.render();
    });
  }, [data]);

  console.log(xmlTranslator("1101"))
  return <div id="renderer"> awdawd</div>
}

export default SheetRenderer;