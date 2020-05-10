import React from 'react';

const Login = () => {
  return (
    <div className="lp">
      <nav className="lp__nav">
        <img src="https://cdn.pixabay.com/photo/2016/12/19/03/14/computer-1917230__480.png" className="lp__nav__logo" />
        <p className="lp__nav__text">Studio.</p>
      </nav>
      <section className="lp__body">
      <div className="lp__text">
        <h1 className="lp__text__title"><span className="lp__text__title-first">Invite</span>
          Designers</h1>
        <p className="lp__text__subtext">Invite designers below who want to share their work on Dribble.</p>
      </div>
      <div className="lp__mainImg">
        <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/experience_design_eq3j.svg" className="lp__mainImg__img" />
      </div>
      </section>
    </div>
  );
}