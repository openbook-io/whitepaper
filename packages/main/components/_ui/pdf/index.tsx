import React from 'react';
import { 
  withStyles,
  WithStyles,
  Grid
} from '@material-ui/core';
import PdfPage from './page';
import style from './style';

interface Props extends WithStyles<typeof style> {
  pdf: any
}

function Pdf(props: Props) {
  const { classes, pdf } = props;

  const renderPages = pdf.pages.map((page) => {
    return (<PdfPage key={page.id} page={page} documentId={pdf.documentId} />)
  })

  return (
    <div className={classes.container}>
      <div className={classes.pdfContainer}>
        {renderPages}
      </div>
    </div>
  )
}
export default withStyles(style)(Pdf);
