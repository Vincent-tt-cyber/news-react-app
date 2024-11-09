import styles from "./Pagination.module.scss"

const Pagination = ({
	totalPages,
	handleNextPage,
	handlePreviusPage,
	currentPage,
	handlePageClick }) => {
	return (
		<div className={styles["pagination"]} >
			<button disabled={currentPage <= 1} onClick={() => handlePreviusPage()} className={styles["arrow"]} >{"<"}</button>
			<div className={styles["list"]} >
				{
					[...Array(totalPages)].map((_, index) => (
						<button disabled={index + 1 === currentPage} onClick={() => handlePageClick(index + 1)} className={styles["pageNumber"]} key={index} >{index + 1}</button>
					))
				}
			</div>
			<button disabled={currentPage >= totalPages} onClick={() => handleNextPage()} className={styles["arrow"]} >{">"}</button>
		</div>
	)
}

export default Pagination