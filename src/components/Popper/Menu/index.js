import Tippy from "@tippyjs/react/headless";
import React from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss"

import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles)

const Menu = ({children, items = []}) => {

  const renderItems = () => {
    return items.map((item, index) => (
      <MenuItem key={index} data={item}/>
    ))
  }

  return (
      <Tippy
        interactive
        placement="bottom-end"
        delay={[0, 800]}
        render={(attrs) => (
          <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
              {renderItems()}
            </PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
  );
};

export default Menu;
