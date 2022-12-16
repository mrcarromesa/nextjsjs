import React, { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { MenuRouteContext } from "../../../contexts/MenuRouteContext";
import styles from './styles.module.scss';

interface ISwitchMenuProps {
  children: ReactElement[]; 
}

const SwitchMenu = ({ children }: ISwitchMenuProps) => {

  const containerRef = useRef<HTMLElement | null>(null);
  const itemMenuActiveRef = useRef<HTMLDivElement | null>(null);

  const menuRouter = useContext(MenuRouteContext);
  
  const [itemMenuActiveIndex, setItemMenuActiveIndex] = useState(0);
  const [contentTranslateX, setContentTranslateX] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0)
  const [itemsMenuIndexes, setItemsMenuIndexes] = useState<number[]>([]);

  useEffect(() => {
    const items = [0, 0];

    menuRouter.history.forEach((item, index) => {
      items[index] = Math.max(children.findIndex(i => i.props.path === item), 0);
    });

    setItemsMenuIndexes(items);
  }, [menuRouter, children])

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    
    const [current] = itemsMenuIndexes.reverse();
    setItemMenuActiveIndex(current);

    setContainerHeight(0);

    if (itemsMenuIndexes.length < 2) {
      setContentTranslateX(0);
      return;
    }

    setContentTranslateX(Math.max(menuRouter.history.length - 1, 0)*(-containerRef.current.getBoundingClientRect().width));
    setItemMenuActiveIndex(current);
  }, [itemsMenuIndexes, contentTranslateX, menuRouter])

  useEffect(() => {
    setContainerHeight(itemMenuActiveRef.current?.getBoundingClientRect().height || 0);
  }, [itemMenuActiveIndex])

  return (
    <section ref={containerRef} className={styles.switchContainer}
      style={{
        height: `${containerHeight}px`,
      }}
    >
      <div className={styles.itemRouterContent}
        style={
          {
            transform: `translateX(${contentTranslateX}px)`,
          }
        }
      >
        {children.map((item, index) => 
          (
            <React.Fragment key={item.props.path}>
              {itemsMenuIndexes.includes(index) && (
                <div
                  className={`${styles.itemRouter}`}
                  ref={r => itemMenuActiveRef.current = itemMenuActiveIndex === index ? r : null }
                >
                  {itemMenuActiveIndex === index && item}
                </div>

              )}
            </React.Fragment>
        ))}
      </div>
    </section>)
};

export default SwitchMenu;