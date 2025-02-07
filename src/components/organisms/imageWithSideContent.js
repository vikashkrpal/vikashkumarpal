import ThemeButton from '../../components/atom/themeButton';
import { isNotNull } from '../../utils/globalFunctions';
import Image from 'next/image';


const ImageWithSideContent = ({ headingHighlight = null, heading = null, content = null, ImageData = null, contentListing = 0, buttonData = { buttonText: 'Get Started Now! >', action: '#' }, showButton = true }) => {
    return <div className="row align-items-center px-lg-4 mt-5">
        <div className="col-lg-6 hero-section-1-custom  mb-2">
            {headingHighlight != null && <span className="mb-3 theme-color">{headingHighlight}</span>}
            {isNotNull(heading) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: heading }} />}
            {isNotNull(content) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: content }} />}
            {showButton && <ThemeButton text={buttonData.buttonText} addStyle={{ minWidth: '30%', fontSize: 18 }}
                href={buttonData.action} />}
        </div>
        <div className={"col-lg-6 py-3 my-auto d-flex justify-content-center " + (contentListing == 1 && "order-lg-first")}>
            {isNotNull(ImageData) && <Image decoding="async" src={ImageData.url} priority alt={ImageData.altText} height="550" width="550" className="img-fluid" />}
        </div>
    </div>
}


export default ImageWithSideContent;
