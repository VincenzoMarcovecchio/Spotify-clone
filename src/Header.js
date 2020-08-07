import React from 'react';
import { useDataLayerValue } from './DataLayer';
import './header.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
export default function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or nothing at all"
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="artist playing" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
