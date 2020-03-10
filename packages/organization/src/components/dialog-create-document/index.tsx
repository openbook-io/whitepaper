import React, {useState} from 'react';
import { 
  withStyles, 
  WithStyles,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Grid,
  CircularProgress
} from '@material-ui/core';
import style from './style';
import { DialogTitle, Transition } from '@whitepaper/ui';
import { GET_DOCUMENT_TYPES, CREATE_DOCUMENT } from '@whitepaper/queries';
import { useGlobalState } from '../../state';
import { useQuery, useMutation } from '@apollo/react-hooks';

interface Props extends WithStyles<typeof style> {}

function DialogCreateDocument (props: Props) {
  const { classes } = props;
  const [dialogCreateDocument, setDialogCreateDocument] = useGlobalState('dialogCreateDocument');
  const documentTypes = useQuery(GET_DOCUMENT_TYPES);
  const [createDocument, {loading}] = useMutation(CREATE_DOCUMENT);
  const [values, setValues] = useState({
    type: 0,
    text: '',
    loading: true
  });

  const closeDialog = () => setDialogCreateDocument(false)

  const handleChange = event => {
    if(event.target.value === "")
      return

    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const saveDocument = async () => {
    if(values.type > 0 && !documentTypes.loading) {
      const type = documentTypes.data.getDocumentTypes[values.type - 1];

      const docummentResults = await createDocument({
        variables: {
          data: {
            documentTypeText: type.textAllowed ? values.text: '',
            documentTypeId: type.id
          }
        }
      });

      setDialogCreateDocument(false)
    }
  }

  return (
    <Dialog 
      fullWidth
      maxWidth={'sm'}
      open={dialogCreateDocument} 
      TransitionComponent={Transition}
      onClose={closeDialog}>
      <DialogTitle onClose={closeDialog}>
        Create a new document
      </DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <Select
          value={values.type}
          onChange={handleChange}
          displayEmpty
          name="type">
            <MenuItem value="0" disabled>
              Select your document type
            </MenuItem>
            {
              !documentTypes.loading && documentTypes.data.getDocumentTypes.map((documentType, index) => {
                return (
                  <MenuItem key={documentType.id} value={index + 1}>{documentType.name}</MenuItem>
                )
              })
            }
          </Select>
        </FormControl>
        {values.type > 0 && !documentTypes.loading && documentTypes.data.getDocumentTypes[values.type - 1].freeTextAllowed &&
          <TextField
            className={classes.textfield}
            name="text"
            value={values.text}
            onChange={handleChange}
            placeholder="Document type (Whitepaper, Pitchdeck, Business Plan)"
            type="text"
            fullWidth
          />
        }
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={closeDialog}>Cancel</Button>
        <Button color="primary" variant="contained" onClick={saveDocument}>Create Document</Button>
      </DialogActions>
      { loading && 
      <Grid container alignItems="center" justify="center" className={classes.loadingOverlay}>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
      }
    </Dialog>
  );
}

export default withStyles(style)(DialogCreateDocument);
