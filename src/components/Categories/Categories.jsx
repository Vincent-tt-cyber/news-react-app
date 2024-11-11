import styles from './Categories.module.scss'

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
	// console.log("categories", categories);

	return (
		<div className={styles['categories']} >
			{
				categories.map(category => {
					return (
						<button key={category} onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? styles['active'] : styles['item']}  >{category}</button>
					)
				})
			}
		</div>
	)
}

export default Categories