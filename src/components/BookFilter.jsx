import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import style from "./BookFilter.module.css";

function BookFilter({ filter, setFilter }) {
  return (
    <div className={style.search}>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск ..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По наименованию" },
          { value: "author", name: "По автору" },
        ]}
      />
    </div>
  );
}

export default BookFilter;
