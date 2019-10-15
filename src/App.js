import React,{ Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/index.js'
import { Spin } from 'antd';
import AuthorizedRoute from './AuthorizedRoute'

const Admin = lazy(()=> import('pages/admin/home/home'));
const aLogin = lazy(()=> import('pages/admin/login/login'));

const AddArticle = lazy(()=> import('pages/admin/article/edit/edit'));
const Manage = lazy(()=> import('pages/admin/article/manage/manage'));
const SettingUp = lazy(()=> import('pages/admin/user/settingUp/settingUp'));
const MyUser = lazy(()=> import('pages/admin/user/myUser/myUser'));


function loading() {
    return(
        <Spin style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} tip="Loading..." size="large" />
    )
}

function App() {

  return (
    
      <Provider store={store}>
          <HashRouter forceRefresh={true}>
              <Suspense fallback={loading()}>
              <Switch>
                  <Route path='/login' component={aLogin} />
                  {/* <Route path='/admin'  component={Admin} /> */}
                  <AuthorizedRoute path='/' linkType={'/'} render={()=>(
                      <Admin>
                          <Switch>
                              <Route path='/article/edit' component={AddArticle} />
                              <Route path='/article/manage' component={Manage} />
                              <Route path='/user/settingUp' component={SettingUp} />
                              <Route path='/user/myUser' component={MyUser} />
                          </Switch>
                      </Admin>
                  )} />
                  {/*<Route path='/' component={Index} />*/}
              
              </Switch>
              </Suspense>
          </HashRouter> 
      </Provider>

  );
}

export default App;
