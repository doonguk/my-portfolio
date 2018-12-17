import React,{ Component } from 'react';
import styles from './BlogFooter.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class BlogFooter extends Component{

    render(){
        const { onPrevious, onNext, isDisable1, isDisable2 } = this.props;
        //const isDisable1 = !page || page === '1'? true : false;
        // !page => 첫페이지 => disable1 true
        //const isDisable2 = parseInt(page,10) === lastPage || lastPage === 1 || lastPage === 0 ? true : false;
        // page == lastPage or lastPage가 1 => 마지막페이지 => disable2 true

        return(
            <div className={cx('blog-footer')}>
                <div className={cx('pre-btn', {isDisable1})} onClick={onPrevious}>Pre</div>
                <div className={cx('next-btn', {isDisable2})} onClick={onNext}>Next</div>
            </div>
        )
    }
}

export default BlogFooter;
