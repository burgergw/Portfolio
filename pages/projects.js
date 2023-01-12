//Importing required components and packages 
import React from 'react';
import Link from 'next/link';
import NavLink from '../components/NavLink';
import Head from 'next/head'
import Script from 'next/script';

//Project page, functional arrow component, that displays projects i have worked on
const projects = () => {
  return (
    <>
    
    <div>
        <NavLink />
        <h1>Projects I have worked on:</h1>
        <h2><Link href={"https://itunes-search-app-gwburger.herokuapp.com/"}>iTunes search API</Link></h2>
        <p>On this project, I used the iTunes search API to build an app in which you can search for media on the iTunes store and add it to a list of favorites.</p>

        <h2><Link href={"https://github.com/burgergw/Web-Dev"}>Burger & Co. watch shop</Link></h2>
        <p>For this project, i have created an online store which allows users to select items on the catalogue page and add the selected items to a shopping cart. The selected items will then be displayed on the Carty page along with their total, including vat. There are also forms for coupons and different delivery options, which affects the total of the cart.</p>

        <h2><Link href={"https://github.com/burgergw/L02T24-Poised"}>Poised Project Management System</Link></h2>
        <p>In 2021, I completed the Software Engineering bootcamp at HyperonDev, in which used python and Java. For this task, we were asked to create a project management program for a building company named Poised. Users needed to be able to add new project, which would then be stored in a text file. The details of the project along with the contact details of the contractor, customer and architect would be entered by the user and then be used to create a project, customer, contractor and architect object respectvely.</p>
        
        <style global jsx>{`
            body {
                background: lightgrey;
            }
        `}</style>
        <head>
        <script src="https://www.googletagmanager.com/gtag/js?id=G-S0ECD82STC"></script>
        <script>
        
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments)
        }
        gtag('js', new Date());
        gtag('config', 'G-S0ECD82STC');

        
        </script>
        
            
        
</head>
    </div>
    </>
  )
}
//Exporting projects component
export default projects;