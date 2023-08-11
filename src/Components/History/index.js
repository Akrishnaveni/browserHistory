import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

class History extends Component{
    const {historyList}=props
    state={searchInput:"",historyList:historyList}

    onChangeSearchInput=event=>{
        this.setState({searchInput:event.target.value})
    }

    deleteHistory=(id)=>{
        const {historyList}=this.state
        const filterList=historyList.filter(each=>each.id!==id)

        this.setState({historyList:filterList})
    }

  render() {
       const {historyList,seacrhInput}=this.state
        const searchResult=historyList.filter(each=>(each.title.includes(searchInput)))

    return (
        <div className="app-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <div className="input-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-image"
                alt="search"
              />
            </div>
            <input
              placeholder="search History"
              type="search"
              value={historyList}
              className="input" onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <ul className="list-container">
            {searchResult.map(each=>
            <HistoryItem historyDetails={each} key={each.id} deleteHistory={this.deleteHistory}/>)}

        </ul>
      </div>
    )

  }
}

export default History
