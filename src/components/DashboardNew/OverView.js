import React, {useState} from 'react';
import Mentions from './Mentions';
import Mention from './Mention';
import Profile from './Profile';
import '../../index.css';

const OverView = ({mentions, isLoading, handleAddNewTask, handleAddMentionReply, setSelectedMention, currentMention}) => {
  return (
    <div className="row">
      <div className="col-3 mentionsSection">
        <Mentions isLoading={isLoading} setSelectedMention={setSelectedMention} mentions={mentions} currentMention={currentMention} />
      </div>
      <section className='col-9 tweet-view'>
      <article className='row tweet-view-wrap'>
      <div className="col-9 tweet-view-area" style={{marginBottom:0,paddingBottom:0}}>
        <Mention handleAddMentionReply={handleAddMentionReply} handleAddNewTask={handleAddNewTask} currentMention={currentMention} />
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
