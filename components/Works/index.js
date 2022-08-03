import React from "react";
import { studyList } from "../../config/study.config";
import Description from "../Description";
import MiniCard from "../MiniCard";
import P from "../P";
import Section from "../Section";
import Small from "../Small";
import Subtitle from "../Subtitle";

import Title from "../Title";

import Wrapper from "../Wrapper";
import Studies from "./Studies";
import WorkHead from "./WorkHead";
import WorkItem from "./WorkItem";
import WorksInfo from "./WorksInfo";

const Works = () => {
  return (
    <Section>
      <Wrapper anchor="works" last>
        <WorkHead />
        <div className="flex flex-col gap-5 lg:flex-row w-full">
          <Studies />
          <WorksInfo />
        </div>
      </Wrapper>
    </Section>
  );
};

export default Works;
