import React from "react";
import Description from "../Description";
import MiniCard from "../MiniCard";
import P from "../P";
import PropTypes from "prop-types";

const WorkItem = ({
  title = "",
  date = "",
  description = "",
  link = "",
  titleLink = "",
}) => {
  return (
    <li className="py-2">
      <div className="flex w-full justify-between mb-3">
        <Description bold>{title}</Description>
        <MiniCard>{date}</MiniCard>
      </div>
      <div>
        <P>{description}</P>
        {link && (
          <a
            className="text-sky-400"
            href={link}
            rel="noreferrer"
            target="_blank"
          >
            {titleLink}
          </a>
        )}
      </div>
    </li>
  );
};

WorkItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  titleLink: PropTypes.string,
};

export default WorkItem;
