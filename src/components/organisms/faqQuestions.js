import React from 'react';
import HeaderDescContainer from "../molecules/headerDescContainer";

const FaqQuestions = () => {
    const [faqCurrentQuestionId, setFaqCurrentQuestionId] = React.useState(0);

    return  <section className="mt-5 pt-2">
        <HeaderDescContainer
            header={"<h2>Frequently Asked Questions</h2>"}
            desc={
                "<p>Discover unparalleled SEO success with our top-rated professional SEO agency. </p>"
            }
        />
        <div className="accordion bg-black mt-4">
            {
                [
                    {
                        question:"What are SEO services?",
                        answer:"<p>Our SEO services optimize your website for search engines, enhancing visibility and driving organic traffic for better online performance.</p>"
                    },
                    {
                        question:"Why choose professional SEO services?",
                        answer:"<p>Professional expertise ensures effective strategies, delivering superior results and maximizing your online presence.</p>"
                    },
                    {
                        question:"Why choose professional SEO services?",
                        answer:"<p>Professional expertise ensures effective strategies, delivering superior results and maximizing your online presence.</p>"
                    },
                    {
                        question:"Why choose professional SEO services?",
                        answer:"<p>Professional expertise ensures effective strategies, delivering superior results and maximizing your online presence.</p>"
                    },
                    {
                        question:"Why choose professional SEO services?",
                        answer:"<p>Professional expertise ensures effective strategies, delivering superior results and maximizing your online presence.</p>"
                    },
                    {
                        question:"Why choose professional SEO services?",
                        answer:"<p>Professional expertise ensures effective strategies, delivering superior results and maximizing your online presence.</p>"
                    }
                ].map((faq,index) =>  <div key={index} className="accordion-item  mb-2 bg-dark text-light" style={{ borderRadius:20, overflow:'hidden' }}>
                    <h2 className="accordion-header mt-0" id={"heading"+index}>
                        <button className={"accordion-button font-weight-bold "+(index === faqCurrentQuestionId ?" " : "collapsed") } onClick={()=> setFaqCurrentQuestionId((index === faqCurrentQuestionId ? null :index))} type="button"
                                data-bs-toggle="collapse" data-bs-target={"#collapse"+index} aria-expanded={(index === faqCurrentQuestionId ?"true" : "false")}
                                aria-controls={"collapse"+index}>
                            {faq.question}
                        </button>
                    </h2>
                    <div id={"collapse"+index} className={"accordion-collapse collapse"+(index === faqCurrentQuestionId ?"  show " : " ")} aria-labelledby={"heading"+index}
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong dangerouslySetInnerHTML={{ __html:faq.answer }} />
                        </div>
                    </div>
                </div> )
            }
        </div>
    </section>
};

export default FaqQuestions;