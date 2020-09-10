import React, { Component } from 'react';


const styles = {
  width: '10px',
}
class Portfolio extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var portfolio = this.props.data.portfolio.map(function(portfolio){
        var projectImage = 'images/portfolio/' + portfolio.image;
        return <div key={portfolio.company}><h3>{portfolio.company}</h3>
            <p className="info"><h1>{portfolio.title}</h1><span>&bull;</span> <em className="date">{portfolio.years}</em></p>
            <p>{portfolio.description}</p>
            <div key={portfolio.workTitle} className="columns portfolio-item">
            <div style={{position: "relative", left: "-3.3%"}} className="item-wrap" >
              <a href={portfolio.url} title={portfolio.workTitle}>
                <img alt={portfolio.workTitle} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{portfolio.workTitle}</h5>
                    <p>{portfolio.category}</p>
                  </div>
                </div>
              </a>
              <br/><br/>
            </div>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
      <div className="row work">
         <div className="three columns header-col">
            <h1><span>My Projects</span></h1>
         </div>

         <div className="nine columns main-col">
          {portfolio}
        </div>
    </div>
   </section>
    );
  }
}

export default Portfolio;
