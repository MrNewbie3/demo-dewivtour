import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search_Bar = (props) => {
  return (
    <div className="search-bar self-end w-full md:w-1/2 bg-buttonDisabled rounded-full flex flex-row justify-end items-center  px-8 py-3">
      <input
        onChange={props.onChange}
        value={props.value}
        type="text"
        placeholder="Cari Destinasi cth: Kampung Warna Warni"
        className="input w-full input-sm bg-buttonDisabled rounded-full border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
      />
      <SearchRoundedIcon />
    </div>
  );
};
export default Search_Bar;
