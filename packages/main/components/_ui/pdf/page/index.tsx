import React, {useEffect, useState} from 'react';
import { 
  withStyles,
  WithStyles,
  Grid
} from '@material-ui/core';
import style from './style';

interface Props extends WithStyles<typeof style> {
  page: any,
  documentId: string
}

function PdfPage(props: Props) {
  const { classes, page, documentId } = props;
  const divRef = React.createRef<HTMLDivElement>();

  const [scale, setScale] = useState(0)

  useEffect(() => {
    if(divRef.current){
      const scale = divRef.current.getBoundingClientRect().width / page.width;
      setScale(scale)
    }
 }, [])

  return (
    <div className={classes.container} style={{height: scale * page.height}} ref={divRef}>
      <div className={classes.page} style={{width: page.width, height: page.height, transform: `scale(${scale})`}}>
        <img src={`https://assets.whitepaper-staging.com/pdfs-output/${documentId}/page-${page.number}-${page.key}.png`} />
      </div>
    </div>
  )
}
export default withStyles(style)(PdfPage);
