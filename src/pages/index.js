import Link from 'next/link';
import Footer from './layouts/footer';
import Header from './layouts/header';
import ImageWithSideContent from '@/components/organisms/imageWithSideContent';
import BrandSlider from '@/components/organisms/brandSlider';
import HeaderDescContainer from '@/components/molecules/headerDescContainer';
import IconCardContainer from '@/components/molecules/IconCardContainer';

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
       contentListing={0}
       />
    
    <BrandSlider  />

    <HeaderDescContainer
    highligter={"Top-Rated Professional SEO Company"}
    header={"<h2>We Help You Define Your SEO Objectives</h2>"}
    desc={"<p>Discover unparalleled SEO success with our top-rated professional SEO agency. We specialize in affordable, organic SEO solutions for small to large businesses. Our expert team crafts effective SEO campaigns, enhancing your Google visibility and website performance. Achieve your online visibility goals with our expert SEO team's strategic SEO plans that propel your business objectives forward.</p>"}
    />

    <div className='row'>
      <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
        <IconCardContainer
        icon={"https://admin.improvefx.com/wp-content/uploads/2023/12/SEO-Audit.webp"}
        heading={"SEO Audit"}
        desc={"<p>Elevate your website's performance with our comprehensive SEO audit, uncovering valuable insights and strategic paths to outshine competitors and boost rankings.</p>"}
        listData={[
          'New opportunities for freshers',
          'Identify growth opportunities',
          'Uncover hidden website issues'
        ]}
        />
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
        <IconCardContainer
        icon={"https://admin.improvefx.com/wp-content/uploads/2023/12/SEO-Audit.webp"}
        heading={"SEO Audit"}
        desc={"<p>Elevate your website's performance with our comprehensive SEO audit, uncovering valuable insights and strategic paths to outshine competitors and boost rankings.</p>"}
        listData={[
          'New opportunities for freshers',
          'Identify growth opportunities',
          'Uncover hidden website issues'
        ]}
        />
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
        <IconCardContainer
        icon={"https://admin.improvefx.com/wp-content/uploads/2023/12/SEO-Audit.webp"}
        heading={"SEO Audit"}
        desc={"<p>Elevate your website's performance with our comprehensive SEO audit, uncovering valuable insights and strategic paths to outshine competitors and boost rankings.</p>"}
        listData={[
          'New opportunities for freshers',
          'Identify growth opportunities',
          'Uncover hidden website issues'
        ]}
        />
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
        <IconCardContainer
        icon={"https://admin.improvefx.com/wp-content/uploads/2023/12/SEO-Audit.webp"}
        heading={"SEO Audit"}
        desc={"<p>Elevate your website's performance with our comprehensive SEO audit, uncovering valuable insights and strategic paths to outshine competitors and boost rankings.</p>"}
        listData={[
          'New opportunities for freshers',
          'Identify growth opportunities',
          'Uncover hidden website issues'
        ]}
        />
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
        <IconCardContainer
        icon={"https://admin.improvefx.com/wp-content/uploads/2023/12/SEO-Audit.webp"}
        heading={"SEO Audit"}
        desc={"<p>Elevate your website's performance with our comprehensive SEO audit, uncovering valuable insights and strategic paths to outshine competitors and boost rankings.</p>"}
        listData={[
          'New opportunities for freshers',
          'Identify growth opportunities',
          'Uncover hidden website issues'
        ]}
        />
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
        <IconCardContainer
        icon={"https://admin.improvefx.com/wp-content/uploads/2023/12/SEO-Audit.webp"}
        heading={"SEO Audit"}
        desc={"<p>Elevate your website's performance with our comprehensive SEO audit, uncovering valuable insights and strategic paths to outshine competitors and boost rankings.</p>"}
        listData={[
          'New opportunities for freshers',
          'Identify growth opportunities',
          'Uncover hidden website issues'
        ]}
        />
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
        <IconCardContainer
        icon={"https://admin.improvefx.com/wp-content/uploads/2023/12/SEO-Audit.webp"}
        heading={"SEO Audit"}
        desc={"<p>Elevate your website's performance with our comprehensive SEO audit, uncovering valuable insights and strategic paths to outshine competitors and boost rankings.</p>"}
        listData={[
          'New opportunities for freshers',
          'Identify growth opportunities',
          'Uncover hidden website issues'
        ]}
        />
      </div>
    </div>

    <ImageWithSideContent 
       headingHighlight={"Your Partner for Tailored SEO Solutions"} 
       heading={"<h2>Why improveFX Is the Right SEO Agency for You?</h2>"}
       content={"<p>improveFX stands out as a professional SEO agency offering top-notch SEO solutions tailored to your needs. As a top SEO agency, we specialize in organic SEO strategies, making us an ideal choice for small businesses and larger enterprises alike. Our affordable SEO agency services are designed to enhance your website's performance, ensuring high rankings in Google searches. Whether you're looking for a small business SEO agency or a comprehensive website SEO agency, improveFX delivers results that matter.</p>"}
       ImageData={{
        url:'https://admin.improvefx.com/wp-content/uploads/2024/03/seo-agency.webp',
        alert:'Award winning SEO experts'
       }}
       contentListing={1}
       buttonData={{
        buttonText:'Let\'s go >',
        action: '#'
       }}
       />

    <ImageWithSideContent 
       headingHighlight={"Elevate Your Business with Our Expert SEO Campaigns"} 
       heading={"<h2>Top SEO Agency That Put You on Top of Google Search</h2>"}
       content={"<p>As a leading SEO agency, improveFX is committed to elevating your business to the top of Google search results. Our expert team, known for their effective SEO campaigns, utilizes the latest organic SEO techniques. Being an affordable SEO agency, we provide services that cater to a diverse range of clients, including small business SEO agency needs. Choose improveFX, a google SEO agency that prioritizes your growth and visibility.</p>"}
       ImageData={{
        url:'https://admin.improvefx.com/wp-content/uploads/2024/03/Top-SEO-Agency.webp',
        alert:'Award winning SEO experts'
       }}
       buttonData={{
        buttonText:'Start your journey',
        action: '#'
       }}
       />


    <ImageWithSideContent 
       headingHighlight={"Innovative and Affordable SEO Services for Every Business"} 
       heading={"<h2>What Makes Our SEO Company Different?</h2>"}
       content={"<p>improveFX distinguishes itself as a professional SEO agency by delivering unique and effective SEO solutions. Our approach as a top SEO agency includes creating bespoke SEO campaigns that cater specifically to your business goals. Whether you're looking for a small business SEO agency or an organic SEO agency with a broader scope, improveFX is equipped to deliver. Our commitment as an affordable and proficient website SEO agency sets us apart in the competitive market.</p>"}
       ImageData={{
        url:'https://admin.improvefx.com/wp-content/uploads/2024/03/SEO-Company.webp',
        alert:'Award winning SEO experts'
       }}
       contentListing={1}
       buttonData={{
        buttonText:'Start your journey',
        action: '#'
       }}
       />

       
  </div>
  
   <Footer/>
  </>;
};

export default App;
