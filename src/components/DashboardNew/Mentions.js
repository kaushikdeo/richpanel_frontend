import React from 'react';
import MentionPreviewCard from './MentionPreviewCard';

const Mentions = ({mentions, setSelectedMention, isLoading, currentMention}) => {
  const renderMentions = () => {
    if (mentions && mentions.length > 0 && !isLoading) {
      return mentions.map(mention => {
        return (
          <div key={mention.mentionID} style={{width:'100%'}} onClick={() => setSelectedMention(mention.mentionID)}>
            <MentionPreviewCard setSelectedMention={setSelectedMention} mention={mention} currentMention={currentMention} />
          </div>
        )
      })
    } else {
      return(
        <div style={{width:'100%',height:'calc(100vh - 146px)',borderRadius:'7px',margin:'2px 0',boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        </div>
      )
    }
  }
  return (
    <div>
      {renderMentions()}
    </div>
  );
}

export default Mentions;
