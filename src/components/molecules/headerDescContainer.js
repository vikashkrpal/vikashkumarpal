const HeaderDescContainer = ({ header, desc }) => {
    return <section className="staff-card mt-5">
    <div className="container">
    <div className="md-12 text-lg-center mx-auto">
        <div className=" mx-auto my-auto  ">
            <h2>{header}</h2>
            <div className="w-res-75 mx-auto" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
    </div>
    </div>
</section>
}

export default HeaderDescContainer;
