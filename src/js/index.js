import stickeHeader from "./headerScroll"
import Tabs from "./tabs"

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

    })

};