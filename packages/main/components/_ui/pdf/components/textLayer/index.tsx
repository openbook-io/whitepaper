import React, {useEffect, useCallback} from 'react';
import ReactDom from "react-dom";
import { 
  withStyles,
  WithStyles
} from '@material-ui/core';
import { debounce } from 'lodash';
import getClientRects from "../../lib/get-client-rects";
import getBoundingRect from "../../lib/get-bounding-rect";
import { findOrCreateContainerLayer } from "../../lib/pdfjs-dom";
import style from './style';

interface Props extends WithStyles<typeof style> {
  textLayer: string
}

function TextLayer(props: Props) {
  const { classes, textLayer } = props;
  const textLayerRef = React.createRef<HTMLDivElement>();

  const renderTipAtPosition = (position) => {
    const { boundingRect } = position;

    const page = {
      node: textLayerRef.current
    }

    const pageBoundingRect = textLayerRef.current.getBoundingClientRect();

    const tipNode = findOrCreateContainerLayer(
      (textLayerRef.current.parentNode.parentNode as HTMLElement),
      "PdfHighlighter__tip-layer"
    );

    ReactDom.render(
      <div
        className={classes.tooltip}
        style={{
          position: 'absolute',
          left:
            page.node.offsetLeft + boundingRect.left + boundingRect.width / 2,
          top: boundingRect.top + page.node.offsetTop,
          //bottom: boundingRect.top + page.node.offsetTop + boundingRect.height,
        }}>Add Anotation</div>,
      tipNode
    );
  }

  const afterSelection = (isCollapsed, range) => {
    if (!range || isCollapsed || (range && range.endOffset === 0)) {
      return;
    }

    const rects = getClientRects(range, textLayerRef.current);

    if (rects.length === 0) {
      return;
    }

    const boundingRect = getBoundingRect(rects);
    const viewportPosition = { boundingRect, rects };
    renderTipAtPosition(viewportPosition)
  }

  const handler = useCallback(debounce(afterSelection, 800), []);

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
