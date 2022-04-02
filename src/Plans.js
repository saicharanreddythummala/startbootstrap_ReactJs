import React from 'react'

export default function Plans({name,price,features}) {
  return (
    <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            
            <h5 class="card-title text-muted text-uppercase text-center">{name}</h5>
            <h6 class="card-price text-center">{price}<span class="period">/month</span></h6>
            <hr />
            <ul class="fa-ul">
              {
                  features.map((feature,index)=> {
                      return (
                          <li key= {index} class={!feature.grey ? "text-muted": ""}>
                              <li><span class="fa-li"><i class={feature.grey ? "fas fa-check" : "fas fa-times"}></i></span>{feature.name}</li>
                        </li>
                      )
                  })
              }
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  )
};
