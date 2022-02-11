import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => (
    <form action="/" method="get">
        <label  htmlFor="header-search">
            <span style={{width: '1px', overflow: 'hidden', height: '1px', display: 'none'}}>Search</span>
        </label>
        <input
            style={{borderRadius: '15px 0px 0px 15px', width: '90%', height: '35px', borderRightWidth: '0px'}}
            type="text"
            id="header-search"
            placeholder="Search...."
            name="s" 
        />
        <button style={{borderRadius: '0px 15px 15px 0px', width: '9%', height: '41px', backgroundColor: '#3C9FD9', color: 'white', borderLeftWidth: '0px'}}  type="submit"><FontAwesomeIcon icon={faSearch} style={{paddingRight: '5%'}} /></button>
    </form>
);

export default SearchBar;