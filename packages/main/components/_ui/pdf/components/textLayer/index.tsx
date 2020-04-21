import React, {useEffect, useState, useCallback} from 'react';
import { 
  withStyles,
  WithStyles
} from '@material-ui/core';
import { debounce } from 'lodash';
import getClientRects from "../../lib/get-client-rects";
import getBoundingRect from "../../lib/get-bounding-rect";
import style from './style';

interface Props extends WithStyles<typeof style> {
  textLayer: string
}

function TextLayer(props: Props) {
  const { classes, textLayer } = props;
  const textLayerRef = React.createRef<HTMLDivElement>();

  const afterSelection = (isCollapsed, range) => {
    if (!range || isCollapsed) {
      return;
    }

    const rects = getClientRects(range, textLayerRef.current);

    if (rects.length === 0) {
      return;
    }

    const boundingRect = getBoundingRect(rects);
    const viewportPosition = { boundingRect, rects };
    console.log(viewportPosition)
  }

  const handler = useCallback(debounce(afterSelection, 500), []);

  const onSelectionChange = () => {
    const selection: Selection = window.getSelection();

    if (selection.isCollapsed) {
      return;
    }

    const range = selection.getRangeAt(0);

    if (!range) {
      return;
    }

    handler(selection.isCollapsed, range)
  };

  useEffect(() => {
    if(textLayerRef.current){
      textLayerRef.current.addEventListener("selectstart", () => {
        document.addEventListener("selectionchange", onSelectionChange);
      });

      textLayerRef.current.addEventListener("mouseleave", () => {
        document.removeEventListener("selectionchange", onSelectionChange);
      })
    }
  }, [textLayerRef])

  return (
    <div className={classes.textOuter} ref={textLayerRef} dangerouslySetInnerHTML={{__html: textLayer}} />
  )
}
export default withStyles(style)(TextLayer);
