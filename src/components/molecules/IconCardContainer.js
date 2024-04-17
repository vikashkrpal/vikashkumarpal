import Image from "next/image";
import Link from "next/link";

const IconCardContainer = ({ icon, heading, desc, listData}) => {
    return <div class="card check-card p-3 brands-experiences-card mt-4">
    <div class="row">
        <div class="col-md-4 ms-3">

            <Image src={icon} alt="..." width="100" height="100" class="" />

        </div>
    </div>

    <div class="card-body service-card-body">
        <span class="card-title mx-auto"><h4 className="mt-0 mb-2"><Link href="#" className="elementor-icon">{heading}</Link></h4></span>
        <div className="mx-auto p-bottom-0" dangerouslySetInnerHTML={{ __html: desc }} />
        
        <ul class="list-unstyled pt-2 mb-2  ">
            {
                listData.map((liData, index)=> <li key={index}> <Image src="https://improvefx.com/public/asserts//icon-services.svg" alt="..." width="20" height="20" class="" />  {liData}</li>)
            }
                                  </ul>
    </div>
</div>
}

export default IconCardContainer;