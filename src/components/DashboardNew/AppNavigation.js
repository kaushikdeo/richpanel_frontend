import React from 'react';

const AppNavigation = () => {
  return (
    <div className="app-header">
          <div className="app-header__updates">
            Updates
          </div>
          <div className="">
              <span className="pr-2">Sessions: 34 Minutes</span>
              <span className="img-container">
              <img src="https://www.alpinewebmedia.com/wp-content/uploads/2018/02/pictures-on-the-web-free-to-use.jpg" width='30' height='30' className="rounded-circle" alt="user" />
            </span>
          </div>
    </div>
  )
}

export default AppNavigation;
