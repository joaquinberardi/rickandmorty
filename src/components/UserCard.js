function UserCard(props) {
    return(
        <div class="card u-flex u-flex-column">
            <div class="card__container">
                {console.log(props.specs.image)}
                <div class="card__image" style={{"background-image": "url(" + props.specs.image + ")"}}></div>
            </div>                                
        
            <div class="content">
               <p class="title">{props.specs.name}</p>
                <p>Etatus: {props.specs.status}</p>
                <p>Especie: {props.specs.species}</p>
                <p>Origen: {props.specs.origin.name}</p>
            </div>
                  
        </div>
    )
}

export default UserCard