import { skillList } from "../../config/skills.config";
import MiniCard from "../MiniCard";

const HeroeSkills = () => {
  return (
    <div className=" w-full h-max p-5 flex justify-center items-center gap-2 flex-wrap ">
      {skillList.map((skill) => (
        <MiniCard key={skill.key} bg={skill.color}>
          {skill.title}
        </MiniCard>
      ))}
    </div>
  );
};

export default HeroeSkills;
