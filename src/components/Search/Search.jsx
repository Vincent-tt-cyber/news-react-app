import styles from "./Search.module.scss"


const Search = ({ keywords, setKeywords }) => {
	return (
		<div><input type="text" className={styles["input"]} value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="Search" /></div>
	)
}

export default Search