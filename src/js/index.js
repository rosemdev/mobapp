import stickeHeader from "./headerScroll"
import Tabs from "./tabs"
import Scroll from "./scrollIntoView"

window.onload = function () {

    let header = new stickeHeader("header", {
        class: "sticky",
        sibling: "h1"
    });

    let tabs = new Tabs (".accordion", {
        activeTab: 2,
        tabsSelector: ".accordion ul li",
        contentsSelector:".tab-content",
        activeTabClass: "active-tab",
        activeContentClass: "active"

    });

    let scrollmenu = new Scroll ("nav > ul", {});

};