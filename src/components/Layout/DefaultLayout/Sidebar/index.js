import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import React from 'react'

const cx = classNames.bind(styles)

const Sidebar = () => {
  return (
    <div className={cx('wrapper')}>
      <h2>Sidebar</h2>
    </div>
  )
}

export default Sidebar