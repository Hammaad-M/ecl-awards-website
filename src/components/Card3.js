import React, { useReducer } from "react";
// import { BiDownArrow } from "react-icons/bi";
// import SubCards from "./SubCards";

const Card = ({
  image = null,
  title = "",
  contentItems = [],
  subItems = [],
  classNames = "",
  titleClassNames = "",
  contentClassNames = "",
}) => {
  const dropdown = subItems.length === 0 ? false : true;
  const hasImage = image === null ? false : true;
  const [showSubItems, toggleSubItems] = useReducer(
    (current) => !current,
    false
  );

  const cardCallback = () => {
    if (dropdown) {
      toggleSubItems();
    }
  };

  const getDropdownMargin = () => (showSubItems ? " mb-9" : " mb-0");

  return (
    <>
      <article
        onClick={() => cardCallback()}
        className={"relative " + classNames}
      >
        {hasImage && (
          <img
            className="h-24 rounded-tl-2xl rounded-br-2xl mx-auto sm:rounded-none sm:rounded-tl-xl sm:absolute sm:left-0 sm:top-0 sm:flex-none sm:h-full"
            src={image.src}
            alt={image.alt}
          />
        )}
        <div className={image ? "sm:ml-32" : ""}>
          {title !== "" && (
            <p
              className={
                "alt-font inline w-min tracking-wide transition-all duration-500 flex-1 " +
                titleClassNames +
                getDropdownMargin()
              }
            >
              {title}
            </p>
          )}
          {contentItems.length !== 0 && (
            <div className="custom-list">
              {contentItems.map((item) => (
                <>
                  <p className={"custom-list-item pl-4 " + contentClassNames}>
                    {item}
                  </p>
                </>
              ))}
            </div>
          )}

          {/* {dropdown && (
            <BiDownArrow color="white" className="inline-block ml-2 -mt-1" />
          )} */}

          {/* {dropdown && showSubItems && <br /> && <SubCards items={subItems} />} */}
        </div>
      </article>
    </>
  );
};

export default Card;
