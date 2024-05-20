import React from 'react';
import HeaderDescContainer from "../molecules/headerDescContainer";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";

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
                    <h5 className="mt-0 px-4 py-3 bg-black mb-0" id={"heading"+index}>
                        <div className={" font-weight-bold row "+(index === faqCurrentQuestionId ?" " : "collapsed") } style={{ width:'100%', cursor:'pointer'}} onClick={()=> setFaqCurrentQuestionId((index === faqCurrentQuestionId ? null :index))}
                                data-bs-toggle="collapse" data-bs-target={"#collapse"+index} aria-expanded={(index === faqCurrentQuestionId ?"true" : "false")}
                                aria-controls={"collapse"+index}>
                            <div className="col">
                                {faq.question}
                            </div>
                            <div className="col-auto">
                                {(index === faqCurrentQuestionId ?<FaAngleUp /> : <FaAngleDown />)}
                            </div>
                        </div>
                    </h5>
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
