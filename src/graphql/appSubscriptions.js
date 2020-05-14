const gql = require('graphql-tag');
const { useSubscription } = require('@apollo/react-hooks');

export const MENTION_SUBSCRIPTION = gql`
  subscription{
    newMention{
      _id
      mentionID
      mentionText
      tweetImages
      timeStamp
      in_reply_to_status_id_str
      tasks{
        _id
      }
      userData{
        twitterUserId
        mentionFromScreenName
        description
        profileImage
        location
      }
      replies{
        _id
        mentionID
        mentionText
        tweetImages
        timeStamp
        in_reply_to_status_id_str
        userData{
          twitterUserId
          mentionFromScreenName
          description
          profileImage
          location
        }
      }
  }
}`

export default () => useSubscription(MENTION_SUBSCRIPTION);