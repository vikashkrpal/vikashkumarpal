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
    FaComment, FaBaseballBall
} from "react-icons/fa";
import Config from '../config'

const baseUrl = Config.appUrl+'/'
const navBarMenus =  [
    {
        title: 'About',
        icon:<FaUser />,
        childLinks : [
            { name: 'About Me', link: baseUrl+'about/', des:'Discover my SEO journey', icon:<FaHouseUser /> },
            { name: 'SEO Approach', link: baseUrl+'seo-approach/', des:'Unique, effective strategy revealed', icon:<FaLightbulb /> },
            { name: 'Success Stories', link: baseUrl+'testimonials', des:'Real results, proven success', icon:<FaExpandAlt /> },
            { name: 'Work With Me', link: baseUrl+'work-with-me/', des:'Let’s achieve SEO excellence', icon:<FaUserFriends /> },
        ]

    },
    {
        title: 'Services',
        icon:<FaServer />,
        childLinks : [
            { name: 'SEO Services', link: baseUrl+'services/organic-seo-services/', des:'Boost your online visibility', icon:<FaLightbulb /> },
            { name: 'SEO Audit', link: baseUrl+'services/seo-audit-services/', des:'Uncover SEO improvement areas', icon:<FaChalkboardTeacher /> },
            { name: 'Keyword Research', link: baseUrl+'services/local-seo-services/', des:'Discover profitable keywords now', icon:<FaKeyboard /> },
            { name: 'Local SEO', link: baseUrl+'services/technical-seo-services/', des:'Dominate local search rankings', icon:<FaChartArea /> },
            { name: 'Technical SEO', link: baseUrl+'services/technical-seo-services/', des:'Optimize your site’s health', icon:<FaCode /> },
            { name: 'Ecommerce SEO', link: baseUrl+'services/ecommerce-seo-services/', des:'Drive online store traffic', icon:<FaWeibo /> },
            { name: 'WordPress SEO', link: baseUrl+'services/wordpress-seo-services/', des:'Elevate your WordPress site', icon:<FaWordpress /> },
            { name: 'Shopify SEO', link: baseUrl+'services/shopify-seo-services/', des:'Maximize Shopify store sales', icon:<FaShopify /> },
        ]

    },
    {
        title: 'SEO Consulting',
        icon:<FaHandHoldingHeart />,
        childLinks : [
            { name: 'Local SEO Consultant', link: baseUrl+'consulting/local-seo-consultant/', des:'Expert local SEO guidance', icon:<FaWalking /> },
            { name: 'Technical SEO Consultant', link: baseUrl+'consulting/technical-seo-consultant/', des:'Solve complex SEO issues', icon:<FaCode /> },
            { name: 'SaaS SEO Consultant', link: baseUrl+'consulting/saas-seo-consultant/', des:'Scale your SaaS business', icon:<FaIndustry /> },
            { name: 'International SEO Consultant', link: baseUrl+'consulting/international-seo-consultant/', des:'Global SEO market mastery', icon:<FaGlobe /> },
            { name: 'Ecommerce SEO Consultant', link: baseUrl+'consulting/ecommerce-seo-consultant/', des:'Boost ecommerce growth', icon:<FaStackExchange /> },
            { name: 'WordPress SEO Consultant', link: baseUrl+'consulting/wordpress-seo-consultant/', des:'WordPress SEO expertise', icon:<FaWordpressSimple /> },
            { name: 'Shopify SEO Consultant', link: baseUrl+'consulting/wordpress-seo-consultant/', des:'Shopify SEO specialist', icon:<FaShopify /> },
            { name: 'Enterprise SEO Consultant', link: baseUrl+'consulting/shopify-seo-consultant/', des:'Drive enterprise-level SEO success', icon:<FaUserCheck /> },

        ]

    },
    {
        title: 'Portfolio',
        icon:<FaHouseUser />,
        childLinks : [
            { name: 'SaaS Growth Strategy', link: baseUrl+'case-study/rescuing-monica-ims-search-rankings/', des:'SaaS Website SEO breakthrough', icon:<FaFileAlt /> },
            { name: 'Educational Website Success', link: baseUrl+'case-study/a-transformational-seo-journey-for-rmc-education/', des:'Education market leadership', icon:<FaGraduationCap /> },
            { name: 'Immigration SEO Transformation', link: baseUrl+'case-study/growing-legalpads-online-reach/', des:'SEO immigration breakthrough', icon:<FaGamepad /> },
            { name: 'Aviation SEO Impact', link: baseUrl+'case-study/boosting-activepilots-online-visibility/', des:'Digital skyline redefined', icon:<FaHandHolding /> },
            { name: 'Law Business Growth', link: baseUrl+'case-study/transforming-bncl-law-firms-online-presence/', des:'Strategic legal SEO wins', icon:<FaHandsHelping /> },
            { name: 'Ecommerce Website Evolution', link: baseUrl+'case-study/boosting-sales-for-eric-originals/', des:'Ecommerce SEO breakthrough', icon:<FaHornbill /> },
            { name: 'Manufacturing Business SEO', link: baseUrl+'case-study/boosting-beetronics-click-through-rates-and-sales/', des:'Manufacturing SEO game-changer', icon:<FaBuilding /> },
            { name: 'Sports Website Transformation', link: baseUrl+'case-study/reviving-history-of-soccers-online-performance/', des:'Transformative soccer SEO insight', icon:<FaBaseballBall /> },

        ]

    },
    {
        title: 'Case Study',
        icon:<FaFileSignature />,
        childLinks : [
            { name: 'Unlocked Business Potential', link: baseUrl+'case-study/rescuing-monica-ims-search-rankings/', des:'Customized strategic SEO success', icon:<FaIndustry /> },
            { name: 'Manufacturing Success Story', link: baseUrl+'case-study/boosting-beetronics-click-through-rates-and-sales/', des:'Ascend into a market leader', icon:<FaUserFriends /> },
            { name: 'Healthcare SEO Growth', link: baseUrl+'case-study/boosting-urology-partners-online-presence/', des:'A hospital business online presence boost', icon:<FaWeibo /> },
            { name: 'Ecommerce Growth Success', link: baseUrl+'case-study/boosting-sales-for-eric-originals/', des:'Jewelry business organic sales boost', icon:<FaUserCheck /> },
            {
             name: 'Other Featured Case Studies',
             sublinks:[
                {
                    title:"Enhance a legal business's digital presence with an effective SEO strategy",
                    link:baseUrl+"case-study/transforming-bncl-law-firms-online-presence/"
                },
                {
                    title:"Turn around a sports website’s online performance with strategic SEO",
                    link:baseUrl+"case-study/reviving-history-of-soccers-online-performance/"
                },
                {
                    title:"Transform an educational business through intent SEO for long-term growth",
                    link:baseUrl+'case-study/a-transformational-seo-journey-for-rmc-education/'
                },
                {
                    title:"Improve an aviation company’s online dominance and visibility in search",
                    link:baseUrl+'case-study/boosting-activepilots-online-visibility/'
                }
            ],
            link:baseUrl+'#',
            icon:<FaList />
        },

        ]

    },
    {
        title: 'Testimonials',
        icon:<FaComment />,
        childLinks:[],
        link: baseUrl+'testimonials/'

    },

];


export default navBarMenus;
