import React, { useEffect, useState } from 'react';
import VerticalNav from './VerticalNav';
import AppNavigation from './AppNavigation';
import SearchBar from './SearchBar';
import OverView from './OverView';
import { compose } from 'react-apollo';
import { graphql} from '@apollo/react-hoc';
import { FETCH_MENTIONS } from '../../graphql/appQueries';
import { ADDNEWTASKTOMENTION, SETUP_WEBHOOK } from '../../graphql/appMutations';
import { MENTION_SUBSCRIPTION } from '../../graphql/appSubscriptions';
import Mentions from './Mentions';

const Dashboard = ({fetchMentions, addNewMentionTask, newMention}) => {
  const [mentions, setMentions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentMention, setCurrentMention] = useState(null);

  useEffect(() => {
    if (fetchMentions && 
        !fetchMentions.loading && 
        fetchMentions.fetchCurrentMentions && 
        fetchMentions.fetchCurrentMentions.length > 0) {
          setIsLoading(false);
          setMentions(fetchMentions.fetchCurrentMentions.sort((a, b) => b.timeStamp - a.timeStamp));
    }
  }, [fetchMentions]);

  useEffect(() => {
    if (newMention && !newMention.loading && newMention.newMention) {
      let allStateMentions = [...mentions];
      const index = allStateMentions.findIndex((e) => e.mentionID === newMention.newMention[0].mentionID);
      index === -1 ?
        allStateMentions.unshift(newMention.newMention[0]) :
        allStateMentions[index] = newMention.newMention[0];
        setMentions(allStateMentions.sort((a, b) => b.timeStamp - a.timeStamp));
        setCurrentMention(newMention.newMention[0]);
      }
  }, [newMention]);

  const setSelectedMention = (mentionId) => {
    const selectedMention = mentions.find(m => m.mentionID == mentionId);
    setCurrentMention(selectedMention);
  }

  const handleLogoutClick = () => {
    window.open("https://richpaneldash.herokuapp.com/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };

  const handleAddNewTask = (mentionID, taskText) => {
    if (taskText) {
      addNewMentionTask({
        variables: {
          mentionId: mentionID,
          taskText,
        }
      }).then(res =>{
         const allMentions = [...mentions];
         const selectedMention = allMentions.find(m => m.mentionID === mentionID);
         selectedMention.tasks.push(res.data.addNewMentionTask);
         const filteredMentions = allMentions.filter(me => me.mentionID !== mentionID);
         filteredMentions.push(selectedMention);
          setMentions(filteredMentions.sort((a, b) => b.timeStamp - a.timeStamp));
      });
    }
  }

  const handleAddMentionReply = (reply) => {
    let allStateMentions = [...mentions];
    const index  = mentions.findIndex(m => m.mentionID === reply.in_reply_to_status_id_str);
    if (index >= 0) {
      allStateMentions[index].replies.push(reply);
    }
    setMentions(allStateMentions.sort((a, b) => b.timeStamp - a.timeStamp));
  }
  return (
    <div className='container-fluid pl-0 pr-0'>
      <div style={{display:'flex',minWidth:938}}>
        <div style={{width:60}}>
          <VerticalNav handleLogoutClick={handleLogoutClick} />
        </div>
        <div style={{width:'calc(100% - 60px)'}}>
        <div className='' style={{width:'94%',margin:'0 auto'}}>
          <AppNavigation />
          <div className="row">
            <div className="col">
              <SearchBar />
            </div>
          </div>
          <OverView currentMention={currentMention} setSelectedMention={setSelectedMention} handleAddMentionReply={handleAddMentionReply} handleAddNewTask={handleAddNewTask} isLoading={isLoading} mentions={mentions} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default compose(
  graphql(FETCH_MENTIONS, {name: 'fetchMentions'}),
  graphql(ADDNEWTASKTOMENTION, { name: 'addNewMentionTask' }),
  graphql(MENTION_SUBSCRIPTION, { name: 'newMention' })
)(Dashboard);
