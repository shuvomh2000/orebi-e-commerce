import React from "react";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Button from "../../components/layout/Button";
import Container from "../../components/layout/Container";
import InputBox from "../../components/layout/InputBox";
import SubTitle from "../../components/layout/SubTitle";

const Contacts = () => {
  return (
    <Container>
      <Breadcrumb />
        <SubTitle title="Fill up a Form" />
      <div className=" w-full md:w-[47%]">
          <InputBox title="Name" type="text" placeholder="Your name here" />
          <InputBox title="Email" type="email" placeholder="Your email here" />
        <div className="mb-8">
          <h4 className="mb-[10px] font-dm text-base font-bold capitalize text-bl">
            Message
          </h4>
          <textarea
            className="font-regular h-[150px] w-full resize-none border-b border-[#F0F0F0] py-4 font-dm text-sm text-bl outline-0 placeholder:text-[#767676]"
            placeholder="Your message here"
          />
        </div>
      </div>
      <Button title="post" />
    </Container>
  );
};

export default Contacts;
