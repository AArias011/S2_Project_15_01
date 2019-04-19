"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Anthony Arias
   Date:   4/18/19
   
   Filename: mpl_links.js

*/

window.onload = function (e) {
    //This code referencing all select elements
    var allSelect = document.forms.govLinks;
    //This code loops through allSelect object collection which makes it able to pick through different websites when clicking on the the content in the selection lists.
    for (var i = 0; i < allSelect.length; i++) {
        allSelect.onchange = function (e) {
            window.location.href = e.target.value;
        }
    }
}