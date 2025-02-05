import React from "react";

export default function Header() {
    return (
        <div>
          <header>
            <form id="search-form">
              <input
                type="search"
                id="search-input"
                placeholder="Enter a city..."
                required
              />
              <input type="submit" id="search-button" value="search" />
            </form>
          </header>
        </div>
      );
}