import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const App = () => {
  const sample = [
    { title: "記録A", time: 1 },
    { title: "記録B", time: 3 },
    { title: "記録C", time: 5 },
  ];

  const [errors, setErrors] = useState([]);

  const [records, setRecords] = useState(sample);

  const onClickAdd = () => {
    // const title = document.getElementById("learningContent").value;
    // const time = document.getElementById("learningTime").value;
    let newErrors = [];
    if (learningContent.trim() === "") {
      newErrors.push("学習内容が未入力です");
    }
    if (learningTime === "") {
      newErrors.push("学習時間が未入力です");
    } else if (learningTime <= 0) {
      newErrors.push("学習時間は正の値を入力してください");
    }
    setErrors(newErrors);
    if (newErrors.length > 0) {
      return;
    }

    const newRecords = [
      ...records,
      { title: learningContent, time: learningTime },
    ];
    setRecords(newRecords);
    setLearningContent("");
    setLearningTime(0);
  };

  const totalTime = records.reduce((sum, record) => sum + record.time, 0);

  const [learningContent, setLearningContent] = useState("");
  const [learningTime, setLearningTime] = useState(0);

  const onChangeLearningContent = (event) =>
    setLearningContent(event.target.value);
  const onChangeLearningTime = (event) =>
    setLearningTime(Number(event.target.value));

  return (
    <>
      <div>
        <p>学習内容の登録</p>
        <div>
          学習内容
          <input
            // id="learningContent"
            type="text"
            placeholder="学習内容を入力"
            value={learningContent}
            onChange={onChangeLearningContent}
          ></input>
        </div>
        <div>
          学習時間
          <input
            // id="learningTime"
            type="number"
            placeholder="学習時間を入力"
            value={learningTime}
            onChange={onChangeLearningTime}
          ></input>
          時間
          <div>
            <button onClick={onClickAdd}>登録</button>
          </div>
        </div>
      </div>
      <div>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>合計時間 {totalTime} (時間)</p>
      </div>
      <div>
        <p>学習記録一覧</p>
        <table>
          <thead>
            <tr>
              <th>学習内容</th>
              <th>学習時間</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              // <tr key={record.title}>
              <tr key={uuidv4()}>
                <td>{record.title}</td>
                <td>{record.time.toString()}時間</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
