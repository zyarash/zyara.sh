/***
 * PROJECTS.js
 **/

function Project(name, longName, link, desc) {
  this.name = name;
  this.longName = longName;
  this.link = link;
  this.desc = desc;
}


const PROJECTS = [
    new Project(
        "halcyon",
        "Halcyon LV",
        "http://halcyon.fm",
        "",
    ),
    /*new Project(
        "sqrwav",
        "Square Wave Management",
        "http://sqrwavmgmt.com",
        "",
    ),
    new Project(
        "ubur",
        "Ubur Music",
        "http://uburmusic.com",
        "",
    ),*/
];


export { PROJECTS }
