const gql = require('graphql-tag');

export const REPLYTOMENTION = gql`
  mutation replyToMention($InReplyToStatus:String! $replyText: String $userHandle: String){
    replyToMention(InReplyToStatus: $InReplyToStatus replyText: $replyText userHandle: $userHandle) {
    _id
    mentionID
    mentionText
    tweetImages
    timeStamp
    in_reply_to_status_id_str
    tasks{
      _id
      taskText
      createdAt
      endDate
      mentionId
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
      }
    }
  }
}
`;

export const ADDNEWTASKTOMENTION = gql`
  mutation addNewMentionTask($mentionId: String! $taskText: String!){
    addNewMentionTask(mentionId: $mentionId taskText: $taskText) {
      _id
      taskText
      createdAt
      endDate
      mentionId
  }
}
`;