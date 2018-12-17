import React from 'react';
import styles from './BlogCategory.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';

import star from 'files/blog/star.png';

const cx = classNames.bind(styles);

const BlogCategory = ({posts}) => {
    
    const mapToName = () => {
        let count = 0;
         return(
            posts.map(
                (post) => {
                    count = count + 1;
                    if(count > 6) return null; //최신 5개만 렌더링
                    const { title, _id, publishedDate } = post;
                    return(
                        <li key={_id}>
                            <Link className={cx('contents-name')} to={`/post/${_id}`}>
                                {title}
                            </Link>
                            <span className={cx('publishedDate')}>{moment(publishedDate).format('ll')}</span>
                        </li>
                    )
                }
            )
        )
    }
    const mapToCategory = (cate) => {
        return(
            posts.map(
                (post) => {
                    const { title, _id, publishedDate, category } = post;
                    if(cate === category ){
                        return(
                        <li key={_id}>
                            <Link className={cx('contents-name')} to={`/post/${_id}`}>
                            {title}
                            </Link>
                            <span className={cx('publishedDate')}>{moment(publishedDate).format('ll')}</span>
                        </li>
                        )
                    }
                }
            )
        )
    }

    return(
        <div className={cx('category-template')}>
            <div className={cx('recent-post')}>
                <div className={cx('recent-post-title')}>
                    <img src={star} alt="start"/>
                    <span>Recent Post</span>
                </div>
                <div className={cx('recent-contents')}>
                    <ul>
                        {mapToName()}
                    </ul>
                </div>
            </div>
            <div className={cx('category-post')}>
                <div className={cx('title')} id="FreeBoard">FreeBoard</div>
                <div className={cx('category-contents')}>
                    <ul>
                    {mapToCategory('FreeBoard')}
                    </ul>
                </div>
                <div className={cx('title')} id="PlayGround">PlayGround</div>
                <div className={cx('category-contents')}>
                    <ul>
                    {mapToCategory('PlayGround')}
                    </ul>
                </div>
                <div className={cx('title')} id="Computer">Computer Science</div>
                <div className={cx('category-contents')}>
                    <ul>
                    {mapToCategory('Computer Science')}
                    </ul>
                </div>
                <div className={cx('title')} id="NodeJs">NodeJs</div>
                <div className={cx('category-contents')}>
                    <ul>
                    {mapToCategory('NodeJs')}
                    </ul>
                </div>
                <div className={cx('title')} id="React">React</div>
                <div className={cx('category-contents')}>
                    <ul>
                    {mapToCategory('React')}
                    </ul>
                </div>
                <div className={cx('title')} id="JavsScript">JavaScript</div>
                <div className={cx('category-contents')}>
                    <ul>
                    {mapToCategory('JavaScript')}
                    </ul>
                </div>
                <div className={cx('title')} id="Python">Python</div>
                <div className={cx('category-contents')}>
                    <ul>
                    {mapToCategory('Python')}
                    </ul>
                </div>
                {/* <div className={cx('title')} id="Django">Django</div>
                <div className={cx('category-contents')}>
                    <ul>
                    {mapToCategory('Django')}
                    </ul>
                </div> */}
            </div>
        </div>
    )   
}

export default BlogCategory;
