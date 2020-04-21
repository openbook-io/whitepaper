import React, {useEffect, useState} from 'react';
import { 
  withStyles,
  WithStyles,
  Grid
} from '@material-ui/core';
import { useInView } from 'react-intersection-observer';
import style from './style';

interface Props extends WithStyles<typeof style> {
  page: any,
  documentId: string
}

function PdfPage(props: Props) {
  const { classes, page, documentId } = props;
  const divRef = React.createRef<HTMLDivElement>();

  const [scale, setScale] = useState(0);
  const [textLayer, setTextLayer] = useState(null);

  const [ref, inView] = useInView({
    rootMargin: `300px 0px`,
    triggerOnce: true
  })

  useEffect(() => {
    if(divRef.current){
      const scale = divRef.current.getBoundingClientRect().width / page.width;
      setScale(scale)
    }
  }, [])

  useEffect(() => {
    if(inView) {
      fetch(`https://assets.whitepaper-staging.com/pdfs-output/${documentId}/text-${page.number}-${page.key}.html`, {method: 'GET'})
      .then(res => res.text())
      .then(data => setTextLayer(data))
    }
  }, [inView])

  return (
    <div className={classes.container} style={{height: scale * page.height}} ref={divRef}>
      { scale && 
        <div className={classes.page} ref={ref} style={{width: page.width, height: page.height, transform: `scale(${scale})`}}>
          {inView &&
            <img className={classes.pageImage} src={`https://assets.whitepaper-staging.com/pdfs-output/${documentId}/page-${page.number}-${page.key}.png`} />
          }
          {textLayer && <div className={classes.textOuter} dangerouslySetInnerHTML={{__html: textLayer}} />}
        </div>
      }
    </div>
  )
}
export default withStyles(style)(PdfPage);
