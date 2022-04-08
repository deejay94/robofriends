import React from "react";

export const SearchBox = ({setSearchField}) => {
    return (
        <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search" 
          placeholder="search robots" 
          onChange={(event) => setSearchField(event.target.value)}
        />
        </div>
    )
}