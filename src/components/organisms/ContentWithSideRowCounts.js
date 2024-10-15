const ContentWithSideRowCounts = ({ heading, desc, points }) => {
    return (
        <div className="row align-items-center mt-5">
            <div className="col-sm-12 col-lg-4 col-md-6">
                <div className="" dangerouslySetInnerHTML={{ __html: heading }} />
                <div className="" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
            <div className="col-sm-12 col-lg-8 col-md-6">
                <div className="row text-lg-center">
                    {points.map((d, i) => (
                        <div className="col" key={i}>
                            <label style={{ fontSize:30, fontFamily:"Gt walsheim bold" }} className="mb-0">{d.count}</label>
                            <p>{d.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ContentWithSideRowCounts;
