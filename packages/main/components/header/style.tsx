import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  logoLink: {
    textDecoration: 'none'
  },
  links: {
    flexGrow: 1,
    marginLeft: 20
  },
  link: {
    color: '#fff',
    fontSize: 14
  },
  logoImg: {
    height: '25px',
    display: 'block'
  },
  logoText: {
    fontWeight: 500,
    fontSize: '20px',
    color: '#ffffff',
    fontFamily: 'Rubik'
  },
  toolbar: {
    alignItems: 'center',
  },
  button: {
    color: '#ffffff',
    marginRight: '10px'
  },
  image: {
    objectFit: 'cover',
    backgroundColor: '#fff',
    borderRadius: '50%',
    display: 'block',
    border: '2px solid #fff'
  },
})

export default styles
