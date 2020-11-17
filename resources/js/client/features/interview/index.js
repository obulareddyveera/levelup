import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { dataset, asyncInterviewQuestions } from "./reduxSlice";
import HNav from "./../../components/navbar/hnav";
import Questions from "./../../components/questions";

const InterviewRoute = () => {
    const [search, setSearch] = React.useState();
    const [payload, setPayload] = React.useState();

    const dispatch = useDispatch();
    const modal = useSelector(dataset);
    console.log("--== InterviewRoute ", modal, payload);

    React.useEffect(() => {
        const { questions } = modal;
        if (!payload && questions && questions.length > 0) {
            setPayload(questions);
        }
    }, [modal]);

    React.useEffect(() => {
        dispatch(asyncInterviewQuestions());
    }, []);

    const questionsSearch = () => {
        const searchStr = search.toLowerCase();
        const response = [];
        _.forEach(modal.questions, (item, index) => {
            const {tags, question, answers} = item;
            if (tags.toLowerCase().indexOf(searchStr) > -1) {
                response.push({...item, showAnswer: true});
            } else if (question.toLowerCase().indexOf(searchStr) > -1) {
                response.push({...item, showAnswer: true});
            } else {
                const filterSet = {};
                _.forEach(answers, ans => {
                    if (ans.answer.toLowerCase().indexOf(searchStr) > -1) {
                        filterSet[index] = {...item, showAnswer: true};
                    }
                });
                if (Object.keys(filterSet).length > 0 && filterSet[index]) {
                    response.push(filterSet[index]);
                }
            }
        });
        console.log('--== Search Result ', response);
        setPayload(response);
    }

    return (
        <React.Fragment>
            <HNav />
            <main>
                <div className="container-fluid">
                    <div className="d-flex flex-column mt-3">
                        <div className="d-flex justify-content-end">
                            <div class="input-group col-md-4 col-sm-12">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                    value={search}
                                    onChange={event =>
                                        setSearch(event.target.value)
                                    }
                                />
                                <div class="input-group-append">
                                    <button
                                        class="btn btn-primary"
                                        type="button"
                                        onClick={questionsSearch}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <Questions data={payload} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default InterviewRoute;
