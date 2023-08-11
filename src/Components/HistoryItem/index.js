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
      <img src={logoUrl} alt="logo" className="logo" />
      <h1 className="title">{title}</h1>
      <p className="domain">{domainUrl}</p>
      <button type="button" className="btn" onClick={onDelete}>
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
