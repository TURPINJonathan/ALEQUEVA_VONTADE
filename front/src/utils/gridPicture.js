import React from "react";

const GridPicture = ({
  title,
  content,
  picture,
  element,
  pictureDescription,
}) => {
  return (
    <article
      className="hoverable-element"
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
