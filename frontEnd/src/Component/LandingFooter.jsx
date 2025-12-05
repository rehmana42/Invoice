import React from 'react'
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";

const LandingFooter = () => {
  return (
    <div >
        <Footer container  
        theme={
            {
                "root": {
                  "base": "w-full rounded-lg bg-white shadow md:flex md:items-center md:justify-between dark:bg-black",
                  "container": "w-full p-6",
                  "bgDark": "bg-gray-800"
                },
                "groupLink": {
                  "base": "flex flex-wrap text-sm text-gray-500 dark:text-white",
                  "link": {
                    "base": "me-4 last:mr-0 md:mr-6",
                    "href": "hover:underline"
                  },
                  "col": "flex-col space-y-4"
                },
                "icon": {
                  "base": "text-gray-500 dark:hover:text-white",
                  "size": "h-5 w-5"
                },
                "title": {
                  "base": "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
                },
                "divider": {
                  "base": "my-6 w-full border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700"
                },
                "copyright": {
                  "base": "text-sm text-gray-500 sm:text-center dark:text-gray-400",
                  "href": "ml-1 hover:underline",
                  "span": "ml-1"
                },
                "brand": {
                  "base": "mb-4 flex items-center sm:mb-0",
                  "img": "mr-3 h-8",
                  "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
                }
              }
        }
        >
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <FooterTitle className="rubik-dirt-regular text-3xl text-black dark:text-white" title='Invoizo'/>
          <FooterLinkGroup>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">Feature</FooterLink>
            <FooterLink href="#">Testimonial</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Invoizo™" year={2025} />
      </div>
    </Footer>
    </div>
  )
}

export default LandingFooter