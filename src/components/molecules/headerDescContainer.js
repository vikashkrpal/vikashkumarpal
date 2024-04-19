import { is_not_null } from "@/utils/globalFunctions";

const HeaderDescContainer = ({ header = null, desc, highligter = null}) => {
    return <section className="staff-card mt-5">
    <div className="md-12 text-lg-center mx-auto">
        {is_not_null(highligter) && <span className="mb-3 theme-color">{highligter}</span>}
        <div className=" mx-auto my-auto  ">
            {is_not_null(header) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: header }} /> }
            <div className="mx-auto" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
    </div>
</section>
}

export default HeaderDescContainer;
