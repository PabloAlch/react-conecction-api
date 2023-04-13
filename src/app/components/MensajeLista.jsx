import { useEffect, useState, useMemo  } from 'react'
import React from 'react'

import DataTable from 'react-data-table-component'
import styled from 'styled-components'

import { changeStateMessage, getMensajes } from '../../services/services-api'

// import Header from './Header'

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
  border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`

const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  	<>
  		<TextField
  			id="search"
  			type="text"
    		placeholder="Busque por texto"
    		aria-label="Search Input"
  			value={filterText}
  			onChange={onFilter}
  		/>
  		<ClearButton type="button" onClick={onClear}>
  			X
  		</ClearButton>
  	</>
)

export const MensajeLista = () => {
  const [mensaje, setMensaje] = useState([])
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
  
  useEffect(() => {
      getMensajes()
      .then(( data ) => setMensaje( data ))
  }, [])

  function handleReadMessage(id) {
    changeStateMessage(id)
    
  }


  const columns = [
    {
        name: 'ID',
        selector: row => row.id_mensaje,
        sortable: true,
        center: true,
        width: "50px"
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
                    <button 
                        className='btn btn-danger' 
                        onClick={() => handleReadMessage(row.id_mensaje)}
                      >
                          Leer
                      </button>,
      allowOverflow: true,
      ignoreRowClick: true,
      width: "100px",
      button: true,
    }
  ]

  const paginacionOpciones = {
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
  }

  const filteredItems = mensaje.data?.filter(item => item.name && item.text.toLowerCase().includes(filterText.toLowerCase()))

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
    			if (filterText) {
    			setResetPaginationToggle(!resetPaginationToggle);
    				setFilterText('');
    			}
    		};
    
    		return (
    			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    		);
    	}, [filterText, resetPaginationToggle]);
    
  

    const conditionalRowStyles = [
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

      
  if (!filteredItems)
          return (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          );

  return (
    <>
      <div className='card-header'>
        {/* <Header /> */}
      </div>
    
      <div className='m-5'>
          <DataTable 
            conditionalRowStyles={conditionalRowStyles}
            columns={columns}
            data={filteredItems}
            title="Lista de mensajes"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight='600px'
            highlightOnHover
            pointerOnHover
            subHeader
		        subHeaderComponent={subHeaderComponentMemo}
	          selectableRows
            />
      </div>
    </>
  )
}
