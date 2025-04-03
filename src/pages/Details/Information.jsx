
import React from 'react'

const Information = ({ data }) => {
    console.log(data)
    return (
        <div>
            {data.modules && (
                <div className="row mt-5">
                    <h3 className="mb-4 module-title">Modules</h3>
                    {data.modules.map((module, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card module-card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{module.name}</h5>
                                    <p className="card-text">
                                        <strong>Duration:</strong> {module.duration}
                                    </p>
                                    <p className="card-text text-muted">{module.description}</p>
                                    <ul className="list-unstyled mt-3">
                                        {module.topics.map((topic, i) => (
                                            <li key={i} className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-arrow-right-circle-fill text-info me-2"></i>
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Information
