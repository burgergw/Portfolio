//Importing requred packages and components
import React from 'react'
import cvpic from '../static/cvpic.jpg';
import Image from 'next/image';
import NavLink from '../components/NavLink';
import Head from 'next/head'
import Script from 'next/script';


//Index functional arrow component that acts as home/about page 
const index = () => {
  return (
    <body>
    
    <div>
    {/*Header navigation component*/}
    <NavLink />
        <h1>About</h1>
        <Image className='cv-pic' src={cvpic} alt='image' height={300} width={250} />
        <h2>WORK HISTORY</h2>
        <h3>Manager</h3>
        <p>HPT Fitness Studio | April 2022 - Present</p>
        <p>Overseeing the daily operation of the gym while doing promotion and marketing. I also handled finances.</p>
        <h3>Sales Representative</h3>
        <p>The Sweet Spot Bakery | Jan 2017 - April 2021</p>
        <p>My responsibilities included: cold calling, in-person sales meetings with prospective clients. Transport of workers and transport and delivery of goods.</p>
        <h3>Duty Pilot</h3>
        <p>Cape Town Flight Training Center | Dec 2018 - Feb 2019</p>
        <p>My responsibilities included managing and refueling aircraft, ensuring aircraft are in a serviceable state, responding to client emails and phone calls, dealing with new walk-in clients, administrative oversight, and general operations.</p>
        <h2>EDUCATIONAL BACKGROUND</h2>
        <ul>
            <li>High School</li>
            <li>Swartland High School | 2016</li>
            <li>Private Pilots License</li>
            <li>Cape Town Flight Training Center | 2011</li>
            <li>Software Engineering Bootcamp</li>
            <li>Hyperion Dev | 2021</li>
        </ul>
        <h2>SKILLS AND PROFICIENCIES</h2>
        <ul>
            <li>Vast computer knowledge and can solve most desktop problems</li>
            <li>Teamwork</li>
            <li>multitasking, and attention to detail</li>
            <li>Proficient in Python Proficient in Java Proficient in MySQL and NoSQL</li>
            <li>Proficient in JavaScript Proficient in Wordpress Web design</li>
        </ul>
        {/*Only using global jsx styling, because all of the html is in one parent element*/}
        <style global jsx>{`
            .cv-pic {
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
            h1 {
                text-align: center;
            }
            h2 {
                text-align: center;

            }
            h3 {
                text-align: center;

            }
            body {
                background: lightgrey;
                
            }
            li {
                list-style: none;

            }
        `}</style>
        
    </div>
    <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S0ECD82STC"></script>
        <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-S0ECD82STC');
        `}}>
        </script>
    </head>
    </body>
  )
}
//Exporting index component
export default index;
/*
    Sources i user for tis task:    https://buttercms.com/blog/build-a-portfolio-website-with-react/
                                    https://nextjs.org/docs/getting-started
                                    https://nextjs.org/learn/basics/navigate-between-pages/link-component
                                    https://blog.bitsrc.io/styled-jsx-for-react-how-and-why-d1b536feb4da
                                    https://medium.com/nextjs/how-to-add-an-image-in-next-js-5c1065450e3a
                                    https://nextjs.org/docs/basic-features/image-optimization
                                    https://nextjs.org/blog/styling-next-with-styled-jsx
                                    https://jaketrent.com/post/style-children-styled-jsx/

*/