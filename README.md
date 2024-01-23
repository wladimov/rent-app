# RentEase Client Side (JS)
### Project Specification
<a name="top"></a>

## Contents
- [Introduction](#1)
- [Case Study](#2)
- [Goals](#3)
- [Environments](#4)
- [Technologies](#5)
- [Entities](#6)
- [User](#7)
- [Flat](#8)
- [Validation](#9)
- [User](#10)
- [Flat](#11)
- [User Interface](#12)
- [All Flats Page](#13)
- [New Flat Page](#14)
- [Header  ](#15)
- [Home Page ](#16)
- [Login Page ](#17)
- [Register Page](#18)
- [Profile Update Page](#19)
- [Summary](#20)
- [Development Schedule And Order](#21)

<a name="1"></a>
### Introduction
 
Application Name: “RentEase”
 
[🔼](#top)

<a name="2"></a>

### Case Study

A client approached you with a request to build an app to help renters to compare their available options. Future renters must make a hard decision which flat, among an available set, they are
going to occupy for a whole year at least. The main request is to develop an app that would allow
future renters to figure out what are the trade off between flats they consider to be relevant so it
will be easier for them to choose.

The app has a single type of user, which is the one who look for a flat. The user is the one who
manage all flats data (insert, update, delete). The app will allow the user to browse all the flats in a user friendly fasion and he will mark and unmark flats as favourites.

<a name="3"></a>

### Goals

The project suppose to make the student gain confidence in developing a web application with the following features:
• Multiple Pages
• User Friendly View
• Responsiveness
• Interactive
• Forms With Validation
• Local Store Management

<a name="4"></a>

### Environments
• Browser
• Responsive: Desktop, Tablets and Smartphones

<a name="5"></a>

### Technologies

The system has no server side. Only the user interface.
• User Interface: HTML, CSS, JavaScript
• Database: localStorage

<a name="6"></a>

### Entities


<a name="7"></a>

### User

Name Data Type
Email String
Password String
First Name String
Last Name String
Birth Date Date

<a name="8"></a>

### Flat

Name Data Type
City String
Street name String
Street number Number
Area size Number
Has AC Boolean
Year built Number
Rent price Number
Date available Date
Validation

User
• All fields are required.
• Data type check.
• Email must be in email format.
• Both names (first and last) must be at least 2 characters long.
• The derived age must be in the range of 18-120.
• Passwords must be at least 6 characters.
• Password must contain
– Letters
– Numbers
– A character that is neither a letter nor a number.

Flat
• All fields are required.
• Data type check.

<a name="9"></a>

### User Interface

All Flats Page

All flats page conain a table of all flats that the user inserted so far.
Each row in the table will hold:
• All of the flat properties as specified in the Entities section.
• A toggle button to mark/unmark flat as favourite.
In addition, the table will have filtering and sorting capabilities.
Filter options fields:
1. City
2. Price range
3. Area size range
Sort categories:
1. City
2. Price
3. Area size

<a name="10"></a>

### New Flat Page

• Inputs for all flat’s properties as specified in the entities section.
• Save button
If all inputs are valid then the data is saved. New flat assigned as favourite flat.

<a name="11"></a>

### Header

• Hello - User Full Name
• Log out Button
• Company Logo
• A menu for all pages

<a name="12"></a>

### Home Page

The home page contain a table of all the user’s favourite flats. The table structure will be the same
as the table in All Flats Page, besides one distinction: instead of a toggle button, each row will have a remove button. After pressing it the row will be removed from the table and the appropriate flat won’t be considered to be the user’s favourite.

<a name="13"></a>

### Login Page

• Email input
• Password input
• Login button

• Register button
The first page that the user face after opening the app. After a successful login, another login
process will be required after 60 minutes. If the user is not registered yet he can click the “Register” button that will redirect him to the registration page.

<a name="14"></a>

### Register Page

• Inputs for all user’s entity properties as specified in the flat entity section.
• Password confirmation input.
• Register button.

If all inputs are valid then the data will be saved. Successful registration will redirect the user to the home page. If the user forgets the password, he can reset it. But resetting the password will delete all user data.

<a name="15"></a>

### Profile Update Page

• Same inputs as in the register page.
• Update button.
On this page the user will be able to edit his details. If all inputs are valid then the data is saved. After a successful update, the user will be redirected to the home page.

<a name="16"></a>

### Summary


Development Schedule And Order

Page Days
All Flats 1
New Flat 1
Home + Header 1
Login 0.5
Register 1
Profile Update 0.5
Total 5
Good Luck!
