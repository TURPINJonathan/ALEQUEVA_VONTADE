import React from 'react';
import useHoverableElement from '@hooks/useHoverableElement';

const GridPicture = ({
  title,
  content,
  picture,
  element,
}) => {
  const { isHovered, handleMouseOver, handleMouseOut } = useHoverableElement();

  return (
    <div
      className={`hoverable-element ${isHovered && content ? 'hovered' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      id={element}
      style={{ backgroundImage: `url(${picture})` }}
    >
      <div className="element-content">
        {content ? (
          <>
            <h1>{title}</h1>
            <h2>{content}</h2>
          </>
        ) : <h3>{title}</h3>}
      </div>
    </div>
  );
};

export default GridPicture;
