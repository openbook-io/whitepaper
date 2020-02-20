export default ({ theme }: {theme: any}) => ({
  MuiTooltip: {
    tooltip: {
      backgroundColor: theme.palette.primary[700],
      fontSize: 15,
      minWidth: 130,
      textAlign: 'center',
      padding: '6px 10px'
    },
    arrow: {
      color: theme.palette.primary[700]
    }
  }
});