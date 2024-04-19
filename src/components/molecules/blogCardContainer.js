import Link from 'next/link';
import Image from "next/image";
const BlogCardContainer =  ({image,category,avtar,header,desc,time, column=true}) => {
    return <div className={column && "col-lg-4"}>
    <div className="card rounded-4 overflow-hidden  brands-experiences-card mt-4" >
                <div className="blog-card-content">
                    <Link href="#">
                        <Image width="450" height="300"  alt=" alt image" src={image} />
                    </Link>
                </div>

                <div className="container" style={{ marginTop:-40 }}>

                <div className="row px-2 align-items-center">
                        <div className="col-6">
                            <Link href="#">
                                    <span className="badge bg-primary p-2">
                                        {category}
                                    </span>
                            </Link>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <div className="p-2" style={{ backgroundColor:'#2C2D2F',borderRadius:'100%' }}>
                            <Link href="#">
                                <Image src={avtar} width="60" height="60" alt="Client Avatar Icon" style={{ borderRadius: 100 }}/>
                            </Link>
                            </div>
                        </div>
                        </div>
                    <div className="mt-3">
                    <Link href="#"><h4>{header}</h4></Link>
                        <div dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                </div>
                <div className="card-body border-top">
            <p className="card-text ">
                <small className="text-light">
                    September 1, 2022
                </small>
                </p>
        </div>
    </div>
</div>
}

export default BlogCardContainer;
