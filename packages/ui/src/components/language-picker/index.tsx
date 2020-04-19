import React from 'react';
import style from './style';
import { 
  withStyles, 
  WithStyles,
  TextField,
  CircularProgress
} from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { GET_LANGUAGES } from '@whitepaper/queries';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface Props extends WithStyles<typeof style> {
  className: string;
  value?: any;
  onChange?: (newEvent, newValue) => void;
}

function LanguagePicker(props: Props) {
  const { classes, className, value, onChange } = props;

  const languages = useQuery(GET_LANGUAGES);

  return (
    <React.Fragment>
      <Autocomplete
        options={(languages.data && languages.data.getLanguages) || []}
        getOptionLabel={(option: any) => `${option.name}`}
        loading={languages.loading}
        onChange={onChange}
        value={value}
        renderInput={params => (
          <TextField
            {...params}
            className={className}
            placeholder="Search a language"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {languages.loading ? <CircularProgress color="primary" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </React.Fragment>
  );
}

export default withStyles(style)(LanguagePicker)