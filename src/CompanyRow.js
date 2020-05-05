import React, {Component} from 'react';

class CompanyRow extends Component {
  
  
  render() {
    const error = this.props.error;
    const isLoaded = this.props.isLoaded;
    const myCompanies = this.props.myCompanies;
  
    
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className = 'loading-text'>Loading...</div>;
    } else {
      return (
        <div className = "table-center">
        <table className = 'whole-table'>
            <thead className = 'tr-table'>
                <tr className = 'tr-table'>
                    <th>
                      <button className = 'button-th'
                        onClick = {e => this.props.changeOrder('name')} href = '#'
                        > 
                        Name
                     </button>
                    </th>
                    <th>
                      <button className = 'button-th'
                        onClick = {e => this.props.changeOrder('city')} href = '#'
                         >
                        City
                      </button>
                    </th>
                    <th>
                      <button className = 'button-th'
                        onClick = {e => this.props.changeOrder('id')} href = '#'
                        >
                        ID
                      </button>
                    </th>
                    <th>
                      <button className = 'button-th'
                      onClick = {e => this.props.changeOrder('totIncomes')} href = '#'>
                        Total income
                      </button>
                    </th>
                    <th>
                      <button className = 'button-th'
                      onClick = {e => this.props.changeOrder('avgIncomes')} href = '#'>
                        Average incomes
                      </button>
                    </th>
                    <th>
                      <button className = 'button-th'>
                        Last month incomes
                      </button>
                    </th>
                </tr>
            </thead>
            <tbody className = 'tr-table'>
          {myCompanies.map(myCompanies => (

            <tr className = 'tr-table' key={myCompanies.id}>
              <td>{myCompanies.name}</td>
              <td>{myCompanies.city}</td>
              <td>{myCompanies.id}</td>
              <td>{myCompanies.totIncomes}</td>
              <td>{myCompanies.avgIncomes}</td>
              {/* <td>{myCompanies.lmIncomes} </td> */}
            </tr>
          ))}
          </tbody>
        </table>
        </div>
      );
    }
  }
}

export default CompanyRow;