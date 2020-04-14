import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import * as ReactBootStrap from 'react-bootstrap'

const TablePagination = () => {

    const [players, setPlayers] = useState([])
    const [loading, setLoading] = useState(false)

    const getPlayerData = async () => {
        try {
            const data = await axios.get(
                "https://nba-players.herokuapp.com/players-stats"
            );
            console.log(data)
            setPlayers(data.data)
            setLoading(true)
        } catch (err) {
            console.log(err)
        }
    }

    const columns = [
        { dataField: "name", text: " Player Name"},
        { dataField: "points_per_game", text: " Points Per Game"},
        { dataField: "team_name", text: " Player Team"},
    ]

    useEffect(() => {
        getPlayerData()
    }, [])

    return (
        <div className="App">
            {loading ? (
                <BootstrapTable 
                keyField="name"
                data={players}
                columns={columns}
                pagination={paginationFactory()}
            />
            ):(
                <ReactBootStrap.Spinner animation="border" />
            )}
            
        </div>
    )
}

export default TablePagination
