export default () => ({
  MuiTable: {

  },
  MuiTableHead: {
    root: {
      backgroundColor: '#f9f9fb',
    }
  },
  MuiTableRow: {
    root: {
      borderBottom: '1px solid #dfe3e8',
      '&$selected': {
        backgroundColor: '#fff'
      },
      '&:hover': {
        backgroundColor: '#f9f9fb'
      },
      '&:last-child': {
        border: 'none'
      }
    },
    head: {
      height: 45
    }
  },
  MuiTableCell: {
    root: {
      padding: '4px 20px',
      border: 'none'
    },
    head: {
      color: '#000',
      borderBottom: '1px solid #dfe3e8',
    },
    body: {
      fontWeight: 400
    }
  }
});
