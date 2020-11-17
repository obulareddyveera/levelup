import React from "react";
import ReactHtmlParser from "react-html-parser";
import { CaretRight, CaretDown } from "@styled-icons/fa-solid";
import _ from "underscore";
import { Toggle } from "@styled-icons/remix-fill";

const QuestionsComponent = props => {
    const [dataSet, setDataSet] = React.useState();
    const { data } = props;
    React.useEffect(() => {
        if (data && data.length > 0) {
            setDataSet(data);
        }
    }, [data]);

    let uniqueId = 0;
    const genUniqueKey = context => {
        uniqueId = uniqueId + 1;
        return context + "_" + new Date().getTime() + "_" + uniqueId;
    };

    const toggleEntity = (entity, index) => {
        const cloneData = _.map(dataSet, _.clone);
        _.forEach(cloneData, item => {
            if (item.id === entity.id) {
                item.showAnswer = !item.showAnswer;
                console.log("toggleEntity --== ", item);
            }
        });
        setDataSet(cloneData);
    };
    console.log("--== Dataset Checks ", dataSet);

    return (
        <table className="table no-border">
            <tbody>
                {dataSet &&
                    dataSet.map((item, index) => {
                        return (
                            <React.Fragment key={genUniqueKey("question")}>
                                <tr>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-link"
                                            onClick={() =>
                                                toggleEntity(item, index)
                                            }
                                        >
                                            {item.showAnswer ? (
                                                <CaretDown
                                                    size="16"
                                                    className="text-dark"
                                                />
                                            ) : (
                                                <CaretRight
                                                    size="16"
                                                    className="text-dark"
                                                />
                                            )}
                                        </button>
                                    </td>
                                    <td>{item.question}</td>
                                    <td className="d-flex flex-wrap">
                                        {item.tags.split(",").map(tag => {
                                            return (
                                                <div
                                                    className="badge badge-warning m-1"
                                                    key={genUniqueKey("tag")}
                                                >
                                                    {tag}
                                                </div>
                                            );
                                        })}
                                    </td>
                                </tr>
                                {item.showAnswer && (
                                    <tr>
                                        <td
                                            colSpan="3"
                                            style={{ padding: "0px" }}
                                        >
                                            <ul className="list-group">
                                                {item.answers &&
                                                    item.answers.map(
                                                        (ans, index) => {
                                                            return (
                                                                <React.Fragment
                                                                    key={genUniqueKey(
                                                                        "answer"
                                                                    )}
                                                                >
                                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                                        {ReactHtmlParser(
                                                                            ans.answer
                                                                        )}
                                                                    </li>
                                                                </React.Fragment>
                                                            );
                                                        }
                                                    )}
                                            </ul>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default QuestionsComponent;
