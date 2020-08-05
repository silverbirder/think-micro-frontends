// @flow

import "../sass/style.scss";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import type { MashroomPortalAppPluginBootstrapFunction } from "@mashroom/mashroom-portal/type-definitions";

const bootstrap: MashroomPortalAppPluginBootstrapFunction = (
    portalAppHostElement,
    portalAppSetup,
    clientServices
) => {
    const {
        appConfig: { name },
    } = portalAppSetup;
    const { messageBus } = clientServices;

    ReactDOM.render(
        <App name={name} messageBus={messageBus} />,
        portalAppHostElement
    );

    return {
        willBeRemoved: () => {
            ReactDOM.unmountComponentAtNode(portalAppHostElement);
        },
    };
};

global.startExampleReactApp = bootstrap;
