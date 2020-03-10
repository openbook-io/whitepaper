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
  TextField
} from '@material-ui/core';
import style from './style';
import { DialogTitle, Transition } from '@whitepaper/ui';
import { GET_DOCUMENT_TYPES } from '@whitepaper/queries';
import { useGlobalState } from '../../state';
import { useQuery } from '@apollo/react-hooks';

interface Props extends WithStyles<typeof style> {}

function DialogCreateDocument (props: Props) {
  const { classes } = props;
  const [dialogCreateDocument, setDialogCreateDocument] = useGlobalState('dialogCreateDocument');
  const documentTypes = useQuery(GET_DOCUMENT_TYPES);
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
        <Button color="primary" variant="contained">Create Document</Button>
      </DialogActions>
    </Dialog>
  );
}

export default withStyles(style)(DialogCreateDocument);
