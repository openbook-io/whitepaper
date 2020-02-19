export default ({ theme, white, attach, nest }) => {
  const placeholder = {
    color: theme.palette.text.secondary,
    opacity: 0.7,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
    }),
  };

  return ({
    MuiFormLabel: {
      root: {
        fontSize: '17px'
      }
    },
    MuiInput: {
      root: {
        padding: '0 10px',
        borderRadius: 3,
        fontSize: 14,
        backgroundColor: '#fff',
        border: '1px solid #c9d0d8',
        boxShadow: 'inset 0 1px 0 0 rgba(102,113,123,.1)',
        '&$focused': {
          backgroundColor: white.text,
          border: `1px solid #8091a5`,
          boxShadow: '0 0 0 1px #8091a5',
          [`& input`]: {
            color: '#000',
          },
        },
      },
      formControl: {
        'label + &': {
          marginTop: 22,
        },
      },
      inputMarginDense: {
        paddingTop: '10px'
      }
    },
    MuiInputBase: {
      root: {
        marginTop: 0,
        padding: '10 0'
      },
      input: {
        padding: '10px 0',
        '&::-webkit-input-placeholder': placeholder,
        '&::-moz-placeholder': placeholder, // Firefox 19+
        '&:-ms-input-placeholder': placeholder, // IE 11
        '&::-ms-input-placeholder': placeholder, // Edge
      },
      inputMultiline: {
        padding: '10px 0',
        '&::-webkit-input-placeholder': placeholder,
        '&::-moz-placeholder': placeholder, // Firefox 19+
        '&:-ms-input-placeholder': placeholder, // IE 11
        '&::-ms-input-placeholder': placeholder, // Edge
      }
    },
    MuiInputLabel: {
      root: {
        color: '#1d2230',
        paddingBottom: '10px',
        '&$focused': {
          color: '#1d2230'
        },
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: '#fff'
        }
      }
    }
  })
};
