import React from 'react';
import './sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
export default function SideBar() {
  const [{ playlist }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      />
      <SidebarOption option="Home" Icon={HomeIcon} />
      <SidebarOption option="Search" Icon={SearchIcon} />
      <SidebarOption option="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">playlists</strong>
      <hr />
      {playlist?.items?.map((list, index) => (
        <SidebarOption key={index} option={list.name} />
      ))}
      <SidebarOption option="Hip hop" />
      <SidebarOption option="Rock" />
      <SidebarOption option="RnB" />
    </div>
  );
}
