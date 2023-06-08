import React from "react";
import MyInput from "./UI/Button/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Find"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sort by"
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By value" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
