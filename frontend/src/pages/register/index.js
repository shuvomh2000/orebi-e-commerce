import React from "react";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Button from "../../components/layout/Button";
import Container from "../../components/layout/Container";
import InputBox from "../../components/layout/InputBox";
import SubTitle from "../../components/layout/SubTitle";

const Registration = () => {
  return (
    <Container>
      <Breadcrumb />
      <div className="w-full md:w-[60%]">
        <div className="pb-16">
          <p className="font-regular mb-24 w-full md:w-[64%] font-dm text-base text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <div className="border-b border-[#F0F0F0]  pb-16">
            <SubTitle title="Your Personal Details" />
            <div className="flex flex-wrap gap-x-10">
              <div className="w-full md:w-[47%]">
                <InputBox
                  title="First Name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full md:w-[47%]">
                <InputBox
                  title="Last Name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="w-full md:w-[47%]">
                <InputBox
                  title="Email address"
                  type="email"
                  placeholder="company@domain.com"
                />
              </div>
              <div className="w-full md:w-[47%]">
                <InputBox
                  title="Telephone"
                  type="number"
                  placeholder="Your phone number"
                />
              </div>
            </div>
          </div>
          <div className="border-b border-[#F0F0F0]  py-16">
            <SubTitle title="Billing Adress" />
            <div className="flex flex-wrap gap-x-10">
              <div className="w-full md:w-[47%]">
                <InputBox
                  title="Address 1"
                  type="text"
                  placeholder="Address 1"
                />
              </div>
              <div className="w-full md:w-[47%]">
                <InputBox
                  title="Address 2"
                  type="text"
                  placeholder="Address 2"
                />
              </div>
              <div className="w-full md:w-[47%]">
                <InputBox title="City" type="text" placeholder="Your city" />
              </div>
              <div className="w-full md:w-[47%]">
                <InputBox
                  title="Post Code"
                  type="number"
                  placeholder="Post Code"
                />
              </div>
              <div className="w-full md:w-[47%]">
                <InputBox
                  title="Country"
                  type="text"
                  placeholder="Your Country"
                />
              </div>
              <div className="w-full md:w-[47%]">
                <InputBox
                  title="Region/State"
                  type="text"
                  placeholder="Your Region/State"
                />
              </div>
            </div>
          </div>
          <div className="border-b border-[#F0F0F0] py-16">
            <SubTitle title="Your Personal Details" />
            <div className="flex flex-wrap gap-x-10">
              <div className="w-[47%]">
                <InputBox
                  title="Password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="w-[47%]">
                <InputBox
                  title="Re-Type Password"
                  type="password"
                  placeholder="Re-Type your password"
                />
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="flex items-center">
              <input
                className="outline-0 w-[15px] h-[15px] border border-[#767676] appearance-none flex items-center justify-center after:content-[''] after:w-[10px] after:h-[10px] after:hidden after:bg-bl after:checked:inline-block"
                type="checkbox"
                id="Privacy_Policy"
                
              />
              <label
                for="Privacy_Policy"
                className="font-regular pl-2 font-dm text-sm text-[#767676]"
              >
                I have read and agree to the Privacy Policy
              </label>
            </div>
            <div className="flex items-center gap-x-3 my-5">
              <h4 className="font-regular font-dm text-sm text-[#767676]">
                Subscribe Newsletter
              </h4>
                <input className="outline-0 w-[15px] h-[15px] border border-[#767676] appearance-none flex items-center justify-center after:content-[''] after:w-[10px] after:h-[10px] after:hidden after:bg-bl after:checked:inline-block" type="radio" name="choice-radio" id="yes" />
               
              <label for="yes" className="font-regular font-dm text-base text-[#767676] capitalize">
              Yes
              </label>
                <input className="outline-0 w-[15px] h-[15px] border border-[#767676] appearance-none flex items-center justify-center after:content-[''] after:w-[10px] after:h-[10px] after:hidden after:bg-bl after:checked:inline-block" type="radio" name="choice-radio" id="no" />
              <label for="no" className="font-regular font-dm text-base text-[#767676] capitalize">
                no
              </label>
            </div>
            <Button title="Sign Up" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Registration;
