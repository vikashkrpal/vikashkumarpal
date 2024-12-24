import Image from "next/image";
import Link from "next/link";
import {containsHTML} from "../../utils/globalFunctions";

const CaseStudyCardContainer = ({image,category,header,desc,caseStudyHighlightResults, column=true, categorySlug = "#", altText='alt text image'}) => {
    containsHTML(header) && (categorySlug = header.match(/href="([^"]*)"/)[1])
    return <div className={column && "col-lg-4"}>
    <div className="card rounded-4 overflow-hidden  brands-experiences-card mt-4" >
                <div className="blog-card-content">
                    <Link href={containsHTML(header) ? categorySlug : "/case-study/"+categorySlug}>
                        <Image width="560" height="350"  alt={altText} className={"img-fluid"} src={image} />
                    </Link>
                </div>

                <div className="">

                    <div className={"m-3"}>
                        <div className=" mt-3">
                            <Link href={containsHTML(header) ? categorySlug :"/case-study/"+categorySlug}>
                                    <span className="text-primary font-b" style={{ fontSize:18 }}>
                                        {category}
                                    </span>
                            </Link>

                        </div>
                        <div className="pb-3">

                            {
                                containsHTML(header) ?
                                    <div className={" case-study-card text-primary"} dangerouslySetInnerHTML={{ __html: header }} />
:
                                    <h3 >
                                        <Link href={"/case-study/"+categorySlug} className={"text-primary"}>
                                            {header}
                                        </Link>
                                    </h3>
                            }

                            <div className={"mt-2"} dangerouslySetInnerHTML={{ __html: desc }} />
                        </div>
                    </div>

                <div className="card-body border-top">
            <div className="card-text mb-0 py-3">
                <div className={"row"}>
                    {
                        caseStudyHighlightResults.map((item,i) =>                     <div className="text-light col-6 col-lg-6" key={i}>
                                <span className="text-primary font-b" style={{ fontSize:22 }} >{item.caseStudyCardResultNumbers}</span>
                                &nbsp; {item.caseStudyCardResultHighlightText}
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
                </div>

    </div>
</div>
}

export default CaseStudyCardContainer;
