export default async function ({store, next, to }) {

  if(to.name != 'index'){
    if(!store.state.token){
      next({ name: 'index' })
    }else{
      next()
    }
  }else{
    if(store.state.token){
      next({ name: 'schemes' })
    }else{
      next()
    }
  }

}
