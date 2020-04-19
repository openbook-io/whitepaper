import React, {useState} from 'react';
import { 
  withStyles, 
  WithStyles,
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Grid
} from '@material-ui/core';
import { LanguagePicker } from '@whitepaper/ui';
import style from './style';
import Dropzone from '../dropzone';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_DOCUMENT_VERSION } from '@whitepaper/queries';

interface Props extends WithStyles<typeof style> {
  documentId: number;
}

function AddDocumentVersion (props: Props) {
  const { classes, documentId } = props;

  const [createDocumentVersion, createDocumentVersionInfo] = useMutation(CREATE_DOCUMENT_VERSION);
  const [language, setLanguage] = useState(null)

  const [values, setValues] = useState({
    languageId: null,
    documentId: documentId,
    pdfId: null,
    version: '',
    title: '',
    description: '',
  })

  const saveToState = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const onLanguageSelect = (event, newValue) => {
    setLanguage(newValue)
    setValues({
      ...values,
      languageId: newValue && newValue.id
    })
  }

  const saveDocument = async (e) => {
    e.preventDefault();

    await createDocumentVersion({
      variables: {
        data: values
      }
    })
  }

  const onPdfFinished = (data) => {
    setValues({
      ...values,
      pdfId: data && data.uploadPdf && data.uploadPdf.id
    })
  }

  return (
    <React.Fragment>
      <form 
        //className={classes.container} 
        method="post"
        onSubmit={saveDocument}>
        <Dropzone onPdfFinished={onPdfFinished} />
        <Card>
          <CardContent>
            <LanguagePicker
              value={language}
              onChange={onLanguageSelect}
              className={classes.textField}
            />
            <TextField 
              className={classes.textField}
              fullWidth 
              name="version"
              value={values.version}
              onChange={saveToState}
              required
              placeholder="Version" 
            />
            <TextField 
              className={classes.textField}
              fullWidth 
              name="title"
              value={values.title}
              onChange={saveToState}
              required
              placeholder="Title" 
            />
            <TextField 
              fullWidth 
              name="description"
              value={values.description}
              onChange={saveToState}
              placeholder="Description" 
              multiline 
              rows={3} 
              rowsMax={20} 
            />
          </CardContent>
          <CardActions>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <Button 
                  disabled={!(values.title && values.version && values.languageId && values.documentId && values.pdfId)}
                  type="submit" 
                  color="secondary" 
                  variant="contained">
                  Save Document
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </form>
    </React.Fragment>
  );
}

export default withStyles(style)(AddDocumentVersion);
