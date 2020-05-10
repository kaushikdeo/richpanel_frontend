import React from 'react';
import image1 from '../../images/1.jpg';
import rubyIcon from '../../images/ruby.png';
import homeIcon from '../../images/home.svg';
import menIcon from '../../images/men.svg';
import chatIcon from '../../images/communications.svg';
import cardIcon from '../../images/credit-card.svg';
import storeIcon from '../../images/store.svg';
import settingIcon from '../../images/settings.svg';

const VerticalNav = ({handleLogoutClick}) => {
  return (
    <div style={{background:'#f7f7f7',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      <ul className="nav flex-column" style={{paddingLeft:0,paddingRight:0}}>
        <li className="nav-item">
          <a className="nav-link active" style={{display:'flex',justifyContent:'center',alignItems:'center'}} href="#">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:25,width:30,marginTop:5,marginBottom:25}}>
              <img onClick={handleLogoutClick} src={rubyIcon} alt="" style={{height:'100%',width:'100%'}}/>
            </div>
          </a>
        </li>
        <li className="nav-item custom-nav-item" style={{marginTop:15}}>
          <a className="nav-link active" style={{display:'flex',justifyContent:'center',alignItems:'center'}} href="#">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:20,width:20}}>
              <img src={homeIcon} alt="" style={{height:'100%',width:'100%'}}/>
            </div>
          </a>
        </li>
        <li className="nav-item custom-nav-item" style={{marginTop:15}}>
          <a className="nav-link" style={{display:'flex',justifyContent:'center',alignItems:'center'}} href="#">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:20,width:20}}>
            <img src={menIcon} alt="" style={{height:'100%',width:'100%'}}/>
              {/* test */}
            </div>
          </a>
        </li>
        <li className="nav-item custom-nav-item" style={{marginTop:15}}>
          <a className="nav-link" style={{display:'flex',justifyContent:'center',alignItems:'center'}} href="#">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:20,width:20}}>
            <img src={chatIcon} alt="" style={{height:'100%',width:'100%'}}/>
              {/* test */}
            </div>
          </a>
        </li>
        <li className="nav-item custom-nav-item" style={{marginTop:15}}>
          <a className="nav-link" style={{display:'flex',justifyContent:'center',alignItems:'center'}} href="#">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:20,width:20}}>
            <img src={cardIcon} alt="" style={{height:'100%',width:'100%'}}/>
              {/* test */}
            </div>
          </a>
        </li>
        <li className="nav-item custom-nav-item" style={{marginTop:15}}>
          <a className="nav-link" style={{display:'flex',justifyContent:'center',alignItems:'center'}} href="#">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:20,width:20}}>
            <img src={storeIcon} alt="" style={{height:'100%',width:'100%'}}/>
              {/* test */}
            </div>
          </a>
        </li>
      </ul>
      <ul className="nav flex-column" style={{paddingLeft:0,paddingRight:0,paddingBottom:20}}>
      <li className="nav-item custom-nav-item" style={{marginTop:15}}>
          <a className="nav-link" style={{display:'flex',justifyContent:'center',alignItems:'center'}} href="#">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:20,width:20}}>
            <img src={settingIcon} alt="" style={{height:'100%',width:'100%'}}/>
              {/* test */}
            </div>
          </a>
        </li>
      <li className="nav-item" style={{marginTop:15}}>
          <a className="nav-link" style={{display:'flex',justifyContent:'center',alignItems:'center'}} href="#">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:35,width:35,borderRadius:'10rem',overflow:'hidden'}}>
            <img src={image1} alt="" style={{height:'100%',width:'100%'}}/>
              {/* test */}
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default VerticalNav;
