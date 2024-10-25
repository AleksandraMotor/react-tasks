#Tasks 1

Implement a React component thet renders a dynamic and expandable side-menu-like list of items.

1. The outermost tag of the component is a div with a class of menu-wrapper. Initially it will contain nothing, and your task is to create the code that will display the side menu there.
2. The component will receive a property named menuConfig which will contain the configuration of the side menu data:
    const menuConfig = [
        {
            title: 'Home',
        },
        {
            title: 'Services',
            subItems: ['Cooking', 'Cleaning'],
        },
        {
            title: 'Contact',
            subItems: ['Phone', 'Mail']
        },
    ];

<!-- The type of menuConfig is MenuConfig. Both MenuItem and MenuConfig are defined at the beginning of the file and appear as follows: -->

<!-- type MenuItem = {
title: string;
subItems?: Array<string>;
};

type MenuConfig = Array<MenuItem>; -->

3. Every menu item should be displayed inside a separate corresponding div. This div should have a dynamically created attribute, data-test-id, in the form: first-level-{lowercase-title-name-here}. So for example, if some MenuItem contained a title named Home, the div should have a data-test-id containing first-level-home.

5. Only one submenu should be in the expanded state at any time. If one of the submenus is open and then some other menu item button is clicked, the previouslu expanded submenu should be hidden and the new one should sppear.