import React from "react";
import { MdSend } from "react-icons/md";

const Add = ({
  charge,
  cost,
  handleCharge,
  handleCost,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="expense">지출항목</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="예) 렌트비"
            value={charge}
            onChange={handleCharge}
          />
        </div>

        <div className="col-sm">
          <label htmlFor="cost">비용</label>
          <input
            type="text"
            className="form-control"
            id="cost"
            name="cost"
            placeholder="0"
            value={cost}
            onChange={handleCost}
          />
        </div>
      </div>

      <button type="submit" className="btn">
        {edit ? "edit" : "제출하기"}
        {/* submit  */}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default Add;