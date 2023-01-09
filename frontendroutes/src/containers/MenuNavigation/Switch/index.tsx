import React, { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { MenuRouteContext } from "../../../contexts/MenuRouteContext";
import styles from './styles.module.scss';

interface ISwitchMenuProps {
  children: ReactElement[]; 
}

const SwitchMenu = ({ children }: ISwitchMenuProps) => {

  const menuRouter = useContext(MenuRouteContext);

  const containerRef = useRef<HTMLElement | null>(null);
  const itemsMenuRef = useRef<HTMLDivElement[]>([]);

  
  const [itemMenuCurrent, setItemMenuCurrent] = useState(0);
  const [containerHeight, setContainerHeight] = useState(100);

  useEffect(() => {

    if (itemsMenuRef.current.length === 0) {
      return;
    }

    
    const { current } = menuRouter;
    
    const indexChildrenCurrent = Math.max(children.findIndex(item => item.props.path === current), 0);

    
    
    setItemMenuCurrent(indexChildrenCurrent);

  }, [children, menuRouter]);

  useEffect(() => {
    console.log('height', itemsMenuRef.current[itemMenuCurrent].getBoundingClientRect().height);
    
    setContainerHeight(itemsMenuRef.current[itemMenuCurrent].getBoundingClientRect().height);
  }, [itemMenuCurrent]);

  

  return (
    <section ref={containerRef} className={styles.switchContainer}
    >
      <div className={styles.itemRouterContent}
        style={{
          height: `${containerHeight}px`,
        }}
      >
        {children.map((item, index) => 
          (
            <div
              key={item.props.path}
              className={`${styles.itemRouter} 
                ${ index < itemMenuCurrent ? styles.prev : '' }  
                ${ index > itemMenuCurrent ? styles.next : '' }  
              `}
              ref={r => itemsMenuRef.current[index] = r as HTMLDivElement }
            >
              {index === itemMenuCurrent && item}
            </div>
        ))}
      </div>
    </section>)
};

export default SwitchMenu;