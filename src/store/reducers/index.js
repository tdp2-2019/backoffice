import { combineReducers } from "redux";

import artists from "./artists";
import favorites from "./favorites";
import search from "./search";

export default combineReducers({ artists, favorites, search });
