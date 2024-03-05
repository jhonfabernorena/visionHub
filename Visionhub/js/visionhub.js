console.log(emprendedores);

// cards emprendedores

document.addEventListener("DOMContentLoaded",()=>{
    tarjetasemprendedores(emprendedores)
    
})

function tarjetasemprendedores(emprendedores){
    const contenedor = document.querySelector("#tarjetas");

    emprendedores.forEach((emprendedores) => {
        const {nombreDelNegocio,descripcion,dueño,tipoNegocio,contacto,imagen}= emprendedores
        const card = document.createElement("a")
        card.innerHTML=`  
        
        <div class="card" style="width: 18rem;" >
        <img src="${imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${nombreDelNegocio}</h5>
          <p class="card-text">${descripcion}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>Propietario:</b> ${dueño}</li>
          <li class="list-group-item"><b>Tipo:</b> ${tipoNegocio}</li>
          <li class="list-group-item"> <b>Contacto:</b> ${contacto}</li>
        </ul>
      </div> 
      
      
      
      
      <div class="card-footer">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Ver detalles
      </button>
    </div>
  </div>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Detalles del emprendedor</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ${descripcion}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
    `
      contenedor.appendChild(card)
        
    });


}

fu

