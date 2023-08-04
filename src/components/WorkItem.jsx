import React from "react";
import "../scss/workItem.scss";

import { ReactComponent as EyeIcon } from "../assets/eye.svg";
import { ReactComponent as LinkIcon } from "../assets/link.svg";

const WorkItem = ({ scotchNumber, data }) => {
  const { id, title, livePreviewLink, imageUrl, description, codeReviewLink } =
    data;

  return (
    <div className='workItem'>
      <div className={`img-tape img-tape--${scotchNumber}`}>
        <img src={require(`../assets/works/${imageUrl}/cover.png`)} />
        <div className='hidden'>
          <div className='info'>
            <p className='title'>{title}</p>
            <p>{description}</p>

            <div className='navigation'>
              <a href={livePreviewLink} target='_blank'>
                <span className='yellow'>
                  Live Preview
                  <EyeIcon className='icon' />
                </span>
              </a>
              <a href={codeReviewLink} target='_blank'>
                <span className='red'>
                  Code Review
                  <LinkIcon className='icon' />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
