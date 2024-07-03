import { gql, request } from 'graphql-request/build/cjs/index.js';

const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clx2qqqim017f07v16e4xnenq/master";

export const getCourseList=async(level)=>{
    const query=gql`
    query CourseList {
        courses(where: {level: `+level+`}) {
          id
          name
          level
          tags
          unit
          time
          author
          description {
      markdown
    }
          banner {
            url
          }
          chapters {
      content {
        html
        markdown
      }
      output {
        markdown
      }
      title
      id
    }
        }
      }
  `

  const result=await request(MASTER_URL,query);
  return result;
}


export const enrollCourse=async(courseId,userEmail)=>{
  const mutationQuery=gql`
  mutation MyMutation {
  createUserConrolledCourse(
    data: {courseId: "`+courseId+`", 
    userEmail: "`+userEmail+`", course: {connect: {id: "`+courseId+`"}}}
  ) {
    id
  }
  publishManyUserConrolledCoursesConnection(to: PUBLISHED) {
    edges {
      node {
        id
      }
    }
  }
}
  `

  const result=await request(MASTER_URL,mutationQuery);
  return result;
}