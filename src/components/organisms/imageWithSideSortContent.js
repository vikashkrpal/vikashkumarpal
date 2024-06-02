import ThemeButton from '@/components/atom/themeButton';
import { isNotNull } from '@/utils/globalFunctions';
import Image from 'next/image';


const ImageWithSideSortContent = ({ headingHighlight=null, heading=null, content=null, ImageData=null, contentListing=0, buttonData={buttonText:'Get Started Now! >', action:'#'}, addClass="" }) => {
    return <div className="row align-items-center px-0 pt-2 pt-lg-0 pt-md-0">
    <div className="col-lg-7 hero-section-1-custom  my-2">
        {headingHighlight != null && <span className="mb-3 theme-color">{headingHighlight}</span>}
        {isNotNull(heading) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: heading }} /> }
        {isNotNull(content) && <div className={"mx-auto "+addClass} dangerouslySetInnerHTML={{ __html: content }} /> }
        <ThemeButton text={buttonData.buttonText} addStyle={{  minWidth:'30%', fontSize:18 }} href={buttonData.action} />
    </div>
    <div className={"col-lg-5 py-3 my-auto d-flex justify-content-center "+(contentListing == 1 && "order-lg-first")}>
        {isNotNull(ImageData) && <Image src={ImageData.url} alt={ImageData.altText} height="450" width="450" className="img-fluid" />}
    </div>
</div>
}


export default ImageWithSideSortContent;
