import React from "react";
import P from "../P";
import Section from "../Section";
import Wrapper from "../Wrapper";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Icon from "../Icon";
import Image from "next/image";

const Footer = () => {
  return (
    <Section>
      <Wrapper last>
        <div className="flex w-full h-full justify-center items-center">
          <P>
            Creado por
            <a
              href="https://github.com/gianicolajara"
              target="_blank"
              rel="noreferrer"
              className="text-sky-500 ml-1"
            >
              Gianicola Jara
            </a>
          </P>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Footer;
