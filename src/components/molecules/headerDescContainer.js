export default ({ header, desc })=> {
    return <section class="staff-card mt-5">
    <div class="container">
    <div class="md-12 text-lg-center mx-auto">
        <div class=" mx-auto my-auto  ">
            <h2>{header}</h2>
            <div className="w-res-75 mx-auto" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
    </div>
    </div>
</section>
}