export default function Tabs(selector, options) {

    this.tabContainer = document.querySelector(selector);
    this.tabs = this.tabContainer.querySelectorAll(options.tabsSelector);
    this.contents = this.tabContainer.querySelectorAll(options.contentsSelector);

    let activeTabIndex = 0;
    let self = this;

    if(options.activeTab) {
        activeTabIndex = options.activeTab;
        self.tabs[options.activeTab].classList.add(options.activeTabClass);
        self.contents[options.activeTab].classList.add(options.activeContentClass);
    }


    this.tabContainer.addEventListener("click", function (event) {

        for (let i = 0; i < self.tabs.length; i++) {
            self.tabs[i].setAttribute("data-tab", "tab");
        }

        let clickedTAb = event.target.closest('[data-tab= "tab"]');
        console.log(clickedTAb);

        for (let i = 0; i < self.tabs.length; i++) {

            if (self.tabs[i] === clickedTAb) {

                self.tabs[i].classList.add(options.activeTabClass);
                self.contents[i].classList.add(options.activeContentClass);

                if (i !== activeTabIndex) {
                    self.tabs[activeTabIndex].classList.remove(options.activeTabClass);
                    self.contents[activeTabIndex].classList.remove(options.activeContentClass);
                }

                activeTabIndex = i;

            }


        }

    });


}