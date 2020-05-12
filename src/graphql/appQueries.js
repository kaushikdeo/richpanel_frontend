const gql = require('graphql-tag');

export const GREETINGS = gql`
  query greetings{
    greetings
}`;

export const FETCH_MENTIONS = gql`
  query fetchCurrentMentions{
    fetchCurrentMentions{
    _id
    mentionID
    mentionText
    tweetImages
    timeStamp
    tasks{
      _id
      taskText
      createdAt
      endDate
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
      userData{
        twitterUserId
        mentionFromScreenName
        description
        profileImage
        location
      }
    }
  }
}`;

