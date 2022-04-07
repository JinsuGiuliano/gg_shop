import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
  DirectoryMenuContainer
} from './postPreview.styles';


const PostPreview = ({posts, match}) => {
    return(
        
              <DirectoryMenuContainer
                className='mb-0'
              >
                {
                    posts && posts.map((post,index)=>( 

                      post.publish?
                      <Link to={`/posts/${post._id}`} key={index}>
                       <MenuItemContainer>
                          <BackgroundImageContainer
                            className='background-image py-5'
                            imageUrl={post.photos[0]}
                            size={100}
                          >
                          </BackgroundImageContainer>
                          <ContentContainer className='content'>
                                <ContentTitle>{post.title}</ContentTitle>
                                <ContentSubtitle >{post.description}</ContentSubtitle>
                          </ContentContainer>
                        </MenuItemContainer>

                      </Link>
                      :
                      <div style={{display:'none'}}></div>
                    ))
                }
              </DirectoryMenuContainer>
    )
}

export default withRouter(PostPreview);