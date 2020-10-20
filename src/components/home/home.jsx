import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
} from '@material-ui/core';
import { withNamespaces } from 'react-i18next';
import { colors } from '../../theme'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';
import PieChartIcon from '@material-ui/icons/PieChart';
import SecurityIcon from '@material-ui/icons/Security';

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    }
  },
  card: {
    flex: '1',
    height: '25vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    borderRadius: '0px',
    transition: 'background-color 0.2s linear',
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
      minHeight: '50vh',
    }
  },
  earn: {
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.pink,
      '& .title': {
        color: colors.white
      },
      '& .icon': {
        color: colors.white
      },
      '& .description': {
        display: 'block',
        color: colors.white,
        padding: '48px',
        textAlign: 'center'
      }
    },
    '& .title': {
      color: colors.pink
    },
    '& .icon': {
      color: colors.pink
    },
    '& .description': {
      display: 'none'
    }
  },
  zap: {
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.blue,
      '& .title': {
        color: colors.white,
      },
      '& .icon': {
        color: colors.white
      },
      '& .description': {
        display: 'block',
        color: colors.white,
        padding: '48px',
        textAlign: 'center'
      }
    },
    '& .title': {
      color: colors.blue,
      display: 'block'
    },
    '& .soon': {
      color: colors.blue,
      display: 'none'
    },
    '& .icon': {
      color: colors.blue
    },
    '& .description': {
      display: 'none'
    }
  },
  apr: {
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.lightBlack,
      '& .title': {
        color: colors.white
      },
      '& .icon': {
        color: colors.white
      },
      '& .description': {
        display: 'block',
        color: colors.white,
        padding: '48px',
        textAlign: 'center'
      }
    },
    '& .title': {
      color: colors.lightBlack
    },
    '& .icon': {
      color: colors.lightBlack
    },
    '& .description': {
      display: 'none'
    }
  },
  vault: {
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.tomato,
      '& .title': {
        color: colors.white,
      },
      '& .icon': {
        color: colors.white
      },
      '& .description': {
        display: 'block',
        color: colors.white,
        padding: '48px',
        textAlign: 'center'
      }
    },
    '& .title': {
      color: colors.tomato,
    },
    '& .icon': {
      color: colors.tomato
    },
    '& .description': {
      display: 'none'
    }
  },
  cover: {
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.protektGreen,
      '& .title': {
        color: colors.white,
      },
      '& .icon': {
        color: colors.white
      },
      '& .description': {
        display: 'block',
        color: colors.white,
        padding: '48px',
        textAlign: 'center'
      }
    },
    '& .title': {
      color: colors.protektGreen,
    },
    '& .icon': {
      color: colors.protektGreen
    },
    '& .description': {
      display: 'none'
    }
  },
  title: {
    padding: '24px',
    paddingBottom: '0px',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '24px'
    }
  },
  icon: {
    fontSize: '60px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '100px',
    }
  },
  link: {
    textDecoration: 'none'
  }
});

class Home extends Component {

  constructor(props) {
    super()

    this.state = {
    }
  }

  render() {
    const { classes, t, location } = this.props;

    return (
      <div className={ classes.root }>
        <Card className={ `${classes.card} ${classes.cover}` } onClick={ () => { this.nav('get-protected') }}>
          <SecurityIcon className={ `${classes.icon} icon` } />
          <Typography variant={'h3'} className={ `${classes.title} title` }>{ "Get Protected" }</Typography>
          <Typography variant={'h4'} className={ `${classes.description} description` }>{ "Get coverage on any capital in a smart contract or DeFi protocol and pay with small fees on yield farming rewards." }</Typography>
        </Card>
        <Card className={ `${classes.card} ${classes.apr}` } onClick={ () => { this.nav('markets') } }>
          <BarChartIcon className={ `${classes.icon} icon` } />
          <Typography variant={'h3'} className={ `${classes.title} title` }>Shield Mining</Typography>
          <Typography variant={'h4'} className={ `${classes.description} description` }>{ "Earn rewards by depositing capital to take on the liabitlity of any smart contract or DeFi protocol."}</Typography>
        </Card>
      </div>
    )
  };

  nav = (screen) => {
    this.props.history.push(screen)
  }
}

export default withNamespaces()(withRouter(withStyles(styles)(Home)));
