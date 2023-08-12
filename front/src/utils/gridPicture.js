import React from "react";
import useHoverableElement from "@hooks/useHoverableElement";

const GridPicture = ({
  title,
  content,
  picture,
  element,
  pictureDescription,
}) => {
  const { isHovered, handleMouseOver, handleMouseOut } = useHoverableElement();

  return (
    <article
      className={`hoverable-element ${isHovered && content ? "hovered" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      id={element}
      style={{ backgroundImage: `url(${picture})` }}
      title={pictureDescription}
    >
      <aside className="element-content">
        {content ? (
          <>
            <h1>{title}</h1>
            <h2>{content}</h2>
          </>
        ) : (
          <h3>{title}</h3>
        )}
      </aside>
    </article>
  );
};

export default GridPicture;
