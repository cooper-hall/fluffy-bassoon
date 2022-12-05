import Modal from './Modal'


function Eighteen ({recipeCards, showModal}) {
  return (
    <div className="big big div">
      {
        recipeCards.map((recps) => {
          return (
            <div className="recipe card">
              <img src={recps.image} className="card image"/>
              <div className="small info">
                <h2>{recps.name}</h2>
                <p>{recps.description}</p>
              </div>
              <Modal showModal={showModal}/>
            </div>
          )
        })

      }
    </div>
  )
}

export default Eighteen