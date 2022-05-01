import React, { Component } from 'react';
import { connect } from 'react-redux';
//u acction je fajl index.js u kome se named exportuju akcije, te ne moramod a kucamo actions/index.js
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button onClick={() => this.props.selectSong(song)} className='ui button primary'>Select</button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            );
        });
    }

    render() { 
        return (
            <div className='ui divided list'>{this.renderList()}</div>
        );
    }
};

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

//ovako ce connect funkcija uzeti action i pastovati kao props u komponantu SongList, a u kojoj se koristi kao kolback funkcija click event hendlera 
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);