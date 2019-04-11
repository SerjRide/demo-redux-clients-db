import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrderById } from '../../../service'

import { hideModal } from '../../../actions';

class EditOrder extends Component {

  componentDidUpdate() {
    if (this.state.editMode) {
      const { orders } = this.props.state
      const { id } = this.props.state.modal;
      const order = getOrderById(orders, id)
      this.editManager.value = order.manager;
      this.editCustomer.value = order.customer;
      this.editName.value = order.name;
      this.editContacts.value = order.contacts;
      this.editPrice.value = order.price;
      this.editProduct.value = order.product;
    }
  }

  render() {
    const { orders } = this.props.state
    const { id } = this.props.state.modal;
    const order = getOrderById(orders, id)

    return (
      <React.Fragment>
        <div className="modal-shadow"
          onClick={ () => this.props.hideModal() }>
        </div>
        <div className="edit-order">
          <div className="my-modal">
            <div className="my-modal-content">

              <div className="header">
                <h5>Закзак #{ order.namber }</h5>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="body">
                    <p><b>Исполнитель: </b>{ order.manager }</p>
                    <p><b>Заказчик: </b>{ order.customer }</p>
                    <p><b>Дата заказа: </b>{ order.date }</p>
                    <p><b>Контактное лицо: </b>{ order.name }</p>
                    <p><b>Контактные данные: </b>{ order.contacts }</p>
                    <p><b>Цена: </b>{ order.price }</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="body">
                    <p><b>Товары: </b></p>
                    <p>{ order.product }</p>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary"
                  onClick={ () => this.props.hideModal() }>
                  Закрыть
                </button>
                { order.applyButton }
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(EditOrder);
