import React from 'react';
import phoneIcon from '../../images/phoneIcon.svg'
import mailIcon from '../../images/mail.svg'
import closeIcon from '../../images/close.svg'

const Profile = ({currentMention}) => {
  const renderTasks = () => {
    if (currentMention && currentMention.tasks && currentMention.tasks.length > 0) {
      return currentMention.tasks.map(task => {
        return <div style={{display:'flex'}}><input checked={task.isCompleted} style={{marginTop:3.5}} type="checkbox" name="" id=""/> <label style={{margin:0,marginLeft:10}} htmlFor="">{task.taskText}</label></div>
      })
    } else {
      return <div className='centerContent' style={{minHeight:100}}><p>NO TASKS YET</p></div>
    }
  }
  return currentMention ?
  (
    <div>
      <div className="row">
        <div style={{height:52,width:'100%',display:'flex',justifyContent:'flex-end',padding:"8px 20px"}}>
          <div className='profile-section__close'> <img src={closeIcon} alt="" style={{height:18,width:18}}/> </div>
        </div>
        <div className="user-detail-section">
            <div style={{display:'flex',height:80,width:80}}>
            <img src={currentMention.userData.profileImage} style={{height:'100%',width:'100%'}} className="rounded-circle" alt="user" />
            </div>
        </div>
      </div>
      <div style={{textAlign:'center'}}>
        <h5 style={{marginBottom:0}}>{currentMention.userData.mentionFromScreenName}</h5>
        <p style={{color:'limegreen'}}>Online</p>
      </div>
     
      <div style={{width:'90%',margin:'0 auto',display:'flex',justifyContent:'space-between'}}>
        <div>
          
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#cbcbcb',cursor:'pointer',border:'none',width:80,borderRadius:'10rem'}}>
        <img src={phoneIcon} style={{height:13,width:13,marginRight:7}} /><span>Call</span>
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#cbcbcb',cursor:'pointer',border:'none',width:80,borderRadius:'10rem'}}>
        <img src={mailIcon} style={{height:15,width:17,marginRight:7}} /><span>Email</span>
        </div>
      </div>
      <div style={{padding:'30px 10px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{fontSize:14}}>Room</span><span style={{fontSize:14}}>102</span></div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{fontSize:14}}>Category</span><span style={{fontSize:14}}>Standard</span></div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{fontSize:14}}>Country</span><span style={{fontSize:14}}>India</span></div>
      </div>
     <div style={{border:'1px solid transparent',borderTopColor:'#cbcbcb',paddingTop:10}}>
       <h5>Tasks</h5>
       {renderTasks()}
     </div>
    </div>
  ): (
    <h6 style={{padding:10}}>No User Selected</h6>
  );
}

export default Profile;
