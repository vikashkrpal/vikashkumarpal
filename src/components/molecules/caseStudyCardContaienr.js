import Image from "next/image";
import Link from "next/link";

const CaseStudyCardContainer = ({image,category,avtar,header,desc,time, column=true}) => {
    return <div className={column && "col-lg-4"}>
    <div className="card rounded-4 overflow-hidden  brands-experiences-card mt-4" >
                <div className="blog-card-content">
                    <Link href="#">
                        <Image width="450" height="200"  alt=" alt image" src={image} />
                    </Link>
                </div>

                <div className="container">

                <div className=" px-2 mt-3">
                            <Link href="#">
                                    <span className="text-primary font-b">
                                        {category}
                                    </span>
                            </Link>
                        
                </div>
                    <div className="">
                    <Link href="#"><h4 className="mt-2 mb-2">{header}</h4></Link>
                        <div dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                </div>
                <div className="card-body border-top">
            <p className="card-text ">
                <span className="text-primary font-b" >25%</span>
                <div className="text-light">
                    Increase in App downloads
                </div>
                <span className="text-primary font-b" >2.5M</span>
                <div className="text-light">
                    App Downloads Generated
                </div>
            </p>
        </div>
    </div>
</div>
}

export default CaseStudyCardContainer;