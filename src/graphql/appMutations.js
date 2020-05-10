const gql = require('graphql-tag');

export const REPLYTOMENTION = gql`
  mutation replyToMention($InReplyToStatus:String! $replyText: String $userHandle: String){
    replyToMention(InReplyToStatus: $InReplyToStatus replyText: $replyText userHandle: $userHandle) {
      success
      message
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