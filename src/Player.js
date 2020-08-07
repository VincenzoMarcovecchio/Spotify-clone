import React from 'react';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';
import './player.css';
export default function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}
