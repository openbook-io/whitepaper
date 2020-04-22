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

  const hideTipAndSelection = (mousedown: boolean) => {
    const tipNode = findOrCreateContainerLayer(
      (textLayerRef.current.parentNode.parentNode as HTMLElement),
      "PdfHighlighter__tip-layer"
    );

    const selection: Selection = window.getSelection();

    if (selection.isCollapsed && mousedown) return;

    ReactDom.unmountComponentAtNode(tipNode);
  };

  const onMouseDown = (event: any) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    hideTipAndSelection(true);
  };

  const onMouseUp = () => {
    const selection: Selection = window.getSelection();
    const range = selection.getRangeAt(0);

    if(range.endOffset === 0) selection.empty()
  }

  useEffect(() => {
    if(textLayerRef.current){
      textLayerRef.current.parentNode.parentNode.addEventListener("selectstart", () => {
        document.addEventListener("selectionchange", onSelectionChange);
      });

      textLayerRef.current.parentNode.parentNode.addEventListener("mouseleave", () => {
        document.removeEventListener("selectionchange", onSelectionChange);
        hideTipAndSelection(true);
      })
    }
  }, [textLayerRef])

  return (
    <div onMouseDown={onMouseDown}  onMouseUp={onMouseUp} className={classes.textOuter} ref={textLayerRef} dangerouslySetInnerHTML={{__html: textLayer}} />
  )
}
export default withStyles(style)(TextLayer);
