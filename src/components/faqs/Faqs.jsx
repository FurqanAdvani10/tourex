import './faqs.css'

const CFaq = ({ faq, index, toggleFAQ }) => {
   
    return (
        <div>
            <div className="faqs">
                <div
                    className={"faq " + (faq.open ? "open" : "")}
                    key={index}
                    onClick={() => toggleFAQ(index)}
                >
                    <div className="faq-question">{faq.question}</div>
                    <div className="faq-answer">{faq.answer}</div>
                </div>
            </div>
        </div>
    )
}

export default CFaq
