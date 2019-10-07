import React from "react"


const d = new Date();
const year = d.getFullYear();
const month = d.getMonth() + 1;
const day = d.getDate();
const hour = d.getHours();
const min = d.getMinutes();

export const Time = `${day}-${month}-${year} ${hour}:${min}`;



