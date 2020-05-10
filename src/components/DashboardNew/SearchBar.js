import React from 'react'
import filterIcon from '../../images/filter.svg';
import bottomArrow from '../../images/bottomArrow.svg';

const SearchBar = () => {
  return (
    <div className="conv-header">
      <article className="conv-header__options">
      <h4 style={{marginBottom:0}}>Conversations</h4>
      <div className="search-container centerContent">
        <form action="/action_page.php">
          <input type="text" placeholder="Quick Search" name="search"/>
        </form>
      </div>
      <div className="conv-header__filter centerContent">
        <img src={filterIcon} style={{height:15,width:15,marginRight:8}} />
        <span>Filter</span>
      </div>
      </article>
      <div className="conv-header__status">
        <span>Online</span>
        <img src={bottomArrow} alt=""/>
      </div>
    </div>
  )
}

export default SearchBar;