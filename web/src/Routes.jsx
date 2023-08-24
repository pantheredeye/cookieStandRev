// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="OrderItems" titleTo="orderItems" buttonLabel="New OrderItem" buttonTo="newOrderItem">
      </Set>
      <Set wrap={ScaffoldLayout} title="Orders" titleTo="orders" buttonLabel="New Order" buttonTo="newOrder">
        <Route path="/orders/new" page={OrderNewOrderPage} name="newOrder" />
        <Route path="/orders/{id:Int}/edit" page={OrderEditOrderPage} name="editOrder" />
        <Route path="/orders/{id:Int}" page={OrderOrderPage} name="order" />
        <Route path="/orders" page={OrderOrdersPage} name="orders" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Items" titleTo="items" buttonLabel="New Item" buttonTo="newItem">
        <Route path="/items/new" page={ItemNewItemPage} name="newItem" />
        <Route path="/items/{id:Int}/edit" page={ItemEditItemPage} name="editItem" />
        <Route path="/items/{id:Int}" page={ItemItemPage} name="item" />
        <Route path="/items" page={ItemItemsPage} name="items" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route path="/home" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
