import ThemeButton from '@/components/atom/themeButton';
import Image from 'next/image';


const ImageWithSideContent = ({ headingHighlight=null, heading=null, content=null, ImageData=null, contentListing=0 }) => {
    return <div className="row align-items-center px-0 pt-2 pt-lg-0 pt-md-0">
    <div className="col-lg-6 hero-section-1-custom  my-2">
        {headingHighlight != null && <span className="mb-3 theme-color">{headingHighlight}</span>}
        {heading != null && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: heading }} /> }
        {content != null && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: content }} /> }
        <ThemeButton text={"Get Started Now!"} addStyle={{ minHeight:50, minWidth:'30%', fontSize:16 }} />
    </div>
    <div className={"col-lg-6 py-3 my-auto d-flex justify-content-center "+(contentListing == 1 && "order-lg-first")}>
        {ImageData != null && <Image src={ImageData.url} alt={ImageData.altText} height="600" width="550" className="img-fluid" />}
    </div>
</div>
}


export default ImageWithSideContent;