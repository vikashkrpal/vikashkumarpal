import { isNotNull } from "@/utils/globalFunctions";

const HeaderDescContainer = ({ header = null, desc, highligter = null, textAlignCenter = true, addClass = ""}) => {
    return <section className="staff-card mt-5">
    <div className={"md-12 mx-auto "+ (textAlignCenter == true ? "text-lg-center" :  "text-start")}>
        {isNotNull(highligter) && <span className="mb-3 theme-color">{highligter}</span>}
        <div className=" mx-auto my-auto  ">
            {isNotNull(header) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: header }} /> }
            <div className={"mx-auto "+addClass} dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
    </div>
</section>
}

export default HeaderDescContainer;
