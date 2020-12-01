import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { dataset, asyncInterviewQuestions } from "./reduxSlice";
import HNav from "./../../components/navbar/hnav";
import Questions from "./../../components/questions";

const InterviewRoute = () => {
    const [context, setContext] = React.useState("all");
    const [search, setSearch] = React.useState("");
    const [payload, setPayload] = React.useState();

    const dispatch = useDispatch();
    const modal = useSelector(dataset);

    React.useEffect(() => {
        const { questions } = modal;
        if (!payload && questions && questions.length > 0) {
            setPayload(questions);
        }
    }, [modal]);

    React.useEffect(() => {
        dispatch(asyncInterviewQuestions());
    }, []);

    const searchString = (item, index) => {
        const { tags, question, answers } = item;
        const searchStr = search.toLowerCase();
        if (tags.toLowerCase().indexOf(searchStr) > -1) {
            return true;
        } else if (question.toLowerCase().indexOf(searchStr) > -1) {
            return true;
        } else {
            const filterSet = {};
            _.forEach(answers, ans => {
                if (ans.answer.toLowerCase().indexOf(searchStr) > -1) {
                    filterSet[index] = { ...item, showAnswer: true };
                }
            });
            if (Object.keys(filterSet).length > 0 && filterSet[index]) {
                return true;
            }
        }

        return false;
    };

    const questionsSearch = str => {
        const response = [];
        const contextStr = str;
        _.forEach(modal.questions, (item, index) => {
            const { tags } = item;
            if (contextStr && contextStr.toLowerCase() !== "all") {
                if (tags.toLowerCase().indexOf(contextStr.toLowerCase()) > -1) {
                    response.push({ ...item, showAnswer: false });
                    setSearch("");
                }
            } else {
                if (searchString(item, index)) {
                    response.push({ ...item, showAnswer: true });
                }
            }
        });
        setPayload(response);
    };

    const onSearchClick = event => {
        setContext("all");
        questionsSearch();
    };

    const onContextChange = async event => {
        const selectedItem = event.target.value;
        questionsSearch(selectedItem);
        setContext(selectedItem);
    };

    return (
        <React.Fragment>
            <HNav />
            <main>
                <div className="container-fluid">
                    <div className="d-flex flex-column mt-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <select
                                    className="custom-select"
                                    onChange={event => onContextChange(event)}
                                    defaultValue={"all"}
                                >
                                    {[
                                        { value: "all", label: "All" },
                                        { value: "basic", label: "Basic" },
                                        { value: "html", label: "HTML" },
                                        { value: "css", label: "CSS" },
                                        {
                                            value: "javascript",
                                            label: "Javascript"
                                        },
                                        { value: "react", label: "React" }
                                    ].map(item => {
                                        if (context === item.value) {
                                            return (
                                                <option
                                                    selected
                                                    value={item.value}
                                                    key={item.value}
                                                >
                                                    {item.label}
                                                </option>
                                            );
                                        }
                                        return (
                                            <option
                                                value={item.value}
                                                key={item.value}
                                            >
                                                {item.label}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <div className="d-flex justify-content-end">
                                    <input
                                        type="text"
                                        className="form-control col-md-4"
                                        placeholder="Search (press enter)"
                                        aria-label="Search"
                                        aria-describedby="basic-addon2"
                                        value={search}
                                        onChange={event => setSearch(event.target.value)}
                                        onKeyPress={(event) => {
                                            if(event.key === "Enter"){
                                                setTimeout(() => {
                                                    onSearchClick();
                                                }, 300);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <Questions data={payload} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default InterviewRoute;
