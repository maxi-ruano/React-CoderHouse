export const  ItemCard = ({item}) => {
    return (
        <div>

               
              <div  className="col-3 m-2" >
                 <h5>{item.nombre}</h5>
                 <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp" className="card-img-top" style={{ objectFit: "cover", aspectRatio: "1 / 1" }} />
                 <h3>Descripcion:{item.descripcion}</h3>
                 <h3>Precio:{item.precio}</h3>
                 <br></br>
                 <button className="btn btn-primary">Ver más</button>
                 <br></br>
                 </div>



        </div>

    )
}