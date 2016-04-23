/**
 * Created by jonathan on 21-4-16.
 */

import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import {connect} from 'react-redux'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    marginBottom: 24,
  },
};



export class RoseGridList extends React.Component  {



  render(){

    return  ( <div style={styles.root}>
        <h1>dude</h1>
      <GridList
        cellHeight={200}
        style={styles.gridList}
      >
        {this.props.roses.map(rose => (
          <GridTile
            key={rose.key}
            title={rose.name}
            subtitle={<span><b>{rose.strain}</b></span>}
            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
          >
            <img src={rose.image} />
          </GridTile>
        ))}
      </GridList>
    </div>
  );
  }


}

function anus(state){
  return {roses: state.roses.tables.roses}
}

const RoseGridListContainer = connect(
  anus
)(RoseGridList)



export default RoseGridListContainer;
