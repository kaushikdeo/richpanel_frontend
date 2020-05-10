import React from 'react';
import MentionPreviewCard from './MentionPreviewCard';

const Mentions = ({mentions, setSelectedMention, isLoading}) => {
  const renderMentions = () => {
    if (mentions && mentions.length > 0 && !isLoading) {
      return mentions.map(mention => {
        return (
          <div key={mention.mentionID} style={{width:'100%'}} onClick={() => setSelectedMention(mention.mentionID)}>
            <MentionPreviewCard setSelectedMention={setSelectedMention} mention={mention} />
          </div>
        )
      })
    } else {
      return(
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
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
