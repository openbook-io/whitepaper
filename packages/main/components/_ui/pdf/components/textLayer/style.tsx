import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  textOuter: {
    position: 'absolute',
    top: 0,
    left: 0,
    '@global': {
      '.textLayer': {
        opacity: '0.6',
        lineHeight: '1.1',
        margin: '0px auto'
      },
      '.textLayer > span': {
        color: 'transparent',
        position: 'absolute',
        whiteSpace: 'pre',
        cursor: 'text',
        transformOrigin: '0% 0%'
      },
      '.textLayer ::selection': {
        background: theme.palette.primary[500]
      },
      '.textLayer .endOfContent': {
        display: 'block',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: '-1',
        cursor: 'default',
        userSelect: 'none'
      }
    }
  }
})

export default styles
