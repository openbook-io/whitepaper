import React, { useState } from 'react';
import { 
  withStyles, 
  WithStyles,
  Grid,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Button
} from '@material-ui/core';
import clsx from 'clsx';
import style from './style';
import CloudUploadIcon from 'mdi-react/CloudUploadIcon';
import { Link, navigate } from "@reach/router";

interface Props extends WithStyles<typeof style> {
  document: any
}

function Document (props: Props) {
  const { classes, document } = props;
  const version = document.versions.length ? document.versions[0] : null;

  const routeToDocumentVersion = (version) => {
    navigate(`/document-version/${version.id}`)
  }

  return (
    <Grid container className={classes.outer} spacing={6}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <div className={classes.document}>
            <Grid container justify="center" alignItems="center" className={classes.icon}>
              <Grid item className={classes.coverGrid}>
              {version && <img className={classes.coverImage} src={version.pdf.documentCoverUrl} />}
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Grid className={classes.header} container direction="row" justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5">{document.type.name}</Typography>
          </Grid>
        </Grid>
        {document.versions.length > 0 && 
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right" className={clsx(classes.languageTableCell)}>Language</TableCell>
                  <TableCell align="right">Version</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  document.versions.map((version, index) => {
                    return (
                      <TableRow key={index} onClick={() => routeToDocumentVersion(version)}>
                        <TableCell className={classes.tableCell}>{version.title}</TableCell>
                        <TableCell className={clsx(classes.languageTableCell, classes.tableCell)} align="right"><label className={classes.versionLanguage}>{version.language.name}</label></TableCell>
                        <TableCell className={clsx(classes.languageTableCell, classes.tableCell)} align="right">{version.version}</TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        }
        {
          document.versions.length === 0 &&
          <React.Fragment>
            <Typography variant="body1">There are no PDF's uploaded yet. Please click the button below and start uploading your documents</Typography>
            <Link to={`/add-document-version/${document.id}`} className={classes.addLanguageLink}>
              <Button color="primary" className={classes.addLanguageButton}><CloudUploadIcon />&nbsp; Upload Document</Button>
            </Link>
          </React.Fragment>
        }
      </Grid>
    </Grid>
  );
}

export default withStyles(style)(Document);
