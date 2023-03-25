import React from "react";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Button from "../../components/layout/Button";
import Container from "../../components/layout/Container";
import InputBox from "../../components/layout/InputBox";
import SubTitle from "../../components/layout/SubTitle";

const Login = () => {
  return (
    <Container>
      <Breadcrumb />
      <div className="w-full md:w-[40%]">
        <div className="pb-16 border-b border-[#F0F0F0]">
        <p className="font-regular font-dm text-base text-[#767676] mb-24">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <SubTitle title="Returning Customer"/>
        <InputBox title="Email address" type="email" placeholder="company@domain.com"/>
        <InputBox title="Password" type="password" placeholder="Enter your password"/>
        <button className="font-dm font-bold text-sm text-bl bg-white capitalize mt-6 py-4 px-[85px] outline-0 border border-bl hover:text-white hover:bg-bl">Log in</button>
        </div>
        <div className="mt-12">
        <SubTitle title="New Customer"/>
        <p className="font-regular font-dm text-base text-[#767676] mb-24">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <Button title="Continue" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
