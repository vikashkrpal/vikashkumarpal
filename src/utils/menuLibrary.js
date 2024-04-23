import { 
    FaExpandAlt, 
    FaLightbulb, FaHouseUser, 
    FaUserFriends, FaChalkboardTeacher, 
    FaKeyboard, FaChartArea, 
    FaWeibo, FaCode, 
    FaWordpress, FaShopify, 
    FaWalking, FaIndustry, 
    FaGlobe, FaStackExchange, 
    FaWordpressSimple, 
    FaGraduationCap, FaGamepad, 
    FaHandHolding, FaHandsHelping, 
    FaHornbill, FaBuilding, 
    FaFileAlt, FaUserCheck, 
    FaList, FaUser, FaServer, 
    FaHandHoldingHeart, FaFileSignature, 
    FaComment 
} from "react-icons/fa";

const navBarMenus =  [
    {
        title: 'About',
        icon:<FaUser />,
        childLinks : [
            { name: 'About Me', link: '#', des:'Discover my SEO journey', icon:<FaHouseUser /> },
            { name: 'SEO Approach', link: '#', des:'Unique, effective strategy revealed', icon:<FaLightbulb /> },
            { name: 'Success Stories', link: '#', des:'Real results, proven success', icon:<FaExpandAlt /> },
            { name: 'Work With Me', link: '#', des:'Let’s achieve SEO excellence', icon:<FaUserFriends /> },
        ]

    },
    {
        title: 'Services',
        icon:<FaServer />,
        childLinks : [
            { name: 'SEO Services', link: '/seo-insights/', des:'Boost your online visibility', icon:<FaLightbulb /> },
            { name: 'SEO Audit', link: '#', des:'Uncover SEO improvement areas', icon:<FaChalkboardTeacher /> },
            { name: 'Keyword Research', link: '#', des:'Discover profitable keywords now', icon:<FaKeyboard /> },
            { name: 'Local SEO', link: '#', des:'Dominate local search rankings', icon:<FaChartArea /> },
            { name: 'Technical SEO', link: '#', des:'Optimize your site’s health', icon:<FaCode /> },
            { name: 'Ecommerce SEO', link: '#', des:'Drive online store traffic', icon:<FaWeibo /> },
            { name: 'WordPress SEO', link: '#', des:'Elevate your WordPress site', icon:<FaWordpress /> },
            { name: 'Shopify SEO', link: '#', des:'Maximize Shopify store sales', icon:<FaShopify /> },
        ]

    },
    {
        title: 'SEO Consulting',
        icon:<FaHandHoldingHeart />,
        childLinks : [
            { name: 'Local SEO Consultant', link: '#', des:'Expert local SEO guidance', icon:<FaWalking /> },
            { name: 'Technical SEO Consultant', link: '#', des:'Solve complex SEO issues', icon:<FaCode /> },
            { name: 'National SEO Consultant', link: '#', des:'Expand your national reach', icon:<FaIndustry /> },
            { name: 'International SEO Consultant', link: '#', des:'Global SEO market mastery', icon:<FaGlobe /> },
            { name: 'Ecommerce SEO Consultant', link: '#', des:'Boost ecommerce growth', icon:<FaStackExchange /> },
            { name: 'WordPress SEO Consultant', link: '#', des:'WordPress SEO expertise', icon:<FaWordpressSimple /> },
            { name: 'Shopify SEO Consultant', link: '#', des:'Shopify SEO specialist', icon:<FaShopify /> },

        ]

    },
    {
        title: 'Portfolio',
        icon:<FaHouseUser />,
        childLinks : [
            { name: 'Immigration SEO Transformation', link: '#', des:'SEO immigration breakthrough', icon:<FaFileAlt /> },
            { name: 'Educational Website Success', link: '#', des:'Education market leadership', icon:<FaGraduationCap /> },
            { name: 'Sports Website Transformation', link: '#', des:'Transformative soccer SEO insight', icon:<FaGamepad /> },
            { name: 'Aviation SEO Impact', link: '#', des:'Digital skyline redefined', icon:<FaHandHolding /> },
            { name: 'Law Business Growth', link: '#', des:'Strategic legal SEO wins', icon:<FaHandsHelping /> },
            { name: 'Ecommerce Website Evolution', link: '#', des:'Ecommerce SEO breakthrough', icon:<FaHornbill /> },
            { name: 'Manufacturing Business SEO', link: '#', des:'Manufacturing SEO game-changer', icon:<FaBuilding /> },

        ]

    },
    {
        title: 'Case Study',
        icon:<FaFileSignature />,
        childLinks : [
            { name: 'Unlocked Business Potential', link: '#', des:'Customized strategic SEO success', icon:<FaIndustry /> },
            { name: 'Leadership Through Targeted SEO', link: '#', des:'Ascend into a market leader', icon:<FaUserFriends /> },
            { name: 'Turnaround Story of Soccer Website', link: '#', des:'Soccer’s SEO success story', icon:<FaWeibo /> },
            { name: 'Transforming Local Business', link: '#', des:'Local business, global reach', icon:<FaUserCheck /> },
            { 
             name: 'Other Featured Case Studies', 
             sublinks:[
                {
                    title:"Nurturing a Law Business Growth with an Effective SEO Strategy",
                    link:"#"
                },
                {
                    title:"Molding the Future of an E-commerce Business with SEO",
                    link:"#"
                },
                {
                    title:"Changing the Game: An SEO Approach to Online Dominance",
                    link:'#'
                }
            ],
            link:'#',
            icon:<FaList /> 
        },

        ]

    },
    {
        title: 'Testimonials',
        icon:<FaComment />,
        childLinks:[],
        link: '#'

    },

];


export default navBarMenus;