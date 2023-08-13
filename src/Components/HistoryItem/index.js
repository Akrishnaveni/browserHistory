import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="logo" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>
      <button
        data-testid="delete"
        type="button"
        className="btn"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
