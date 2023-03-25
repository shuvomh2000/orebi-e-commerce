import React from "react";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Button from "../../components/layout/Button";
import Container from "../../components/layout/Container";
import InputBox from "../../components/layout/InputBox";

const Contacts = () => {
  return (
    <Container>
      <Breadcrumb />
      <h2 className="mt-12 md:mt-36 mb-7 font-dm text-[39px] font-bold text-bl">
        Fill up a Form
      </h2>
     <div className=" w-full md:w-[47%]">
     <div className="mb-5">
        <InputBox title="Name" type="text" placeholder="Your name here" />
      </div>
      <div className="mb-5">
        <InputBox title="Email" type="email" placeholder="Your email here" />
      </div>
      <div className="mb-8">
      <h4 className='font-dm font-bold text-base text-bl capitalize mb-[10px]'>Message</h4>
        <textarea
          className="font-regular w-full h-[150px] resize-none border-b border-[#F0F0F0] py-4 font-dm text-sm text-bl outline-0 placeholder:text-[#767676]"
          placeholder="Your message here"
        />
      </div>
     </div>
      <Button title="post" />
    </Container>
  );
};

export default Contacts;
