import React, {useState, useRef} from 'react';
import { compose } from 'react-apollo';
import { graphql} from '@apollo/react-hoc';
import { REPLYTOMENTION } from '../../graphql/appMutations';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Mention = ({currentMention, replyToMention, handleAddNewTask}) => {
  const [taskText, setTaskText] = useState('');
  const [modalStatus, setModalStatus] = useState(false);
  const messageBoxRef = useRef(null);

  const handleEnterReply = (e) => {
    if(messageBoxRef.current){
      if (messageBoxRef.current.innerText !== '') {
        console.log(messageBoxRef.current.innerText,'here is the value')
        replyToMention({
          variables: {
            InReplyToStatus: currentMention.mentionID,
            replyText: messageBoxRef.current.innerText,
            userHandle: currentMention.userData.mentionFromScreenName,
          }
        })
        .then(res => messageBoxRef.current.innerText='')
        .catch(err => console.log(err));
      }
    }
  }

  const renderReplies = () => {
    if (currentMention && currentMention.replies && currentMention.replies.length > 0) {
      console.log('currentMention.replies', currentMention.replies);
      return currentMention.replies.map(reply => {
        console.log('REPLY REPLY', reply)
        return (
          <article style={{display:'flex',padding:'15px 0'}}>
            <div className='task-view-area__content__profile'><img src={reply.userData.profileImage} alt=""/> </div>
            <div style={{flex:1}}>
              <p style={{margin:0,fontSize:12}}>{reply.mentionText}</p>
              <div style={{display:'flex',padding:'10px 0'}}>
              {
                reply.tweetImages && reply.tweetImages.length > 0 ?
                (reply.tweetImages.map(data=>(
                  <div className='task-view-area__content__attachments'><img src={data} alt=""/> </div>
                ))): null
              }
              </div>
            </div>
            <div style={{width:60}}><span style={{fontSize:10}} >{new Date(currentMention.timeStamp).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")}</span></div>
          </article>
        )
      })
    }
  }

  const handleCloseModal = () => {
    setModalStatus(false);
  }

  const handleOpenModal = () => {
    setModalStatus(true);
  }

  const addNewTask = () => {
    handleAddNewTask(currentMention.mentionID, taskText)
    setTaskText('');
    setModalStatus(false);
  }

  if (currentMention) {
    return (
      <section>
        <header className='task-view-area__header'>
          <article className='task-view-area__header__info'>
            <div className='task-view-area__header__info__profile'>
            <div className='task-view-area__header__info__profile__photo'><img src={currentMention.userData.profileImage} alt="data"/> </div>
            <p style={{margin:0,fontSize:16}}>{currentMention.userData.mentionFromScreenName}</p>
            <span style={{height:8,width:8,borderRadius:15,background:'limegreen',marginLeft:5,marginTop:1.5}}></span>
            </div>
            <p style={{margin:0,fontSize:14}}>Room: 132</p>
            <p style={{margin:0,fontSize:14}}>Oct 1 - Oct 12</p>
          </article>
          <button onClick={handleOpenModal} style={{background:'#f7f7f7',border:'none',borderRadius:'10rem',padding:'5px 15px',fontSize:14}}>Create a task</button>
        </header>
        <article className='task-view-area__content'>
          <div className='task-view-area__content__view'>
            <article style={{display:'flex',padding:'15px 0'}}>
              <div className='task-view-area__content__profile'><img src={currentMention.userData.profileImage} alt=""/> </div>
              <div style={{flex:1}}>
                <p style={{margin:0,fontSize:12}}>{currentMention.mentionText}</p>
                <div style={{display:'flex',padding:'10px 0'}}>
                  <Rodal animation='zoom' customStyles={{border: '1px solid black'}} width={500} visible={modalStatus} onClose={handleCloseModal}>
                    <div style={{flex: 1, width: '100%', alignSelf: 'center', padding: 10}}>Add Task</div>
                    <div style={{padding: 10}}>
                      <input style={{flex: 1, width: '100%', alignItems: 'center'}} onChange={(e) => setTaskText(e.target.value)} />
                    </div>
                    <div>
                      <button style={{flex: 1, width: '100%', alignItems: 'center', padding: 10}} type="button" class="btn btn-primary" onClick={addNewTask}>
                        Add New Task
                      </button>
                    </div>
                  </Rodal>
                {
                  currentMention.tweetImages && currentMention.tweetImages.length > 0 ?
                  (currentMention.tweetImages.map(data=>(
                    <div className='task-view-area__content__attachments'><img src={data} alt=""/> </div>
                  ))): null
                }
                </div>
              </div>
              <div style={{width:60}}><span style={{fontSize:10}} >{new Date(currentMention.timeStamp).toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")}</span></div>
            </article>
            {renderReplies()}
          </div>
          <article className='task-view-area__content__input'>
          {/*<input onChange={(e) => handleEnterReply(e)}/>*/}
          <div style={{display: 'flex', alignItems: 'flex-end'}}>
            <div ref={messageBoxRef} style={{flex: 1, border:'1.5px solid gray',borderRadius:7,outline:'none',padding:'4px 10px'}}contentEditable={true} ></div>          
            <button type="button" class="btn btn-primary" onClick={handleEnterReply}>
              Fire Reply
            </button>
          </div>
          </article>
        </article>
      </section>
    );
  } else {
    return(
      <div style={{flex: 1, width: '100%', textAlign: 'center', padding:10}}>NO MENTIONS YET</div>
    )
  }
}

export default compose(
  graphql(REPLYTOMENTION, { name: 'replyToMention' }),
)(Mention);