import withStyles from '@material-ui/core/styles/withStyles';

export default withStyles({
  dimension: {
    width: '4em'
  },
  duration: {
    width: '4em'
  },
  matte: {
    backgroundColor: '#404040',
    borderColor: '#202020',
    height: '2.5em',
    marginBottom: '1em',
    width: '100%'
  },
  paper: {
    margin: '1em',
    padding: '1em'
  },
  table: {
    width: '100%',

    '& td, & th': {
      padding: '1em',
      verticalAlign: 'top'
    },

    '& th': {
      lineHeight: '2em',
      textAlign: 'left',
      width: '1%'
    },

    '& tr:not(:first-child) td, & tr:not(:first-child) th': {
      borderTop: '1px solid #F0F0F0'
    }
  }
});