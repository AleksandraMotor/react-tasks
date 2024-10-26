import { useState } from "react";

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
    }
]

// type MenuItem = {
//   title: string;
//   subItems?: Array<string>;
// };

// type MenuConfig = Array<MenuItem>;

// function Solution({ menuConfig }: { menuConfig: MenuConfig }): ReactElement {
const SideMenu = () => {

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    console.log(menuConfig);

  return (
    <div className="menu-wrapper">
        <ul>
            {menuConfig.map((item, id) => (
                <li key={id}>
                    <div data-test-id={`first-level-${item.title.toLowerCase()}}`}>
                        {item.title}
                        {item.subItems && (
                            <>
                                <button
                                    onClick={() => setExpandedIndex(expandedIndex === id ? null : id)}
                                    data-test-id={`button-${item.title.toLowerCase()}`}
                                >
                                    {expandedIndex === id ? 'Hide' : 'Expand'}
                                </button>
                                {expandedIndex === id && (
                                    <ul data-test-id={`ul-${item.title.toLowerCase()}`}>
                                        {item.subItems.map((subItem, idx) => (
                                            <li
                                                key={idx}
                                                data-test-id={`li-${item.title.toLowerCase()}-${subItem}`}
                                            >
                                                {subItem}
                                            </li>  
                                        ))}
                                    </ul>   
                                )}
                            </>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default SideMenu;