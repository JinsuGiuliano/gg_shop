import React, { Component } from 'react'
import { connect } from "react-redux";
import { retrievePosts } from '../../../../actions/posts'
import PostPreview from './previews/postPreview.component';

class HomePosts extends Component {

  componentDidMount() {
    this.props.retrievePosts();
  }

    render (){
        const { posts } = this.props;
        return(
            <div className="section-container">
            <div className="row">
            <div className="col-12 col-md-12 mb-5">
                <h2 className="text-center">Zie onze laatse updates</h2>
            </div>
            </div>
                <PostPreview
                posts={posts}
                />
        </div>
        )
    }   
}
const mapStateToProps = (state) => {
    return {
      posts: state.posts,
    };
  };
    export default connect(mapStateToProps,{
      retrievePosts
    })(HomePosts);