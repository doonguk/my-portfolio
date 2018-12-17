import React from 'react';
import styles from './BlogPostList.module.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';
import moment from 'moment';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const BlogPost = ({id, title, body, tags, publishedDate, logged, onDelete, onRevise}) => {
    const tagList = tags ? tags.map(
        (tag) => {
            return(
                <Link key={tag} to={`/tag/${tag}`} className={cx('tag')}
                onClick={()=>{window.location.reload()//태그 누를시 새로고침해서 렌더링 잘 되게..
                 }}>#{tag}</Link>
            )
        }
    ) : null; // tags props 가 있으면 map 하고 없으면 null;
    return(
        <div className={cx('post-template')}>
            <div className={cx('post-header')}>
                <div className={cx('post-title')}>{title}</div>
                <div className={cx('description')}>
                    <div className={cx('post-date')}>{moment(publishedDate).format('ll')}</div>
                    <div className={cx('comment')}>0 Comments |</div>
                    <div className={cx('tags')}>{tagList}</div>
                </div>

                <div className={cx('mobile-description')}>
                    <div className={cx('flex-box')}>
                        <div className={cx('comment')}>0 Comments |</div>
                        <div className={cx('post-date')}>{moment(publishedDate).format('ll')}</div>
                    </div>
                    <div className={cx('tags')}>{tagList}</div>
                </div>

            </div>
            <div className={cx('post-body')}>
                <MarkdownRender
                markdown={body}
                />
            </div>
            <div className={cx('post-footer')}>
                {logged &&
                    <div className={cx('btns')}> 
                        <div onClick={()=>onDelete(id)}>Delete Post</div>
                        <div onClick={()=>onRevise(id)}>Revise Post</div>
                    </div>
                }
                <div className={cx('post-comment')}>
                    <div className={cx('total-comment')}>댓글 0</div>
                    <textarea disabled placeholder="Comment is disabled, Sorry"/>
                </div>
            </div>
        </div>
    )
}

const BlogPostList = ({posts, onePost,logged, onDelete, onRevise, keyword }) => {
    const mapToPost = posts.map(
        (post) => {
            const { title, body, tags, publishedDate, _id} = post;
            return(
                <BlogPost
                title={title}
                body={body}
                tags={tags}
                publishedDate={publishedDate}
                key={_id}
                id={_id}
                logged={logged}
                onDelete={onDelete}
                onRevise={onRevise}
                />
              
            )
        }
    )
    if(onePost){ // params.id 로 post 한개만 랜더링시 map 할 경우 오류
        const { title, body, tags, publishedDate, _id } = onePost; 
        return(
        <div className={cx('postlist-template')}>
            <BlogPost
            title={title}
            body={body}
            tags={tags}
            publishedDate={publishedDate}
            key={_id}
            id={_id}
            logged={logged}
            onDelete={onDelete}
            onRevise={onRevise}
            />
        </div>
        )
    }
    return(
        <div className={cx('postlist-template')}>
            { keyword && <div className={cx('search-title')}><span>{keyword}</span> 가(를) 포함된 검색결과 입니다</div>}
            {mapToPost}
        </div>
    )
}

export default BlogPostList;