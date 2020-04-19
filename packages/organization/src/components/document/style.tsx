import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  outer: {
    backgroundColor: '#eef0f2',
    padding: 20,
    margin: 0,
    width: '100%',
    marginTop: 30,
    borderRadius: 4
  },
  paper: {
    padding: 15
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    padding: 10
  },
  coverGrid: {
    height: '100%'
  },
  coverImage: {
    height: '100%',
    objectFit: 'contain',
    width: '100%'
  },
  document: {
    width: '100%',
    paddingTop: '120%',
    backgroundColor: '#f0f2f5',
    position: 'relative'
  },
  header: {
    marginBottom: 30
  },
  versionLanguage: {
    backgroundColor: '#f0f2f5',
    color: '#a5a5bf',
    padding: '4px 10px',
    paddingRight: '10px !important',
    textAlign: 'center'
  },
  tableCell: {
    padding: '15px 20px'
  },
  languageTableCell: {
    width: 120
  },
  addLanguageButton: {
    marginTop: 20
  },
  addLanguageLink: {
    textDecoration: 'none'
  }
})

export default styles
