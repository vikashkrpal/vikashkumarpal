import Image from "next/image";
import Link from "next/link";

const IconCardContainer = ({ icon, heading, desc, listData, altText = 'alt text image'}) => {
    return <div className="card check-card p-3 brands-experiences-card mt-4">
    <div className="row">
        <div className="col-md-4 ms-3">

            <Image src={icon} alt={altText} width="100" height="100" className="" />

        </div>
    </div>

    <div className="card-body service-card-body">
        <div className="card-title mx-auto h-margin-0" dangerouslySetInnerHTML={{ __html: heading }} />
        <div className="mx-auto p-bottom-0" dangerouslySetInnerHTML={{ __html: desc }} />

        <ul className="list-unstyled pt-2 mb-2  ">
            {
                listData.map((liData, index)=> <li key={index}> <Image src={require('../../asserts/checkmark-icon.png')} alt="check mark icon" width="20" height="20" className="mb-1" />  {liData.servicePointName}</li>)
            }
                                  </ul>
    </div>
</div>
}

export default IconCardContainer;
