import React from 'react'

function Project() {
  return (
    <div className="display:flex;">
    <div className="n1">
      <img
        src="https://hostim-html.themetags.com/assets/img/home3/ft-1.jpg"
        alt=""
      />
      <div className="card">
        <h1>Assassin's Creed Valhalla</h1>
        <div className=" display: flex; ">
          <p>$26.00</p>
          <p>$30.00</p>
        </div>
        <div className="cd">
          <div className="paragraf">
            <p>Activison:</p>
            <p>PS4, PS5, Xbox One, Xbox Series X</p>
          </div>
          <div className="button">
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
    <div className="around">
      <div className="n2">
        <img
          src="https://hostim-html.themetags.com/assets/img/home3/ft-2.jpg"
          alt=""
        />
        <div className="card2">
          <h1>Assassin's Creed Valhalla</h1>
          <div className="name">
            <p>$26.00</p>
            <p>$30.00</p>
          </div>
          <div className="cd">
            <div className="paragraf">
              <p>Activison:</p>
              <p>PS4, PS5, Xbox One, Xbox Series X</p>
            </div>
            <div className="button">
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="img2">
        <div className="img3">
          <img
            src="https://hostim-html.themetags.com/assets/img/home3/ft-3.jpg"
            alt=""
          />
          <div className="card3">
            <h1>Assassin's Creed Valhalla</h1>
            <div className="name">
              <p>$26.00</p>
              <p>$30.00</p>
            </div>
            <div className="cd">
              <div className="button">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="img4">
          {" "}
          <img
            src="https://hostim-html.themetags.com/assets/img/home3/ft-4.jpg"
            alt=""
          />
          <div className="card3">
            <h1>Assassin's Creed Valhalla</h1>
            <div className="name">
              <p>$26.00</p>
              <p>$30.00</p>
            </div>
            <div className="cd">
              <div className="button">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Project