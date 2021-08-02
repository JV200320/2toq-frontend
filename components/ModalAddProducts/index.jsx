import { Modal, Button, Row, Form } from 'react-bootstrap'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addToList} from '../../store/modules/toAddList/reducer'

const ModalAddProducts = ({ show, onHide }) => {

  const dispatch = useDispatch()

  // Selectors + Estados gerais
  const categories = useSelector(state => state.categories.categories)
  const products = useSelector(state => state.products.products)
  const [productList, setProductList] = React.useState(null)
  const [categoryId, setCategoryId] = React.useState(null)

  // Estados dos forms
  const [productId, setProductId] = React.useState('')
  const [productName, setProductName] = React.useState('')
  const [quantity, setQuantity] = React.useState(null)
  const [observation, setObservation] = React.useState('')

  // Setar o id e o nome do produto
  function setProductInfo(value){
    setProductId(value.split('*')[0])
    setProductName(value.split('*')[1])
  }

  // Adicionar o produto à lista
  const addProduct = () => {
    let product = {
      id: productId,
      name: productName,
      observation: observation,
      quantity: quantity
    }
    dispatch(addToList(product))
  }

  // Setar os produtos de acordo com a categoria
  React.useEffect(() => {
    if (categoryId != null) {
      let list = []
      products.forEach((element)=>{
        if (element['category_id'] == categoryId) {
          list.push(element)
        }
      })
      setProductList(list)
    }
  }, [categoryId])

  return (
    <>
      <Modal
        show={show}
        size='sm'
        keyboard={false}
        onHide={() => onHide()}
        className='text-center'
      >
        <Modal.Header className="d-flex justify-content-center">
          <h4>Adicionar produto</h4>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <span>Categoria</span>
          <Row>
            <select className="form-control" id="exampleFormControlSelect1" onClick={(evt) => setCategoryId(evt.target.value)}>
              {categories.map((category, i)=>(<option key={i} value={category['id']}>{category['title']}</option>))}
            </select>
          </Row>
          <Row className="mt-2">
            <span>Produto</span>
          </Row>
          <Row>
            <select className="form-control" id="exampleFormControlSelect3" onClick={(evt) => setProductInfo(evt.target.value)}>
              {productList!= null
              ?
              productList.map((product, i)=>(<option key={i} value={`${product['id']}*${product['name']}`}>{product['name']}</option>))
              :
              <option>Selecione a categoria</option>
            }
            </select>
          </Row>
          <Row className="mt-2">
            <span>Quantidade</span>
          </Row>
          <Row>
            <Form.Control type="number" min={0} size='sm' onBlur={(evt) => setQuantity(evt.target.value)}/>
          </Row>
          <Row className="mt-2">
            <span>Observação</span>
          </Row>
          <Row>
            <Form.Control type="textarea" size='md' value={observation} onChange={(evt) => setObservation(evt.target.value)}/>
          </Row>
          <Button variant="success" className="mt-3" onClick={() => {addProduct();onHide()}}>Adicionar</Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalAddProducts