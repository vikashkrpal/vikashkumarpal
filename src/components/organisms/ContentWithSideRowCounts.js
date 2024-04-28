const ContentWithSideRowCounts = () => {
    return (
        <div className="row align-items-center mt-5">
            <div className="col-sm-12 col-lg-4 col-md-6">
                <h2>Our impact in numbers</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur purus convallis cursus turpis
                    in et.
                </p>
            </div>
            <div className="col-sm-12 col-lg-8 col-md-6">
                <div className="row text-lg-center">
                    {[
                        {
                            count: "200+",
                            desc: "Companies helped",
                        },
                        {
                            count: "150m",
                            desc: "Revenue generated",
                        },
                        {
                            count: "400+",
                            desc: "Team members",
                        },
                        {
                            count: "300+",
                            desc: "Successful projects",
                        },
                    ].map((d, i) => (
                        <div className="col" key={i}>
                            <h2 className="mb-0">{d.count}</h2>
                            <p>{d.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ContentWithSideRowCounts;
