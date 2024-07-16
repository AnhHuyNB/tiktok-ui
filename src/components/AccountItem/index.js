import React from 'react'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ad715e344a62c6ac764ad85e79610f8f.jpeg?lk3s=a5d48078&nonce=27577&refresh_token=c67b647422957e37a1c250bc135032da&x-expires=1721116800&x-signature=s2rvyGtHfPjs05vAsyTZ1fpYF8I%3D&shp=a5d48078&shcp=81f88b70'
       alt="Hoaa"/>
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyễn Văn A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
        </p>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  )
}

export default AccountItem