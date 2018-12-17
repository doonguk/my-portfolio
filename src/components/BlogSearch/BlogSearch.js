import React from 'react';
import styles from './BlogSearch.module.scss';
import classNames from 'classnames/bind';
import moment from 'moment';
import search from 'files/blog/search2.png';


const cx = classNames.bind(styles);

const BlogSearch = ({value, onChange, onPush, posts, onSearch, onKeyPress}) => {
 
    const mapToPost = posts.map(
       (post) => {
           const { title, body, tags, publishedDate, _id } = post;
            if( value !== ''){
                const mapToTag = tags.length === 0 ? '-1' : tags.map(
                    (tag) => {
                        return tag.toLowerCase().indexOf(value.toLowerCase());
                    }
                )//tag is List => map => 각각 비교
                //조건을 거쳐도 tags가 [] 일경우 mapToTag.indexOf값은 항상-1이여서 필터링해줘야함
                if( title.toLowerCase().indexOf(value.toLowerCase()) > -1 || body.toLowerCase().indexOf(value.toLowerCase()) > -1 || mapToTag.indexOf(-1) === -1){
                    return(
                        <div className={cx('search-post')} key={_id} onClick={()=>onPush(_id)}>
                            <div className={cx('description')}>
                                <h1>{title}</h1>
                                <span className={cx('date')}>{moment(publishedDate).format('ll')}</span>
                                <span>
                                {
                                    tags.map(
                                        (tag) => {
                                            return(
                                                <span className={cx('tag')} key={tag}>#{tag}</span>
                                            )
                                        }
                                    )
                                }</span>
                            </div>
                            <div className={cx('body')}>{body}</div>
                        </div>
                    )
                }
            }
       }
   )
    return(
        <div className={cx('search-template')}>
            <h1>SEARCH</h1>
            <div className={cx('description')}>Keyword를 넣어보세요! ( Blog Post 기준으로 검색 됩니다.) </div>
            <div className={cx('input-box')}>
                <input value={value}
                       onChange={onChange}
                       onKeyPress={onKeyPress}
                       autoFocus
                />
                <div className={cx('search-btn')} onClick={()=>onSearch(value)}><img src={search} alt="search"/></div>
            </div>
            <div className={cx('search-list')}>
                {mapToPost}
            </div>
        </div>
    )
}

export default BlogSearch;