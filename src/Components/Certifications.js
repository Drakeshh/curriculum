import React, { Component } from 'react';

class Certifications extends Component {
  render() {

    if(this.props.data){
      var certs = this.props.data.certs.map(function(certs){
        var certsImage = 'images/portfolio/'+certs.image;
        return <div key={certs.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={certs.url} target="_blank" title={certs.title}>
               <img alt={certs.title} src={certsImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{certs.title}</h5>
                     <p>{certs.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="certifications">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Certs:</h1>

            <div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {certs}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Certifications;
