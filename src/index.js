import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";

import Sidebar from "./components/Sidebar";
import ArtistsScreen from "./screens/ArtistsScreen";
import DriverScreen from "./screens/DriverScreen";
import TripsScreen from "./screens/TripsScreen";
import TripScreen from "./screens/TripScreen";

import "./styles.css";

import {SettingsContext, themes} from "./context";

import store from "./store";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settings: {
                theme: themes.light,
                setTheme: this.setTheme
            }
        };
    }

    setTheme = theme => {
        this.setState(state => ({
            settings: {
                ...state.settings,
                theme
            }
        }));
    };

    render() {
        const {settings} = this.state;
        return (
            <SettingsContext.Provider value={settings}>
                <Router>
                    <div className={`App ${settings.theme}`}>
                        <Sidebar/>

                        <Route path="/" exact component={ArtistsScreen}/>
                        <Route path="/drivers/:driverId/" exact component={DriverScreen}/>
                        <Route path="/trips/" exact component={TripsScreen}/>
                        <Route path="/trips/:tripId" exact component={TripScreen}/>

                    </div>
                </Router>
            </SettingsContext.Provider>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);
