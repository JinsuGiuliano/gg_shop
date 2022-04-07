import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { Photo } from './photo/photo.component';
import Menu from '../menu/menu.component';

const PostView = ({posts, match}) => {
    const post = posts.find(e => e._id === match.params.postId)
    console.log(post.photos)
    return(

        <div>
            <Menu/>
            <div className='row p-0'>
            <div className='col-12 '>
            <Photo photo={post.photos[0]} size={100} className="p-0"/>
            <h2 className='text-center'>{post.title}</h2>
            </div>
                <div className='col-12 d-flex justify-content-center px-5'>
                <div className='row px-5'>
                    <div className='col-4 px-4'>
                        <h6 className='text-left   mx-4'>{post.description}</h6>
                        <div className='row mx-3'>
                        {
                            post.photos && 
                            post.photos.map((p,i)=>(
                               <div className='col-12' key={i}>
                               <Photo photo={p} size={100} className="p-0"/>
                               </div> 
                            ))
                        }
                        </div>
                    </div>
                    <div className='col-8 px-1'>
                        
                        {
                            post.text.split("\n").map((p,i)=>(
                                <p key={i} className='text-left px-5 mx-5'>
                                   {p} 
                                </p>
                            ))
                        }
                    </div>
                </div>
                  
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      posts: state.posts
    };
  };
export default  withRouter(connect(mapStateToProps)(PostView));