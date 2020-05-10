import React, {useState} from 'react';
import Mentions from './Mentions';
import Mention from './Mention';
import Profile from './Profile';
import '../../index.css';

const OverView = ({mentions, isLoading, handleAddNewTask, handleEnterReply}) => {
  const [currentMention, setCurrentMention] = useState(null);
  const setSelectedMention = (mentionId) => {
    const selectedMention = mentions.find(m => m.mentionID == mentionId);
    setCurrentMention(selectedMention);
  }
  return (
    <div className="row">
      <div className="col-3 mentionsSection">
        <Mentions isLoading={isLoading} setSelectedMention={setSelectedMention} mentions={mentions} />
      </div>
      <section className='col-9 tweet-view'>
      <article className='row tweet-view-wrap'>
      <div className="col-9 tweet-view-area" style={{marginBottom:0,paddingBottom:0}}>
        <Mention handleEnterReply={handleEnterReply} handleEnterReply={handleEnterReply} handleAddNewTask={handleAddNewTask} currentMention={currentMention} />
      </div>
      <div className="col-3">
        <Profile currentMention={currentMention} />
      </div>
      </article>
      </section>
    </div>
  );
}

export default OverView;
