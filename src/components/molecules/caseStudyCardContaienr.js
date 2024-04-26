import Image from "next/image";
import Link from "next/link";

const CaseStudyCardContainer = ({image,category,header,desc,time, column=true}) => {
    return <div className={column && "col-lg-4"}>
    <div className="card rounded-4 overflow-hidden  brands-experiences-card mt-4" >
                <div className="blog-card-content">
                    <Link href="#">
                        <Image width="450" height="350"  alt=" alt image" src={image} />
                    </Link>
                </div>

                <div className="">

                    <div className={"m-3"}>
                        <div className=" mt-3">
                            <Link href="#">
                                    <span className="text-primary font-b" style={{ fontSize:18 }}>
                                        {category}
                                    </span>
                            </Link>

                        </div>
                        <div className="pb-3">
                            <Link href="#"><h4 className="mt-2 mb-2">{header}</h4></Link>
                            <div dangerouslySetInnerHTML={{ __html: desc }} />
                        </div>
                    </div>

                <div className="card-body border-top">
            <p className="card-text mb-0 py-3">
                <div className={"row"}>
                    <div className="text-light col-6 col-lg-6">
                        <span className="text-primary font-b" style={{ fontSize:22 }} >25%</span>
                        &nbsp; Increase in App downloads
                    </div>
                    <div className="text-light col-6 col-lg-6">
                        <span className="text-primary font-b" style={{ fontSize:22 }} >2.5M</span>
                        &nbsp; App Downloads Generated
                    </div>
                </div>

            </p>
        </div>
                </div>

    </div>
</div>
}

export default CaseStudyCardContainer;
