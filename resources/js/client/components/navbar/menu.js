import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    sideNavMetadataSelector,
    doLiItemSelect,
    doLiDisplayNameToggle,
    doToggleSubmenu
} from "./sideNavSlice";

/**
 * Source URL -- https://bootsnipp.com/snippets/prnvG
 */

export default function AppNavigationMenu({ activePath }) {
    const dispatch = useDispatch();
    const metadata = useSelector(sideNavMetadataSelector);

    const onLiClick = (event, item) => {
        if (item.subMenu) {
            event.preventDefault();
            event.stopPropagation();
            dispatch(doToggleSubmenu(metadata, item));
        } else {
            dispatch(doLiItemSelect(metadata, item));
        }
    };

    const onLiDisplayNameToggle = (event, item, value) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(doLiDisplayNameToggle(metadata, item, value));
    };

    const getLinkTag = item => {
        const randomUniqueId = `submenuId${new Date().getTime()}_${item.id}`;

        return (
            <li
                className={item.className}
                key={item.id}
                onClick={event => onLiClick(event, item)}
                onMouseOver={event => onLiDisplayNameToggle(event, item, true)}
                onMouseOut={event => onLiDisplayNameToggle(event, item, false)}
            >
                <React.Fragment>
                    {item.type === "link" && (
                        <React.Fragment>
                            <div
                                className="d-flex"
                                style={{ position: "relative" }}
                            >
                                <a
                                    href={item.url}
                                    className={`d-flex justify-content-start ${
                                        item.routes.indexOf(activePath) > -1
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    {item.iconComponent &&
                                        React.createElement(
                                            item.iconComponent,
                                            {
                                                size: "20",
                                                color: "#fff"
                                            }
                                        )}
                                </a>
                                {item.showName && (
                                    <div
                                        className="text-light h-100 p-2"
                                        style={{
                                            backgroundColor: "#414956",
                                            position: "absolute",
                                            left: "100%",
                                            minWidth: "10vw",
                                            zIndex: 1
                                        }}
                                    >
                                        {item.displayName}
                                    </div>
                                )}
                            </div>
                        </React.Fragment>
                    )}
                    {item.type === "info" && (
                        <a href="#" onClick={event => event.preventDefault()}>
                            {item.displayName}
                        </a>
                    )}
                    {item.subMenu && (
                        <ul
                            className={`submenu ${
                                item.showSubmenu ? "d-block" : "d-none"
                            }`}
                            key={randomUniqueId}
                            id={randomUniqueId}
                        >
                            {item.subMenu.map(entity => {
                                entity.showName = false;
                                return getLinkTag(entity);
                            })}
                        </ul>
                    )}
                </React.Fragment>
            </li>
        );
    };

    return (
        <React.Fragment>
            {metadata && metadata.length > 0 && (
                <div
                    id="jquery-accordion-menu"
                    className="jquery-accordion-menu"
                >
                    <ul className="mt-4">
                        {metadata.map(item => {
                            return getLinkTag(item);
                        })}
                    </ul>
                </div>
            )}
        </React.Fragment>
    );
}
