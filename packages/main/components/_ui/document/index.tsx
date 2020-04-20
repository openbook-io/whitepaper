import React from 'react';
import { 
  withStyles,
  WithStyles,
  Paper,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import Link from 'next/link';
import style from './style';
import { useUser } from '../../../utils/userContext';

interface Props extends WithStyles<typeof style> {
  document: any
}

function Document(props: Props) {
  const { classes, document } = props;
  const user = useUser();

  const yourLanguageVersion = document.versions.find((version) => {
    if(user && user.defaultLanguage && (version.language.id === user.defaultLanguage.id)) {
      return version
    }
  });

  const fallbackVersion = document.versions.find((version) => {
    if(version.language.isFallback) {
      return version
    }
  });

  const showingVersion = yourLanguageVersion || fallbackVersion;
  
  console.log(showingVersion);

  return (
    <Paper className={classes.container}>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item>
          <img className={classes.image} src={showingVersion.pdf.documentCoverUrl} />
        </Grid>
        <Grid item xs className={classes.description}>
          <div className={classes.heading}>
            <Typography variant="h5" component="h2">{showingVersion.title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Version: {showingVersion.version}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Language: {showingVersion.language.name}
            </Typography>
          </div>
          <Link href="/document/[id]" as={`/document/${showingVersion.id}`}>
            <a>
              <Button variant="contained" color="primary" onClick={() => console.log('click Button')}>View Document</Button>
            </a>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  )
}
export default withStyles(style)(Document);
