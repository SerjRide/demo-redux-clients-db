import passwordHash from 'password-hash';

const demo_orders_10   = require('../demo/orders/orders_10.json');
const demo_orders_11   = require('../demo/orders/orders_11.json');
const demo_orders_12   = require('../demo/orders/orders_12.json');
const demo_orders_13   = require('../demo/orders/orders_13.json');
const demo_orders_14   = require('../demo/orders/orders_14.json');
const demo_orders_15   = require('../demo/orders/orders_15.json');
const demo_orders_16   = require('../demo/orders/orders_16.json');
const demo_orders_17   = require('../demo/orders/orders_17.json');
const demo_orders_18   = require('../demo/orders/orders_18.json');
const demo_orders_19   = require('../demo/orders/orders_19.json');
const demo_customers   = require('../demo/customers.json');
const users            = require('../demo/users.json');

const showNavbar       = () => ({ type: 'SHOW_NAVBAR' });
const hideNavbar       = () => ({ type: 'HIDE_NAVBAR' });
const showModal        = (id) => ({ type: 'SHOW_MODAL', id });
const hideModal        = () => ({ type: 'HIDE_MODAL' });
const reqOrdersDone    = (orders) => ({ type: "ORDERS_FETCH_DATA_SUCCESS", orders });
const reqCustomersDone = (customers) => ({ type: "CUSTOMERS_FETCH_DATA_SUCCESS", customers });
const alertSaccess     = (text) => ({ type: 'ALERT_SUCCESS', text: text });
const sign_out         = () => ({ type: 'SIGN_OUT' });
const mainAnalysis     = () => ({ type: 'MAIN_ANALYSIS' });
const changeFilter     = (year, mounth, day, info) => ({ type: "FILTER_CHANGE",
                                                  year, mounth, day, info })

const getData = (year) => {
  if (year === '10') return (dispatch) => dispatch(reqOrdersDone(demo_orders_10));
  if (year === '11') return (dispatch) => dispatch(reqOrdersDone(demo_orders_11));
  if (year === '12') return (dispatch) => dispatch(reqOrdersDone(demo_orders_12));
  if (year === '13') return (dispatch) => dispatch(reqOrdersDone(demo_orders_13));
  if (year === '14') return (dispatch) => dispatch(reqOrdersDone(demo_orders_14));
  if (year === '15') return (dispatch) => dispatch(reqOrdersDone(demo_orders_15));
  if (year === '16') return (dispatch) => dispatch(reqOrdersDone(demo_orders_16));
  if (year === '17') return (dispatch) => dispatch(reqOrdersDone(demo_orders_17));
  if (year === '18') return (dispatch) => dispatch(reqOrdersDone(demo_orders_18));
  if (year === '19') return (dispatch) => dispatch(reqOrdersDone(demo_orders_19));
};

const getCustomers = () => {
  return (dispatch) => {
    dispatch(reqCustomersDone(demo_customers))
  };
};

const getAutorize = (log, pass) => {
  const hash = passwordHash.generate(pass);
  for (let i = 0; i < users.length; i++) {
    if (users[i].login === log) {
      if (passwordHash.verify(pass, users[i].password)) {
        localStorage.setItem('token', hash);
        localStorage.setItem('login', log);
        return (dispatch) => dispatch({ type: "AUTHORIZE" });
      } else return (dispatch) => dispatch({ type: "NON_AUTHORIZE" })
    } else return (dispatch) => dispatch({ type: "NON_AUTHORIZE" })
  }
}

export {
  showNavbar, hideNavbar, getData,
  alertSaccess, changeFilter, showModal,
  hideModal, getCustomers, sign_out,
  getAutorize, mainAnalysis
}
