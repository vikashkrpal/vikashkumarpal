import Link from 'next/link';
import Footer from './layouts/footer';
import Header from './layouts/header';
import ImageWithSideContent from '@/components/organisms/imageWithSideContent';

const App = () => {
  return <>
  <Header />
  <div className='container'>
       <ImageWithSideContent 
       headingHighlight={"#1 SEO Company that Gets Results!"} 
       heading={"<h1>Data-Driven Custom SEO Services That Drive Revenue!</h1>"}
       content={"<p>Choose improveFX as your SEO agency and unlock high-impact search results by dominating your market with custom result driven SEO strategies to take your business to new heights with our award-winning SEO Experts.</p>"}
       ImageData={{
        url:'https://admin.improvefx.com/wp-content/uploads/2024/03/award-winning-seo-experts-1.webp',
        alert:'Award winning SEO experts'
       }}
       contentListing={1}
       />
  </div>
  

   <Footer/>
  </>;
};

export default App;
