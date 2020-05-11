import React from 'react';
import Profile from './Profile';

const MentionPreviewCard = ({mention}) => {
  return (
    <div id='mention-prev-card'>
      <article style={{display:'flex'}}>
      <div>
        <img src={mention.userData.profileImage} style={{height:30,width:30,borderRadius:100,boxShadow:'0 0 rgba(0,0,0,0.2)'}}/>
      </div>
      <div style={{marginLeft:20}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <h6 className="card-title" style={{marginBottom:0,marginRight:8,fontSize:14}}>{mention.userData.mentionFromScreenName}</h6>
        </div>
      <p className="card-text" style={{fontSize:12,marginTop:2,marginBottom:0,}}>{mention.mentionText}</p>
      </div>
      </article>
      {/* <p className="card-text" style={{fontSize:12}}>{mention.timeStamp}</p> */}
    </div>  
  );
}

export default MentionPreviewCard;
