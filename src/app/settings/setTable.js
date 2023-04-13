

export const columns = [
  {
      name: 'ID',
      selector: row => row.id_mensaje,
      sortable: true,
      center: true,
  },
  {
    name: 'Texto',
    selector: row => row.text,
    sortable: true,
    width: "350px"
  },
  {
    name: 'Nombre',
    selector: row => row.name,
    sortable: true,
    width: "200px",
    center: true
  },
  {
    name: 'Creado',
    selector: row => row.created_at,
    sortable: true,
    width: "200px",
    center: true
  },
  {
    name: 'Estado',
    selector: row => row.state,
    sortable: true,
    width: "150px",
    center: true
  },
  {
    name: 'Categoria',
    selector: row => row.category,
    sortable: true,
    width: "150px",
    center: true,
  },
  {
    name: 'Leer',
    cell: row => 
                  // <form onSubmit={ handleReadButton }>
                  <button 
                      // type='submit'
                      className='btn btn-danger' 
                      onClick={() => handleReadMessage(row.id_mensaje)}
                    >
                        Leer
                    </button>,
                  //  </form>,
    allowOverflow: true,
    ignoreRowClick: true,
    width: "100px",
    button: true,
  }
]


export const conditionalRowStyles = [
  {
    when: row => row.state === 'Leido',
    style: {
      backgroundColor: 'rgba(63, 195, 128, 0.7)',
      color: 'white'
    },
  },
  {
    when: row => row.state === 'No leido',
    style: {
      backgroundColor: 'rgba(248, 148, 6, 0.7)',
      color: 'white'
     
    },
  }
]

export const paginacionOpciones = {
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
}

export const filteredItems = mensaje.data?.filter(item => item.name && item.text.toLowerCase().includes(filterText.toLowerCase()))
