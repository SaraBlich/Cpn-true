import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import CompanyRow from './CompanyRow.js';

class FilteredCompanyTable extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      myCompanies: [],
      queryText: '',
      orderBy: 'name',
      orderDir: true,
      companyWithIncomes: [],
      id: []
    };



    this.searchCompanies = this.searchCompanies.bind(this);
    this.changeOrder = this.changeOrder.bind(this);

  };

  searchCompanies(query)
  {
    this.setState({
      queryText: query
    });
  }

  changeOrder = (order) =>
  {
    this.setState(prevState =>({
      orderDir: !prevState.orderDir,
      orderBy: order
      
    }));
  }

  componentDidMount() {
    fetch('https://recruitment.hal.skygate.io/companies')
      .then(res => res.json())
      .then(
        (result) => {
          result.forEach(company => {
            fetch(`https://recruitment.hal.skygate.io/incomes/${company.id}`)
            .then(res => res.json())
            .then((res =>{

              // let dates = (res.incomes).map(dates =>{
              //   let dataTable = [];
              //   dataTable = [dates.value, dates.date];
              //   (dates.date).includes('2019-12')

              //   let lmIncomes = lastMonth.reduce((prevDate, actDate) => {
              //     return (Math.round((prevDate + parseFloat(actDate.value))*100)/100);
              //   },0);
              //   return lmIncomes;
              // })


              let tot = (res.incomes).reduce((prevComp, actComp) =>
              {

                parseFloat(prevComp);
                return (Math.round((prevComp + parseFloat(actComp.value))*100)/100);
              },0);

              let avg = Math.round((tot/(res.incomes).length)*100)/100;

              let companyWithIncomes = {...company, incomes: res.incomes, totIncomes: tot, avgIncomes: avg}
              // console.log(companyWithIncomes)

              this.setState((prevState) =>({
                myCompanies:[...prevState.myCompanies, companyWithIncomes],
                isLoaded: true
              }))

              }));


            });
          },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        },
      );
      }




    render() {

      
      

      let order;

      let filteredCompanies = this.state.myCompanies;

      filteredCompanies = filteredCompanies.filter(eachItem => {
        return(
          (eachItem['id'].toString()).includes(this.state.queryText.toString()) || 
          (eachItem['totIncomes'].toString()).includes(this.state.queryText.toString()) || 
          (eachItem['avgIncomes'].toString()).includes(this.state.queryText.toString()) ||
          eachItem['name'].toLowerCase().includes(this.state.queryText.toLowerCase()) || 
          eachItem['city'].toLowerCase().includes(this.state.queryText.toLowerCase())
        
        );
      });
      

      if(this.state.orderDir)
      {
        order = 1;
      }
      else
      {
        order = -1;
      }

      if ((this.state.orderBy === 'id') || (this.state.orderBy === 'totIncomes') || (this.state.orderBy === 'avgIncomes' ))
      {
        
        filteredCompanies = filteredCompanies.sort((a, b) => {
          if (a[this.state.orderBy] < b[this.state.orderBy])
          {
            return -1 * order;
          }
          else
          {
            return 1 * order;
          }
        
        });
      }
      else
      {
        

      filteredCompanies = filteredCompanies.sort((a, b) => {
        if (a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase())
        {
          return -1 * order;
        }
        else
        {
          return 1 * order;
        }
      }) //stop
      
    }

      return (
        <div id = "container">
          <SearchBar 
          searchCompanies = {this.searchCompanies}
          />
          <CompanyRow
          myCompanies = {filteredCompanies} 
          error = {this.state.error} 
          isLoaded = {this.state.isLoaded} 
          queryText = {this.state.queryText}
          orderDir = {this.state.orderDir}
          orderBy = {this.state.orderBy}
          changeOrder = {this.changeOrder} />
        </div>
      )
    }
}

export default FilteredCompanyTable;
