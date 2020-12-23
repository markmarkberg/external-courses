import "./main.css";
import "./Components/Content/content.css";
import { storage } from "./Components/Localstorage/storage.js";
import { addEl } from "./Components/Header/Addsvg/header_add_el.js";
import { header } from "./Components/Header/header.js";
import { mock } from "./Components/Mock/mock.js";
import { createList } from "./Components/Newlist/newlist.js";
import { boards } from "./Components/Boards/boards.js";


storage(mock);
addEl();
header(); 

