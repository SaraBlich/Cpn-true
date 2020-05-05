# Cpn-true [!Cpn-true app logo](https://github.com/SaraBlich/Cpn-true/blob/master/public/SB.png)

## Table of contents
* [Description](#description)
* [Technologies](#used-technologies)
* [Setup](#setup)
* [Site](#site)
* [To-do](#to-do)
* [Contact](#contact)

## Description
Cpn-true Company Search allows fetching table of companies from given API. It's displayed in the center of aplication in easy and transparent manner. Table contains columns of id, name, city, total income and average income columns. Table is provided with headers, that allows the user to sort the table by the given column. Order may be changed to descending or ascending by clicking on the header. As the database consists of many records, also <i>Search</i> input were provided. It allows to sort data by number or text. Aplication is responsive - works as well with smaller screens as with the big ones.

## Used technologies
Cpn-true Company Search was created in React.js enviroment. React provides fluent dataflow, which were obligatory within two APIs provided. As it was decided not to use any librares, whole styling were made with simple css. Logo was provided with GIMP graphical programme (.png as some problems occured with .svg image).

- React 16.13.1,
- CSS3,
- GIMP 2.10.4

## Setup

To run the Cpn-true Company Search clone repository files to an empty chosen folder. Enter the folder via console (ex. 'Anaconda Prompt') by comand `cd ./foldername`, where foldername is the name of your new created folder and simply type `npm start`. 

## Site
The aplication is fully responsive - it works well with computers, tablets and mobiles. Responsitivity issue were solved with usual 'vw'. 1 viewport width (vw) is equal to 1% of the viewport’s width. The units differ from percentages because they are always relative to the viewport, whereas a percentage is relative to the element’s parent container.

Two viewport units are available within the css code:
- <b>vw:</b> viewport width,
- <b>vh:</b> viewport height.

Big screen devices:
[!Big screen](https://github.com/SaraBlich/Cpn-true/blob/master/full-size.jpg)

Small screen devices: 
[!Small screen](https://github.com/SaraBlich/Cpn-true/blob/master/mobile.jpg)


## To-do
- Fix problems with comapnies database fetch efficency,
- Last column (some bugs appeared)

## Contact
email: s.blich@gmail.com <br/>
phone: 519188514





